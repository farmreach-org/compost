import{M as n,m as o,v as i,x as u}from"./index.1e577897.js";import{u as m,H as c,a as d,V as l}from"./Variable.14bfdb1f.js";import{ae as p,o as _,g,b as s}from"./app.af17fce1.js";const f=n.create({name:"instagram_name",addOptions(){return{HTMLAttributes:{class:"font-medium"}}},parseHTML(){return[{tag:"instagram_username"}]},renderHTML({HTMLAttributes:e}){return["instagram_username",o(this.options.HTMLAttributes,e),0]}}),x={__name:"EditorReadOnly",props:{value:{required:!0}},setup(e){const t=e,{defaultExtensions:r}=m(),a=i({editable:!1,content:t.value,extensions:[...r,f,c,d,l]});return p(()=>t.value,()=>{a.value.commands.setContent(t.value)}),(H,b)=>(_(),g(s(u),{editor:s(a)},null,8,["editor"]))}};export{x as _};
