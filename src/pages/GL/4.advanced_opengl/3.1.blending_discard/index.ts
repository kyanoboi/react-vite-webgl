import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import shader_depthTesting from "./shader/blending_discard_glsl.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  camera!: Camera;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;

  lightPos: vec3 = vec3.fromValues(1.2, 1.0, 2.0);

  vegetation: Array<vec3> = [
    vec3.fromValues(-1.5, 0.0, -0.48),
    vec3.fromValues(1.5, 0.0, 0.51),
    vec3.fromValues(0.0, 0.0, 0.7),
    vec3.fromValues(-0.3, 0.0, -2.3),
    vec3.fromValues(0.5, 0.0, -0.6),
  ];

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    this.shader = new ShaderClass(this.gl, shader_depthTesting);
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
    const cubeTexture = await this.loadTexture("./images/marble.jpg");
    const floorTexture = await this.loadTexture("./images/metal.png");
    const grassTexture = await this.loadTexture("./images/grass.png", gl.RGBA);
    // 设置顶点位置
    const { cubeVao, planeVao, transparentVao } =
      this.initVertexBuffers() || {};
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    this.shader.use();
    this.shader.setMat4("projection", this.getProjection());
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setInt("texture1", 0);
    // cube
    gl.bindVertexArray(cubeVao!);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
    // world transformation
    const model1 = mat4.create();
    mat4.translate(model1, model1, vec3.fromValues(-1.0, 0.0, -1.0));
    this.shader.setMat4("model", model1);
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 36);
    // world transformation
    const model2 = mat4.create();
    mat4.translate(model2, model2, vec3.fromValues(2.0, 0.0, 0.0));
    this.shader.setMat4("model", model2);
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    // floor
    gl.bindVertexArray(planeVao!);
    gl.bindTexture(gl.TEXTURE_2D, floorTexture);
    this.shader.setMat4("model", mat4.create());
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // vegetation
    gl.bindVertexArray(transparentVao!);
    gl.bindTexture(gl.TEXTURE_2D, grassTexture);
    for (let i = 0; i < this.vegetation.length; i++) {
      const model3 = mat4.create();
      mat4.translate(model3, model3, this.vegetation[i]);
      this.shader.setMat4("model", model3);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // 每帧更新相机
    this.updateCameraPosition();

    requestAnimationFrame(() => this.init(this.gl));
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const cubeVertices = new Float32Array([
      // positions          // texture Coords
      -0.5, -0.5, -0.5, 0.0, 0.0,
      0.5, -0.5, -0.5, 1.0, 0.0,
      0.5, 0.5, -0.5, 1.0, 1.0,
      0.5, 0.5, -0.5, 1.0, 1.0,
      -0.5, 0.5, -0.5, 0.0, 1.0,
      -0.5, -0.5, -0.5, 0.0, 0.0,

      -0.5, -0.5, 0.5, 0.0, 0.0,
      0.5, -0.5, 0.5, 1.0, 0.0,
      0.5, 0.5, 0.5, 1.0, 1.0,
      0.5, 0.5, 0.5, 1.0, 1.0,
      -0.5, 0.5, 0.5, 0.0, 1.0,
      -0.5, -0.5, 0.5, 0.0, 0.0,

      -0.5, 0.5, 0.5, 1.0, 0.0,
      -0.5, 0.5, -0.5, 1.0, 1.0,
      -0.5, -0.5, -0.5, 0.0, 1.0,
      -0.5, -0.5, -0.5, 0.0, 1.0,
      -0.5, -0.5, 0.5, 0.0, 0.0,
      -0.5, 0.5, 0.5, 1.0, 0.0,

      0.5, 0.5, 0.5, 1.0, 0.0,
      0.5, 0.5, -0.5, 1.0, 1.0,
      0.5, -0.5, -0.5, 0.0, 1.0,
      0.5, -0.5, -0.5, 0.0, 1.0,
      0.5, -0.5, 0.5, 0.0, 0.0,
      0.5, 0.5, 0.5, 1.0, 0.0,

      -0.5, -0.5, -0.5, 0.0, 1.0,
      0.5, -0.5, -0.5, 1.0, 1.0,
      0.5, -0.5, 0.5, 1.0, 0.0,
      0.5, -0.5, 0.5, 1.0, 0.0,
      -0.5, -0.5, 0.5, 0.0, 0.0,
      -0.5, -0.5, -0.5, 0.0, 1.0,

      -0.5, 0.5, -0.5, 0.0, 1.0,
      0.5, 0.5, -0.5, 1.0, 1.0,
      0.5, 0.5, 0.5, 1.0, 0.0,
      0.5, 0.5, 0.5, 1.0, 0.0,
      -0.5, 0.5, 0.5, 0.0, 0.0,
      -0.5, 0.5, -0.5, 0.0, 1.0
    ]);

    // prettier-ignore
    const planeVertices = new Float32Array([
      // positions          // texture Coords (note we set these higher than 1 (together with GL_REPEAT as texture wrapping mode). this will cause the loor texture to repeat)
      5.0, -0.5, 5.0, 2.0, 0.0,
      -5.0, -0.5, 5.0, 0.0, 0.0,
      -5.0, -0.5, -5.0, 0.0, 2.0,

      5.0, -0.5, 5.0, 2.0, 0.0,
      -5.0, -0.5, -5.0, 0.0, 2.0,
      5.0, -0.5, -5.0, 2.0, 2.0
    ]);

    // prettier-ignore
    const transparentVertices = new Float32Array([
        // positions         // texture Coords (swapped y coordinates because texture is flipped upside down)
        0.0,  0.5,  0.0,  0.0,  0.0,
        0.0, -0.5,  0.0,  0.0,  1.0,
        1.0, -0.5,  0.0,  1.0,  1.0, 

        0.0,  0.5,  0.0,  0.0,  0.0,
        1.0, -0.5,  0.0,  1.0,  1.0,
        1.0,  0.5,  0.0,  1.0,  0.0
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

    // plane VBO
    const planeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, planeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);
    // plane VAO
    const planeVao = gl.createVertexArray();
    gl.bindVertexArray(planeVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 5 * FSIZE, 0);
    // texture cood
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 5 * FSIZE, 3 * FSIZE);

    // transparent VBO
    const transparentVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, transparentVbo);
    gl.bufferData(gl.ARRAY_BUFFER, transparentVertices, gl.STATIC_DRAW);
    // transparent VAO
    const transparentVao = gl.createVertexArray();
    gl.bindVertexArray(transparentVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 5 * FSIZE, 0);
    // texture cood
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 5 * FSIZE, 3 * FSIZE);

    return { cubeVao, planeVao, transparentVao };
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
}
