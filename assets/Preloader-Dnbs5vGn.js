import{j as e,r as a}from"./index-CnefwrEu.js";function i(){return e.jsx("div",{className:"preloaderbox",children:e.jsx("div",{className:"preloader"})})}function t(){const[r,s]=a.useState(!1);return setTimeout(()=>{s(!0)},2e3),e.jsx("div",{className:"preloaderbox_api",children:e.jsx("div",{className:"preloader_api",children:r?e.jsxs("h3",{className:"white",children:["Зачекайте ",e.jsx("br",{})," можливо сервер ще не активний"]}):""})})}export{t as P,i as a};