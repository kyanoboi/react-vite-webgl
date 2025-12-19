import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3 } from "gl-matrix";
import shader_mapping_depth, {
  shader_debug_quad,
} from "./shader/shadow_mapping_depth.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  debugDepthQuad!: ShaderClass;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  lightPos: vec3 = vec3.fromValues(-2.0, 4.0, -1.0);
  floorTexture!: WebGLTexture;

  depthMapFBO!: WebGLFramebuffer | null;
  depthMap!: WebGLTexture | null;

  cubeVAO!: WebGLVertexArrayObject | null;
  cubeVBO!: WebGLBuffer | null;

  quadVAO!: WebGLVertexArrayObject | null;
  quadVBO!: WebGLBuffer | null;

  // 当前视图投影矩阵
  currViewProjMatrix: mat4 = mat4.create();

  constructor(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.gl = canvas.getContext("webgl2");
    // 编译着色器
    this.shader = new ShaderClass(this.gl, shader_mapping_depth);
    this.debugDepthQuad = new ShaderClass(this.gl, shader_debug_quad);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);
    // 创建深度图FBO
    const { depthMapFBO, depthMap } = this.createDepthMapFBO() || {};
    this.depthMapFBO = depthMapFBO!;
    this.depthMap = depthMap!;
    // 初始化渲染管道
    this.init(this.gl);
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.floorTexture) {
      this.floorTexture = await this.loadTexture("./images/wood.png");
    }

    const { planeVao } = this.initVertexBuffers() || {};

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 1. render depth of scene to texture (from light's perspective)
    // --------------------------------------------------------------
    const near_plane = 1.0;
    const far_plane = 7.5;
    const lightProjection = mat4.ortho(
      mat4.create(),
      -5.0,
      5.0,
      -5.0,
      5.0,
      near_plane,
      far_plane
    );
    const lightView = mat4.lookAt(
      mat4.create(),
      this.lightPos,
      vec3.fromValues(0.0, 0.0, 0.0),
      vec3.fromValues(0.0, 1.0, 0.0)
    );
    const lightSpaceMatrix = mat4.multiply(
      mat4.create(),
      lightProjection,
      lightView
    );
    this.shader.use();
    this.shader.setMat4("lightSpaceMatrix", lightSpaceMatrix);

    gl.viewport(0, 0, 1024, 1024);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.depthMapFBO);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.floorTexture);
    this.renderScene(planeVao!);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // reset viewport
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // render Depth map to quad for visual debugging
    // ---------------------------------------------
    this.debugDepthQuad.use();
    this.debugDepthQuad.setInt("depthMap", 0);
    this.debugDepthQuad.setFloat("near_plane", near_plane);
    this.debugDepthQuad.setFloat("far_plane", far_plane);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.depthMap);
    this.renderQuad();

    requestAnimationFrame(() => this.init(this.gl));
  }

  renderScene(planeVao: WebGLVertexArrayObject | null) {
    const gl = this.gl;
    if (!gl) return;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // floor
    this.shader.use();
    const model = mat4.create();
    this.shader.setMat4("model", model);
    gl.bindVertexArray(planeVao);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    // cubes
    // cube1
    const model1 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(0.0, 1.5, 0.0)
    );
    this.shader.setMat4(
      "model",
      mat4.scale(model1, model1, vec3.fromValues(0.5, 0.5, 0.5))
    );
    this.renderCube();
    // cube2
    const model2 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(2.0, 0.0, 1.0)
    );
    this.shader.setMat4(
      "model",
      mat4.scale(model2, model2, vec3.fromValues(0.5, 0.5, 0.5))
    );
    this.renderCube();
    // cube3
    const model3 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(-1.0, 0.0, 2.0)
    );
    mat4.rotate(
      model3,
      model3,
      60,
      vec3.normalize(vec3.create(), vec3.fromValues(1.0, 0.0, 1.0))
    );
    this.shader.setMat4(
      "model",
      mat4.scale(model3, model3, vec3.fromValues(0.25, 0.25, 0.25))
    );
    this.renderCube();
  }

  renderCube() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.cubeVAO) {
      // prettier-ignore
      const vertices = new Float32Array([
        // back face
        -1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 0.0, // bottom-left
        1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 1.0, // top-right
        1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 0.0, // bottom-right         
        1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 1.0, 1.0, // top-right
        -1.0, -1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 0.0, // bottom-left
        -1.0,  1.0, -1.0,  0.0,  0.0, -1.0, 0.0, 1.0, // top-left
        // front face
        -1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 0.0, // bottom-left
        1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 0.0, // bottom-right
        1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 1.0, // top-right
        1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 1.0, 1.0, // top-right
        -1.0,  1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 1.0, // top-left
        -1.0, -1.0,  1.0,  0.0,  0.0,  1.0, 0.0, 0.0, // bottom-left
        // left face
        -1.0,  1.0,  1.0, -1.0,  0.0,  0.0, 1.0, 0.0, // top-right
        -1.0,  1.0, -1.0, -1.0,  0.0,  0.0, 1.0, 1.0, // top-left
        -1.0, -1.0, -1.0, -1.0,  0.0,  0.0, 0.0, 1.0, // bottom-left
        -1.0, -1.0, -1.0, -1.0,  0.0,  0.0, 0.0, 1.0, // bottom-left
        -1.0, -1.0,  1.0, -1.0,  0.0,  0.0, 0.0, 0.0, // bottom-right
        -1.0,  1.0,  1.0, -1.0,  0.0,  0.0, 1.0, 0.0, // top-right
        // right face
        1.0,  1.0,  1.0,  1.0,  0.0,  0.0, 1.0, 0.0, // top-left
        1.0, -1.0, -1.0,  1.0,  0.0,  0.0, 0.0, 1.0, // bottom-right
        1.0,  1.0, -1.0,  1.0,  0.0,  0.0, 1.0, 1.0, // top-right         
        1.0, -1.0, -1.0,  1.0,  0.0,  0.0, 0.0, 1.0, // bottom-right
        1.0,  1.0,  1.0,  1.0,  0.0,  0.0, 1.0, 0.0, // top-let
        1.0, -1.0,  1.0,  1.0,  0.0,  0.0, 0.0, 0.0, // bottom-left     
        // bottom face
        -1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 0.0, 1.0, // top-right
        1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 1.0, 1.0, // top-left
        1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 1.0, 0.0, // bottom-left
        1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 1.0, 0.0, // bottom-left
        -1.0, -1.0,  1.0,  0.0, -1.0,  0.0, 0.0, 0.0, // bottom-right
        -1.0, -1.0, -1.0,  0.0, -1.0,  0.0, 0.0, 1.0, // top-right
        // top face
        -1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 0.0, 1.0, // top-left
        1.0,  1.0 , 1.0,  0.0,  1.0,  0.0, 1.0, 0.0, // bottom-right
        1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 1.0, 1.0, // top-right     
        1.0,  1.0,  1.0,  0.0,  1.0,  0.0, 1.0, 0.0, // bottom-right
        -1.0,  1.0, -1.0,  0.0,  1.0,  0.0, 0.0, 1.0, // top-left
        -1.0,  1.0,  1.0,  0.0,  1.0,  0.0, 0.0, 0.0  // bottom-left        
      ]);
      const FSIZE = Float32Array.BYTES_PER_ELEMENT;
      this.cubeVBO = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.cubeVBO);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      this.cubeVAO = gl.createVertexArray();
      gl.bindVertexArray(this.cubeVAO);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 8 * FSIZE, 0);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 8 * FSIZE, 3 * FSIZE);
      gl.enableVertexAttribArray(2);
      gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8 * FSIZE, 6 * FSIZE);
    }
    // render Cube
    gl.bindVertexArray(this.cubeVAO);
    gl.drawArrays(gl.TRIANGLES, 0, 36);
  }

  renderQuad() {
    const gl = this.gl;
    if (!gl) return;
    if (!this.quadVAO) {
      // prettier-ignore
      const quadVertices = new Float32Array([
        // positions        // texture Coords
        -1.0,  1.0, 0.0, 0.0, 1.0,
        -1.0, -1.0, 0.0, 0.0, 0.0,
        1.0,  1.0, 0.0, 1.0, 1.0,
        1.0, -1.0, 0.0, 1.0, 0.0,
      ]);
      const FSIZE = Float32Array.BYTES_PER_ELEMENT;
      // setup plane VAO
      this.quadVBO = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.quadVBO);
      gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

      this.quadVAO = gl.createVertexArray();
      gl.bindVertexArray(this.quadVAO);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 5 * FSIZE, 0);
      gl.enableVertexAttribArray(1);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 5 * FSIZE, 3 * FSIZE);
    }
    gl.bindVertexArray(this.quadVAO);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  createDepthMapFBO() {
    const gl = this.gl;
    if (!gl) return null;
    const depthMapFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthMapFBO);
    // create depth texture
    const depthMap = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, depthMap);
    // internal format 必须与 type 匹配
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT32F,
      1024,
      1024,
      0,
      gl.DEPTH_COMPONENT,
      gl.FLOAT,
      null
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    // attach depth texture as FBO's depth buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthMapFBO);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D,
      depthMap,
      0
    );
    gl.drawBuffers([gl.NONE]);
    gl.readBuffer(gl.NONE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { depthMapFBO, depthMap };
  }

  initVertexBuffers() {
    const gl = this.gl;
    if (!gl) return;

    // prettier-ignore
    const planeVertices = new Float32Array([
        // positions            // normals         // texcoords
         25.0, -0.5,  25.0,  0.0, 1.0, 0.0,  25.0,  0.0,
        -25.0, -0.5,  25.0,  0.0, 1.0, 0.0,   0.0,  0.0,
        -25.0, -0.5, -25.0,  0.0, 1.0, 0.0,   0.0, 25.0,

         25.0, -0.5,  25.0,  0.0, 1.0, 0.0,  25.0,  0.0,
        -25.0, -0.5, -25.0,  0.0, 1.0, 0.0,   0.0, 25.0,
         25.0, -0.5, -25.0,  0.0, 1.0, 0.0,  25.0, 25.0
    ]);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;

    const planeVbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, planeVbo);
    gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);

    const planeVao = gl.createVertexArray();
    gl.bindVertexArray(planeVao);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 8 * FSIZE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 8 * FSIZE, 3 * FSIZE);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8 * FSIZE, 6 * FSIZE);

    return { planeVao };
  }

  loadTexture(path: string | URL): Promise<WebGLTexture> {
    return new Promise((resolve, reject) => {
      const gl = this.gl as WebGL2RenderingContext;
      if (!gl) return reject(new Error("No WebGL context"));

      const texture = gl.createTexture();
      if (!texture) return reject(new Error("Failed to create texture"));

      const image = new Image();

      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);

        const internalFormat = gl.RGB8;
        const format = gl.RGB;

        try {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            internalFormat,
            format,
            gl.UNSIGNED_BYTE,
            image
          );
        } catch (e) {
          console.error("texImage2D error:", e);
          reject(new Error(`Failed to upload texture: ${e}`));
          return;
        }

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MIN_FILTER,
          gl.LINEAR_MIPMAP_LINEAR
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        gl.generateMipmap(gl.TEXTURE_2D);

        resolve(texture as WebGLTexture);
      };

      image.onerror = () => {
        reject(new Error(`Failed to load image: ${image.src}`));
      };

      image.onabort = () => {
        reject(new Error(`Image load aborted: ${image.src}`));
      };

      image.src = new URL(path, import.meta.url).href;
    });
  }
}
