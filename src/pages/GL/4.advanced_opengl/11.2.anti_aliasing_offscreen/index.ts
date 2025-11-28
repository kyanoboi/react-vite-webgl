import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import shader_anti_aliasing_msaa, {
  shader_aa_post,
} from "./shader/anti_aliasing_offscreen.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  screenShader!: ShaderClass;
  camera!: Camera;
  cameraEvent!: CameraEventClass;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  frameBuffer!: WebGLFramebuffer | null;
  intermediateFBO!: WebGLFramebuffer | null;
  screenTexture!: WebGLTexture | null;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    // 开启抗锯齿(webgl默认开启)
    this.gl = canvas.getContext("webgl2", { antialias: true });
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shader_anti_aliasing_msaa);
    this.screenShader = new ShaderClass(this.gl, shader_aa_post);
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 6.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);

    // 创建帧缓冲区
    const { frameBuffer, intermediateFBO, screenTexture } =
      this.creatFrameBuffer(canvas) || {};
    this.frameBuffer = frameBuffer || null;
    this.intermediateFBO = intermediateFBO || null;
    this.screenTexture = screenTexture || null;

    this.init(this.gl);
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;
    // 设置顶点位置
    const { cubeVao, quadVao } = this.initVertexBuffers() || {};
    // 1. draw scene as normal in multisampled buffers
    // 绑定帧缓冲区
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    this.shader.setMat4("model", mat4.create());
    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4("projection", this.getProjection());
    gl.bindVertexArray(cubeVao!);
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    // 2. now blit multisampled buffer(s) to normal colorbuffer of intermediate FBO. Image is stored in screenTexture
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.frameBuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, this.intermediateFBO);
    gl.blitFramebuffer(
      0,
      0,
      gl.canvas.width,
      gl.canvas.height,
      0,
      0,
      gl.canvas.width,
      gl.canvas.height,
      gl.COLOR_BUFFER_BIT,
      gl.NEAREST
    );

    // 3. now render quad with scene's visuals as its texture image
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.DEPTH_TEST);

    // draw Screen quad
    this.screenShader.use();
    this.screenShader.setInt("screenTexture", 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.screenTexture);
    gl.bindVertexArray(quadVao!);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // 每帧更新相机
    this.cameraEvent.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const points = new Float32Array([
        // positions       
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5,  0.5, -0.5,
        -0.5,  0.5, -0.5,
        -0.5, -0.5, -0.5,

        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
         0.5,  0.5,  0.5,
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5, -0.5,  0.5,

        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, -0.5,  0.5,
        -0.5,  0.5,  0.5,

         0.5,  0.5,  0.5,
         0.5,  0.5, -0.5,
         0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
         0.5, -0.5,  0.5,
         0.5,  0.5,  0.5,

        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
         0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
        -0.5, -0.5,  0.5,
        -0.5, -0.5, -0.5,

        -0.5,  0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5,  0.5,  0.5,
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5
    ]);

    // vertex attributes for a quad that fills the entire screen in Normalized Device Coordinates.
    // prettier-ignore
    const quadVertices = new Float32Array([   
      // positions   // texCoords
      -1.0,  1.0,  0.0, 1.0,
      -1.0, -1.0,  0.0, 0.0,
      1.0, -1.0,  1.0, 0.0,

      -1.0,  1.0,  0.0, 1.0,
      1.0, -1.0,  1.0, 0.0,
      1.0,  1.0,  1.0, 1.0
    ]);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    // vbo
    const cubeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);
    // vao
    const cubeVao = gl.createVertexArray();
    gl.bindVertexArray(cubeVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 3 * FSIZE, 0);

    // screen quad
    // vbo
    const quadVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVbo);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
    // vao
    const quadVao = gl.createVertexArray();
    gl.bindVertexArray(quadVao);
    // position
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 4 * FSIZE, 0);
    // texCoord
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 4 * FSIZE, 2 * FSIZE);

    return { cubeVao, quadVao };
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

  creatFrameBuffer(canvas: HTMLCanvasElement) {
    const gl = this.gl;
    if (!gl) return null;
    // configure MSAA framebuffer
    // --------------------------
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    // create a multisampled color attachment renderbuffer (not texture!)
    const colorRBO = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, colorRBO);
    gl.renderbufferStorageMultisample(
      gl.RENDERBUFFER,
      4,
      gl.RGBA8,
      canvas.width,
      canvas.height
    );
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.RENDERBUFFER,
      colorRBO
    );

    // create a (also multisampled) renderbuffer object for depth and stencil attachments
    const rbo = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, rbo);
    gl.renderbufferStorageMultisample(
      gl.RENDERBUFFER,
      4,
      gl.DEPTH24_STENCIL8,
      canvas.width,
      canvas.height
    );
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_STENCIL_ATTACHMENT,
      gl.RENDERBUFFER,
      rbo
    );

    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      console.log("ERROR::FRAMEBUFFER:: Framebuffer is not complete!");
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // configure second post-processing framebuffer
    const intermediateFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, intermediateFBO);

    // create a color attachment texture
    const screenTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, screenTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      canvas.width,
      canvas.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      screenTexture,
      0
    );

    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      console.log(
        "ERROR::FRAMEBUFFER:: Intermediate framebuffer is not complete!"
      );
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return { frameBuffer: framebuffer, intermediateFBO, screenTexture };
  }
}
