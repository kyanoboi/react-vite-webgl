import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import shader_framebuffers, {
  shader_framebuffers_screen,
} from "./shader/framebuffers.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  screenShader!: ShaderClass;
  camera!: Camera;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;

  lightPos: vec3 = vec3.fromValues(1.2, 1.0, 2.0);

  windows: Array<vec3> = [
    vec3.fromValues(-1.5, 0.0, -0.48),
    vec3.fromValues(1.5, 0.0, 0.51),
    vec3.fromValues(0.0, 0.0, 0.7),
    vec3.fromValues(-0.3, 0.0, -2.3),
    vec3.fromValues(0.5, 0.0, -0.6),
  ];

  frameBuffer!: WebGLFramebuffer | null;
  textureColorBuffer!: WebGLTexture | null;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    this.shader = new ShaderClass(this.gl, shader_framebuffers);
    this.screenShader = new ShaderClass(this.gl, shader_framebuffers_screen);
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));

    this.lastX = canvas.width / 2.0;
    this.lastY = canvas.height / 2.0;
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    const { frameBuffer, textureColorBuffer } =
      this.creatFrameBuffer(canvas) || {};
    this.frameBuffer = frameBuffer || null;
    this.textureColorBuffer = textureColorBuffer || null;

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
    const floorTexture = await this.loadTexture("./images/metal.png");
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 设置顶点位置
    const { cubeVao, planeVao, quadVao } = this.initVertexBuffers() || {};
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    // 设置镜像视角（反转相机Yaw角度）
    this.camera.Yaw += 180.0;
    this.camera.processMouseMovement(0, 0, false);
    const mirrorView = this.camera.getViewMatrix();
    this.camera.Yaw -= 180.0; // 恢复原始Yaw角度
    this.camera.processMouseMovement(0, 0, true);

    this.shader.setMat4("projection", this.getProjection());
    this.shader.setMat4("view", mirrorView);
    this.shader.setInt("texture1", 0);
    // 绘制场景到帧缓冲
    this.drawCube(gl, cubeVao, cubeTexture);
    this.drawFloor(gl, planeVao, floorTexture);

    // ============================================
    // 第二个渲染通道：渲染到默认帧缓冲
    // ============================================
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // clear all relevant buffers
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 使用正常视角
    this.shader.use();
    this.shader.setMat4("view", this.camera.getViewMatrix());

    // 绘制正常场景
    this.drawCube(gl, cubeVao, cubeTexture);
    this.drawFloor(gl, planeVao, floorTexture);

    // ============================================
    // 第三个渲染通道：绘制镜面四边形
    // ============================================
    gl.disable(gl.DEPTH_TEST); // disable depth test so screen-space quad isn't discarded due to depth test.
    this.screenShader.use();
    this.screenShader.setInt("screenTexture", 0);
    this.screenShader.setFloat("offset", 1.0 / 300.0);
    // 绑定帧缓冲纹理
    gl.bindVertexArray(quadVao!);
    gl.bindTexture(gl.TEXTURE_2D, this.textureColorBuffer); // use the color attachment texture as the texture of the quad plane
    gl.drawArrays(gl.TRIANGLES, 0, 6);

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
  }

  drawFloor(
    gl: WebGL2RenderingContext,
    planeVao: WebGLVertexArrayObject | undefined,
    floorTexture: WebGLTexture
  ) {
    // floor
    gl.bindVertexArray(planeVao!);
    gl.bindTexture(gl.TEXTURE_2D, floorTexture);
    this.shader.setMat4("model", mat4.create());
    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  sortByDistance(list: Array<vec3>): Array<vec3> {
    return list.sort((a, b) => vec3.length(b) - vec3.length(a));
  }
  /*
    一个完整的帧缓冲需要满足以下的条件：

    · 附加至少一个缓冲（颜色、深度或模板缓冲）。
    · 至少有一个颜色附件(Attachment)。
    · 所有的附件都必须是完整的（保留了内存）。
    · 每个缓冲都应该有相同的样本数(sample)。
  */
  creatFrameBuffer(canvas: HTMLCanvasElement) {
    const gl = this.gl;
    if (!gl) return null;
    const frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    // create a color attachment texture
    const textureColorBuffer = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureColorBuffer);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGB,
      canvas.width,
      canvas.height,
      0,
      gl.RGB,
      gl.UNSIGNED_BYTE,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      textureColorBuffer,
      0
    );
    // create a renderbuffer object for depth and stencil attachment (we won't be sampling these)
    const rbo = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, rbo);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH24_STENCIL8,
      canvas.width,
      canvas.height
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_STENCIL_ATTACHMENT,
      gl.RENDERBUFFER,
      rbo
    );
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
      console.log("ERROR::FRAMEBUFFER:: Framebuffer is not complete!");
    }

    return { frameBuffer, textureColorBuffer };
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
    // vertex attributes for a quad that fills the entire screen in Normalized Device Coordinates.
    const quadVertices = new Float32Array([
        // positions   // texCoords
        -0.3,  1.0,  0.0, 1.0,
        -0.3,  0.7,  0.0, 0.0,
         0.3,  0.7,  1.0, 0.0,

        -0.3,  1.0,  0.0, 1.0,
         0.3,  0.7,  1.0, 0.0,
         0.3,  1.0,  1.0, 1.0
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

    // screen quad VBO
    const quadVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVbo);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    // screen quad VAO
    const quadVao = gl.createVertexArray();
    gl.bindVertexArray(quadVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    // texture cood
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);

    return { cubeVao, planeVao, quadVao };
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
