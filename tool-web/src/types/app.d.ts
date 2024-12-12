declare global {
  type GetSingle<T> = T extends (infer U)[] ? U : never;

  interface AppToken {
    headerHeight: number; // 导航栏高度
  }

  interface RouteRaw {
    key: string;
    name?: string;
    icon?: string;
    hideInMenu?: boolean;
    access?: string;
    component?: string;
    path?: string; // 支持相对定位，路由嵌套
    fullPath?: string; // 用于菜单导航
  }

  interface RouteWithChildren extends RouteRaw {
    index?: undefined;
    type?: 'group';
    children?: RouteObjectType[];
    redirect?: undefined;
  }

  interface RouteWithoutChildren extends RouteRaw {
    index?: boolean;
    children?: undefined;
    type?: undefined;
    redirect?: string; // 重定向
  }

  type RouteObjectType = RouteWithChildren | RouteWithoutChildren;

  interface AppConfigs {
    adminRoleKey: string;
  }
}

export {};
