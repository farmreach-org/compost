import{u as g,I as b,c as s,a as n,b as o,e as a,w as u,j as w,h as d,F as _,ak as y,o as t,Z as $,f,t as l,r as C,g as j,m as B}from"./app.af17fce1.js";import{_ as N}from"./PageHeader.fa50e47e.js";import{_ as V}from"./Panel.46137120.js";import{_ as I}from"./Checkbox.6f71d79b.js";import{_ as q}from"./NoResult.ab0b21a6.js";import"./Flex.16a0de6f.js";const A={class:"w-full mx-auto row-py"},E={class:"mt-lg row-px"},F={class:"mb-sm last:mb-0"},O={class:"flex items-center cursor-pointer"},S={class:"flex items-center"},D=["src"],L={key:1,class:"rounded-full w-8 h-8 object-cover mr-xs border border-gray-200"},P={class:"font-semibold"},T={key:0},U={key:0,class:"block text-green-500 text-sm font-medium"},Z={key:0},R={__name:"AccountEntities",props:{provider:{required:!0,type:String},entities:{required:!0,type:Array}},setup(i){const p=i,{t:c}=g(),h=c("account.account_entities"),v=B("workspaceCtx"),r=b({selected:[]}),k=()=>{!r.value.selected.length||y.post(route("mixpost.accounts.entities.store",{workspace:v.id,provider:p.provider}),{items:r.value.selected})};return(z,m)=>(t(),s(_,null,[n(o($),{title:o(h)},null,8,["title"]),a("div",A,[n(N,{title:o(c)("account.choose_entity")},{description:u(()=>[f(l(o(c)("account.select_the_social_entities")),1)]),_:1},8,["title"]),a("div",E,[n(V,null,{default:u(()=>[(t(!0),s(_,null,C(i.entities,e=>(t(),s("div",F,[a("label",O,[n(I,{checked:r.value.selected,"onUpdate:checked":m[0]||(m[0]=x=>r.value.selected=x),value:e.id,class:"mr-md"},null,8,["checked","value"]),a("span",S,[e.image?(t(),s("img",{key:0,src:e.image,class:"rounded-full w-8 h-8 object-cover mr-xs border border-gray-200",alt:"Image"},null,8,D)):(t(),s("div",L)),a("span",null,[a("span",P,[a("span",null,l(e.name),1),e.data&&e.data.hasOwnProperty("suffix")&&e.data.suffix.value?(t(),s("span",T," ("+l(e.data.suffix.value)+") ",1)):d("",!0)]),e.connected?(t(),s("span",U,l(o(c)("account.connected")),1)):d("",!0)])])])]))),256)),i.entities.length?d("",!0):(t(),j(q,{key:0}))]),_:1}),i.entities.length?(t(),s("div",Z,[n(w,{onClick:k,class:"mt-lg",disabled:!r.value.selected.length},{default:u(()=>[f(l(o(c)("account.choose")),1)]),_:1},8,["disabled"])])):d("",!0)])])],64))}};export{R as default};
