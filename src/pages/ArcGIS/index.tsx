import React, { useEffect, useRef } from "react";
import View from "@arcgis/core/views/View";
import SceneView from "@arcgis/core/views/SceneView.js";
import Map from "@arcgis/core/Map.js";
import esriConfig from "@arcgis/core/config.js";
import "@arcgis/core/assets/esri/themes/light/main.css";
import Multipoint from "@arcgis/core/geometry/Multipoint.js";

import TriangleRender from "./TriangleRenderNode";

esriConfig.assetsPath = "./assets";

const MapComponent: React.FC = () => {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<SceneView | null>(null);

  useEffect(() => {
    if (!viewDivRef.current || viewRef.current) return;

    const map = new Map({
      basemap: "topo-3d",
      ground: "world-elevation",
    });

    const view: View & SceneView = new SceneView({
      viewingMode: "global",
      container: viewDivRef.current,
      map: map,
      // spatialReference: { wkid: 4326 },
      // center: [116.22792493013921, 39.926236653038366],
      zoom: 10,
      camera: {
        position: {
          x: 116.22792493013921,
          y: 39.926236653038366,
          z: 30000,
          spatialReference: { wkid: 4326 },
        },
        heading: 0,
        tilt: 0,
      },
    });

    view.attributionVisible = false;
    view.qualityProfile = "low";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    view.qualitySettings.memoryLimit = 1024;

    viewRef.current = view;
    window.view = view;

    view.when(() => {
      const ground = view.map?.ground;
      const points = [
        [115.95209149044159, 39.92047245351777],
        [115.88452587627347, 39.8649244916831],
        [116.01805457777195, 39.86213639871335],
      ];
      ground
        ?.queryElevation(new Multipoint({ points }), { returnSampleInfo: true })
        .then(function (result) {
          new TriangleRender({ view, points: result.geometry.points });
        })
        .catch(function (error) {
          console.error("Failed to query elevation:", error);
        });
    });

    return () => {
      viewRef.current?.destroy();
      viewRef.current = null;
    };
  }, []);

  return <div ref={viewDivRef} style={{ height: "100vh" }} />;
};

export default MapComponent;
