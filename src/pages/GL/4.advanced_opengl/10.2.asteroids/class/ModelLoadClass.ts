import ShaderClass from "./ShaderClass";
// model loader
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Mesh, MeshPhongMaterial } from "three";

type Component = {
  vertices: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  indices: Uint16Array | null;
  material: MaterialProps;
};

type MaterialProps = {
  diffuse: number[];
  specular: number[];
  shininess: number;
  map: TexImageSource | null;
  normalMap: TexImageSource | null;
};

type MeshComponent = {
  vao: WebGLVertexArrayObject | null;
  indexCount: number;
  material: MaterialProps;
  texture: WebGLTexture | null;
  // 添加资源引用，便于清理
  buffers: WebGLBuffer[];
};

export default class ModelLoadClass {
  gl!: WebGL2RenderingContext | null;
  meshes: Component[] = [];
  components: MeshComponent[] = [];
  isWireframe: boolean = false;
  constructor(gl: WebGL2RenderingContext | null) {
    this.gl = gl;
  }

  async loadObjFile(file: File, texturePath: string) {
    try {
      const diffuse = await this.loadTexture(`../models/${texturePath}`);
      const objText = await this.readFileAsText(file);
      const objLoader = new OBJLoader();
      const object = objLoader.parse(objText);
      this.log("模型信息", object);
      const meshPromises: Promise<void>[] = [];

      object.traverse((child) => {
        if ((child as Mesh).isMesh) {
          meshPromises.push(this.processMesh(child as Mesh, diffuse));
        }
      });

      // 并行处理所有网格
      await Promise.all(meshPromises);

      // 异步初始化所有网格组件
      const componentPromises = this.meshes.map((mesh) => this.initMesh(mesh));
      const components = await Promise.all(componentPromises);

      this.components = components.filter(
        (comp): comp is MeshComponent => comp !== null
      );
    } catch (error) {
      console.error("Error loading OBJ:", error);
    }
  }

  // 处理单个网格的异步方法
  private async processMesh(
    mesh: Mesh,
    diffuseMap: TexImageSource
  ): Promise<void> {
    return new Promise((resolve) => {
      // 使用requestIdleCallback优化处理
      const processCallback = () => {
        const geometry = mesh.geometry;

        // 确保有法线
        if (!geometry.attributes.normal) {
          geometry.computeVertexNormals();
        }

        // 应用mesh的变换到几何体
        geometry.applyMatrix4(mesh.matrix);

        // 提取顶点数据
        const positions = geometry.attributes.position.array as Float32Array;
        const normals = (geometry.attributes.normal?.array ||
          new Float32Array()) as Float32Array;
        const uvs = (geometry.attributes.uv?.array ||
          new Float32Array()) as Float32Array;
        const indices = (geometry.index?.array || null) as Uint16Array;

        // 材质
        const material = mesh.material as MeshPhongMaterial;
        const materialProps = {
          diffuse: material.color
            ? [material.color.r, material.color.g, material.color.b]
            : [1, 1, 1],
          specular: material.specular
            ? [material.specular.r, material.specular.g, material.specular.b]
            : [1, 1, 1],
          shininess: material.shininess || 30,
          map: diffuseMap,
          normalMap: material.normalMap ? material.normalMap.image : null,
        };

        this.meshes.push({
          vertices: positions,
          normals,
          uvs,
          indices,
          material: materialProps,
        });

        resolve();
      };

      if (window.requestIdleCallback) {
        window.requestIdleCallback(processCallback);
      } else {
        setTimeout(processCallback, 0);
      }
    });
  }

  // 异步初始化单个网格
  private async initMesh(mesh: Component): Promise<MeshComponent | null> {
    const gl = this.gl;
    if (!gl) return null;

    return new Promise((resolve) => {
      // 使用requestIdleCallback在空闲时间处理
      const processCallback = () => {
        const { vertices, normals, uvs, indices, material } = mesh;
        const buffers: WebGLBuffer[] = [];

        const component: MeshComponent = {
          vao: gl.createVertexArray(),
          indexCount: indices ? indices.length : vertices.length / 3,
          material: material,
          texture: null,
          buffers: buffers,
        };

        gl.bindVertexArray(component.vao);

        // position
        const vbo = gl.createBuffer();
        if (vbo) {
          buffers.push(vbo);
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
          gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
          gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(0);
        }

        // normal
        const nbo = gl.createBuffer();
        if (nbo) {
          buffers.push(nbo);
          gl.bindBuffer(gl.ARRAY_BUFFER, nbo);
          gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
          gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(1);
        }

        // textures
        const uvbo = gl.createBuffer();
        if (uvbo) {
          buffers.push(uvbo);
          gl.bindBuffer(gl.ARRAY_BUFFER, uvbo);
          gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
          gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 0, 0);
          gl.enableVertexAttribArray(2);
        }

        // indices
        if (indices) {
          const indexBuffer = gl.createBuffer();
          if (indexBuffer) {
            buffers.push(indexBuffer);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
          }
        } else {
          const vertexCount = vertices.length / 3;
          const vertexOffset = 0;
          const allIndices = [];
          for (let i = 0; i < vertexCount; i++) {
            allIndices.push(vertexOffset + i);
          }
          const indexBuffer = gl.createBuffer();
          if (indexBuffer) {
            buffers.push(indexBuffer);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(
              gl.ELEMENT_ARRAY_BUFFER,
              new Uint32Array(allIndices),
              gl.STATIC_DRAW
            );
          }
        }

        // 创建纹理
        if (material.map) {
          component.texture = this.createTextureFromImage(gl, material.map);
        }

        resolve(component);
      };

      // 使用requestIdleCallback优化性能，如果不支持则使用setTimeout
      if (window.requestIdleCallback) {
        window.requestIdleCallback(processCallback);
      } else {
        setTimeout(processCallback, 0);
      }
    });
  }

  renderMesh(mesh: MeshComponent, shader: ShaderClass) {
    const gl = this.gl;
    if (!gl || !mesh.vao) return;

    gl.bindVertexArray(mesh.vao);

    shader.setVec3("u_diffuseColor", mesh.material.diffuse);
    shader.setVec3("u_specularColor", mesh.material.specular);
    shader.setFloat("u_shininess", mesh.material.shininess);
    shader.setInt("uWireframe", this.isWireframe ? 1 : 0);

    // 绑定纹理
    if (mesh.texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, mesh.texture);
      shader.setInt("u_diffuseMap", 0);
      shader.setInt("u_hasDiffuseMap", 1);
    } else {
      shader.setInt("u_hasDiffuseMap", 0);
    }

    // 绘制
    if (this.isWireframe) {
      // 线框模式：将三角形转换为线段
      for (let i = 0; i < mesh.indexCount; i += 3) {
        gl.drawElements(gl.LINE_LOOP, 3, gl.UNSIGNED_INT, i * 4);
      }
    } else {
      gl.drawElements(gl.TRIANGLES, mesh.indexCount, gl.UNSIGNED_INT, 0);
    }
  }

  private createTextureFromImage(
    gl: WebGL2RenderingContext,
    image: TexImageSource
  ) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(
      gl.TEXTURE_2D,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    return texture;
  }

  // 将文件读取封装为Promise
  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          resolve(result);
        } else {
          reject(new Error("Failed to read file as text"));
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  private loadTexture(path: string | URL): Promise<TexImageSource> {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = new URL(path, import.meta.url).href;
      image.onload = () => {
        resolve(image);
      };
    });
  }

  private log(text: string, info: unknown) {
    console.group(`<------------${text}------------>`);
    console.log(info);
    console.groupEnd();
  }
}
