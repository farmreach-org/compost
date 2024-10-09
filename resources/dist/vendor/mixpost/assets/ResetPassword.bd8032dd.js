import{d as $,T as V,B as h,c as p,a as o,b as e,e as i,k,w as a,F as f,o as n,Z as y,f as _,t as d,r as B,g as q,_ as m,ab as u,j as S,m as j,a2 as v}from"./app.17a8bbe4.js";import{_ as x}from"./Minimal.d56ea1c0.js";import{_ as L}from"./Panel.1e5e6be2.js";import"./UserMenu.1170533d.js";import"./DropdownItem.409573e1.js";import"./Avatar.0b768219.js";import"./PencilSquare.b8b4716b.js";import"./Badge.82f1358a.js";const N={class:"w-full sm:max-w-lg mx-auto"},P=["onSubmit"],U={for:"email"},C={for:"password"},F={for:"password_confirmation"},T={class:"w-full"},D=$({layout:x}),H=Object.assign(D,{__name:"ResetPassword",props:{token:{type:String,required:!0}},setup(c){const w=c,g=j("routePrefix"),s=V({token:w.token,email:"",password:"",password_confirmation:""});h(!1);const b=()=>{s.post(route(`${g}.password.store`))};return(t,l)=>(n(),p(f,null,[o(e(y),{title:t.$t("auth.reset_password")},null,8,["title"]),i("div",N,[i("form",{onSubmit:k(b,["prevent"])},[o(L,null,{title:a(()=>[_(d(t.$t("auth.reset_password")),1)]),default:a(()=>[(n(!0),p(f,null,B(e(s).errors,r=>(n(),q(v,{message:r,class:"mb-xs"},null,8,["message"]))),256)),o(m,{class:"mt-md"},{title:a(()=>[i("label",U,d(t.$t("general.email")),1)]),default:a(()=>[o(u,{modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).email=r),error:e(s).errors.email,type:"email",id:"email",class:"w-full",required:"",autocomplete:"username"},null,8,["modelValue","error"])]),_:1}),o(m,{class:"mt-md"},{title:a(()=>[i("label",C,d(t.$t("auth.password")),1)]),default:a(()=>[o(u,{modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).password=r),error:e(s).errors.password,type:"password",id:"password",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),o(m,{class:"mt-md"},{title:a(()=>[i("label",F,d(t.$t("auth.confirm_password")),1)]),default:a(()=>[i("div",T,[o(u,{modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).password_confirmation=r),error:e(s).errors.password_confirmation,type:"password",id:"password_confirmation",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])])]),_:1}),o(S,{disabled:e(s).processing,isLoading:e(s).processing,type:"submit",class:"mt-lg"},{default:a(()=>[_(d(t.$t("auth.reset_password")),1)]),_:1},8,["disabled","isLoading"])]),_:1})],40,P)])],64))}});export{H as default};