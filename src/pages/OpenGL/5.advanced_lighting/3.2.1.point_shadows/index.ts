import GUI from "lil-gui";
import ShaderClass from "./class/ShaderClass.ts";
import { mat4, vec3, mat3 } from "gl-matrix";
import Camera from "./class/CameraClass.ts";
import CameraEventClass from "./class/CameraEventClass.ts";
import MotionBlurEffect from "./class/MotionBlurEffect.ts";
import shadow_mapping_base, {
  shader_point_shadows_depth,
} from "./shader/shadow_mapping.ts";

export default class Constructor {
  gl!: WebGL2RenderingContext | null;
  shader!: ShaderClass;
  simpleDepthShader!: ShaderClass;
  debugDepthQuad!: ShaderClass;

  camera!: Camera;
  cameraEvent!: CameraEventClass;
  motionBlurEffect!: MotionBlurEffect;

  deltaTime: number = 0.0;
  lastFrame: number = 0.0;

  isShowShadow: boolean = true;
  gammaEnabled: boolean = false;

  lightPosition: vec3 = vec3.fromValues(0.0, 0.0, 0.0);

  floorTexture!: WebGLTexture;
  floorTextureGammaCorrected!: WebGLTexture;

  shadowMapWidth: number = 1024;
  shadowMapHeight: number = 1024;
  depthMapFBO!: WebGLFramebuffer;
  depthCubeMap!: WebGLTexture;

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
    this.shader = new ShaderClass(this.gl, shadow_mapping_base);
    this.simpleDepthShader = new ShaderClass(
      this.gl,
      shader_point_shadows_depth,
    );
    // 初始化相机
    this.camera = new Camera(vec3.fromValues(0.0, 0.0, 3.0));
    // 初始化相机事件
    this.cameraEvent = new CameraEventClass(this.camera, canvas);
    // 画布大小
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;
    // 初始化视图端口
    this.gl?.viewport(0, 0, canvas.width, canvas.height);
    // 初始化运动模糊效果（注意需要在视口设置之后）
    this.motionBlurEffect = new MotionBlurEffect(this.gl!, canvas);
    // 初始化控制面板
    this.initControlPanel();
    // 创建阴影贴图帧缓冲区
    const { depthMapFBO, depthCubeMap } =
      this.createShadowMapFramebuffer() || {};
    this.depthMapFBO = depthMapFBO!;
    this.depthCubeMap = depthCubeMap!;
    // 初始化渲染管道
    this.init(this.gl);
  }

  initControlPanel() {
    const gui = new GUI();
    gui.add(this, "isShowShadow").name("显示阴影");
    gui.add(this, "gammaEnabled").name("伽马校正");
    // 添加运动模糊控制
    gui.add(this.motionBlurEffect, "enabled").name("运动模糊");
    gui.add(this.motionBlurEffect, "blurSamples", 4, 32, 1).name("采样数量");
    gui.add(this.motionBlurEffect, "blurScale", 0.1, 3.0).name("模糊强度");
  }

  async init(gl: WebGL2RenderingContext | null) {
    if (!gl) return;

    const currentFrame = performance.now() / 1000;
    this.deltaTime = currentFrame - this.lastFrame;
    this.lastFrame = currentFrame;

    if (!this.floorTexture) {
      this.floorTexture = await this.loadTexture("./images/wood.png", false);
    }

    if (!this.floorTextureGammaCorrected) {
      this.floorTextureGammaCorrected = await this.loadTexture(
        "./images/wood.png",
        true,
      );
    }

    this.lightPosition[2] = Math.sin((performance.now() / 1000) * 0.5) * 1.0;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 0. create depth cubemap transformation matrices
    // -----------------------------------------------
    const shadowTransforms: mat4[] = [];
    this.createDepthCubemap(shadowTransforms);
    // 1. render scene to depth cubemap
    // --------------------------------
    // reset viewport
    gl.viewport(0, 0, this.shadowMapWidth, this.shadowMapHeight);
    this.renderSceneToDepthMap(shadowTransforms);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // 2. render scene as normal using the generated depth/shadow map
    // --------------------------------------------------------------
    // reset viewport
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    this.renderWithMotionBlur();

    this.cameraEvent.updateCameraPosition(this.deltaTime);

    requestAnimationFrame(() => this.init(this.gl));
  }

  /**
   * 创建深度立方体贴图
   * @param {*} shadowTransforms 6 个 light-space 矩阵
   * @return {*}
   * @memberof Constructor
   */
  createDepthCubemap(shadowTransforms: mat4[]) {
    const gl = this.gl;
    if (!gl) return;

    // 定义近平面和远平面
    const nearPlane = 1.0;
    const farPlane = 25.0;

    // 创建透视投影矩阵 (90度视场角)
    const shadowProj = mat4.create();
    mat4.perspective(
      shadowProj,
      Math.PI / 2, // 90度转弧度
      this.shadowMapWidth / this.shadowMapHeight,
      nearPlane,
      farPlane,
    );

    const lightPos = this.lightPosition;

    // 辅助函数：创建 lookAt 矩阵并与投影矩阵相乘
    function createShadowTransform(lightPos: vec3, target: vec3, up: vec3) {
      const view = mat4.create();
      mat4.lookAt(view, lightPos, target, up);

      const transform = mat4.create();
      mat4.multiply(transform, shadowProj, view);

      return transform;
    }

    // +X 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0] + 1.0, lightPos[1], lightPos[2]],
        [0.0, -1.0, 0.0],
      ),
    );

    // -X 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0] - 1.0, lightPos[1], lightPos[2]],
        [0.0, -1.0, 0.0],
      ),
    );

    // +Y 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0], lightPos[1] + 1.0, lightPos[2]],
        [0.0, 0.0, 1.0],
      ),
    );

    // -Y 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0], lightPos[1] - 1.0, lightPos[2]],
        [0.0, 0.0, -1.0],
      ),
    );

    // +Z 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0], lightPos[1], lightPos[2] + 1.0],
        [0.0, -1.0, 0.0],
      ),
    );

    // -Z 面
    shadowTransforms.push(
      createShadowTransform(
        lightPos,
        [lightPos[0], lightPos[1], lightPos[2] - 1.0],
        [0.0, -1.0, 0.0],
      ),
    );
  }

  renderSceneToDepthMap(shadowTransforms: mat4[]) {
    const gl = this.gl;
    if (!gl) return;
    const far_plane = 25.0;

    gl.viewport(0, 0, this.shadowMapWidth, this.shadowMapHeight);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.depthMapFBO);

    this.simpleDepthShader.use();
    this.simpleDepthShader.setFloat("far_plane", far_plane);
    this.simpleDepthShader.setVec3("lightPos", this.lightPosition);

    for (let i = 0; i < 6; i++) {
      // 附加当前面到帧缓冲
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
        this.depthCubeMap,
        0,
      );

      gl.clear(gl.DEPTH_BUFFER_BIT);

      // 设置当前面的变换矩阵
      this.simpleDepthShader.setInt("faceIndex", i);
      this.simpleDepthShader.setMat4(
        "shadowMatrices[" + i + "]",
        shadowTransforms[i],
      );

      // 渲染场景几何体
      this.renderSceneObject(this.simpleDepthShader);
    }
  }

  renderWithMotionBlur() {
    const gl = this.gl;
    if (!gl) return;
    // 更新视图投影矩阵
    const view = this.camera.getViewMatrix();
    const projection = this.getProjection();
    mat4.multiply(this.currViewProjMatrix, projection, view);
    this.motionBlurEffect.updateViewProjMatrix(this.currViewProjMatrix);

    if (this.motionBlurEffect.enabled) {
      // 1. 渲染场景到帧缓冲区
      this.motionBlurEffect.renderSceneToFramebuffer(() => {
        this.renderScene();
      });

      // 2. 应用运动模糊到屏幕
      this.motionBlurEffect.applyMotionBlur();
    } else {
      // 无运动模糊时直接渲染到屏幕
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this.renderScene();
    }
  }

  renderScene() {
    const gl = this.gl;
    if (!gl) return;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    this.shader.use();
    this.shader.setInt("diffuseTexture", 0);
    this.shader.setInt("depthMap", 1);

    this.shader.setMat4("view", this.camera.getViewMatrix());
    this.shader.setMat4("projection", this.getProjection());
    // set light uniforms
    this.shader.setVec3("lightPos", this.lightPosition);
    this.shader.setVec3("viewPos", this.camera.Position);
    this.shader.setInt("shadows", this.isShowShadow ? 1 : 0);
    this.shader.setFloat("far_plane", 25.0);

    this.shader.setInt("gamma", this.gammaEnabled ? 1 : 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(
      gl.TEXTURE_2D,
      this.gammaEnabled ? this.floorTextureGammaCorrected : this.floorTexture,
    );

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.depthCubeMap);

    this.renderSceneObject(this.shader);
  }

  renderSceneObject(shader: ShaderClass) {
    const gl = this.gl;
    if (!gl) return;

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // room cube
    shader.use();
    const model = mat4.create();
    mat4.scale(model, model, vec3.fromValues(2.5, 2.5, 2.5));
    shader.setMat4("model", model);
    this.setNormalMatrix(shader, model);
    // 请注意，我们在这里禁用了剔除，因为我们渲染立方体的“内部”而不是通常的“外部”，这会抛出正常的剔除方法。
    gl.disable(gl.CULL_FACE);
    // 当从内部绘制立方体时，一个小技巧来反转法线，这样照明仍然有效。
    shader.setInt("reverse_normals", 1);
    this.renderCube();
    shader.setInt("reverse_normals", 0);
    gl.enable(gl.CULL_FACE);
    // cubes
    // cube1
    const model1 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(4.0, -3.5, 0.0),
    );
    shader.setMat4(
      "model",
      mat4.scale(model1, model1, vec3.fromValues(0.5, 0.5, 0.5)),
    );
    this.setNormalMatrix(shader, model1);
    this.renderCube();
    // cube2
    const model2 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(2.0, 3.0, 1.0),
    );
    shader.setMat4(
      "model",
      mat4.scale(model2, model2, vec3.fromValues(0.75, 0.75, 0.75)),
    );
    this.setNormalMatrix(shader, model2);
    this.renderCube();
    // cube3
    const model3 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(3.0, -1.0, 0.0),
    );
    shader.setMat4(
      "model",
      mat4.scale(model3, model3, vec3.fromValues(0.5, 0.5, 0.5)),
    );
    this.setNormalMatrix(shader, model3);
    this.renderCube();
    // cube4
    const model4 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(-1.5, 1.0, 1.5),
    );
    shader.setMat4(
      "model",
      mat4.scale(model4, model4, vec3.fromValues(0.5, 0.5, 0.5)),
    );
    this.setNormalMatrix(shader, model4);
    this.renderCube();
    // cube5
    const model5 = mat4.translate(
      mat4.create(),
      model,
      vec3.fromValues(-1.5, 2.0, -3.0),
    );
    mat4.rotate(
      model5,
      model5,
      60,
      vec3.normalize(vec3.create(), vec3.fromValues(1.0, 0.0, 1.0)),
    );
    shader.setMat4(
      "model",
      mat4.scale(model5, model5, vec3.fromValues(0.75, 0.75, 0.75)),
    );
    this.setNormalMatrix(shader, model5);
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

  setNormalMatrix(shader: ShaderClass, model: mat4) {
    const normalMatrix = model;
    mat4.invert(normalMatrix, normalMatrix);
    mat4.transpose(normalMatrix, normalMatrix);
    shader.setMat3("normalMatrix", mat3.fromMat4(mat3.create(), normalMatrix));
  }

  createShadowMapFramebuffer() {
    const gl = this.gl;
    if (!gl) return null;
    const depthMapFBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthMapFBO);
    // create depth texture
    const depthCubeMap = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, depthCubeMap);
    for (let i = 0; i < 6; i++) {
      gl.texImage2D(
        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
        0,
        gl.DEPTH_COMPONENT32F,
        this.shadowMapWidth,
        this.shadowMapHeight,
        0,
        gl.DEPTH_COMPONENT,
        gl.FLOAT,
        null,
      );
    }
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { depthMapFBO, depthCubeMap };
  }

  getProjection() {
    const fovy = (this.camera.Zoom * Math.PI) / 180;
    const aspect = this.gl!.canvas.width / this.gl!.canvas.height;
    const near = 0.1;
    const far = 100.0;
    return mat4.perspective(mat4.create(), fovy, aspect, near, far);
  }

  loadTexture(
    path: string | URL,
    gammaCorrection: boolean = false,
  ): Promise<WebGLTexture> {
    return new Promise((resolve, reject) => {
      const gl = this.gl as WebGL2RenderingContext;
      if (!gl) return reject(new Error("No WebGL context"));

      const texture = gl.createTexture();
      if (!texture) return reject(new Error("Failed to create texture"));

      const image = new Image();

      image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);

        let internalFormat: number;
        let format: number;

        if (gammaCorrection) {
          internalFormat = gl.SRGB8_ALPHA8;
          format = gl.RGBA;
        } else {
          internalFormat = gl.RGB8;
          format = gl.RGB;
        }

        try {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            internalFormat,
            format,
            gl.UNSIGNED_BYTE,
            image,
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
          gl.LINEAR_MIPMAP_LINEAR,
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
