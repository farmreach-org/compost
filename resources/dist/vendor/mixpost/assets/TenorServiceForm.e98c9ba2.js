import{u as g,B as $,o as h,g as k,w as e,e as a,a as s,f as t,t as n,b as c,_ as u,a2 as _,ab as x,j as b,U as T,n as V}from"./app.17a8bbe4.js";import{_ as y}from"./Panel.1e5e6be2.js";import{_ as B}from"./ReadDocHelp.b8d034e7.js";import{_ as N}from"./Checkbox.dc42ffe0.js";import{_ as S}from"./Flex.4b1efe4e.js";import{_ as C}from"./Label.f494bf4d.js";import{T as U}from"./Services.419036cd.js";import{_ as j}from"./LabelSuffix.fd9b98d2.js";import"./Admin.fc0f4e28.js";import"./UserMenu.1170533d.js";import"./DropdownItem.409573e1.js";import"./Avatar.0b768219.js";import"./PencilSquare.b8b4716b.js";import"./Badge.82f1358a.js";import"./QueueList.1a33fea2.js";import"./PageHeader.cbe4fcaf.js";import"./Tab.46ca3863.js";import"./ProviderIcon.950fa870.js";const w={class:"flex items-center"},I={class:"mr-xs"},O={href:"https://console.cloud.google.com/",class:"link",target:"_blank"},q={for:"client_id"},ee={__name:"TenorServiceForm",props:{form:{required:!0,type:Object}},setup(r){const d=r,{t:o}=g(),{notify:p}=V(),i=$({}),v=()=>{i.value={},T.put(route("mixpost.services.update",{service:"tenor"}),d.form,{preserveScroll:!0,onSuccess(){p("success",o("service.service_saved",{service:"Tenor"}))},onError:m=>{i.value=m}})};return(m,l)=>(h(),k(y,null,{title:e(()=>[a("div",w,[a("span",I,[s(U)]),t(" Tenor ")])]),description:e(()=>[a("p",null,n(c(o)("service.tenor.use_gif")),1),a("p",null,[a("a",O,n(c(o)("service.create_app",{name:"Google Console"})),1),t(". ")]),s(B,{href:`${m.$page.props.mixpost.docs_link}/services/media/tenor`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[s(u,{class:"mt-lg"},{title:e(()=>[a("label",q,[t("API Key "),s(j,{danger:""},{default:e(()=>[t("*")]),_:1})])]),footer:e(()=>[s(_,{message:i.value["configuration.client_id"]},null,8,["message"])]),default:e(()=>[s(x,{modelValue:r.form.configuration.client_id,"onUpdate:modelValue":l[0]||(l[0]=f=>r.form.configuration.client_id=f),error:i.value["configuration.client_id"]!==void 0,type:"text",id:"client_id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),s(u,{class:"mt-lg"},{title:e(()=>[t(n(c(o)("general.status")),1)]),footer:e(()=>[s(_,{message:i.value.active},null,8,["message"])]),default:e(()=>[s(S,{responsive:!1,class:"items-center"},{default:e(()=>[s(N,{checked:r.form.active,"onUpdate:checked":l[1]||(l[1]=f=>r.form.active=f),id:"active"},null,8,["checked"]),s(C,{for:"active",class:"!mb-0"},{default:e(()=>[t(n(c(o)("general.active")),1)]),_:1})]),_:1})]),_:1}),s(b,{onClick:v,class:"mt-lg"},{default:e(()=>[t(n(c(o)("general.save")),1)]),_:1})]),_:1}))}};export{ee as default};
