import{m as s,n as i}from"./app.af17fce1.js";const f=()=>{const{notify:r}=i(),n=s("authPasswordConfirmation");return{onError:(o,t=null)=>{if(o.confirm_password){n().onConfirm(t).show();return}r("error",o)}}};export{f as u};
