/**
 * 检查WebGL2支持性
 * @export
 * @param {(WebGL2RenderingContext | null)} gl
 * @return {*}
 */
export function checkWebGL2Support(gl: WebGL2RenderingContext | null) {
  if (!gl) return null;
  const available_extensions = gl.getSupportedExtensions();
  console.log("Available extensions:");
  console.table(available_extensions);

  // WebGL 2.0 需要启用 EXT_color_buffer_float 扩展才能渲染到浮点纹理
  const ext = gl.getExtension("EXT_color_buffer_float");
  if (!ext) {
    console.error("EXT_color_buffer_float not supported");
    return alert(
      "Your browser does not support the EXT_color_buffer_float extension, which is required for this demo.",
    );
  }
  return console.log("EXT_color_buffer_float is supported");
}
