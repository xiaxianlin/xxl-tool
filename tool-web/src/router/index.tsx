// +---------------------------------
// | 路由器，支持本地和远程路由，支持组件或对象渲染
// | 约定：所有布局组件放置layouts目录，所有页面组件放置pages目录，加载组件放置同目录底下
// +---------------------------------

import { isArray, pick, trim } from 'lodash';
import React, { ComponentType, Suspense, lazy } from 'react';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const lazyPages = import.meta.glob(['../pages/**/index.tsx', '../layouts/**/index.tsx']) as Record<
  string,
  () => Promise<{ default: ComponentType }>
>;

const loadingPages = import.meta.glob(['../pages/**/loading.tsx', '../layouts/**/loading.tsx'], {
  eager: true,
  import: 'default',
}) as Record<string, React.FunctionComponent>;

function parserRoute(route: RouteObjectType): RouteObject {
  const component: RouteObject = pick(route, ['path', 'index', 'key']);
  if (route?.redirect) {
    component.element = React.createElement(Navigate, { to: route.redirect });
  }

  if (route.component) {
    try {
      const filename = trim(route.component.replace(new RegExp('(index\\.tsx|\\.tsx)$'), ''), '/');
      const indexKey = `../${[filename, 'index.tsx'].filter(Boolean).join('/')}`;
      const loadingKey = `../${[filename, 'loading.tsx'].filter(Boolean).join('/')}`;
      if (lazyPages[indexKey]) {
        const LazyComponent = lazy(lazyPages[indexKey]);
        const FallbackComponent = loadingPages[loadingKey];
        component.element = React.createElement(
          Suspense,
          { fallback: FallbackComponent && React.createElement(FallbackComponent) },
          React.createElement(LazyComponent),
        );
      }
    } catch (e) {}
  }
  return component;
}

export function generateRoutes(routes: RouteObjectType[]): RouteObject[] {
  return routes.map((route) => {
    const component: RouteObject = parserRoute(route);
    if (isArray(route.children) && route.children.length) {
      component.children = generateRoutes(route.children);
    }
    return component;
  });
}

export const router = createBrowserRouter(generateRoutes(routes));
