const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/comment-BeBJlO99.js","assets/index-A1IjLWm5.js","assets/index-DF3Ztpwk.css","assets/index-CZ-T-pGC.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,q as F,_ as S,f as b,h as E,P as I}from"./index-A1IjLWm5.js";import{l as y,S as $,a as x,g as P}from"./pagination-B0iQJ9og.js";import{a as f}from"./Preloader-Ceet5pkG.js";import{W as D}from"./weather-1COLA_OP.js";import"./index-CZ-T-pGC.js";function R({img:c,setId:s}){const[r,n]=i.useState();return i.useEffect(()=>{const t=y(`${s}`);t&&t.then(o=>setTimeout(()=>{Array.isArray(o)?n(o.reverse()):console.log(o)},1e3))},[c,n,s]),console.log(r),e.jsx("div",{className:"swiperpage",children:r?e.jsx($,{className:"swiperbox",spaceBetween:50,slidesPerView:1,children:r?r.map(t=>e.jsx(x,{className:"swiperpage__item",children:e.jsx("div",{className:"swiperpage__picbox",children:e.jsx("img",{className:"swiperpage__img",src:`${F}static/${s}/${t}`})})},t)):e.jsx(x,{className:"swiperpage__item",children:e.jsx("div",{className:"swiperpage__picbox",children:e.jsx("img",{className:"swiperpage__img",src:"./fonsecond.jpg"})})})}):e.jsx(f,{})})}const A=i.lazy(()=>S(()=>import("./comment-BeBJlO99.js"),__vite__mapDeps([0,1,2,3])));function q(){const{id:c}=b(),[s,r]=i.useState(),[n,t]=i.useState(!1),[o,m]=i.useState([]),[h,j]=i.useState(!1),[u,_]=i.useState("Вибрати фото"),{login:g}=JSON.parse(localStorage.getItem("userName")||"");i.useEffect(()=>{P(c).then(a=>{a&&typeof a=="object"&&r(a),a&&typeof a=="string"&&console.log(a)})},[c,h,o]);function N(d){m([...d.target.files]),[...d.target.files].forEach(p=>{const v=p.name.split(".");_(v[0])})}async function w(d){d.preventDefault();const a=new FormData;if(o){o.forEach(l=>{a.append("files",l,l.name)});const p={headers:{"content-type":"multipart/form-data"}};E.post(`${I}fotoset/upload/${s==null?void 0:s.setID}`,a,p).then(l=>{j(!h),console.log(l.data[0].name),t(!1)}).catch(l=>{console.error("Error uploading files: ",l)}),m([])}}return e.jsxs("div",{className:"setspagebox",children:[e.jsxs("div",{className:"setspage",children:[s?e.jsxs("div",{className:"setspage__nav",children:[e.jsxs("div",{className:"colorLight setspage__loadinfo",children:[e.jsxs("h2",{children:["Назва/Локація:",e.jsx("span",{children:e.jsx("h1",{children:s.title})})]}),e.jsxs("div",{children:[e.jsxs("h3",{children:["Оцінка: ",s.score]}),e.jsxs("h3",{children:["Дата рибалки: ",s.date]}),s.weather.length?e.jsx("div",{className:"setspage__weather",children:e.jsx(D,{weather:s.weather})}):"",e.jsx("br",{})]}),e.jsxs("a",{href:`https://www.google.com/maps?ll=${s.coords[0]},${s.coords[1]}&q=${s.coords[0]},${s.coords[1]}`,target:"_blank",children:[e.jsx("h2",{children:" Координати"}),e.jsxs("p",{children:["latitude: ",s.coords[0]]}),e.jsxs("p",{children:["longitude: ",s.coords[1]]})]})]}),e.jsxs("div",{className:"colorLight setspage__loadinfo__description",children:[e.jsxs("div",{className:"setspage__loadinfo__description__box",children:[e.jsx("div",{className:"setspage__loadinfo__description__head",children:e.jsx("h2",{children:"Опис:"})}),e.jsx("div",{className:"setspage__loadinfo__description__text",children:e.jsx("p",{children:s.description})})]}),g==s.login?e.jsxs("div",{className:"loadimg",children:[n?e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:w,className:"loadimg__form",children:[e.jsx("label",{htmlFor:"upload",className:"loadimg__label",children:e.jsx("p",{children:u})}),e.jsx("input",{className:"loadimg__input",name:"upload",id:"upload",type:"file",multiple:!0,onChange:N}),e.jsx("button",{className:"loadimg__btn",type:"submit",children:"завантажити"})]})}):"",e.jsx("h3",{className:"loadimg__head",onClick:()=>{t(!n),_("Вибрати фото"),m([])},children:n?"ВІДМІНИТИ":"ДОДАТИ ФОТО"})]}):""]})]}):e.jsx("h1",{children:"ERORR. NO DATA"}),e.jsx("div",{className:"setspage__moreinfo colorLight",children:s!=null&&s.img?e.jsx(R,{img:s==null?void 0:s.img,setId:s==null?void 0:s.setID}):e.jsx(f,{})})]}),e.jsx("div",{className:"comentbox",children:e.jsx(A,{login:g,setId:c})})]})}export{q as default};
