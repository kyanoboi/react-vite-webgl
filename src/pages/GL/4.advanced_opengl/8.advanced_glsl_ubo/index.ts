import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import Camera, { CameraMovement } from "./class/CameraClass.ts";
import advanced_glsl_ubo from "./shader/advanced_glsl_ubo.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shaderRed!: ShaderClass;
  shaderGreen!: ShaderClass;
  shaderBlue!: ShaderClass;
  shaderYellow!: ShaderClass;
  camera!: Camera;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;

  uboMatrices!: WebGLBuffer | null;

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    const {
      shader_vs: vs,
      shader_fs_blue,
      shader_fs_green,
      shader_fs_red,
      shader_fs_yellow,
    } = advanced_glsl_ubo;

    this.shaderRed = new ShaderClass(this.gl, { vs, fs: shader_fs_red });
    this.shaderGreen = new ShaderClass(this.gl, { vs, fs: shader_fs_green });
    this.shaderBlue = new ShaderClass(this.gl, { vs, fs: shader_fs_blue });
    this.shaderYellow = new ShaderClass(this.gl, { vs, fs: shader_fs_yellow });

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
    // 每一帧的时间
    const currentFrame = performance.now() / 1000; // 毫秒 → 秒
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    // 设置顶点位置
    const { cubeVao } = this.initVertexBuffers() || {};
    this.uboMatrices = this.initUniformBufferObject();
    // 深度
    gl.enable(gl.DEPTH_TEST);
    // 设置背景色
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // set the view and projection matrix in the uniform block - we only have to do this once per loop iteration.
    gl.bindBuffer(gl.UNIFORM_BUFFER, this.uboMatrices!);
    gl.bufferSubData(
      gl.UNIFORM_BUFFER,
      // NOTE:✅ view 矩阵的正确偏移量
      // dstByteOffset：一个以字节为单位指定数据替换开始位置的偏移量的GLintptr。
      // 为什么偏移值为mat4.create().length * 4，因为在shader中定义的view变量是mat4类型
      mat4.create().length * 4,
      new Float32Array([...this.camera.getViewMatrix()])
    );
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);

    // draw 4 cubes
    // RED
    this.shaderRed.use();
    this.drawCube(
      this.gl!,
      this.shaderRed,
      mat4.translate(
        mat4.create(),
        mat4.create(),
        vec3.fromValues(-0.75, 0.75, 0.0)
      ),
      cubeVao
    );
    // GREEN
    this.shaderGreen.use();
    this.drawCube(
      this.gl!,
      this.shaderGreen,
      mat4.translate(
        mat4.create(),
        mat4.create(),
        vec3.fromValues(0.75, 0.75, 0.0)
      ),
      cubeVao
    );
    // BLUE
    this.shaderBlue.use();
    this.drawCube(
      this.gl!,
      this.shaderBlue,
      mat4.translate(
        mat4.create(),
        mat4.create(),
        vec3.fromValues(0.75, -0.75, 0.0)
      ),
      cubeVao
    );
    // YELLOW
    this.shaderYellow.use();
    this.drawCube(
      this.gl!,
      this.shaderYellow,
      mat4.translate(
        mat4.create(),
        mat4.create(),
        vec3.fromValues(-0.75, -0.75, 0.0)
      ),
      cubeVao
    );

    // 每帧更新相机
    this.updateCameraPosition();

    requestAnimationFrame(() => this.init(this.gl));
  }

  drawCube(
    gl: WebGL2RenderingContext,
    shader: ShaderClass,
    model: mat4,
    cubeVao: WebGLVertexArrayObject | undefined,
    cubeTexture: WebGLTexture | null = null
  ) {
    // cube
    gl.bindVertexArray(cubeVao!);
    if (cubeTexture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
    }
    // world transformation
    shader.setMat4("model", model);
    // draw
    gl.drawArrays(gl.POINTS, 0, 36);
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;
    // prettier-ignore
    const cubeVertices = new Float32Array([
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
        -0.5,  0.5, -0.5, 
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
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 3 * FSIZE, 0);

    return { cubeVao };
  }

  initUniformBufferObject(): WebGLBuffer | null {
    const gl = this.gl;
    if (!gl) return null;

    // 首先获取相关块索引
    // prettier-ignore
    const uniformBlockIndexRed = gl.getUniformBlockIndex(this.shaderRed.program!,"Matrices");
    // prettier-ignore
    const uniformBlockIndexGreen = gl.getUniformBlockIndex(this.shaderGreen.program!,"Matrices");
    // prettier-ignore
    const uniformBlockIndexBlue = gl.getUniformBlockIndex(this.shaderBlue.program!,"Matrices");
    // prettier-ignore
    const uniformBlockIndexYellow = gl.getUniformBlockIndex(this.shaderYellow.program!,"Matrices");

    // 然后将每个着色器的统一块链接到这个统一的绑定点
    // prettier-ignore
    gl.uniformBlockBinding(this.shaderRed.program!, uniformBlockIndexRed, 0);
    // prettier-ignore
    gl.uniformBlockBinding(this.shaderGreen.program!, uniformBlockIndexGreen, 0);
    // prettier-ignore
    gl.uniformBlockBinding(this.shaderBlue.program!, uniformBlockIndexBlue, 0);
    // prettier-ignore
    gl.uniformBlockBinding(this.shaderYellow.program!, uniformBlockIndexYellow, 0);

    // 现在创建buffer
    const uboMatrices = gl.createBuffer();
    const matrixSize = 16 * 4; // 16 floats * 4 bytes per float
    const bufferSize = 2 * matrixSize; // 2 matrices
    gl.bindBuffer(gl.UNIFORM_BUFFER, uboMatrices);
    gl.bufferData(gl.UNIFORM_BUFFER, bufferSize, gl.STATIC_DRAW);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);

    // 定义链接到统一绑定点的缓冲区的范围
    gl.bindBufferRange(gl.UNIFORM_BUFFER, 0, uboMatrices, 0, bufferSize);

    // 存储投影矩阵（我们现在只这样做一次）（注意：我们不再使用缩放通过改变FoV）
    const projection = mat4.perspective(
      mat4.create(),
      (45.0 * Math.PI) / 180.0,
      this.gl!.canvas.width / this.gl!.canvas.height,
      0.1,
      100
    );
    gl.bindBuffer(gl.UNIFORM_BUFFER, uboMatrices);
    gl.bufferSubData(gl.UNIFORM_BUFFER, 0, new Float32Array([...projection]));

    return uboMatrices;
  }
}
