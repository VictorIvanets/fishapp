import{h as d,P as l,j as e,v as h,r as i}from"./index-A1IjLWm5.js";import{A as u}from"./index-CZ-T-pGC.js";async function f(n){const{login:t,setId:o,comment:m,commId:r}=n;try{const{data:s}=await d.post(`${l}comment/add`,{login:t,setId:o,comment:m,commId:r});return s}catch(s){return s instanceof u?s.message:"error"}}async function j(n){try{const{data:t}=await d.get(`${l}comment/${n}`);return t}catch(t){return t instanceof u?t.message:"error"}}async function g(n){try{const{data:t}=await d.delete(`${l}comment/${n}`);return t}catch(t){return t instanceof u?t.message:"error"}}function p({login:n,comment:t,commId:o,setIsLoading:m}){const r=JSON.parse(localStorage.getItem("userName")||"");async function s(a){m(!1),await g(a),m(!0)}return e.jsxs("div",{className:"getcomments",children:[e.jsxs("div",{className:"getcomments__head",children:[r.login===n?e.jsx("button",{onClick:()=>s(o),children:" Видалити "}):"",e.jsxs("h3",{children:[n,":"]})]}),e.jsx("p",{children:t})]})}function v({login:n,setId:t,isLoading:o,setIsLoading:m}){async function r(s){m(!1),s.preventDefault();const a=s.target,{comment:c}=a;if(c.value.length){const x={login:n,setId:t,comment:c.value,commId:+(Math.random()*1e5).toFixed()*2};await f(x),c.value=""}m(!0)}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"setcomments",children:o?e.jsxs("form",{className:"setcomments__form",onSubmit:r,children:[e.jsx("label",{htmlFor:"comment",children:e.jsx("p",{className:"roboto-medium",children:"Ваш коментар:"})}),e.jsx("textarea",{id:"comment",name:"comment",rows:5,cols:33}),e.jsx("button",{children:"Відправити"})]}):e.jsx(h,{})})})}function _({login:n,setId:t}){const[o,m]=i.useState(!0),[r,s]=i.useState();return i.useEffect(()=>{t&&j(t).then(c=>s(c))},[o,t]),e.jsxs("div",{className:"comments",children:[e.jsx("div",{className:"comments__head",children:e.jsx("h2",{children:"КОМЕНТАРІ"})}),e.jsx("div",{className:"comments__itembox",children:Array.isArray(r)?r.map(a=>e.jsx(p,{login:a.login,setId:a.setId,comment:a.comment,commId:a.commId,setIsLoading:m,isLoading:o},a.commId)):"ERROR LOADING"}),e.jsx("div",{className:"comments__setitem",children:e.jsx(v,{login:n,setId:t,setIsLoading:m,isLoading:o})})]})}export{_ as default};
