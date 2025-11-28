import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import shader_model_loading from "./shader/model_loading.ts";

// model loader
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Mesh, MeshPhongMaterial } from "three";

type MaterialProps = {
  diffuse: number[];
  specular: number[];
  shininess: number;
  map: TexImageSource | null;
  normalMap: TexImageSource | null;
};

type Component = {
  vertices: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  indices: Uint16Array;
  material: MaterialProps;
};

type MeshComponent = {
  vao: WebGLVertexArrayObject | null;
  indexCount: number;
  material: MaterialProps;
  texture: WebGLTexture | null;
  // 添加资源引用，便于清理
  buffers: WebGLBuffer[];
};

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  ourShader!: ShaderClass;
  camera!: Camera;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;

  meshes: Component[] = [];
  components: MeshComponent[] = [];
  indexbuffer!: WebGLBuffer | null;
  indexCount: number = 0;
  isWireframe: boolean = false;

  // 缓存投影矩阵
  private projectionMatrix: mat4 = mat4.create();
  private lastAspectRatio: number = 0;
  private lastZoom: number = 0;

  // 加载状态
  private isLoading: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    this.ourShader = new ShaderClass(this.gl, shader_model_loading);
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 3.0));

    this.lastX = canvas.width / 2.0;
    this.lastY = canvas.height / 2.0;
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    this.initDom();
    this.initInputEvent(canvas);
    this.render(); // 直接开始渲染循环
  }

  initDom() {
    // 创建上传OBJ文件按钮
    const uploadBtn = document.createElement("input");
    uploadBtn.type = "file";
    uploadBtn.accept = ".obj";
    uploadBtn.style.position = "absolute";
    uploadBtn.style.top = "10px";
    uploadBtn.style.right = "10px";
    uploadBtn.style.zIndex = "1000";
    uploadBtn.style.padding = "20px";
    uploadBtn.style.backgroundColor = "rgba(255,255,255,0.1)";
    document.body.appendChild(uploadBtn);

    uploadBtn.onchange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files.length > 0 && !this.isLoading) {
        this.loadObjFile(input.files[0]);
      }
    };

    // 添加一个checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.style.position = "absolute";
    checkboxLabel.style.top = "80px";
    checkboxLabel.style.right = "10px";
    checkboxLabel.style.zIndex = "1000";
    checkboxLabel.style.backgroundColor = "rgba(255,255,255,0.1)";
    checkboxLabel.style.padding = "8px";
    checkboxLabel.style.color = "#fff";
    checkboxLabel.style.fontSize = "14px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "8px";
    checkbox.id = "isWireframe";

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode("显示线框"));

    document.body.appendChild(checkboxLabel);

    checkbox.onchange = (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      this.isWireframe = checked;
    };

    // 添加加载提示
    const loadingIndicator = document.createElement("div");
    loadingIndicator.id = "loadingIndicator";
    loadingIndicator.style.position = "absolute";
    loadingIndicator.style.top = "50%";
    loadingIndicator.style.left = "50%";
    loadingIndicator.style.transform = "translate(-50%, -50%)";
    loadingIndicator.style.color = "#fff";
    loadingIndicator.style.fontSize = "18px";
    loadingIndicator.style.display = "none";
    loadingIndicator.textContent = "加载中...";
    document.body.appendChild(loadingIndicator);
  }

  initInputEvent(canvas: HTMLCanvasElement) {
    document.onkeydown = (event) => {
      this.keysPressed[event.key] = true;
    };

    document.onkeyup = (event) => {
      this.keysPressed[event.key] = false;
    };

    // canvas.onmousemove = (event) => {
    //   this.updateCameraPosByMouse(event);
    // };

    canvas.onwheel = (event) => {
      this.updateCameraPosByWheel(event);
    };
  }

  updateCameraPosition() {
    if (this.keysPressed["w"]) {
      this.camera.processKeyboard(CameraMovement.FORWARD, this.deltaTime);
    }
    if (this.keysPressed["s"]) {
      this.camera.processKeyboard(CameraMovement.BACKWARD, this.deltaTime);
    }
    if (this.keysPressed["a"]) {
      this.camera.processKeyboard(CameraMovement.LEFT, this.deltaTime);
    }
    if (this.keysPressed["d"]) {
      this.camera.processKeyboard(CameraMovement.RIGHT, this.deltaTime);
    }
  }

  updateCameraPosByMouse(event: MouseEvent): void {
    const xpos: number = event.clientX;
    const ypos: number = event.clientY;

    if (this.firstMouse) {
      this.lastX = xpos;
      this.lastY = ypos;
      this.firstMouse = false;
    }

    const xoffset: number = xpos - this.lastX;
    // 注意这里是反向
    // 因为在屏幕坐标系里，Y 轴向下是正值；但在我们的相机 pitch 中，向上抬头应该是正值，所以需要反向。
    const yoffset: number = this.lastY - ypos;
    this.lastX = xpos;
    this.lastY = ypos;
    this.camera.processMouseMovement(xoffset, yoffset);
  }

  updateCameraPosByWheel(event: WheelEvent): void {
    event.preventDefault();
    this.camera.processMouseScroll(event.deltaY);
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

  render = () => {
    const gl = this.gl;
    if (!gl) return;
    // 开启深度检测
    gl.enable(gl.DEPTH_TEST);
    // 修改画布颜色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 如果没有模型，跳过渲染
    if (!this.components.length) {
      this.updateCameraPosition();
      requestAnimationFrame(this.render);
      return;
    }

    const model = mat4.create();
    mat4.translate(model, model, vec3.fromValues(0.0, 0.0, 0.0));
    mat4.scale(model, model, vec3.fromValues(0.2, 0.2, 0.2));

    // 优化法线矩阵计算
    const normalMatrix = mat3.create();
    mat3.normalFromMat4(normalMatrix, model);

    // 渲染内容
    this.ourShader.use();
    this.ourShader.setMat4("projection", this.getProjection());
    this.ourShader.setMat4("view", this.camera.getViewMatrix());
    this.ourShader.setVec3("u_lightPosition", vec3.fromValues(1.2, 1.0, 2.0));
    this.ourShader.setVec3("u_viewPosition", this.camera.Position);
    this.ourShader.setMat4("model", model);
    this.ourShader.setMat3("normalMatrix", normalMatrix);

    this.components.forEach((mesh) => {
      this.renderMesh(mesh);
    });

    // 每帧更新相机
    this.updateCameraPosition();

    requestAnimationFrame(this.render);
  };

  renderMesh(mesh: MeshComponent) {
    const gl = this.gl;
    if (!gl || !mesh.vao) return;

    gl.bindVertexArray(mesh.vao);

    this.ourShader.setVec3("u_diffuseColor", mesh.material.diffuse);
    this.ourShader.setVec3("u_specularColor", mesh.material.specular);
    this.ourShader.setFloat("u_shininess", mesh.material.shininess);
    this.ourShader.setInt("uWireframe", this.isWireframe ? 1 : 0);

    // 绑定纹理
    if (mesh.texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, mesh.texture);
      this.ourShader.setInt("u_diffuseMap", 0);
      this.ourShader.setInt("u_hasDiffuseMap", 1);
    } else {
      this.ourShader.setInt("u_hasDiffuseMap", 0);
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

  // 缓存投影矩阵，避免每帧重复计算
  getProjection() {
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    const zoom = this.camera.Zoom;

    // 只有在相机缩放或窗口比例改变时才重新计算
    if (this.lastAspectRatio !== aspect || this.lastZoom !== zoom) {
      const fovy = (zoom * Math.PI) / 180;
      const near = 0.1;
      const far = 100.0;
      mat4.perspective(this.projectionMatrix, fovy, aspect, near, far);
      this.lastAspectRatio = aspect;
      this.lastZoom = zoom;
    }

    return this.projectionMatrix;
  }

  loadTexture(path: string | URL): Promise<TexImageSource> {
    return new Promise((resolve, reject) => {
      const gl = this.gl;
      if (!gl) return reject("No WebGL context");

      const image = new Image();
      image.src = new URL(path, import.meta.url).href;
      image.onload = () => {
        resolve(image);
      };
    });
  }

  createTextureFromImage(gl: WebGL2RenderingContext, image: TexImageSource) {
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

  // 显示/隐藏加载提示
  private showLoading(show: boolean) {
    const indicator = document.getElementById("loadingIndicator");
    if (indicator) {
      indicator.style.display = show ? "block" : "none";
    }
  }

  /**
   * 异步加载Obj模型文件 - 优化版本
   */
  async loadObjFile(file: File) {
    if (this.isLoading) return;

    this.isLoading = true;
    this.showLoading(true);

    try {
      // 先清理之前的资源
      this.cleanupResources();
      // 加载材质贴图
      const diffuse = await this.loadTexture("./model/diffuse.jpg");
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
    } finally {
      this.isLoading = false;
      this.showLoading(false);
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
        const vertices = geometry.attributes.position.array as Float32Array;
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
          vertices,
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

  log(text: string, info: unknown) {
    console.group(`<------------${text}------------>`);
    console.log(info);
    console.groupEnd();
  }

  // 清理资源的公共方法
  destroy() {
    this.cleanupResources();
  }

  // 清理WebGL资源
  private cleanupResources() {
    const gl = this.gl;
    if (!gl) return;

    this.components.forEach((component) => {
      // 删除VAO
      if (component.vao) {
        gl.deleteVertexArray(component.vao);
      }
      // 删除缓冲区
      component.buffers.forEach((buffer) => {
        gl.deleteBuffer(buffer);
      });
      // 删除纹理
      if (component.texture) {
        gl.deleteTexture(component.texture);
      }
    });

    this.components = [];
    this.meshes = [];
  }
}
