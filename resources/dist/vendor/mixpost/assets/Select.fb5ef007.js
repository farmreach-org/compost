import{I as s,J as l,K as u,o as n,c as i,A as c,H as d}from"./app.af17fce1.js";const m=["value"],p={__name:"Select",props:["modelValue","error"],emits:["update:modelValue"],setup(e){const o=s(null);return l(()=>{o.value.hasAttribute("autofocus")&&u(()=>{o.value.focus()})}),(r,t)=>(n(),i("select",{value:e.modelValue,onChange:t[0]||(t[0]=a=>r.$emit("update:modelValue",a.target.value)),ref_key:"select",ref:o,class:d([{"border-stone-600":!e.error,"border-red-600":e.error},"w-full rounded-md focus:border-primary-200 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition-colors ease-in-out duration-200"])},[c(r.$slots,"default")],42,m))}};export{p as _};
