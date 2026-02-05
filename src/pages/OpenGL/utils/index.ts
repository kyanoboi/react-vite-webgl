export function initShaders(
  gl: WebGL2RenderingContext | null,
  vs: string,
  fs: string,
) {
  if (!gl) return;
  let vertexShader: WebGLShader | null = null;
  let fragmentShader: WebGLShader | null = null;
  let program: WebGLProgram | null = null;

  try {
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vShader) throw new Error("Unable to create vertex shader");
    vertexShader = vShader;
    gl.shaderSource(vertexShader, vs);
    gl.compileShader(vertexShader);
    const message = gl.getShaderInfoLog(vertexShader);
    if (message && message.length > 0) {
      throw message;
    }
  } catch (error) {
    console.log("Vertex Shader Compilation Failed：", error);
  }

  try {
    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fShader) throw new Error("Unable to create fragment shader");
    fragmentShader = fShader;
    gl.shaderSource(fragmentShader, fs);
    gl.compileShader(fragmentShader);
    const message = gl.getShaderInfoLog(fragmentShader);
    if (message && message.length > 0) {
      throw message;
    }
  } catch (error) {
    console.log("Frament Shader Compilation Failed：", error);
  }

  try {
    if (!vertexShader || !fragmentShader) {
      throw new Error("Shader(s) not compiled successfully");
    }
    program = gl.createProgram();
    if (!program) throw new Error("Unable to create program");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program);
      throw info;
    }

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
  } catch (error) {
    console.log("Program Linking Failed：", error);
    program = null;
  }

  return program;
}
