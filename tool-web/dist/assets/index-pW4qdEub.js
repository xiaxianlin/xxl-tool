import{r,g as q,m as U,f as Y,u as de,h as pe,i as G,k as ge,l as ue,n as Z,o as J,p as T,q as me,s as ve,t as fe,P as he,v as ye,w as xe,x as Ce,y as Se,z as be,A as Oe,B as Q,K as Pe,D as $e}from"./index-CYeMvKJj.js";import{u as we}from"./useBreakpoint-D7duzmMZ.js";const V=r.createContext({}),ze=e=>{const{antCls:o,componentCls:n,iconCls:t,avatarBg:a,avatarColor:i,containerSize:g,containerSizeLG:u,containerSizeSM:c,textFontSize:d,textFontSizeLG:l,textFontSizeSM:x,borderRadius:m,borderRadiusLG:p,borderRadiusSM:b,lineWidth:C,lineType:k}=e,s=($,O,B)=>({width:$,height:$,borderRadius:"50%",[`&${n}-square`]:{borderRadius:B},[`&${n}-icon`]:{fontSize:O,[`> ${t}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},Y(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${de(C)} ${k} transparent`,"&-image":{background:"transparent"},[`${o}-image-img`]:{display:"block"}}),s(g,d,m)),{"&-lg":Object.assign({},s(u,l,p)),"&-sm":Object.assign({},s(c,x,b)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Ee=e=>{const{componentCls:o,groupBorderColor:n,groupOverlapping:t,groupSpace:a}=e;return{[`${o}-group`]:{display:"inline-flex",[o]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:t}},[`${o}-group-popover`]:{[`${o} + ${o}`]:{marginInlineStart:a}}}},je=e=>{const{controlHeight:o,controlHeightLG:n,controlHeightSM:t,fontSize:a,fontSizeLG:i,fontSizeXL:g,fontSizeHeading3:u,marginXS:c,marginXXS:d,colorBorderBg:l}=e;return{containerSize:o,containerSizeLG:n,containerSizeSM:t,textFontSize:Math.round((i+g)/2),textFontSizeLG:u,textFontSizeSM:a,groupSpace:d,groupOverlapping:-c,groupBorderColor:l}},ee=q("Avatar",e=>{const{colorTextLightSolid:o,colorTextPlaceholder:n}=e,t=U(e,{avatarBg:n,avatarColor:o});return[ze(t),Ee(t)]},je);var Ne=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ke=(e,o)=>{const[n,t]=r.useState(1),[a,i]=r.useState(!1),[g,u]=r.useState(!0),c=r.useRef(null),d=r.useRef(null),l=pe(o,c),{getPrefixCls:x,avatar:m}=r.useContext(G),p=r.useContext(V),b=()=>{if(!d.current||!c.current)return;const f=d.current.offsetWidth,y=c.current.offsetWidth;if(f!==0&&y!==0){const{gap:N=4}=e;N*2<y&&t(y-N*2<f?(y-N*2)/f:1)}};r.useEffect(()=>{i(!0)},[]),r.useEffect(()=>{u(!0),t(1)},[e.src]),r.useEffect(b,[e.gap]);const C=()=>{const{onError:f}=e;(f==null?void 0:f())!==!1&&u(!1)},{prefixCls:k,shape:s,size:$,src:O,srcSet:B,icon:P,className:A,rootClassName:M,alt:W,draggable:E,children:z,crossOrigin:R}=e,h=Ne(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),v=ge(f=>{var y,N;return(N=(y=$??(p==null?void 0:p.size))!==null&&y!==void 0?y:f)!==null&&N!==void 0?N:"default"}),S=Object.keys(typeof v=="object"?v||{}:{}).some(f=>["xs","sm","md","lg","xl","xxl"].includes(f)),j=we(S),I=r.useMemo(()=>{if(typeof v!="object")return{};const f=ue.find(N=>j[N]),y=v[f];return y?{width:y,height:y,fontSize:y&&(P||z)?y/2:18}:{}},[j,v]);Z("Avatar")(!(typeof P=="string"&&P.length>2),"breaking",`\`icon\` is using ReactNode instead of string naming in v4. Please check \`${P}\` at https://ant.design/components/icon`);const w=x("avatar",k),D=J(w),[ne,re,ae]=ee(w,D),se=T({[`${w}-lg`]:v==="large",[`${w}-sm`]:v==="small"}),X=r.isValidElement(O),ie=s||(p==null?void 0:p.shape)||"circle",le=T(w,se,m==null?void 0:m.className,`${w}-${ie}`,{[`${w}-image`]:X||O&&g,[`${w}-icon`]:!!P},ae,D,A,M,re),ce=typeof v=="number"?{width:v,height:v,fontSize:P?v/2:18}:{};let _;if(typeof O=="string"&&g)_=r.createElement("img",{src:O,draggable:E,srcSet:B,onError:C,alt:W,crossOrigin:R});else if(X)_=O;else if(P)_=P;else if(a||n!==1){const f=`scale(${n})`,y={msTransform:f,WebkitTransform:f,transform:f};_=r.createElement(me,{onResize:b},r.createElement("span",{className:`${w}-string`,ref:d,style:Object.assign({},y)},z))}else _=r.createElement("span",{className:`${w}-string`,style:{opacity:0},ref:d},z);return delete h.onError,delete h.gap,ne(r.createElement("span",Object.assign({},h,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ce),I),m==null?void 0:m.style),h.style),className:le,ref:l}),_))},F=r.forwardRef(ke);F.displayName="Avatar";const L=e=>e?typeof e=="function"?e():e:null,Be=e=>{const{componentCls:o,popoverColor:n,titleMinWidth:t,fontWeightStrong:a,innerPadding:i,boxShadowSecondary:g,colorTextHeading:u,borderRadiusLG:c,zIndexPopup:d,titleMarginBottom:l,colorBgElevated:x,popoverBg:m,titleBorderBottom:p,innerContentPadding:b,titlePadding:C}=e;return[{[o]:Object.assign(Object.assign({},Y(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":x,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:c,boxShadow:g,padding:i},[`${o}-title`]:{minWidth:t,marginBottom:l,color:u,fontWeight:a,borderBottom:p,padding:C},[`${o}-inner-content`]:{color:n,padding:b}})},fe(e,"var(--antd-arrow-background-color)"),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},Re=e=>{const{componentCls:o}=e;return{[o]:he.map(n=>{const t=e[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},Ie=e=>{const{lineWidth:o,controlHeight:n,fontHeight:t,padding:a,wireframe:i,zIndexPopupBase:g,borderRadiusLG:u,marginXS:c,lineType:d,colorSplit:l,paddingSM:x}=e,m=n-t,p=m/2,b=m/2-o,C=a;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:g+30},ye(e)),xe({contentRadius:u,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:c,titlePadding:i?`${p}px ${C}px ${b}px`:0,titleBorderBottom:i?`${o}px ${d} ${l}`:"none",innerContentPadding:i?`${x}px ${C}px`:0})},te=q("Popover",e=>{const{colorBgElevated:o,colorText:n}=e,t=U(e,{popoverBg:o,popoverColor:n});return[Be(t),Re(t),ve(t,"zoom-big")]},Ie,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var Te=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const oe=e=>{let{title:o,content:n,prefixCls:t}=e;return!o&&!n?null:r.createElement(r.Fragment,null,o&&r.createElement("div",{className:`${t}-title`},o),n&&r.createElement("div",{className:`${t}-inner-content`},n))},We=e=>{const{hashId:o,prefixCls:n,className:t,style:a,placement:i="top",title:g,content:u,children:c}=e,d=L(g),l=L(u),x=T(o,n,`${n}-pure`,`${n}-placement-${i}`,t);return r.createElement("div",{className:x,style:a},r.createElement("div",{className:`${n}-arrow`}),r.createElement(Ce,Object.assign({},e,{className:o,prefixCls:n}),c||r.createElement(oe,{prefixCls:n,title:d,content:l})))},_e=e=>{const{prefixCls:o,className:n}=e,t=Te(e,["prefixCls","className"]),{getPrefixCls:a}=r.useContext(G),i=a("popover",o),[g,u,c]=te(i);return g(r.createElement(We,Object.assign({},t,{prefixCls:i,hashId:u,className:T(n,c)})))};var Ae=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Me=r.forwardRef((e,o)=>{var n,t;const{prefixCls:a,title:i,content:g,overlayClassName:u,placement:c="top",trigger:d="hover",children:l,mouseEnterDelay:x=.1,mouseLeaveDelay:m=.1,onOpenChange:p,overlayStyle:b={}}=e,C=Ae(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:k}=r.useContext(G),s=k("popover",a),[$,O,B]=te(s),P=k(),A=T(u,O,B),[M,W]=Se(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),E=(S,j)=>{W(S,!0),p==null||p(S,j)},z=S=>{S.keyCode===Pe.ESC&&E(!1,S)},R=S=>{E(S)},h=L(i),v=L(g);return $(r.createElement(be,Object.assign({placement:c,trigger:d,mouseEnterDelay:x,mouseLeaveDelay:m,overlayStyle:b},C,{prefixCls:s,overlayClassName:A,ref:o,open:M,onOpenChange:R,overlay:h||v?r.createElement(oe,{prefixCls:s,title:h,content:v}):null,transitionName:Oe(P,"zoom-big",C.transitionName),"data-popover-inject":!0}),Q(l,{onKeyDown:S=>{var j,I;r.isValidElement(l)&&((I=l==null?void 0:(j=l.props).onKeyDown)===null||I===void 0||I.call(j,S)),z(S)}})))}),H=Me;H._InternalPanelDoNotUseOrYouWillBeFired=_e;H.displayName="Popover";const K=e=>{const{size:o,shape:n}=r.useContext(V),t=r.useMemo(()=>({size:e.size||o,shape:e.shape||n}),[e.size,e.shape,o,n]);return r.createElement(V.Provider,{value:t},e.children)},Le=e=>{var o,n,t;const{getPrefixCls:a,direction:i}=r.useContext(G),{prefixCls:g,className:u,rootClassName:c,style:d,maxCount:l,maxStyle:x,size:m,shape:p,maxPopoverPlacement:b,maxPopoverTrigger:C,children:k,max:s}=e;{const h=Z("Avatar.Group");h.deprecated(!l,"maxCount","max={{ count: number }}"),h.deprecated(!x,"maxStyle","max={{ style: CSSProperties }}"),h.deprecated(!b,"maxPopoverPlacement","max={{ popover: PopoverProps }}"),h.deprecated(!C,"maxPopoverTrigger","max={{ popover: PopoverProps }}")}const $=a("avatar",g),O=`${$}-group`,B=J($),[P,A,M]=ee($,B),W=T(O,{[`${O}-rtl`]:i==="rtl"},M,B,u,c,A),E=$e(k).map((h,v)=>Q(h,{key:`avatar-key-${v}`})),z=(s==null?void 0:s.count)||l,R=E.length;if(z&&z<R){const h=E.slice(0,z),v=E.slice(z,R),S=(s==null?void 0:s.style)||x,j=((o=s==null?void 0:s.popover)===null||o===void 0?void 0:o.trigger)||C||"hover",I=((n=s==null?void 0:s.popover)===null||n===void 0?void 0:n.placement)||b||"top",w=Object.assign(Object.assign({content:v},s==null?void 0:s.popover),{overlayClassName:T(`${O}-popover`,(t=s==null?void 0:s.popover)===null||t===void 0?void 0:t.overlayClassName),placement:I,trigger:j});return h.push(r.createElement(H,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},w),r.createElement(F,{style:S},`+${R-z}`))),P(r.createElement(K,{shape:p,size:m},r.createElement("div",{className:W,style:d},h)))}return P(r.createElement(K,{shape:p,size:m},r.createElement("div",{className:W,style:d},E)))},Ge=F;Ge.Group=Le;export{Ge as A};
