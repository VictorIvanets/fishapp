import{q as c,b as o,u as r,r as l,n as x,o as h,j as s,L as j}from"./index-9plK4x-M.js";function d(){const{login:t}=c(),a=o(),{data:n}=r(e=>e.set),{alldata:i}=r(e=>e.allset);return l.useEffect(()=>{t&&(a(x(t)),a(h()))},[a,t]),s.jsxs("div",{className:"infopage",children:[s.jsxs("h3",{children:["Загальна кількисть ",s.jsx("br",{}),"рибалок в базі: ",s.jsx("br",{})," ",i==null?void 0:i.length," "]}),s.jsx("br",{}),s.jsxs("h2",{children:["Кількисть моїх рибалок: ",s.jsx("br",{}),n==null?void 0:n.length]}),s.jsx("br",{}),s.jsx("div",{className:"infopage__itembox",children:n.map(e=>s.jsx("div",{className:"infopage__itembox__item",children:s.jsx(j,{to:`/main/${t}/sets/${e.setID}`,children:s.jsx("h3",{children:e.title})})},e.setID))})]})}export{d as default};
