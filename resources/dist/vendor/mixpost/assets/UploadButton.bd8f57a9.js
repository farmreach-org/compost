import{m as h,B as l,o as r,c as v,e as i,y as B,g as k,a3 as w,h as x,a4 as c,n as P}from"./app.17a8bbe4.js";const j=["accept"],C={__name:"UploadButton",props:{withPreloader:{type:Boolean,default:!0}},emits:["upload"],setup(u,{emit:f}){const p=h("routePrefix"),{notify:d}=P(),a=l(null),o=l(!1),s=["image/jpg","image/jpeg","image/gif","image/png"],m=t=>Array.from(t).filter(e=>s.includes(e.type)),g=()=>{a.value.click()},y=t=>{const e=new FormData;e.append("file",t),c.start(),o.value=!0,axios.post(route(`${p}.files.upload`),e).then(function(n){f("upload",n.data)}).catch(function(n){d("error",n.response.data.message)}).finally(()=>{c.done(),o.value=!1})},_=t=>{const e=m(t.target.files);e.length&&(a.value.value=null,y(e[0]))};return(t,e)=>(r(),v("div",null,[i("div",{onClick:g,role:"button",class:"inline-flex relative"},[B(t.$slots,"default"),u.withPreloader&&o.value?(r(),k(w,{key:0,opacity:75})):x("",!0)]),i("input",{ref_key:"input",ref:a,type:"file",accept:s.join(","),class:"hidden",onChange:_},null,40,j)]))}};export{C as _};
