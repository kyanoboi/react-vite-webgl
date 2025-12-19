import { ComponentType, lazy, createElement } from "react";
import { RouteObject, Navigate } from "react-router-dom";

// 使用交叉类型扩展 RouteObject
export type IRoute = RouteObject & {
  /**
   * 是否是菜单项
   * @default true
   */
  isMenu?: boolean;
  /**
   * 生成菜单的姓名
   */
  name: string;
  component: ComponentType;
  /**
   * 是否触发守卫逻辑
   * @default true
   */
  needGuard?: boolean;
  children?: IRoute[];
};

interface IRouteConfig {
  routes: IRoute[];
}

const routeConfig: IRouteConfig = {
  routes: [
    {
      name: "root",
      path: "/",
      component: () =>
        createElement(Navigate, { to: "/opengl", replace: true }),
      isMenu: false,
    },
    {
      name: "arcgis",
      path: "/arcgis",
      component: lazy(() => import("@/pages/ArcGIS")),
    },
    {
      name: "opengl",
      path: "/opengl",
      component: lazy(() => import("@/pages/OpenGL")),
    },
  ],
};

export default routeConfig;
