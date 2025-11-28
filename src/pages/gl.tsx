import { useEffect, useRef } from "react";
import Constructor from "./GL/5.advanced_lighting/3.1.2.shadow_mapping_base";

const GL = () => {
  const contianer = useRef<HTMLCanvasElement | null>(null);
  const instanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (contianer.current && !instanceRef.current) {
      instanceRef.current = new Constructor(contianer.current);
    }
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 前置章节1.getting_started 使用此canvas */}
      {/* <canvas height={600} width={800} ref={(v) => (contianer.current = v)} /> */}
      {/* light章节开始使用此canvas */}
      <canvas
        style={{ height: "100%", width: "100%" }}
        ref={(v) => (contianer.current = v)}
      />
    </div>
  );
};

export default GL;
