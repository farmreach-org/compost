import{u as $,B as x,o as V,g as b,w as e,e as s,a as t,t as c,b as m,f as i,_ as f,a2 as u,ab as h,j as k,U as P,n as y}from"./app.17a8bbe4.js";import{_ as S}from"./Panel.1e5e6be2.js";import{P as U}from"./ProviderIcon.950fa870.js";import{_ as w}from"./ReadDocHelp.b8d034e7.js";import{_ as B}from"./Select.86391e44.js";import{_ as N}from"./InputHidden.18513017.js";import{_ as I}from"./Checkbox.dc42ffe0.js";import{_ as j}from"./Flex.4b1efe4e.js";import{_ as A}from"./Label.f494bf4d.js";import{_}from"./LabelSuffix.fd9b98d2.js";import"./Admin.fc0f4e28.js";import"./UserMenu.1170533d.js";import"./DropdownItem.409573e1.js";import"./Avatar.0b768219.js";import"./PencilSquare.b8b4716b.js";import"./Badge.82f1358a.js";import"./QueueList.1a33fea2.js";import"./Eye.e20c1588.js";const C={class:"flex items-center"},D={class:"mr-xs"},E=s("span",null,"Pinterest",-1),O={href:"https://developers.pinterest.com/apps/",class:"link",target:"_blank"},q={for:"id"},F={for:"secret"},T=s("label",{for:"env"},"Environment",-1),z=s("option",{value:"sandbox"},"Sandbox",-1),G=s("option",{value:"production"},"Production",-1),ne={__name:"PinterestServiceForm",props:{form:{required:!0,type:Object}},setup(o){const p=o,{t:l}=$(),{notify:v}=y(),a=x({}),g=()=>{a.value={},P.put(route("mixpost.services.update",{service:"pinterest"}),p.form,{preserveScroll:!0,onSuccess(){v("success",l("service.service_saved",{service:"Pinterest"}))},onError:d=>{a.value=d}})};return(d,r)=>(V(),b(S,{class:"mt-lg"},{title:e(()=>[s("div",C,[s("span",D,[t(U,{class:"text-pinterest"})]),E])]),description:e(()=>[s("p",null,[s("a",O,c(m(l)("service.create_app",{name:"Pinterest"})),1),i(". ")]),t(w,{href:`${d.$page.props.mixpost.docs_link}/services/social/pinterest`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(f,{class:"mt-lg"},{title:e(()=>[s("label",q,[i("App ID "),t(_,{danger:""},{default:e(()=>[i("*")]),_:1})])]),footer:e(()=>[t(u,{message:a.value["configuration.client_id"]},null,8,["message"])]),default:e(()=>[t(h,{modelValue:o.form.configuration.client_id,"onUpdate:modelValue":r[0]||(r[0]=n=>o.form.configuration.client_id=n),error:a.value["configuration.client_id"]!==void 0,type:"text",id:"id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[s("label",F,[i("App secret key "),t(_,{danger:""},{default:e(()=>[i("*")]),_:1})])]),footer:e(()=>[t(u,{message:a.value["configuration.client_secret"]},null,8,["message"])]),default:e(()=>[t(N,{modelValue:o.form.configuration.client_secret,"onUpdate:modelValue":r[1]||(r[1]=n=>o.form.configuration.client_secret=n),error:a.value["configuration.client_secret"]!==void 0,id:"secret",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[T]),footer:e(()=>[t(u,{message:a.value["configuration.environment"]},null,8,["message"])]),default:e(()=>[t(B,{modelValue:o.form.configuration.environment,"onUpdate:modelValue":r[2]||(r[2]=n=>o.form.configuration.environment=n),error:a.value["configuration.environment"]!==void 0,id:"env"},{default:e(()=>[z,G]),_:1},8,["modelValue","error"])]),_:1}),t(f,{class:"mt-lg"},{title:e(()=>[i(c(m(l)("general.status")),1)]),footer:e(()=>[t(u,{message:a.value.active},null,8,["message"])]),default:e(()=>[t(j,{responsive:!1,class:"items-center"},{default:e(()=>[t(I,{checked:o.form.active,"onUpdate:checked":r[3]||(r[3]=n=>o.form.active=n),id:"active"},null,8,["checked"]),t(A,{for:"active",class:"!mb-0"},{default:e(()=>[i(c(m(l)("general.active")),1)]),_:1})]),_:1})]),_:1}),t(k,{onClick:g,class:"mt-lg"},{default:e(()=>[i(c(m(l)("general.save")),1)]),_:1})]),_:1}))}};export{ne as default};
