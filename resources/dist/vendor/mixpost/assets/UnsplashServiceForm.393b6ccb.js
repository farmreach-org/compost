import{u as g,B as h,o as x,g as $,w as e,e as t,a as s,t as n,b as l,f as o,_ as f,a2 as _,ab as k,j as U,U as b,n as V}from"./app.17a8bbe4.js";import{_ as y}from"./Panel.1e5e6be2.js";import{U as B}from"./Services.419036cd.js";import{_ as N}from"./Checkbox.dc42ffe0.js";import{_ as S}from"./Flex.4b1efe4e.js";import{_ as I}from"./Label.f494bf4d.js";import{_ as j}from"./LabelSuffix.fd9b98d2.js";import"./Admin.fc0f4e28.js";import"./UserMenu.1170533d.js";import"./DropdownItem.409573e1.js";import"./Avatar.0b768219.js";import"./PencilSquare.b8b4716b.js";import"./Badge.82f1358a.js";import"./QueueList.1a33fea2.js";import"./PageHeader.cbe4fcaf.js";import"./Tab.46ca3863.js";import"./ProviderIcon.950fa870.js";const w={class:"flex items-center"},C={class:"mr-xs"},O=t("span",null,"Unsplash",-1),q={href:"https://unsplash.com/oauth/applications",class:"link",target:"_blank"},A={for:"client_id"},Z={__name:"UnsplashServiceForm",props:{form:{required:!0,type:Object}},setup(i){const p=i,{t:a}=g(),{notify:d}=V(),r=h({}),v=()=>{r.value={},b.put(route("mixpost.services.update",{service:"unsplash"}),p.form,{preserveScroll:!0,onSuccess(){d("success",a("service.service_saved",{service:"Unsplash"}))},onError:u=>{r.value=u}})};return(u,c)=>(x(),$(y,null,{title:e(()=>[t("div",w,[t("span",C,[s(B,{class:"text-black"})]),O])]),description:e(()=>[t("p",null,n(l(a)("service.unsplash.can_use_external_photos")),1),t("p",null,[t("a",q,n(l(a)("service.create_app",{name:"Unsplash"})),1),o(". ")])]),default:e(()=>[s(f,{class:"mt-lg"},{title:e(()=>[t("label",A,[o("API Key "),s(j,{danger:""},{default:e(()=>[o("*")]),_:1})])]),footer:e(()=>[s(_,{message:r.value["configuration.client_id"]},null,8,["message"])]),default:e(()=>[s(k,{modelValue:i.form.configuration.client_id,"onUpdate:modelValue":c[0]||(c[0]=m=>i.form.configuration.client_id=m),error:r.value["configuration.client_id"]!==void 0,type:"text",id:"client_id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),s(f,{class:"mt-lg"},{title:e(()=>[o(n(l(a)("general.status")),1)]),footer:e(()=>[s(_,{message:r.value.active},null,8,["message"])]),default:e(()=>[s(S,{responsive:!1,class:"items-center"},{default:e(()=>[s(N,{checked:i.form.active,"onUpdate:checked":c[1]||(c[1]=m=>i.form.active=m),id:"active"},null,8,["checked"]),s(I,{for:"active",class:"!mb-0"},{default:e(()=>[o(n(l(a)("general.active")),1)]),_:1})]),_:1})]),_:1}),s(U,{onClick:v,class:"mt-lg"},{default:e(()=>[o(n(l(a)("general.save")),1)]),_:1})]),_:1}))}};export{Z as default};