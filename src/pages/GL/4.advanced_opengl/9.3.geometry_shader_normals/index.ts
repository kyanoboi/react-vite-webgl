import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import shader_model_loading, {
  shader_normal_visualization,
} from "./shader/model_normals.ts";

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
  indices: Uint16Array | null;
  material: MaterialProps;
  faceCenters: Float32Array;
  faceNormals: Float32Array;
};

type MeshComponent = {
  vao: WebGLVertexArrayObject | null;
  indexCount: number;
  material: MaterialProps;
  texture: WebGLTexture | null;
  // 添加资源引用，便于清理
  buffers: WebGLBuffer[];
  // 用于可视化法线
  faceCenters: Float32Array;
  faceNormals: Float32Array;
};

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  modelShader!: ShaderClass;
  normalShader!: ShaderClass;
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

  // 新增爆炸相关属性
  explosionFactor: number = 0.0;
  useAnimation: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    this.modelShader = new ShaderClass(this.gl, shader_model_loading);
    this.normalShader = new ShaderClass(this.gl, shader_normal_visualization);
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 3.0));

    this.lastX = canvas.width / 2.0;
    this.lastY = canvas.height / 2.0;
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    this.initDom();
    this.initExplosionControls();
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

  // 新增：初始化爆炸控制UI
  initExplosionControls() {
    // 爆炸强度滑块
    const explosionContainer = document.createElement("div");
    explosionContainer.style.position = "absolute";
    explosionContainer.style.top = "120px";
    explosionContainer.style.right = "10px";
    explosionContainer.style.zIndex = "1000";
    explosionContainer.style.backgroundColor = "rgba(255,255,255,0.1)";
    explosionContainer.style.padding = "10px";
    explosionContainer.style.borderRadius = "5px";
    explosionContainer.style.color = "#fff";
    explosionContainer.style.fontSize = "12px";

    const explosionLabel = document.createElement("label");
    explosionLabel.textContent = "爆炸强度: ";
    explosionLabel.style.display = "block";
    explosionLabel.style.marginBottom = "5px";

    const explosionSlider = document.createElement("input");
    explosionSlider.type = "range";
    explosionSlider.min = "0";
    explosionSlider.max = "2";
    explosionSlider.step = "0.01";
    explosionSlider.value = "0";
    explosionSlider.style.width = "150px";

    const explosionValue = document.createElement("span");
    explosionValue.textContent = "0.00";
    explosionValue.style.marginLeft = "10px";

    explosionSlider.oninput = (e) => {
      const value = parseFloat((e.target as HTMLInputElement).value);
      this.explosionFactor = value;
      explosionValue.textContent = value.toFixed(2);
    };

    // 动画开关
    const animationCheckbox = document.createElement("input");
    animationCheckbox.type = "checkbox";
    animationCheckbox.style.marginTop = "10px";
    animationCheckbox.style.marginRight = "5px";

    const animationLabel = document.createElement("label");
    animationLabel.appendChild(animationCheckbox);
    animationLabel.appendChild(document.createTextNode("动画爆炸"));
    animationLabel.style.display = "block";

    animationCheckbox.onchange = (e) => {
      this.useAnimation = (e.target as HTMLInputElement).checked;
    };

    // 快捷按钮
    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.marginTop = "10px";

    const explodeBtn = document.createElement("button");
    explodeBtn.textContent = "爆炸";
    explodeBtn.style.marginRight = "5px";
    explodeBtn.style.padding = "5px 10px";
    explodeBtn.style.backgroundColor = "#ff6b6b";
    explodeBtn.style.color = "white";
    explodeBtn.style.border = "none";
    explodeBtn.style.borderRadius = "3px";
    explodeBtn.style.cursor = "pointer";

    explodeBtn.onclick = () => {
      this.explosionFactor = 1.5;
      explosionSlider.value = "1.5";
      explosionValue.textContent = "1.50";
    };

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "重置";
    resetBtn.style.padding = "5px 10px";
    resetBtn.style.backgroundColor = "#4CAF50";
    resetBtn.style.color = "white";
    resetBtn.style.border = "none";
    resetBtn.style.borderRadius = "3px";
    resetBtn.style.cursor = "pointer";

    resetBtn.onclick = () => {
      this.explosionFactor = 0;
      explosionSlider.value = "0";
      explosionValue.textContent = "0.00";
    };

    buttonsContainer.appendChild(explodeBtn);
    buttonsContainer.appendChild(resetBtn);

    explosionContainer.appendChild(explosionLabel);
    explosionContainer.appendChild(explosionSlider);
    explosionContainer.appendChild(explosionValue);
    explosionContainer.appendChild(animationLabel);
    explosionContainer.appendChild(buttonsContainer);

    document.body.appendChild(explosionContainer);
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
        const {
          vertices,
          normals,
          uvs,
          indices,
          material,
          faceCenters,
          faceNormals,
        } = mesh;
        const buffers: WebGLBuffer[] = [];

        const component: MeshComponent = {
          vao: gl.createVertexArray(),
          indexCount: indices ? indices.length : vertices.length / 3,
          material: material,
          texture: null,
          buffers: buffers,
          faceCenters,
          faceNormals,
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

        // face center (location = 3)
        if (faceCenters) {
          const fcbo = gl.createBuffer();
          if (fcbo) {
            buffers.push(fcbo);
            gl.bindBuffer(gl.ARRAY_BUFFER, fcbo);
            gl.bufferData(gl.ARRAY_BUFFER, faceCenters, gl.STATIC_DRAW);
            gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(3);
          }
        }

        // face normal (location = 4)
        if (faceNormals) {
          const fnbo = gl.createBuffer();
          if (fnbo) {
            buffers.push(fnbo);
            gl.bindBuffer(gl.ARRAY_BUFFER, fnbo);
            gl.bufferData(gl.ARRAY_BUFFER, faceNormals, gl.STATIC_DRAW);
            gl.vertexAttribPointer(4, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(4);
          }
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

    // 计算法线矩阵
    const normalMatrix = mat3.create();
    // 优化法线矩阵计算 （Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix）
    mat3.normalFromMat4(normalMatrix, model);

    // 渲染内容
    this.modelShader.use();
    this.modelShader.setMat4("projection", this.getProjection());
    this.modelShader.setMat4("view", this.camera.getViewMatrix());
    this.modelShader.setVec3("u_lightPosition", vec3.fromValues(1.2, 1.0, 2.0));
    this.modelShader.setVec3("u_viewPosition", this.camera.Position);
    this.modelShader.setMat4("model", model);
    this.modelShader.setMat3("normalMatrix", normalMatrix);

    const time = performance.now() / 1000; // 获取秒数
    this.modelShader.setFloat("uTime", time);

    // 设置爆炸参数
    this.modelShader.setFloat("uExplosionFactor", this.explosionFactor);
    this.modelShader.setInt("uUseAnimation", this.useAnimation ? 1 : 0);

    this.components.forEach((mesh) => {
      this.renderMesh(mesh);
    });

    this.components.forEach((mesh) => {
      this.renderNormal(mesh);
    });

    // 每帧更新相机
    this.updateCameraPosition();

    requestAnimationFrame(this.render);
  };

  renderMesh(mesh: MeshComponent) {
    const gl = this.gl;
    if (!gl || !mesh.vao) return;

    gl.bindVertexArray(mesh.vao);

    this.modelShader.setVec3("u_diffuseColor", mesh.material.diffuse);
    this.modelShader.setVec3("u_specularColor", mesh.material.specular);
    this.modelShader.setFloat("u_shininess", mesh.material.shininess);
    this.modelShader.setInt("uWireframe", this.isWireframe ? 1 : 0);

    // 绑定纹理
    if (mesh.texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, mesh.texture);
      this.modelShader.setInt("u_diffuseMap", 0);
      this.modelShader.setInt("u_hasDiffuseMap", 1);
    } else {
      this.modelShader.setInt("u_hasDiffuseMap", 0);
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

  renderNormal(mesh: MeshComponent) {
    const gl = this.gl;
    if (!gl || !mesh.vao) return;

    const { faceCenters, faceNormals } = mesh;

    const FSIZE = Float32Array.BYTES_PER_ELEMENT; // 即 4 字节

    const { vertices, indices } = this.generateNormalLines(
      faceCenters,
      faceNormals
    );

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 3 * FSIZE, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);

    this.normalShader.use();

    // 使用与主模型相同的变换矩阵
    const model = mat4.create();
    mat4.translate(model, model, vec3.fromValues(0.0, 0.0, 0.0));
    mat4.scale(model, model, vec3.fromValues(0.2, 0.2, 0.2));

    this.normalShader.setMat4("model", model);
    this.normalShader.setMat4("view", this.camera.getViewMatrix());
    this.normalShader.setMat4("projection", this.getProjection());

    gl.bindVertexArray(vao);
    gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);

    // 清理资源
    gl.deleteBuffer(vbo);
    gl.deleteBuffer(ibo);
    gl.deleteVertexArray(vao);
  }

  generateNormalLines(
    faceCenters: Float32Array,
    faceNormals: Float32Array,
    normalLength: number = 0.1
  ) {
    const lineVertices = [];
    const lineIndices = [];

    // faceCenters和faceNormals都是按每个顶点存储的，但同一个面的3个顶点数据相同
    // 所以我们每3个顶点取一次数据来避免重复
    for (let i = 0; i < faceCenters.length; i += 9) {
      // 每个面3个顶点，每个顶点3个坐标
      const centerX = faceCenters[i];
      const centerY = faceCenters[i + 1];
      const centerZ = faceCenters[i + 2];

      const normalX = faceNormals[i];
      const normalY = faceNormals[i + 1];
      const normalZ = faceNormals[i + 2];

      // 线段起点（面中心）
      lineVertices.push(centerX, centerY, centerZ);

      // 线段终点（面中心 + 法向量 * 长度）
      lineVertices.push(
        centerX + normalX * normalLength,
        centerY + normalY * normalLength,
        centerZ + normalZ * normalLength
      );

      // 线段索引
      const vertexIndex = (i / 9) * 2;
      lineIndices.push(vertexIndex, vertexIndex + 1);
    }

    return {
      vertices: new Float32Array(lineVertices),
      indices: new Uint16Array(lineIndices),
    };
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
        const positions = geometry.attributes.position.array as Float32Array;
        const normals = (geometry.attributes.normal?.array ||
          new Float32Array()) as Float32Array;
        const uvs = (geometry.attributes.uv?.array ||
          new Float32Array()) as Float32Array;
        const indices = (geometry.index?.array || null) as Uint16Array;

        // 按面重新组织顶点数据
        const {
          vertices,
          newNormals,
          newUvs,
          newIndices,
          faceCenters,
          faceNormals,
        } = this.reorganizeVerticesForExplosion(
          positions,
          normals,
          uvs,
          indices
        );

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
          normals: newNormals,
          uvs: newUvs,
          indices: newIndices,
          material: materialProps,
          faceCenters, // 新增
          faceNormals, // 新增
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

  // 新增：重新组织顶点数据以支持面级别的爆炸
  private reorganizeVerticesForExplosion(
    positions: Float32Array,
    normals: Float32Array,
    uvs: Float32Array,
    indices: Uint16Array | null
  ) {
    const vertices: number[] = [];
    const newNormals: number[] = [];
    const newUvs: number[] = [];
    const newIndices: number[] = [];
    const faceCenters: number[] = [];
    const faceNormals: number[] = [];

    let vertexIndex = 0;

    if (indices) {
      // 有索引的情况
      for (let i = 0; i < indices.length; i += 3) {
        const i1 = indices[i] * 3;
        const i2 = indices[i + 1] * 3;
        const i3 = indices[i + 2] * 3;

        // 获取三个顶点
        const v1 = [positions[i1], positions[i1 + 1], positions[i1 + 2]];
        const v2 = [positions[i2], positions[i2 + 1], positions[i2 + 2]];
        const v3 = [positions[i3], positions[i3 + 1], positions[i3 + 2]];

        // 计算面中心
        const center = [
          (v1[0] + v2[0] + v3[0]) / 3,
          (v1[1] + v2[1] + v3[1]) / 3,
          (v1[2] + v2[2] + v3[2]) / 3,
        ];

        // 计算面法向量
        const edge1 = [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]];
        const edge2 = [v3[0] - v1[0], v3[1] - v1[1], v3[2] - v1[2]];
        const faceNormal = [
          edge1[1] * edge2[2] - edge1[2] * edge2[1],
          edge1[2] * edge2[0] - edge1[0] * edge2[2],
          edge1[0] * edge2[1] - edge1[1] * edge2[0],
        ];

        // 归一化法向量
        const length = Math.sqrt(
          faceNormal[0] * faceNormal[0] +
            faceNormal[1] * faceNormal[1] +
            faceNormal[2] * faceNormal[2]
        );
        if (length > 0) {
          faceNormal[0] /= length;
          faceNormal[1] /= length;
          faceNormal[2] /= length;
        }

        // 为这个面的三个顶点添加数据
        for (let j = 0; j < 3; j++) {
          const idx = indices[i + j];

          // 顶点位置
          vertices.push(
            positions[idx * 3],
            positions[idx * 3 + 1],
            positions[idx * 3 + 2]
          );

          // 顶点法线
          if (normals.length > 0) {
            newNormals.push(
              normals[idx * 3],
              normals[idx * 3 + 1],
              normals[idx * 3 + 2]
            );
          } else {
            newNormals.push(...faceNormal);
          }

          // UV坐标
          if (uvs.length > 0) {
            newUvs.push(uvs[idx * 2] || 0, uvs[idx * 2 + 1] || 0);
          } else {
            newUvs.push(0, 0);
          }

          // 面中心和面法向量（每个顶点都要有）
          faceCenters.push(...center);
          faceNormals.push(...faceNormal);

          newIndices.push(vertexIndex++);
        }
      }
    } else {
      // 无索引的情况
      for (let i = 0; i < positions.length; i += 9) {
        // 提取三角形的三个顶点
        const v1 = vec3.fromValues(
          positions[i],
          positions[i + 1],
          positions[i + 2]
        );
        const v2 = vec3.fromValues(
          positions[i + 3],
          positions[i + 4],
          positions[i + 5]
        );
        const v3 = vec3.fromValues(
          positions[i + 6],
          positions[i + 7],
          positions[i + 8]
        );

        // 计算面中心（重心）
        const center = vec3.create();
        vec3.add(center, v1, v2);
        vec3.add(center, center, v3);
        vec3.scale(center, center, 1 / 3);

        // 计算两条边向量
        const edge1 = vec3.fromValues(
          v2[0] - v1[0],
          v2[1] - v1[1],
          v2[2] - v1[2]
        );
        const edge2 = vec3.fromValues(
          v3[0] - v1[0],
          v3[1] - v1[1],
          v3[2] - v1[2]
        );

        // 通过叉积计算面法向量并归一化
        const faceNormal = vec3.normalize(
          vec3.create(),
          vec3.cross(vec3.create(), edge1, edge2)
        );

        // 为这个三角形的三个顶点添加数据
        for (let j = 0; j < 3; j++) {
          const vertexIndex = i + j * 3;

          // 添加顶点位置
          vertices.push(
            positions[vertexIndex],
            positions[vertexIndex + 1],
            positions[vertexIndex + 2]
          );

          // 添加法向量（优先使用原有法向量，否则使用计算的面法向量）
          if (normals.length > 0) {
            newNormals.push(
              normals[vertexIndex],
              normals[vertexIndex + 1],
              normals[vertexIndex + 2]
            );
          } else {
            newNormals.push(...faceNormal);
          }

          // 添加UV坐标
          if (uvs.length > 0) {
            const uvIndex = (i / 3) * 2 + j * 2;
            newUvs.push(uvs[uvIndex] || 0, uvs[uvIndex + 1] || 0);
          } else {
            newUvs.push(0, 0);
          }

          // 为每个顶点添加相同的面信息
          faceCenters.push(...center);
          faceNormals.push(...faceNormal);
        }
      }
    }

    return {
      vertices: new Float32Array(vertices),
      newNormals: new Float32Array(newNormals),
      newUvs: new Float32Array(newUvs),
      newIndices: newIndices.length > 0 ? new Uint16Array(newIndices) : null,
      faceCenters: new Float32Array(faceCenters),
      faceNormals: new Float32Array(faceNormals),
    };
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
