import{u as g,I as k,o as $,g as h,w as e,e as t,a as s,_ as u,f as a,V as _,t as m,b as f,j as y,ak as x,n as I}from"./app.af17fce1.js";import{_ as O}from"./Panel.46137120.js";import{_ as V}from"./ReadDocHelp.632e573b.js";import{_ as A}from"./InputHidden.848b5415.js";import{O as b}from"./Services.3120d069.js";import{_ as w}from"./Checkbox.6f71d79b.js";import{_ as N}from"./Flex.16a0de6f.js";import{_ as S}from"./Label.01f9cfb2.js";import{_ as B}from"./LabelSuffix.b035370b.js";import"./Admin.ea7882ea.js";import"./QueueList.3a1b730e.js";import"./Eye.bfdd90d4.js";import"./PageHeader.fa50e47e.js";import"./Tab.319f1bf2.js";import"./ProviderIcon.5b8afea0.js";const j={class:"flex items-center"},C={class:"mr-xs"},P=t("span",null,"OpenAI",-1),U=t("p",null,[t("a",{href:"https://platform.openai.com/account/api-keys",class:"link",target:"_blank"},"You can generate an API key here"),a(". ")],-1),q={for:"secret_key"},X={__name:"OpenAIServiceForm",props:{form:{required:!0,type:Object}},setup(o){const p=o,{t:i}=g(),{notify:d}=I(),r=k({}),v=()=>{r.value={},x.put(route("mixpost.services.update",{service:"openai"}),p.form,{preserveScroll:!0,onSuccess(){d("success",i("service.service_saved",{service:"Open AI"}))},onError:n=>{r.value=n}})};return(n,c)=>($(),h(O,{class:"mt-lg"},{title:e(()=>[t("div",j,[t("span",C,[s(b,{class:"text-openai"})]),P])]),description:e(()=>[U,s(V,{href:`${n.$page.props.mixpost.docs_link}/services/ai/open-ai`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[s(u,{class:"mt-lg"},{title:e(()=>[t("label",q,[a("API Key "),s(B,{danger:""},{default:e(()=>[a("*")]),_:1})])]),footer:e(()=>[s(_,{message:r.value["configuration.secret_key"]},null,8,["message"])]),default:e(()=>[s(A,{modelValue:o.form.configuration.secret_key,"onUpdate:modelValue":c[0]||(c[0]=l=>o.form.configuration.secret_key=l),error:r.value["configuration.secret_key"]!==void 0,id:"secret",placeholder:"sk-...",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),s(u,{class:"mt-lg"},{title:e(()=>[a(m(f(i)("general.status")),1)]),footer:e(()=>[s(_,{message:r.value.active},null,8,["message"])]),default:e(()=>[s(N,{responsive:!1,class:"items-center"},{default:e(()=>[s(w,{checked:o.form.active,"onUpdate:checked":c[1]||(c[1]=l=>o.form.active=l),id:"active"},null,8,["checked"]),s(S,{for:"active",class:"!mb-0"},{default:e(()=>[a(m(f(i)("general.active")),1)]),_:1})]),_:1})]),_:1}),s(y,{onClick:v,class:"mt-lg"},{default:e(()=>[a(m(f(i)("general.save")),1)]),_:1})]),_:1}))}};export{X as default};