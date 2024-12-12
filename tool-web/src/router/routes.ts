// +---------------------------------
// | 本地路由表
// +---------------------------------

export const DEFAULT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';

const routes: RouteObjectType[] = [
  {
    path: DEFAULT_ROUTE,
    key: 'root',
    name: 'Root',
    component: '/layouts/page',
    children: [
      {
        key: 'index',
        index: true,
        name: '主页',
        fullPath: '/',
        component: '/pages/dashboard',
      },
      {
        key: 'system',
        type: 'group',
        name: '系统管理',
        path: 'system',
        children: [
          {
            key: 'system.user',
            name: '用户管理',
            fullPath: '/system/user',
            path: 'user',
            component: '/pages/system/user',
          },
          {
            key: 'system.role',
            name: '角色管理',
            fullPath: '/system/role',
            path: 'role',
            component: '/pages/system/role',
          },
          {
            key: 'system.menu',
            name: '菜单管理',
            fullPath: '/system/menu',
            path: 'menu',
            component: '/pages/system/menu',
          },
        ],
      },
    ],
  },
  {
    key: 'auth',
    component: '/layouts/auth',
    hideInMenu: true,
    children: [
      {
        path: LOGIN_ROUTE,
        key: 'auth.login',
        component: '/pages/auth/login',
      },
    ],
  },
];

export default routes;
