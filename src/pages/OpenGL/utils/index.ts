import ShaderClass from "@/pages/OpenGL/utils/class/ShaderClass.ts";
import Camera from "@/pages/OpenGL/utils/class/CameraClass.ts";
import { mat4, mat3 } from "gl-matrix";

export { renderQuad } from "./functions/renderQuad";
export { renderCube } from "./functions/renderCube";
export { checkWebGL2Support } from "./functions/checkWebGL2Support";
export { initShaders } from "./functions/initShaders";
export { loadTexture } from "./functions/loadTexture";

/**
 * setNormalMatrix
 *
 * @export
 * @param {ShaderClass} shader
 * @param {mat4} model
 */
export function setNormalMatrix(shader: ShaderClass, model: mat4) {
  const normalMatrix = mat4.create();
  mat4.copy(normalMatrix, model);
  mat4.invert(normalMatrix, normalMatrix);
  mat4.transpose(normalMatrix, normalMatrix);
  shader.setMat3("normalMatrix", mat3.fromMat4(mat3.create(), normalMatrix));
}

/**
 * getProjection
 *
 * @export
 * @param {{
 *   gl: WebGL2RenderingContext;
 *   camera: Camera;
 * }} {
 *   gl,
 *   camera,
 * }
 * @return {*}
 */
export function getProjection({
  gl,
  camera,
}: {
  gl: WebGL2RenderingContext;
  camera: Camera;
}) {
  const fovy = (camera.Zoom * Math.PI) / 180;
  const aspect = gl!.canvas.width / gl!.canvas.height;
  const near = 0.1;
  const far = 100.0;
  return mat4.perspective(mat4.create(), fovy, aspect, near, far);
}
