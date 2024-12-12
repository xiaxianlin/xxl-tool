import{r as c,E as N,F as l,a as k,G as S,H as j,j as m,d as E,M as v,I as K,L as $}from"./index-CYeMvKJj.js";const w=(s,n)=>(s||[]).filter(e=>!e.hideInMenu&&(!e.access||(n==null?void 0:n.includes(e.access)))).map(e=>{const o={...l.pick(e,["type","key"]),path:e.fullPath||e.path,label:e==null?void 0:e.name};return l.isArray(e.children)&&e.children.length&&(o.children=w(e.children,n),o.children.length||delete o.children),o}),M=s=>l.flatMap(s,n=>n.children&&l.isArray(n.children)?[l.omit(n,["children"]),...M(n.children)]:n),I=(s,n)=>{const e=c.useRef(new Map),{pathname:o}=N(),[y,d]=c.useState([]),[b,f]=c.useState([]),u=c.useMemo(()=>w(s,n),[s,n]);c.useEffect(()=>{M(u).forEach(a=>{if(a.path){const t=e.current.get(a.path);t?t.add(a.key):e.current.set(a.path,new Set([a.key]))}})},[u]);function g(){const a=o.split("/");let t=[],i=[...b];for(;a.length;){const p=a.join("/"),r=e.current.get(p);if(r){const h=Array.from(r);t=l.union(t,h),i=l.union(i,h)}a.pop()}d(t),f(i)}return c.useEffect(()=>{g()},[o]),{menus:u,selectedKeys:y,setSelectedKeys:d,openKeys:b,setOpenKeys:f}},D=k(({css:s,token:n,prefixCls:e})=>({root:s`
      &.${e}-layout-sider {
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        z-index: ${n.zIndexPopupBase};
      }
    `,ghost:s`
      visibility: hidden;
    `,menu:s`
      &.${e}-menu-light.${e}-menu-root {
        &.${e}-menu-inline,&.${e}-menu-vertical {
          border-inline-end: 0;
          max-height: 100%;
          overflow: auto;
          padding: ${n.paddingXS}px 0;
          &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          &::-webkit-scrollbar-thumb {
            background: ${n.colorFill};
            border-radius: 4px;
          }
        }
      }

      // 推荐通过样式隐藏分组标题
      &.${e}-menu-inline-collapsed {
        .${e}-menu-item-group-title {
          display: none;
        }
      }
      .${e}-menu-submenu-arrow {
        &:before,
        &:after {
          height: 1px;
          border-radius: 0;
        }
      }
    `})),{Sider:x}=$,A=()=>{var a;const{themeMode:s}=S(),[n,e]=c.useState(!1),{styles:o}=D();function y(t){function i(p){return p.map(r=>{const h=l.pick(r,["path","key","type","label"]);return l.isArray(r.children)&&r.children.length&&(h.children=i(r.children)),h})}return i(t)}const{menus:d,selectedKeys:b,openKeys:f,setOpenKeys:u}=I((a=j.find(t=>t.path==="/"))==null?void 0:a.children),g=c.useMemo(()=>y(d),[d]);return m.jsxDEV(E,{theme:{components:{Menu:{iconSize:18,itemBorderRadius:0,itemMarginBlock:0,itemMarginInline:0,collapsedIconSize:18,itemHeight:46,iconMarginInlineEnd:12,groupTitleFontSize:12,padding:24}}},themeMode:s,children:[m.jsxDEV(x,{collapsed:n,className:o.ghost,breakpoint:"lg",width:240,collapsedWidth:64},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:65,columnNumber:7},void 0),m.jsxDEV(x,{collapsed:n,theme:"light",className:o.root,breakpoint:"lg",width:240,collapsedWidth:64,onCollapse:t=>e(t),children:m.jsxDEV(v,{className:o.menu,selectedKeys:b,openKeys:f,theme:"light",mode:"inline",inlineIndent:28,items:g,_internalRenderMenuItem:(t,i)=>{const{elementRef:p,...r}=t.props;return m.jsxDEV(K,{to:i.path,ref:p,...r},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:85,columnNumber:20},void 0)},onOpenChange:t=>u(t)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:75,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:47,columnNumber:5},void 0)};export{A as default};
