import type { MenuProps } from "antd";
import AdvancedLighting from "./5.advanced_lighting/1.advanced_lighting";
import GammaCorrection from "./5.advanced_lighting/2.gamma_correction";
import GammaCorrectionIntegration from "./5.advanced_lighting/2.1.gamma_correction_integration";
import ShadowMappingDepth from "./5.advanced_lighting/3.1.1.shadow_mapping_depth";
import ShadowMappingBase from "./5.advanced_lighting/3.1.2.shadow_mapping_base";
import ShadowMapping from "./5.advanced_lighting/3.1.3.shadow_mapping";
import PointShadows from "./5.advanced_lighting/3.2.1.point_shadows";
import PointShadowsSoft from "./5.advanced_lighting/3.2.2.point_shadows_soft";
import NormalMapping from "./5.advanced_lighting/4.normal_mapping";
import ParallaxMapping from "./5.advanced_lighting/5.1.parallax_mapping";
import SteepParallaxMapping from "./5.advanced_lighting/5.2.steep_parallax_mapping";
import ParallaxOcclusionMapping from "./5.advanced_lighting/5.3.parallax_occlusion_mapping";
import HDR from "./5.advanced_lighting/6.hdr";
import Bloom from "./5.advanced_lighting/7.bloom";
import DeferredShading from "./5.advanced_lighting/8.1.deferred_shading";
import DeferredShadingVolumes from "./5.advanced_lighting/8.2.deferred_shading_volumes";
import SSAO from "./5.advanced_lighting/9.ssao";

export const componentMap: Record<string, new (canvas: HTMLCanvasElement) => unknown> = {
  "advanced-lighting": AdvancedLighting,
  "gamma-correction": GammaCorrection,
  "gamma-correction-integration": GammaCorrectionIntegration,
  "shadow-mapping-depth": ShadowMappingDepth,
  "shadow-mapping-base": ShadowMappingBase,
  "shadow-mapping": ShadowMapping,
  "point-shadows": PointShadows,
  "point-shadows-soft": PointShadowsSoft,
  "normal-mapping": NormalMapping,
  "parallax-mapping": ParallaxMapping,
  "steep-parallax-mapping": SteepParallaxMapping,
  "parallax-occlusion-mapping": ParallaxOcclusionMapping,
  hdr: HDR,
  bloom: Bloom,
  "deferred-shading": DeferredShading,
  "deferred-shading-volumes": DeferredShadingVolumes,
  ssao: SSAO,
};

export const menuItems: MenuProps["items"] = [
  { key: "advanced-lighting", label: "1. Advanced Lighting" },
  {
    type: "group",
    label: "Gamma Correction",
    children: [
      { key: "gamma-correction", label: "2. Gamma Correction" },
      { key: "gamma-correction-integration", label: "2.1 Integration" },
    ],
  },
  {
    type: "group",
    label: "Shadow Mapping",
    children: [
      { key: "shadow-mapping-depth", label: "3.1.1 Depth" },
      { key: "shadow-mapping-base", label: "3.1.2 Base" },
      { key: "shadow-mapping", label: "3.1.3 Shadow Mapping" },
      { key: "point-shadows", label: "3.2.1 Point Shadows" },
      { key: "point-shadows-soft", label: "3.2.2 Point Shadows Soft" },
    ],
  },
  { key: "normal-mapping", label: "4. Normal Mapping" },
  {
    type: "group",
    label: "Parallax Mapping",
    children: [
      { key: "parallax-mapping", label: "5.1 Parallax Mapping" },
      { key: "steep-parallax-mapping", label: "5.2 Steep Parallax" },
      { key: "parallax-occlusion-mapping", label: "5.3 Parallax Occlusion" },
    ],
  },
  { key: "hdr", label: "6. HDR" },
  { key: "bloom", label: "7. Bloom" },
  {
    type: "group",
    label: "Deferred Shading",
    children: [
      { key: "deferred-shading", label: "8.1 Deferred Shading" },
      { key: "deferred-shading-volumes", label: "8.2 Volumes" },
    ],
  },
  { key: "ssao", label: "9. SSAO" },
];

export const allKeys = Object.keys(componentMap);
