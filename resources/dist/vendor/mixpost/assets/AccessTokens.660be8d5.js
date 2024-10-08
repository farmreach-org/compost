import{u as N,m as T,Q as M,o as _,g as C,w as e,a as t,y as W,f as r,t as a,b as o,R as q,U as V,c5 as P,B as R,c8 as X,c as w,j as U,e as h,a2 as L,ab as A,h as S,a0 as Y,ac as F,F as D,d as ee,C as te,af as oe,Z as se,aw as O,r as ae}from"./app.17a8bbe4.js";import{u as ne}from"./useSelectable.a2aaee50.js";import{_ as re}from"./Minimal.d56ea1c0.js";import{_ as le}from"./PageHeader.cbe4fcaf.js";import{_ as H}from"./Flex.4b1efe4e.js";import{T as Q}from"./Trash.0f2ffd20.js";import{_ as Z}from"./PureDangerButton.0dbbc01d.js";import{_ as ie}from"./SelectableBar.54da362b.js";import{_ as ce}from"./Panel.1e5e6be2.js";import{_ as m,a as z,T as de}from"./TableCell.5981e30d.js";import{_ as j}from"./Checkbox.dc42ffe0.js";import{_ as ue}from"./NoResult.a422d351.js";import{u as G}from"./useRouter.64f79ca8.js";import{u as me}from"./useAPIForm.c7e5f88a.js";import{_ as B}from"./VerticalGroup.a25bdb43.js";import{_ as I}from"./LabelSuffix.fd9b98d2.js";import{_ as _e}from"./Alert.43894852.js";import{_ as fe}from"./Select.86391e44.js";import{_ as pe}from"./ClipboardCard.102f2585.js";import{_ as ke}from"./SuccessButton.fd48eeff.js";import{_ as $e}from"./Pagination.963a6d77.js";import{_ as he}from"./BackToDashboardButton.677591ae.js";import"./UserMenu.1170533d.js";import"./DropdownItem.409573e1.js";import"./Avatar.0b768219.js";import"./PencilSquare.b8b4716b.js";import"./Badge.82f1358a.js";import"./ClipboardButton.27a81395.js";import"./Clipboard.44086a3d.js";import"./ChevronLeft.fe9869cf.js";const ve={__name:"TokenItem",props:{item:{type:Object,required:!0}},setup(i){const v=i,{t:l}=N(),g=T("routePrefix"),f=T("confirmation"),{onError:s}=G(),x=()=>{f().title(l("access_token.delete")).description(l("access_token.delete_confirm")).destructive().onConfirm(d=>{p(d)}).show()},p=d=>{d.isLoading(!0),V.delete(route(`${g}.profile.accessTokens.delete`,{token:v.item.id}),{onSuccess(){d.reset(),P.emit("tokenDelete",v.item.id)},onError(y){s(y,()=>{p(d)})},onFinish(){d.isLoading(!1)}})};return(d,y)=>{const n=M("tooltip");return _(),C(z,{hoverable:!0},{default:e(()=>[t(m,{class:"w-10"},{default:e(()=>[W(d.$slots,"checkbox")]),_:3}),t(m,null,{default:e(()=>[r(a(i.item.name),1)]),_:1}),t(m,null,{default:e(()=>[r(a(i.item.last_used_at?i.item.last_used_at:o(l)("access_token.never_used")),1)]),_:1}),t(m,null,{default:e(()=>[r(a(i.item.expires_at),1)]),_:1}),t(m,null,{default:e(()=>[r(a(i.item.created_at),1)]),_:1}),t(m,null,{default:e(()=>[q((_(),C(Z,{onClick:x},{default:e(()=>[t(Q,{class:"!w-5 !h-5"})]),_:1})),[[n,o(l)("general.delete")]])]),_:1})]),_:3})}}},ge={for:"token_name"},ye={for:"expiration"},be={value:"days-7"},xe={value:"days-30"},Ce={value:"days-60"},we={value:"days-90"},Te={value:"never-expires"},Ve={value:"custom"},Se={__name:"CreateUserToken",emits:["added"],setup(i,{emit:v}){const l=T("routePrefix"),g=R(!1),f=R(""),s=me({name:"",expiration:"days-7",expires_at:""}),x=()=>{g.value=!0},p=()=>{g.value=!1,s.reset(),s.clearErrors()},{onCatch:d}=X(),y=()=>{s.post(route(`${l}.profile.accessTokens.store`),{onSuccess(n){p(),s.reset(),f.value=n.plain_text_token,v("added")},onError(n){d(n,y)}})};return(n,u)=>(_(),w(D,null,[t(U,{onClick:x},{default:e(()=>[r(a(n.$t("access_token.create")),1)]),_:1}),t(F,{show:g.value,"max-width":"md",closeable:!0,"scrollable-body":!0,onClose:p},{header:e(()=>[r(a(n.$t("access_token.create")),1)]),body:e(()=>[t(B,null,{title:e(()=>[h("label",ge,[r(a(n.$t("general.name"))+" ",1),t(I,{danger:!0},{default:e(()=>[r("*")]),_:1})])]),footer:e(()=>[t(L,{message:o(s).errors.name},null,8,["message"])]),default:e(()=>[t(A,{type:"text",modelValue:o(s).name,"onUpdate:modelValue":u[0]||(u[0]=$=>o(s).name=$),error:o(s).errors.name!==void 0,id:"token_name",placeholder:n.$t("access_token.name_placeholder")},null,8,["modelValue","error","placeholder"])]),_:1}),t(B,{class:"mt-lg"},{title:e(()=>[h("label",ye,[r(a(n.$t("access_token.expiration"))+" ",1),t(I,{danger:!0},{default:e(()=>[r("*")]),_:1})])]),footer:e(()=>[t(L,{message:o(s).errors.expiration},null,8,["message"]),t(L,{message:o(s).errors.expires_at},null,8,["message"])]),default:e(()=>[t(H,{class:"w-full"},{default:e(()=>[t(fe,{modelValue:o(s).expiration,"onUpdate:modelValue":u[1]||(u[1]=$=>o(s).expiration=$),error:o(s).errors.expiration!==void 0,id:"expiration"},{default:e(()=>[h("option",be,a(n.$t("calendar.days",{count:7})),1),h("option",xe,a(n.$t("calendar.days",{count:30})),1),h("option",Ce,a(n.$t("calendar.days",{count:60})),1),h("option",we,a(n.$t("calendar.days",{count:90})),1),h("option",Te,a(n.$t("access_token.never_expires")),1),h("option",Ve,a(n.$t("general.custom")),1)]),_:1},8,["modelValue","error"]),o(s).expiration==="custom"?(_(),C(A,{key:0,type:"date",modelValue:o(s).expires_at,"onUpdate:modelValue":u[2]||(u[2]=$=>o(s).expires_at=$),error:o(s).errors.expires_at,id:"expiration"},null,8,["modelValue","error"])):S("",!0)]),_:1})]),_:1})]),footer:e(()=>[t(Y,{onClick:p,class:"mr-xs"},{default:e(()=>[r(a(n.$t("general.cancel")),1)]),_:1}),t(U,{onClick:y,disabled:o(s).processing,isLoading:o(s).processing},{default:e(()=>[r(a(n.$t("general.create")),1)]),_:1},8,["disabled","isLoading"])]),_:1},8,["show"]),t(F,{show:f.value!=="","max-width":"xl",closeable:!0,"scrollable-body":!0,onClose:u[4]||(u[4]=$=>f.value="")},{header:e(()=>[r(a(n.$t("access_token.create")),1)]),body:e(()=>[f.value?(_(),w(D,{key:0},[t(_e,{variant:"warning",closeable:!1},{default:e(()=>[r(a(n.$t("access_token.copy_token")),1)]),_:1}),t(pe,{class:"mt-lg"},{default:e(()=>[r(a(f.value),1)]),_:1})],64)):S("",!0)]),footer:e(()=>[t(ke,{onClick:u[3]||(u[3]=$=>f.value="")},{default:e(()=>[r(a(n.$t("system.stored_safely")),1)]),_:1})]),_:1},8,["show"])],64))}},De={class:"row-py w-full mx-auto !pt-0"},Le={key:0,class:"mt-lg"},Pe=ee({layout:re}),it=Object.assign(Pe,{__name:"AccessTokens",props:["tokens"],setup(i){const v=i,{t:l}=N(),g=T("routePrefix"),f=T("confirmation"),{selectedRecords:s,putPageRecords:x,toggleSelectRecordsOnPage:p,deselectRecord:d,deselectAllRecords:y}=ne(),n=()=>v.tokens.data.map(c=>c.id);te(()=>{x(n()),P.on("tokenDelete",c=>{d(c)})}),oe(()=>v.tokens.data,()=>{x(n())});const{onError:u}=G(),$=()=>{f().title(l("access_token.delete_items")).description(l("access_token.delete_items_confirm")).destructive().onConfirm(c=>{c.isLoading(!0),V.delete(route(`${g}.profile.accessTokens.deleteMultiple`),{data:{tokens:s.value},preserveScroll:!0,onSuccess(){c.reset(),y()},onError(k){u(k,()=>{E(c)})},onFinish(){c.isLoading(!1)}})}).show()},E=c=>{c.isLoading(!0),V.delete(route(`${g}.profile.accessTokens.deleteMultiple`),{data:{tokens:s.value},preserveScroll:!0,onSuccess(){c.reset(),P.emit("tokenDelete",v.item.id)},onError(k){u(k,()=>{E(c)})},onFinish(){c.isLoading(!1)}})};return(c,k)=>{const J=M("tooltip");return _(),w(D,null,[t(o(se),{title:o(l)("access_token.access_tokens")},null,8,["title"]),t(le,{title:o(l)("access_token.access_tokens"),class:"!px-0"},{description:e(()=>[r(a(o(l)("access_token.desc")),1)]),default:e(()=>[t(he)]),_:1},8,["title"]),h("div",De,[t(ie,{count:o(s).length,onClose:o(y)},{default:e(()=>[q((_(),C(Z,{onClick:$},{default:e(()=>[t(Q)]),_:1})),[[J,o(l)("general.delete")]])]),_:1},8,["count","onClose"]),t(H,null,{default:e(()=>[t(Se,{onAdded:k[0]||(k[0]=b=>o(V).get(c.route("mixpost.profile.accessTokens.index"),{},{only:["tokens"],preserveState:!0,preserveScroll:!0}))})]),_:1}),t(ce,{"with-padding":!1,class:"mt-lg"},{default:e(()=>[t(de,null,{head:e(()=>[t(z,null,{default:e(()=>[t(m,{component:"th",scope:"col",class:"w-10"},{default:e(()=>[t(j,{checked:o(p),"onUpdate:checked":k[1]||(k[1]=b=>O(p)?p.value=b:null),disabled:!i.tokens.data.length},null,8,["checked","disabled"])]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(a(o(l)("general.name")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(a(o(l)("access_token.last_usage")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(a(o(l)("access_token.expires_at")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(a(o(l)("general.created_at")),1)]),_:1}),t(m,{component:"th",scope:"col"})]),_:1})]),body:e(()=>[(_(!0),w(D,null,ae(i.tokens.data,b=>(_(),C(ve,{key:b.id,item:b,onOnDelete:()=>{o(d)(b.id)}},{checkbox:e(()=>[t(j,{checked:o(s),"onUpdate:checked":k[2]||(k[2]=K=>O(s)?s.value=K:null),value:b.id},null,8,["checked","value"])]),_:2},1032,["item","onOnDelete"]))),128))]),_:1}),i.tokens.data.length?S("",!0):(_(),C(ue,{key:0,class:"p-md"},{default:e(()=>[r(a(o(l)("access_token.no_result")),1)]),_:1}))]),_:1}),i.tokens.meta.links.length>3?(_(),w("div",Le,[t($e,{meta:i.tokens.meta,links:i.tokens.links},null,8,["meta","links"])])):S("",!0)])],64)}}});export{it as default};
