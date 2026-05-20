/**
 * 渲染 1x1 的四边形（全屏quad）
 * @export
 * @param {WebGL2RenderingContext} gl WebGL2上下文
 * @param {WebGLVertexArrayObject | null} quadVAO quad的VAO缓存
 * @returns {WebGLVertexArrayObject} 返回VAO以便缓存复用
 */
export function renderQuad(
  gl: WebGL2RenderingContext,
  quadVAO: WebGLVertexArrayObject | null,
): WebGLVertexArrayObject {
  if (!quadVAO) {
    // prettier-ignore
    const quadVertices = new Float32Array([
      // positions     // texture Coords
      -1.0,  1.0, 0.0, 0.0, 1.0,
      -1.0, -1.0, 0.0, 0.0, 0.0,
       1.0,  1.0, 0.0, 1.0, 1.0,
       1.0, -1.0, 0.0, 1.0, 0.0,
    ]);

    // 创建并配置VAO
    quadVAO = gl.createVertexArray()!;
    gl.bindVertexArray(quadVAO);

    const quadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const FSIZE = Float32Array.BYTES_PER_ELEMENT;
    const stride = 5 * FSIZE;

    // 位置属性 (location 0)
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);

    // 纹理坐标属性 (location 1)
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 3 * FSIZE);

    gl.bindVertexArray(null);
  }

  // 绘制
  gl.bindVertexArray(quadVAO);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  return quadVAO;
}
