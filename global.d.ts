export {};
import type SceneView from "@arcgis/core/views/Scene.js";
import type View from "@arcgis/core/views/View.js";
declare global {
  interface Window {
    view: View & SceneView & __esri.SceneView;
  }
}
