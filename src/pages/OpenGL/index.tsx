import { useEffect, useRef } from "react";
import Constructor from "./5.advanced_lighting/7.bloom";

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
      <canvas
        style={{ height: "100%", width: "100%" }}
        ref={(v) => (contianer.current = v)}
      />
    </div>
  );
};

export default GL;
