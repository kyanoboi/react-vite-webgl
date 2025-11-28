import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import shader_cubemap, { shader_skybox } from "./shader/cubemap_skybox.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  skyboxShader!: ShaderClass;
  camera!: Camera;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;

  cubemapTexture!: WebGLTexture;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    this.shader = new ShaderClass(this.gl, shader_cubemap);
    this.skyboxShader = new ShaderClass(this.gl, shader_skybox);
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));

    this.lastX = canvas.width / 2.0;
    this.lastY = canvas.height / 2.0;
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    this.init(this.gl);
    this.initInputEvent(canvas);
  }

  initInputEvent(canvas: HTMLCanvasElement) {
    document.onkeydown = (event) => {
      this.keysPressed[event.key] = true;
    };

    document.onkeyup = (event) => {
      this.keysPressed[event.key] = false;
    };

    canvas.onmousemove = (event) => {
      this.updateCameraPosByMouse(event);
    };

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

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;
    // 纹理加载
    const cubeTexture = await this.loadTexture("./images/container.jpg");
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 设置顶点位置
    const { cubeVao, skyboxVao } = this.initVertexBuffers() || {};
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    this.shader.setMat4("projection", this.getProjection());
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setInt("texture1", 0);
    // 绘制场景到帧缓冲
    this.drawCube(gl, cubeVao, cubeTexture);

    // 绘制天空盒
    gl.depthFunc(gl.LEQUAL);
    this.skyboxShader.use();
    this.skyboxShader.setMat4("projection", this.getProjection());
    // For skyboxes, you need to remove the translation component
    // from the view matrix so the skybox doesn't move with the camera:
    // Remove translation from view matrix for skybox
    //gl-matrix 使用列主序（Column-Major）存储：
    // 数组索引：[0,1,2,3, 4,5,6,7, 8,9,10,11, 12,13,14,15]
    // 对应矩阵位置：
    // [ 0 4 8 12] ← 第1行
    // [ 1 5 9 13] ← 第2行
    // [ 2 6 10 14] ← 第3行
    // [ 3 7 11 15] ← 第4行
    //   ↑ ↑ ↑ ↑
    // 列1 列2 列3 列4
    // 所以索引[12,13,14]对应第4列的前3个元素（平移分量）
    const view = mat4.clone(this.camera.getViewMatrix());
    view[12] = 0; // Remove x translation
    view[13] = 0; // Remove y translation
    view[14] = 0; // Remove z translation
    this.skyboxShader.setMat4("view", view);
    this.skyboxShader.setInt("skybox", 0);

    if (!this.cubemapTexture) {
      this.cubemapTexture = await this.loadCubemap();
    }

    gl.bindVertexArray(skyboxVao!);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.cubemapTexture);
    gl.drawArrays(gl.TRIANGLES, 0, 36);
    gl.depthFunc(gl.LESS);

    // 每帧更新相机
    this.updateCameraPosition();

    requestAnimationFrame(() => this.init(this.gl));
  }

  drawCube(
    gl: WebGL2RenderingContext,
    cubeVao: WebGLVertexArrayObject | undefined,
    cubeTexture: WebGLTexture
  ) {
    // cube
    gl.bindVertexArray(cubeVao!);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
    // world transformation
    const model = mat4.create();
    this.shader.setMat4("model", model);
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 36);
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const cubeVertices = new Float32Array([
     // positions          // texture Coords
        -0.5, -0.5, -0.5,  0.0, 0.0,
         0.5, -0.5, -0.5,  1.0, 0.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
        -0.5,  0.5, -0.5,  0.0, 1.0,
        -0.5, -0.5, -0.5,  0.0, 0.0,

        -0.5, -0.5,  0.5,  0.0, 0.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 1.0,
         0.5,  0.5,  0.5,  1.0, 1.0,
        -0.5,  0.5,  0.5,  0.0, 1.0,
        -0.5, -0.5,  0.5,  0.0, 0.0,

        -0.5,  0.5,  0.5,  1.0, 0.0,
        -0.5,  0.5, -0.5,  1.0, 1.0,
        -0.5, -0.5, -0.5,  0.0, 1.0,
        -0.5, -0.5, -0.5,  0.0, 1.0,
        -0.5, -0.5,  0.5,  0.0, 0.0,
        -0.5,  0.5,  0.5,  1.0, 0.0,

         0.5,  0.5,  0.5,  1.0, 0.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5,  0.5,  0.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 0.0,

        -0.5, -0.5, -0.5,  0.0, 1.0,
         0.5, -0.5, -0.5,  1.0, 1.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
         0.5, -0.5,  0.5,  1.0, 0.0,
        -0.5, -0.5,  0.5,  0.0, 0.0,
        -0.5, -0.5, -0.5,  0.0, 1.0,

        -0.5,  0.5, -0.5,  0.0, 1.0,
         0.5,  0.5, -0.5,  1.0, 1.0,
         0.5,  0.5,  0.5,  1.0, 0.0,
         0.5,  0.5,  0.5,  1.0, 0.0,
        -0.5,  0.5,  0.5,  0.0, 0.0,
        -0.5,  0.5, -0.5,  0.0, 1.0
    ]);

    // prettier-ignore
    const skyboxVertices =new Float32Array([
        // positions          
        -1.0,  1.0, -1.0,
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
        -1.0,  1.0, -1.0,

        -1.0, -1.0,  1.0,
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
        -1.0, -1.0,  1.0,

         1.0, -1.0, -1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,
         1.0, -1.0, -1.0,

        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        -1.0,  1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0,

        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0
   ]);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT; // 即 4 字节

    // cube VBO
    const cubeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
    // cube VAO
    const cubeVao = gl.createVertexArray();
    gl.bindVertexArray(cubeVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 5 * FSIZE, 0);
    // texture cood
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 5 * FSIZE, 3 * FSIZE);

    // skybox VBO
    const skyboxVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, skyboxVbo);
    gl.bufferData(gl.ARRAY_BUFFER, skyboxVertices, gl.STATIC_DRAW);
    // skybox VAO
    const skyboxVao = gl.createVertexArray();
    gl.bindVertexArray(skyboxVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 3 * FSIZE, 0);

    return { cubeVao, skyboxVao };
  }

  getProjection() {
    // Vertical field of view in radians(垂直视场的弧度)
    const fovy = (this.camera.Zoom * Math.PI) / 180;
    // Aspect ratio. typically viewport width/height
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    // Near bound of the frustum(截头锥体)
    const near = 0.1;
    // Far bound of the frustum, can be null or Infinity
    const far = 100.0;
    return mat4.perspective(mat4.create(), fovy, aspect, near, far);
  }

  /**
   * 异步加载图片纹理并返回 WebGLTexture 对象。
   * @param path - 纹理图片的路径，可以是字符串或 URL 对象。
   * @param formt - 纹理格式，默认gl.RGB（6407）
   * @returns 一个 Promise，成功时返回 WebGLTexture 对象，失败时返回错误信息。
   */
  loadTexture(
    path: string | URL,
    format: number = 6407
  ): Promise<WebGLTexture> {
    return new Promise((resolve, reject) => {
      const gl = this.gl;
      if (!gl) return reject("No WebGL context");
      // 加载图片纹理
      const texture = gl.createTexture();
      const image = new Image();
      image.src = new URL(path, import.meta.url).href;
      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // 纹理上下翻转
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          format,
          format,
          gl.UNSIGNED_BYTE,
          image
        );
        gl.generateMipmap(gl.TEXTURE_2D);
        resolve(texture as WebGLTexture);
      };

      // 设置纹理参数
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_WRAP_S,
        format === gl.RGB ? gl.REPEAT : gl.CLAMP_TO_EDGE
      );
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_WRAP_T,
        format === gl.RGB ? gl.REPEAT : gl.CLAMP_TO_EDGE
      );
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_MIN_FILTER,
        gl.LINEAR_MIPMAP_LINEAR
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    });
  }

  // loads a cubemap texture from 6 individual texture faces
  // order:
  // +X (right)
  // -X (left)
  // +Y (top)
  // -Y (bottom)
  // +Z (front)
  // -Z (back)
  // -------------------------------------------------------
  async loadCubemap(): Promise<WebGLTexture> {
    const gl = this.gl;
    if (!gl) return Promise.reject("No WebGL context");
    const textureID = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, textureID);

    // 立方体贴图的每个面都需要加载一张图片
    const faces = [
      "right.jpg", // POSITIVE_X
      "left.jpg", // NEGATIVE_X
      "top.jpg", // POSITIVE_Y
      "bottom.jpg", // NEGATIVE_Y
      "front.jpg", // POSITIVE_Z
      "back.jpg", // NEGATIVE_Z
    ];

    // Load all images
    const imagePromises = faces.map((face) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = new URL(`./images/skybox/${face}`, import.meta.url).href;
      });
    });

    const images = await Promise.all(imagePromises);

    // Upload each face to the corresponding cube map target
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      gl.texImage2D(
        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
        0,
        gl.RGB,
        gl.RGB,
        gl.UNSIGNED_BYTE,
        image
      );
    }

    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);

    return textureID;
  }
}
