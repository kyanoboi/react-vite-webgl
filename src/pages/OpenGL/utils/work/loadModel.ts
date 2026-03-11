/**
 * loadModel.ts — Web Worker
 *
 * 负责在独立线程中处理所有 CPU 密集型的几何体解析工作，避免阻塞主线程。
 * 纹理加载/上传由主线程负责，Worker 只处理顶点/法线/UV/索引数据。
 *
 * 消息协议
 * ─────────────────────────────────────────────────────
 * 主线程 → Worker
 *   { type: 'PROCESS_OBJ', payload: { objText } }
 *
 * Worker → 主线程
 *   { type: 'PROGRESS', payload: { current, total } }
 *   { type: 'DONE',     payload: ProcessedMesh[] }
 *   { type: 'ERROR',    payload: { message } }
 * ─────────────────────────────────────────────────────
 */

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Mesh, MeshPhongMaterial, BufferGeometry, Matrix4 } from "three";

// ─── 类型定义 ────────────────────────────────────────────────────────────────

export type MaterialProps = {
  diffuse: number[];
  specular: number[];
  shininess: number;
};

/** Worker 处理完毕后返回给主线程的单个网格数据（纯几何体，无纹理） */
export type ProcessedMesh = {
  /** 顶点坐标，stride = 3 */
  vertices: Float32Array;
  /** 法线，stride = 3 */
  normals: Float32Array;
  /** UV 坐标，stride = 2 */
  uvs: Float32Array;
  /** 索引数组（统一为 Uint32Array） */
  indices: Uint32Array;
  material: MaterialProps;
};

// ─── 输入消息类型 ─────────────────────────────────────────────────────────────

type WorkerInput = {
  type: "PROCESS_OBJ";
  payload: { objText: string };
};

// ─── 工具函数 ─────────────────────────────────────────────────────────────────

function buildIndices(geometry: BufferGeometry): Uint32Array {
  if (geometry.index) {
    const src = geometry.index.array;
    if (src instanceof Uint32Array) return src.slice();
    const out = new Uint32Array(src.length);
    for (let i = 0; i < src.length; i++) out[i] = src[i];
    return out;
  }
  const vertexCount = geometry.attributes.position.count;
  const out = new Uint32Array(vertexCount);
  for (let i = 0; i < vertexCount; i++) out[i] = i;
  return out;
}

function extractMeshData(mesh: Mesh): ProcessedMesh {
  const geometry = mesh.geometry as BufferGeometry;

  if (!geometry.attributes.normal) {
    geometry.computeVertexNormals();
  }

  if (mesh.matrix && !mesh.matrix.equals(new Matrix4())) {
    geometry.applyMatrix4(mesh.matrix);
  }

  const vertices = (geometry.attributes.position.array as Float32Array).slice();
  const normals = geometry.attributes.normal
    ? (geometry.attributes.normal.array as Float32Array).slice()
    : new Float32Array(vertices.length);
  const uvs = geometry.attributes.uv
    ? (geometry.attributes.uv.array as Float32Array).slice()
    : new Float32Array((vertices.length / 3) * 2);
  const indices = buildIndices(geometry);

  const mat = mesh.material as MeshPhongMaterial;
  const material: MaterialProps = {
    diffuse: mat.color ? [mat.color.r, mat.color.g, mat.color.b] : [1, 1, 1],
    specular: mat.specular
      ? [mat.specular.r, mat.specular.g, mat.specular.b]
      : [1, 1, 1],
    shininess: mat.shininess ?? 30,
  };

  return { vertices, normals, uvs, indices, material };
}

// ─── Worker 消息入口 ──────────────────────────────────────────────────────────

self.onmessage = (event: MessageEvent<WorkerInput>) => {
  const { type, payload } = event.data;
  if (type !== "PROCESS_OBJ") return;

  try {
    const { objText } = payload;

    const objLoader = new OBJLoader();
    const object = objLoader.parse(objText);

    const rawMeshes: Mesh[] = [];
    object.traverse((child) => {
      if ((child as Mesh).isMesh) rawMeshes.push(child as Mesh);
    });

    const total = rawMeshes.length;
    const results: ProcessedMesh[] = [];

    for (let i = 0; i < total; i++) {
      self.postMessage({ type: "PROGRESS", payload: { current: i, total } });
      results.push(extractMeshData(rawMeshes[i]));
    }

    // 所有 ArrayBuffer 零拷贝 transfer 回主线程
    const transferables: Transferable[] = results.flatMap((mesh) => [
      mesh.vertices.buffer,
      mesh.normals.buffer,
      mesh.uvs.buffer,
      mesh.indices.buffer,
    ]);

    self.postMessage(
      { type: "DONE", payload: results },
      { transfer: transferables },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    self.postMessage({ type: "ERROR", payload: { message } });
  }
};
