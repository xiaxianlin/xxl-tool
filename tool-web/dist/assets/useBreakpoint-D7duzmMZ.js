import{r as t,bQ as c,aD as a}from"./index-CYeMvKJj.js";function f(){const[,r]=t.useReducer(e=>e+1,0);return r}function p(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=t.useRef({}),n=f(),s=c();return a(()=>{const u=s.subscribe(o=>{e.current=o,r&&n()});return()=>s.unsubscribe(u)},[]),e.current}export{f as a,p as u};
