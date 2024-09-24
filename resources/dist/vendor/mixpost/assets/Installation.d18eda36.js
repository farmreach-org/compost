import{d as v,T as z,c as d,a as t,b as a,e as i,k as h,w as s,F as p,o as m,Z as k,f,t as n,r as c,g as w,_ as u,aa as _,V as g,h as U,j as q}from"./app.af17fce1.js";import{_ as B}from"./Minimal.eb9d7745.js";import{_ as N}from"./Panel.46137120.js";import{_ as C}from"./Select.fb5ef007.js";const F={class:"w-full sm:max-w-lg mx-auto"},L=["onSubmit"],S={for:"name"},T={for:"email"},j={for:"password"},D={for:"password_confirmation"},I={class:"w-full"},O=["label"],Z=["value"],E=v({layout:B}),K=Object.assign(E,{__name:"Installation",setup(M){const e=z({name:"",email:"",password:"",password_confirmation:"",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}),V=()=>{e.post(route("mixpost.installation"))};return(l,r)=>(m(),d(p,null,[t(a(k),{title:l.$t("installation.installation")},null,8,["title"]),i("div",F,[i("form",{onSubmit:h(V,["prevent"])},[t(N,null,{title:s(()=>[f(n(l.$t("installation.installation")),1)]),description:s(()=>[f(n(l.$t("installation.create_admin")),1)]),default:s(()=>[(m(!0),d(p,null,c(a(e).errors,o=>(m(),w(g,{message:o,class:"mb-xs"},null,8,["message"]))),256)),t(u,null,{title:s(()=>[i("label",S,n(l.$t("general.name")),1)]),default:s(()=>[t(_,{modelValue:a(e).name,"onUpdate:modelValue":r[0]||(r[0]=o=>a(e).name=o),error:a(e).errors.name,type:"text",id:"name",class:"w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue","error"])]),_:1}),t(u,{class:"mt-md"},{title:s(()=>[i("label",T,n(l.$t("general.email")),1)]),default:s(()=>[t(_,{modelValue:a(e).email,"onUpdate:modelValue":r[1]||(r[1]=o=>a(e).email=o),error:a(e).errors.email,type:"email",id:"email",class:"w-full",required:"",autocomplete:"username"},null,8,["modelValue","error"])]),_:1}),t(u,{class:"mt-md"},{title:s(()=>[i("label",j,n(l.$t("auth.password")),1)]),default:s(()=>[t(_,{modelValue:a(e).password,"onUpdate:modelValue":r[2]||(r[2]=o=>a(e).password=o),error:a(e).errors.password,type:"password",id:"password",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(u,{class:"mt-md"},{title:s(()=>[i("label",D,n(l.$t("auth.confirm_password")),1)]),default:s(()=>[i("div",I,[t(_,{modelValue:a(e).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=o=>a(e).password_confirmation=o),error:a(e).errors.password_confirmation,type:"password",id:"password_confirmation",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])])]),_:1}),a(e).errors.timezone?(m(),w(u,{key:0,class:"mt-lg"},{title:s(()=>[f(n(l.$t("general.timezone")),1)]),footer:s(()=>[t(g,{message:l.$t("installation.select_timezone")},null,8,["message"])]),default:s(()=>[i("div",null,[t(C,{modelValue:a(e).timezone,"onUpdate:modelValue":r[4]||(r[4]=o=>a(e).timezone=o)},{default:s(()=>[(m(!0),d(p,null,c(l.$page.props.timezone_list,(o,$)=>(m(),d("optgroup",{label:$},[(m(!0),d(p,null,c(o,(b,y)=>(m(),d("option",{value:y},n(b),9,Z))),256))],8,O))),256))]),_:1},8,["modelValue"])])]),_:1})):U("",!0),t(q,{disabled:a(e).processing,isLoading:a(e).processing,type:"submit",class:"mt-lg"},{default:s(()=>[f(n(l.$t("user.create_user")),1)]),_:1},8,["disabled","isLoading"])]),_:1})],40,L)])],64))}});export{K as default};
