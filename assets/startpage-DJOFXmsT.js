import{r as l,u as n,j as s,L as a,O as c}from"./index-D-HU46dd.js";function j(){const[e,t]=l.useState(!1),{login:r,jwt:o}=n(i=>i.user);return s.jsxs("div",{className:"startpage",children:[s.jsx("div",{className:"startpage__fon",children:s.jsx("img",{className:"startpage__fon__img",src:"./fon.jpg",alt:""})}),s.jsxs("div",{className:"startpage__info",children:[s.jsx("div",{className:"startpage__info__logo",children:s.jsx("img",{src:"./logo.png",alt:""})}),s.jsx("h1",{className:"roboto-thin colorLight",children:"MY FISHING"})]}),s.jsx("div",{className:"startpage__auth",children:e?s.jsx(c,{}):o?s.jsx(a,{onClick:()=>t(!0),className:"light tacenter roboto-bold",to:`/main/${r}`,children:"мій кабінет"}):s.jsxs(a,{onClick:()=>t(!0),className:"light tacenter roboto-regular",to:"/login",children:["Щоб продовжити, ",s.jsx("br",{})," увійдіть у свій кабінет ",s.jsx("br",{})," ",s.jsx("br",{})," Вхід"]})})]})}export{j as default};
