/**
 * Loads a texture from the given path and uploads it to the GPU
 *
 * @export
 * @param {({
 *   path: string ;
 *   gammaCorrection?: boolean;
 *   gl: WebGL2RenderingContext;
 * })} {
 *   path,
 *   gammaCorrection = false,
 *   gl,
 * }
 * @return {*}  {Promise<WebGLTexture>}
 */
export function loadTexture({
  path,
  gammaCorrection = false,
  gl,
}: {
  path: string;
  gammaCorrection?: boolean;
  gl: WebGL2RenderingContext;
}): Promise<WebGLTexture> {
  return new Promise((resolve, reject) => {
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
        internalFormat = gl.RGBA8;
        format = gl.RGBA;
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

      // 开启各向异性过滤
      const ext = gl.getExtension("EXT_texture_filter_anisotropic");
      if (ext) {
        const maxAnisotropy = gl.getParameter(
          ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
        );
        gl.texParameterf(
          gl.TEXTURE_2D,
          ext.TEXTURE_MAX_ANISOTROPY_EXT,
          maxAnisotropy,
        );
      }

      resolve(texture as WebGLTexture);
    };

    image.onerror = () => {
      reject(new Error(`Failed to load image: ${image.src}`));
    };

    image.onabort = () => {
      reject(new Error(`Image load aborted: ${image.src}`));
    };

    image.src = path;
  });
}
