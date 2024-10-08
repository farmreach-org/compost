import{u as k,B as b,c as s,a as n,b as o,e as a,w as u,j as w,h as d,F as _,U as y,o as t,Z as $,f,t as l,r as B,g as C,m as j}from"./app.17a8bbe4.js";import{_ as N}from"./PageHeader.cbe4fcaf.js";import{_ as V}from"./Panel.1e5e6be2.js";import{_ as q}from"./Checkbox.dc42ffe0.js";import{_ as A}from"./NoResult.a422d351.js";import"./Flex.4b1efe4e.js";const E={class:"w-full mx-auto row-py"},F={class:"mt-lg row-px"},I={class:"mb-sm last:mb-0"},O={class:"flex items-center cursor-pointer"},S={class:"flex items-center"},U=["src"],D={key:1,class:"rounded-full w-8 h-8 object-cover mr-xs border border-gray-200"},L={class:"font-semibold"},P={key:0},T={key:0,class:"block text-green-500 text-sm font-medium"},Z={key:0},R={__name:"AccountEntities",props:{provider:{required:!0,type:String},entities:{required:!0,type:Array}},setup(i){const p=i,{t:c}=k(),h=c("account.account_entities"),v=j("workspaceCtx"),r=b({selected:[]}),x=()=>{!r.value.selected.length||y.post(route("mixpost.accounts.entities.store",{workspace:v.id,provider:p.provider}),{items:r.value.selected})};return(z,m)=>(t(),s(_,null,[n(o($),{title:o(h)},null,8,["title"]),a("div",E,[n(N,{title:o(c)("account.choose_entity")},{description:u(()=>[f(l(o(c)("account.select_the_social_entities")),1)]),_:1},8,["title"]),a("div",F,[n(V,null,{default:u(()=>[(t(!0),s(_,null,B(i.entities,e=>(t(),s("div",I,[a("label",O,[n(q,{checked:r.value.selected,"onUpdate:checked":m[0]||(m[0]=g=>r.value.selected=g),value:e.id,class:"mr-md"},null,8,["checked","value"]),a("span",S,[e.image?(t(),s("img",{key:0,src:e.image,class:"rounded-full w-8 h-8 object-cover mr-xs border border-gray-200",alt:"Image"},null,8,U)):(t(),s("div",D)),a("span",null,[a("span",L,[a("span",null,l(e.name),1),e.data&&e.data.hasOwnProperty("suffix")&&e.data.suffix.value?(t(),s("span",P," ("+l(e.data.suffix.value)+") ",1)):d("",!0)]),e.connected?(t(),s("span",T,l(o(c)("account.connected")),1)):d("",!0)])])])]))),256)),i.entities.length?d("",!0):(t(),C(A,{key:0}))]),_:1}),i.entities.length?(t(),s("div",Z,[n(w,{onClick:x,class:"mt-lg",disabled:!r.value.selected.length},{default:u(()=>[f(l(o(c)("account.choose")),1)]),_:1},8,["disabled"])])):d("",!0)])])],64))}};export{R as default};
