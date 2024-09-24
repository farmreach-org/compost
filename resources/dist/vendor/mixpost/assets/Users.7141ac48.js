import{u as F,m as w,a5 as q,I as A,Y as E,o,c as v,e as x,S as L,b as s,g as h,w as t,a as e,af as N,aj as G,f as c,t as i,h as I,ag as H,ak as S,cb as U,A as K,ce as Q,am as W,N as X,d as ee,J as te,ad as se,ae as P,l as j,F as B,Z as ae,i as le,j as re,aB as R,r as oe,n as ne}from"./app.af17fce1.js";import{_ as ie}from"./Admin.ea7882ea.js";import{u as ue}from"./useSelectable.79aa5ce8.js";import{_ as ce}from"./PageHeader.fa50e47e.js";import{_ as de}from"./PureDangerButton.27630a26.js";import{_ as me}from"./Panel.46137120.js";import{_ as T}from"./Checkbox.6f71d79b.js";import{_ as n,a as M,T as fe}from"./TableCell.387d3662.js";import{_ as _e}from"./PureButtonLink.dbcc593f.js";import{E as pe}from"./Eye.bfdd90d4.js";import{T as J}from"./Trash.ee5d54c5.js";import{_ as he}from"./DropdownButton.19db68d6.js";import{_ as $e}from"./SelectableBar.4086aab5.js";import{_ as ve}from"./NoResult.ab0b21a6.js";import{_ as ge}from"./Pagination.e1cebd0e.js";import{_ as ke}from"./SearchInput.1d1bce1a.js";import{_ as be}from"./Flex.16a0de6f.js";import"./QueueList.3a1b730e.js";import"./EllipsisVertical.42e3e8f4.js";import"./ChevronLeft.bc8c49ce.js";const ye={class:"flex flex-row items-center justify-end gap-xs"},we={__name:"UserItemAction",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(a,{emit:d}){const l=a,{t:r}=F(),_=w("routePrefix"),V=w("confirmation"),{user:D}=q(),g=A(!1),p=()=>{V().title(r("user.delete_user")).description(r("user.confirm_delete_user")).destructive().onConfirm(m=>{m.isLoading(!0),S.delete(route(`${_}.users.delete`,{user:l.itemId}),{onSuccess(){g.value=!1,d("onDelete"),U.emit("userDelete",l.itemId),m.reset()},onFinish(){m.close()}})}).show()};return(m,k)=>{const b=E("tooltip");return o(),v("div",null,[x("div",ye,[L((o(),h(_e,{href:m.route(`${s(_)}.users.view`,{user:a.itemId})},{default:t(()=>[e(pe)]),_:1},8,["href"])),[[b,s(r)("general.view")]]),e(H,{"width-classes":"w-32",placement:"bottom-end"},{trigger:t(()=>[e(he)]),content:t(()=>[e(N,{href:m.route(`${s(_)}.users.edit`,{user:a.itemId})},{icon:t(()=>[e(G)]),default:t(()=>[c(" "+i(s(r)("general.edit")),1)]),_:1},8,["href"]),s(D).id!==a.itemId?(o(),h(N,{key:0,onClick:p,as:"button"},{icon:t(()=>[e(J,{class:"text-red-500"})]),default:t(()=>[c(" "+i(s(r)("general.delete")),1)]),_:1})):I("",!0)]),_:1})])])}}},xe={__name:"UserItem",props:{item:{type:Object,required:!0}},setup(a){return(d,l)=>(o(),h(M,{hoverable:!0},{default:t(()=>[e(n,{class:"w-10"},{default:t(()=>[K(d.$slots,"checkbox")]),_:3}),e(n,null,{default:t(()=>[e(Q,{name:a.item.name},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[x("div",null,i(a.item.name),1),a.item.is_admin?(o(),h(W,{key:0,class:"mt-xs"},{default:t(()=>[c(i(d.$t("user.system_admin")),1)]),_:1})):I("",!0)]),_:1}),e(n,null,{default:t(()=>[c(i(a.item.email),1)]),_:1}),e(n,null,{default:t(()=>[c(i(a.item.created_at),1)]),_:1}),e(n,null,{default:t(()=>[e(we,{itemId:a.item.id},null,8,["itemId"])]),_:1})]),_:3}))}},Ie={class:"flex items-center"},Ve={__name:"Filters",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(a,{emit:d}){return X(()=>0),(l,r)=>(o(),v("div",Ie,[e(ke,{modelValue:a.modelValue.keyword,"onUpdate:modelValue":r[0]||(r[0]=_=>a.modelValue.keyword=_),placeholder:l.$t("general.search")},null,8,["modelValue","placeholder"])]))}},De={class:"w-full mx-auto row-py"},je={class:"mt-lg row-px w-full"},Se={key:0,class:"mt-lg"},Ue=ee({layout:ie}),Qe=Object.assign(Ue,{__name:"Users",props:{users:{type:Object},filter:{type:Object,default:{}}},setup(a){const d=a,{t:l}=F(),r=w("routePrefix"),_=l("user.users"),{notify:V}=ne(),D=w("confirmation"),{user:g}=q(),{selectedRecords:p,putPageRecords:m,toggleSelectRecordsOnPage:k,deselectRecord:b,deselectAllRecords:C}=ue(),O=()=>d.users.data.filter(u=>u.id!==g.value.id).map(u=>u.id),y=A({keyword:d.filter.keyword});te(()=>{m(O()),U.on("userDelete",u=>{b(u)})}),se(()=>{U.off("userDelete")}),P(()=>d.users.data,()=>{m(O())}),P(()=>j.exports.cloneDeep(y.value),j.exports.throttle(()=>{S.get(route(`${r}.users.index`),j.exports.pickBy(y.value),{preserveState:!0,only:["users","filter"]})},300));const Y=()=>{D().title(l("user.delete_users")).description(l("user.confirm_delete_users")).destructive().onConfirm(u=>{u.isLoading(!0),S.delete(route(`${r}.users.deleteMultiple`),{data:{users:p.value},preserveScroll:!0,onSuccess(){C(),V("success",l("user.selected_users_deleted"))},onFinish(){u.reset()}})}).show()};return(u,$)=>{const Z=E("tooltip");return o(),v(B,null,[e(s(ae),{title:s(_)},null,8,["title"]),x("div",De,[e(ce,{title:s(_)},{description:t(()=>[c(i(s(l)("user.manage_users")),1)]),_:1},8,["title"]),x("div",je,[e($e,{count:s(p).length,onClose:s(C)},{default:t(()=>[L((o(),h(de,{onClick:Y},{default:t(()=>[e(J)]),_:1})),[[Z,s(l)("general.delete")]])]),_:1},8,["count","onClose"]),e(be,{class:"justify-between"},{default:t(()=>[e(s(le),{href:u.route(`${s(r)}.users.create`),class:"mb-xs sm:mb-0"},{default:t(()=>[e(re,null,{default:t(()=>[c(i(s(l)("user.create_user")),1)]),_:1})]),_:1},8,["href"]),e(Ve,{modelValue:y.value,"onUpdate:modelValue":$[0]||($[0]=f=>y.value=f)},null,8,["modelValue"])]),_:1}),e(me,{"with-padding":!1,class:"mt-lg"},{default:t(()=>[e(fe,null,{head:t(()=>[e(M,null,{default:t(()=>[e(n,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[e(T,{checked:s(k),"onUpdate:checked":$[1]||($[1]=f=>R(k)?k.value=f:null),disabled:!a.users.meta.total},null,8,["checked","disabled"])]),_:1}),e(n,{component:"th",scope:"col"}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(l)("general.name")),1)]),_:1}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(l)("general.email")),1)]),_:1}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(l)("general.created_at")),1)]),_:1}),e(n,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(o(!0),v(B,null,oe(a.users.data,f=>(o(),h(xe,{key:f.id,item:f,onOnDelete:()=>{s(b)(f.id)}},{checkbox:t(()=>[e(T,{checked:s(p),"onUpdate:checked":$[2]||($[2]=z=>R(p)?p.value=z:null),value:f.id,disabled:f.id===s(g).id,number:""},null,8,["checked","value","disabled"])]),_:2},1032,["item","onOnDelete"]))),128))]),_:1}),a.users.meta.total?I("",!0):(o(),h(ve,{key:0,table:""}))]),_:1}),a.users.meta.links.length>3?(o(),v("div",Se,[e(ge,{meta:a.users.meta,links:a.users.links},null,8,["meta","links"])])):I("",!0)])])],64)}}});export{Qe as default};