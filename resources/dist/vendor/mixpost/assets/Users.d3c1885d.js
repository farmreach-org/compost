import{u as F,m as w,O as q,B as A,Q as E,o as l,c as v,e as x,R as L,b as s,g as h,w as t,a as e,f as c,t as i,h as I,U as j,c5 as C,y as G,H as J,d as K,C as W,ae as X,af as P,l as U,F as R,Z as Y,i as ee,j as te,aw as B,r as se,n as ae}from"./app.17a8bbe4.js";import{_ as re}from"./Admin.fc0f4e28.js";import{u as oe}from"./useSelectable.a2aaee50.js";import{_ as le}from"./PageHeader.cbe4fcaf.js";import{_ as ne}from"./PureDangerButton.0dbbc01d.js";import{_ as ie}from"./Panel.1e5e6be2.js";import{_ as N}from"./Checkbox.dc42ffe0.js";import{_ as n,a as M,T as ue}from"./TableCell.5981e30d.js";import{_ as ce}from"./PureButtonLink.d6da9c4f.js";import{E as me}from"./Eye.e20c1588.js";import{P as de}from"./PencilSquare.b8b4716b.js";import{_ as T,a as fe}from"./DropdownItem.409573e1.js";import{T as H}from"./Trash.0f2ffd20.js";import{_ as _e}from"./DropdownButton.f5aff106.js";import{_ as pe}from"./Avatar.0b768219.js";import{_ as he}from"./Badge.82f1358a.js";import{_ as $e}from"./SelectableBar.54da362b.js";import{_ as ve}from"./NoResult.a422d351.js";import{_ as ge}from"./Pagination.963a6d77.js";import{_ as ke}from"./SearchInput.1ad6cb85.js";import{_ as ye}from"./Flex.4b1efe4e.js";import"./UserMenu.1170533d.js";import"./QueueList.1a33fea2.js";import"./EllipsisVertical.4969c8de.js";import"./ChevronLeft.fe9869cf.js";const be={class:"flex flex-row items-center justify-end gap-xs"},we={__name:"UserItemAction",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(a,{emit:m}){const r=a,{t:o}=F(),_=w("routePrefix"),V=w("confirmation"),{user:D}=q(),g=A(!1),p=()=>{V().title(o("user.delete_user")).description(o("user.confirm_delete_user")).destructive().onConfirm(d=>{d.isLoading(!0),j.delete(route(`${_}.users.delete`,{user:r.itemId}),{onSuccess(){g.value=!1,m("onDelete"),C.emit("userDelete",r.itemId),d.reset()},onFinish(){d.close()}})}).show()};return(d,k)=>{const y=E("tooltip");return l(),v("div",null,[x("div",be,[L((l(),h(ce,{href:d.route(`${s(_)}.users.view`,{user:a.itemId})},{default:t(()=>[e(me)]),_:1},8,["href"])),[[y,s(o)("general.view")]]),e(fe,{"width-classes":"w-32",placement:"bottom-end"},{trigger:t(()=>[e(_e)]),content:t(()=>[e(T,{href:d.route(`${s(_)}.users.edit`,{user:a.itemId})},{icon:t(()=>[e(de)]),default:t(()=>[c(" "+i(s(o)("general.edit")),1)]),_:1},8,["href"]),s(D).id!==a.itemId?(l(),h(T,{key:0,onClick:p,as:"button"},{icon:t(()=>[e(H,{class:"text-red-500"})]),default:t(()=>[c(" "+i(s(o)("general.delete")),1)]),_:1})):I("",!0)]),_:1})])])}}},xe={__name:"UserItem",props:{item:{type:Object,required:!0}},setup(a){return(m,r)=>(l(),h(M,{hoverable:!0},{default:t(()=>[e(n,{class:"w-10"},{default:t(()=>[G(m.$slots,"checkbox")]),_:3}),e(n,null,{default:t(()=>[e(pe,{name:a.item.name},null,8,["name"])]),_:1}),e(n,null,{default:t(()=>[x("div",null,i(a.item.name),1),a.item.is_admin?(l(),h(he,{key:0,class:"mt-xs"},{default:t(()=>[c(i(m.$t("user.system_admin")),1)]),_:1})):I("",!0)]),_:1}),e(n,null,{default:t(()=>[c(i(a.item.email),1)]),_:1}),e(n,null,{default:t(()=>[c(i(a.item.created_at),1)]),_:1}),e(n,null,{default:t(()=>[e(we,{itemId:a.item.id},null,8,["itemId"])]),_:1})]),_:3}))}},Ie={class:"flex items-center"},Ve={__name:"Filters",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(a,{emit:m}){return J(()=>0),(r,o)=>(l(),v("div",Ie,[e(ke,{modelValue:a.modelValue.keyword,"onUpdate:modelValue":o[0]||(o[0]=_=>a.modelValue.keyword=_),placeholder:r.$t("general.search")},null,8,["modelValue","placeholder"])]))}},De={class:"w-full mx-auto row-py"},Ue={class:"mt-lg row-px w-full"},je={key:0,class:"mt-lg"},Ce=K({layout:re}),st=Object.assign(Ce,{__name:"Users",props:{users:{type:Object},filter:{type:Object,default:{}}},setup(a){const m=a,{t:r}=F(),o=w("routePrefix"),_=r("user.users"),{notify:V}=ae(),D=w("confirmation"),{user:g}=q(),{selectedRecords:p,putPageRecords:d,toggleSelectRecordsOnPage:k,deselectRecord:y,deselectAllRecords:O}=oe(),S=()=>m.users.data.filter(u=>u.id!==g.value.id).map(u=>u.id),b=A({keyword:m.filter.keyword});W(()=>{d(S()),C.on("userDelete",u=>{y(u)})}),X(()=>{C.off("userDelete")}),P(()=>m.users.data,()=>{d(S())}),P(()=>U.exports.cloneDeep(b.value),U.exports.throttle(()=>{j.get(route(`${o}.users.index`),U.exports.pickBy(b.value),{preserveState:!0,only:["users","filter"]})},300));const Q=()=>{D().title(r("user.delete_users")).description(r("user.confirm_delete_users")).destructive().onConfirm(u=>{u.isLoading(!0),j.delete(route(`${o}.users.deleteMultiple`),{data:{users:p.value},preserveScroll:!0,onSuccess(){O(),V("success",r("user.selected_users_deleted"))},onFinish(){u.reset()}})}).show()};return(u,$)=>{const Z=E("tooltip");return l(),v(R,null,[e(s(Y),{title:s(_)},null,8,["title"]),x("div",De,[e(le,{title:s(_)},{description:t(()=>[c(i(s(r)("user.manage_users")),1)]),_:1},8,["title"]),x("div",Ue,[e($e,{count:s(p).length,onClose:s(O)},{default:t(()=>[L((l(),h(ne,{onClick:Q},{default:t(()=>[e(H)]),_:1})),[[Z,s(r)("general.delete")]])]),_:1},8,["count","onClose"]),e(ye,{class:"justify-between"},{default:t(()=>[e(s(ee),{href:u.route(`${s(o)}.users.create`),class:"mb-xs sm:mb-0"},{default:t(()=>[e(te,null,{default:t(()=>[c(i(s(r)("user.create_user")),1)]),_:1})]),_:1},8,["href"]),e(Ve,{modelValue:b.value,"onUpdate:modelValue":$[0]||($[0]=f=>b.value=f)},null,8,["modelValue"])]),_:1}),e(ie,{"with-padding":!1,class:"mt-lg"},{default:t(()=>[e(ue,null,{head:t(()=>[e(M,null,{default:t(()=>[e(n,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[e(N,{checked:s(k),"onUpdate:checked":$[1]||($[1]=f=>B(k)?k.value=f:null),disabled:!a.users.meta.total},null,8,["checked","disabled"])]),_:1}),e(n,{component:"th",scope:"col"}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(r)("general.name")),1)]),_:1}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(r)("general.email")),1)]),_:1}),e(n,{component:"th",scope:"col"},{default:t(()=>[c(i(s(r)("general.created_at")),1)]),_:1}),e(n,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(l(!0),v(R,null,se(a.users.data,f=>(l(),h(xe,{key:f.id,item:f,onOnDelete:()=>{s(y)(f.id)}},{checkbox:t(()=>[e(N,{checked:s(p),"onUpdate:checked":$[2]||($[2]=z=>B(p)?p.value=z:null),value:f.id,disabled:f.id===s(g).id,number:""},null,8,["checked","value","disabled"])]),_:2},1032,["item","onOnDelete"]))),128))]),_:1}),a.users.meta.total?I("",!0):(l(),h(ve,{key:0,table:""}))]),_:1}),a.users.meta.links.length>3?(l(),v("div",je,[e(ge,{meta:a.users.meta,links:a.users.links},null,8,["meta","links"])])):I("",!0)])])],64)}}});export{st as default};