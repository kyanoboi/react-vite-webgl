import ShaderClass from "./ShaderClass";
import type {
  ProcessedMesh,
  MaterialProps,
} from "@/pages/OpenGL/utils/work/loadModel";

// ─── 内部类型（GPU 侧，仅主线程使用）────────────────────────────────────────

type MeshComponent = {
  vao: WebGLVertexArrayObject | null;
  indexCount: number;
  material: MaterialProps;
  texture: WebGLTexture | null;
  buffers: WebGLBuffer[];
};

// ─── 主类 ─────────────────────────────────────────────────────────────────────

export default class ModelLoadClass {
  gl!: WebGL2RenderingContext | null;
  components: MeshComponent[] = [];
  isWireframe: boolean = false;

  private loadModelWorker: Worker;

  constructor(gl: WebGL2RenderingContext | null) {
    this.gl = gl;
    this.loadModelWorker = new Worker(
      new URL("@/pages/OpenGL/utils/work/loadModel.ts", import.meta.url),
      { type: "module" },
    );
  }

  // ─── 公共 API ──────────────────────────────────────────────────────────────

  /**
   * 加载 OBJ 文件。
   * - 文件读取、OBJ 解析、几何体变换、索引生成 → Worker 线程
   * - 纹理加载、VAO / Buffer / Texture 创建    → 主线程（WebGL 要求）
   */
  async loadObjFile(
    file: File,
    texturePath: string,
    onProgress?: (current: number, total: number) => void,
  ): Promise<void> {
    try {
      // 并行：Worker 解析几何体 & 主线程加载纹理，互不阻塞
      const [processedMeshes, diffuseBitmap] = await Promise.all([
        this.dispatchToWorker(await this.readFileAsText(file), onProgress),
        this.loadImageBitmap(`../../../OpenGL/models/${texturePath}`),
      ]);

      // 只有第一次上传纹理，其余 mesh 复用同一个 WebGLTexture
      const sharedTexture = diffuseBitmap
        ? this.createTextureFromBitmap(this.gl!, diffuseBitmap)
        : null;

      // 上传到 GPU
      this.components = processedMeshes
        .map((mesh) => this.uploadToGPU(mesh, sharedTexture))
        .filter((c): c is MeshComponent => c !== null);
    } catch (error) {
      console.error("[ModelLoadClass] Error loading OBJ:", error);
    }
  }

  renderMesh(mesh: MeshComponent, shader: ShaderClass): void {
    const gl = this.gl;
    if (!gl || !mesh.vao) return;

    gl.bindVertexArray(mesh.vao);

    shader.setVec3("u_diffuseColor", mesh.material.diffuse);
    shader.setVec3("u_specularColor", mesh.material.specular);
    shader.setFloat("u_shininess", mesh.material.shininess);
    shader.setInt("uWireframe", this.isWireframe ? 1 : 0);

    if (mesh.texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, mesh.texture);
      shader.setInt("u_diffuseMap", 0);
      shader.setInt("u_hasDiffuseMap", 1);
    } else {
      shader.setInt("u_hasDiffuseMap", 0);
    }

    if (this.isWireframe) {
      for (let i = 0; i < mesh.indexCount; i += 3) {
        gl.drawElements(gl.LINE_LOOP, 3, gl.UNSIGNED_INT, i * 4);
      }
    } else {
      gl.drawElements(gl.TRIANGLES, mesh.indexCount, gl.UNSIGNED_INT, 0);
    }
  }

  dispose(): void {
    const gl = this.gl;
    if (!gl) return;
    for (const comp of this.components) {
      for (const buf of comp.buffers) gl.deleteBuffer(buf);
      if (comp.vao) gl.deleteVertexArray(comp.vao);
      // texture 由所有 mesh 共享，只需删除一次
    }
    if (this.components[0]?.texture) {
      gl.deleteTexture(this.components[0].texture);
    }
    this.components = [];
    this.loadModelWorker.terminate();
  }

  // ─── Worker 通信 ───────────────────────────────────────────────────────────

  private dispatchToWorker(
    objText: string,
    onProgress?: (current: number, total: number) => void,
  ): Promise<ProcessedMesh[]> {
    return new Promise((resolve, reject) => {
      const worker = this.loadModelWorker;

      worker.onmessage = (
        event: MessageEvent<
          | { type: "PROGRESS"; payload: { current: number; total: number } }
          | { type: "DONE"; payload: ProcessedMesh[] }
          | { type: "ERROR"; payload: { message: string } }
        >,
      ) => {
        const { type, payload } = event.data;
        if (type === "PROGRESS") {
          onProgress?.(payload.current, payload.total);
        } else if (type === "DONE") {
          resolve(payload);
        } else if (type === "ERROR") {
          reject(new Error(payload.message));
        }
      };

      worker.onerror = (err) => reject(err);
      worker.postMessage({ type: "PROCESS_OBJ", payload: { objText } });
    });
  }

  // ─── GPU 上传 ─────────────────────────────────────────────────────────────

  private uploadToGPU(
    mesh: ProcessedMesh,
    sharedTexture: WebGLTexture | null,
  ): MeshComponent | null {
    const gl = this.gl;
    if (!gl) return null;

    const { vertices, normals, uvs, indices, material } = mesh;
    const buffers: WebGLBuffer[] = [];

    const component: MeshComponent = {
      vao: gl.createVertexArray(),
      indexCount: indices.length,
      material,
      texture: sharedTexture, // 所有 mesh 共享同一纹理对象
      buffers,
    };

    gl.bindVertexArray(component.vao);

    // 顶点坐标 (location = 0)
    const vbo = gl.createBuffer();
    if (vbo) {
      buffers.push(vbo);
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
    }

    // 法线 (location = 1)
    const nbo = gl.createBuffer();
    if (nbo) {
      buffers.push(nbo);
      gl.bindBuffer(gl.ARRAY_BUFFER, nbo);
      gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
      gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(1);
    }

    // UV (location = 2)
    const uvbo = gl.createBuffer();
    if (uvbo) {
      buffers.push(uvbo);
      gl.bindBuffer(gl.ARRAY_BUFFER, uvbo);
      gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
      gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(2);
    }

    // 索引缓冲
    const ebo = gl.createBuffer();
    if (ebo) {
      buffers.push(ebo);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    }

    gl.bindVertexArray(null);
    return component;
  }

  // ─── 纹理创建 ──────────────────────────────────────────────────────────────

  /**
   * 将 ImageBitmap 上传为 WebGLTexture。
   * 使用 RGBA8 sized internal format，WebGL2 保证支持 mipmap 生成。
   */
  private createTextureFromBitmap(
    gl: WebGL2RenderingContext,
    bitmap: ImageBitmap,
  ): WebGLTexture | null {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // RGBA8 是 WebGL2 中保证支持 mipmap 的 sized internal format
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8, // sized internal format（修复 generateMipmap 报错）
      gl.RGBA, // format
      gl.UNSIGNED_BYTE,
      bitmap,
    );
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Bitmap 上传完成后立即释放 CPU 侧内存
    bitmap.close();
    return texture;
  }

  // ─── 工具方法 ──────────────────────────────────────────────────────────────

  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          resolve(result);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  private async loadImageBitmap(path: string): Promise<ImageBitmap | null> {
    try {
      const url = new URL(path, import.meta.url).href;
      const response = await fetch(url);
      const blob = await response.blob();
      // colorSpaceConversion: 'none' 保留原始像素数据，避免浏览器自动色彩管理
      return await createImageBitmap(blob, { colorSpaceConversion: "none" });
    } catch (err) {
      console.warn("[ModelLoadClass] Failed to load texture:", err);
      return null;
    }
  }
}
