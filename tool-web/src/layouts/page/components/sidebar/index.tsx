import useMenu, { type MenuObject } from '@/hooks/menu';
import { useAppModel } from '@/models/app';
import asyncRoutes from '@/router/routes';
import { Layout, Menu } from 'antd';
import { ThemeProvider } from 'antd-style';
import type { ItemType } from 'antd/es/menu/interface';
import { isArray, pick } from 'lodash';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
const { Sider } = Layout;

type MenuItemType = ItemType<{
  key: React.Key;
  path?: string;
  icon?: React.ReactNode;
  label?: string;
  children?: MenuItemType[];
}>;

const Sidebar: React.FC = () => {
  const { themeMode } = useAppModel();
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  // 构造菜单
  function generateMenus(menus: MenuObject[]): MenuItemType[] {
    function travel(menus: MenuObject[]) {
      return menus.map((menu) => {
        const row: MenuItemType = pick(menu, ['path', 'key', 'type', 'label']);
        if (isArray(menu.children) && menu.children.length) {
          row.children = travel(menu.children);
        }
        return row;
      });
    }
    return travel(menus);
  }

  // 菜单
  const { menus, selectedKeys, openKeys, setOpenKeys } = useMenu(asyncRoutes.find((row) => row.path === '/')?.children);

  // 菜单项
  const menuItems = useMemo(() => generateMenus(menus), [menus]);

  return (
    <ThemeProvider
      theme={{
        components: {
          Menu: {
            iconSize: 18,
            itemBorderRadius: 0,
            itemMarginBlock: 0,
            itemMarginInline: 0,
            collapsedIconSize: 18,
            itemHeight: 46,
            iconMarginInlineEnd: 12,
            groupTitleFontSize: 12,
            padding: 24,
          },
        },
      }}
      themeMode={themeMode}
    >
      <Sider collapsed={collapsed} className={styles.ghost} breakpoint="lg" width={240} collapsedWidth={64} />
      <Sider
        collapsed={collapsed}
        theme="light"
        className={styles.root}
        breakpoint="lg"
        width={240}
        collapsedWidth={64}
        onCollapse={(state) => setCollapsed(state)}
      >
        <Menu
          className={styles.menu}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          theme="light"
          mode="inline"
          inlineIndent={28}
          items={menuItems}
          _internalRenderMenuItem={(dom, props) => {
            const { elementRef, ...reset } = dom.props;
            return <Link to={props.path} ref={elementRef} {...reset} />;
          }}
          onOpenChange={(keys) => setOpenKeys(keys)}
        />
      </Sider>
    </ThemeProvider>
  );
};

export default Sidebar;
