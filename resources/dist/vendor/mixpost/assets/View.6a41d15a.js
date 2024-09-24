import{m as w,I as x,l as F,an as I,o as h,c as y,a as s,w as e,f as l,t as a,T as U,a4 as D,R as S,b as r,j,ab as T,F as V,g as b,r as E,e as $,ce as M,am as q,S as Y,ag as Z,af as P,aj as A,ak as N,Y as G,d as H,u as J,a5 as K,Z as Q,i as X,U as ee,h as se,_ as C,n as te}from"./app.af17fce1.js";import{_ as ae}from"./Admin.ea7882ea.js";import{_ as le}from"./PageHeader.fa50e47e.js";import{_ as R}from"./Panel.46137120.js";import{T as B}from"./Trash.ee5d54c5.js";import{_ as oe}from"./NoResult.ab0b21a6.js";import{_ as re}from"./DropdownButton.19db68d6.js";import{_ as O}from"./UserRole.b3fd8644.js";import{a as W,_,T as ne}from"./TableCell.387d3662.js";import{E as ue}from"./Eye.bfdd90d4.js";import{_ as ie}from"./PureButtonLink.dbcc593f.js";import"./QueueList.3a1b730e.js";import"./Flex.16a0de6f.js";import"./EllipsisVertical.42e3e8f4.js";import"./Radio.3fb0761b.js";const ce={class:"relative w-full"},de={__name:"SelectWorkspace",props:{modelValue:{default:null},workspaces:{type:Array,default:[]},exclude:{type:Array,default:[]},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:k}){const o=n,m=w("routePrefix"),p=x(o.workspaces),i=(u,c)=>{!u||(c(!0),v(c,u))},v=F.exports.throttle((u,c)=>{axios.get(route(`${m}.workspaces.resources.items`),{params:{keyword:c,exclude:o.exclude}}).then(d=>{u(!1),p.value=d.data.data.map(t=>({key:t.uuid,label:t.name}))})},350);return(u,c)=>{const d=I("v-select");return h(),y("div",ce,[s(d,{modelValue:n.modelValue,"onUpdate:modelValue":c[0]||(c[0]=t=>u.$emit("update:modelValue",t)),options:p.value,filterable:!1,"close-on-select":!0,disabled:n.disabled,placeholder:u.$t("workspace.type_search_workspace"),onSearch:i},{"no-options":e(({search:t,searching:g,loading:L})=>[l(a(u.$t("general.list_empty")),1)]),_:1},8,["modelValue","options","disabled","placeholder"])])}}},me={__name:"AttachWorkspace",props:{user:{type:Object},attachedWorkspaces:{type:Array,default:[]}},setup(n){const k=n;w("routePrefix");const o=x(null),m=U({user_id:k.user.id,role:"admin"}),p=()=>{m.post(route("mixpost.workspaces.users.store",{workspace:o.value.key}),{preserveScroll:!0,onSuccess(){u(),m.reset()}})},i=x(!1),v=()=>{i.value=!0},u=()=>{i.value=!1,o.value=null};return(c,d)=>(h(),y(V,null,[s(S,{onClick:v,size:"sm"},{icon:e(()=>[s(D)]),default:e(()=>[l(" "+a(c.$t("team.attach")),1)]),_:1}),s(T,{show:i.value,"max-width":"md","scrollable-body":!0,closeable:!0,onClose:u},{header:e(()=>[l(a(c.$t("team.attach_workspace")),1)]),body:e(()=>[s(de,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=t=>o.value=t),exclude:n.attachedWorkspaces},null,8,["modelValue","exclude"]),s(O,{modelValue:r(m).role,"onUpdate:modelValue":d[1]||(d[1]=t=>r(m).role=t),class:"mt-lg"},null,8,["modelValue"])]),footer:e(()=>[s(S,{onClick:u,class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:e(()=>[l(a(c.$t("general.cancel")),1)]),_:1}),s(j,{onClick:p,disabled:!o.value||r(m).processing,isLoading:r(m).processing},{default:e(()=>[l(a(c.$t("team.attach")),1)]),_:1},8,["disabled","isLoading"])]),_:1},8,["show"])],64))}},fe={class:"flex justify-start"},pe={class:"capitalize"},_e={class:"flex justify-end"},he={__name:"UserWorkspaces",props:{user:{type:Object}},setup(n){const k=n,o=w("routePrefix"),m=w("confirmation"),p=x(null),i=U({user_id:k.user.id,role:"admin"}),v=t=>{i.role=t.pivot.role,p.value=t},u=()=>{p.value=null},c=t=>{m().title($t("team.detach_workspace")).description($t("team.detach_confirm",{workspace:t.name,user:k.user.name})).destructive().btnConfirmName($t("admin.detach")).onConfirm(g=>{g.isLoading(!0),N.delete(route(`${o}.workspaces.users.delete`,{workspace:t.uuid}),{data:{user_id:k.user.id},preserveScroll:!0,onSuccess(){g.reset()},onFinish(){g.isLoading(!1)}})}).show()},d=()=>{i.put(route(`${o}.workspaces.users.update`,{workspace:p.value.uuid}),{data:{user_id:k.user.id},preserveScroll:!0,onSuccess(){i.reset(),u()}})};return(t,g)=>{const L=G("tooltip");return h(),y(V,null,[s(R,null,{title:e(()=>[l(a(t.$t("workspace.workspaces")),1)]),action:e(()=>[s(me,{user:n.user,attachedWorkspaces:n.user.workspaces.map(f=>f.uuid)},null,8,["user","attachedWorkspaces"])]),default:e(()=>[n.user.workspaces.length?(h(),b(ne,{key:0},{head:e(()=>[s(W,null,{default:e(()=>[s(_,{component:"th",scope:"col"}),s(_,{component:"th",scope:"col"},{default:e(()=>[l(a(t.$t("general.name")),1)]),_:1}),s(_,{component:"th",scope:"col"},{default:e(()=>[l(a(t.$t("team.role")),1)]),_:1}),s(_,{component:"th",scope:"col"},{default:e(()=>[l(a(t.$t("team.attached_at")),1)]),_:1}),s(_,{component:"th",scope:"col"})]),_:1})]),body:e(()=>[(h(!0),y(V,null,E(n.user.workspaces,f=>(h(),b(W,{key:f.id,hoverable:!0},{default:e(()=>[s(_,{align:"left"},{default:e(()=>[$("div",fe,[s(M,{backgroundColor:f.hex_color,name:f.name,roundedClass:"rounded-lg"},null,8,["backgroundColor","name"])])]),_:2},1024),s(_,null,{default:e(()=>[$("div",null,a(f.name),1)]),_:2},1024),s(_,null,{default:e(()=>[s(q,null,{default:e(()=>[$("span",pe,a(f.pivot.role),1)]),_:2},1024)]),_:2},1024),s(_,null,{default:e(()=>[l(a(f.pivot.joined_at),1)]),_:2},1024),s(_,{align:"right"},{default:e(()=>[$("div",_e,[Y((h(),b(ie,{href:t.route(`${r(o)}.workspaces.view`,{workspace:f.uuid}),class:"mr-xs"},{default:e(()=>[s(ue)]),_:2},1032,["href"])),[[L,t.$t("general.view")]]),s(Z,{"width-classes":"w-32",placement:"bottom-end"},{trigger:e(()=>[s(re)]),content:e(()=>[s(P,{onClick:z=>v(f),as:"button"},{default:e(()=>[s(A,{class:"mr-xs"}),l(" "+a(t.$t("team.edit_role")),1)]),_:2},1032,["onClick"]),s(P,{onClick:z=>c(f),as:"button"},{default:e(()=>[s(B,{class:"text-red-500 mr-xs"}),l(" "+a(t.$t("general.detach")),1)]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(h(),b(oe,{key:1}))]),_:1}),s(T,{show:p.value!==null,"max-width":"md","scrollable-body":!0,closeable:!0,onClose:u},{header:e(()=>[l(a(t.$t("team.edit_role_on"))+" ",1),$("strong",null,a(p.value.name),1),l(" "+a(t.$t("workspace.workspaces")),1)]),body:e(()=>[s(O,{modelValue:r(i).role,"onUpdate:modelValue":g[0]||(g[0]=f=>r(i).role=f),class:"mt-lg"},null,8,["modelValue"])]),footer:e(()=>[s(S,{onClick:u,class:"mr-xs"},{default:e(()=>[l(a(t.$t("general.cancel")),1)]),_:1}),s(j,{onClick:d,disabled:r(i).processing,isLoading:r(i).processing},{default:e(()=>[l(a(t.$t("general.update")),1)]),_:1},8,["disabled","isLoading"])]),_:1},8,["show"])],64)}}},$e={class:"w-full mx-auto row-py"},ke={class:"flex items-center"},ve={class:"row-px"},ge={class:"md:max-w-2xl"},we={class:"mt-lg"},be=H({layout:ae}),Oe=Object.assign(be,{__name:"View",props:{user:{type:Object}},setup(n){const k=n,{t:o}=J(),m=w("routePrefix"),p=w("confirmation"),i=o("user.view_user"),{notify:v}=te(),{user:u}=K(),c=()=>{p().title(o("user.delete_users")).description(o("user.confirm_delete_user")).destructive().onConfirm(d=>{d.isLoading(!0),N.delete(route(`${m}.users.delete`,{user:k.user.id}),{onSuccess(t){t.props.flash.error||v("success",o("user.user_deleted"))},onFinish(){d.isLoading(!1)}})}).show()};return(d,t)=>(h(),y(V,null,[s(r(Q),{title:r(i)},null,8,["title"]),$("div",$e,[s(le,{title:r(i)},{description:e(()=>[l(a(n.user.name),1)]),default:e(()=>[$("div",ke,[s(r(X),{href:d.route(`${r(m)}.users.edit`,{user:n.user.id}),class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:e(()=>[s(j,{size:"sm"},{icon:e(()=>[s(A)]),default:e(()=>[l(" "+a(r(o)("general.edit")),1)]),_:1})]),_:1},8,["href"]),r(u).id!==n.user.id?(h(),b(ee,{key:0,onClick:c,size:"sm"},{icon:e(()=>[s(B)]),_:1})):se("",!0)])]),_:1},8,["title"]),$("div",ve,[s(R,null,{title:e(()=>[l(a(r(o)("user.user_details")),1)]),default:e(()=>[$("div",ge,[s(C,null,{title:e(()=>[l(a(r(o)("general.name")),1)]),default:e(()=>[l(" "+a(n.user.name),1)]),_:1}),s(C,{class:"mt-md"},{title:e(()=>[l(a(r(o)("general.email")),1)]),default:e(()=>[l(" "+a(n.user.email),1)]),_:1}),s(C,{class:"mt-md"},{title:e(()=>[l(a(r(o)("general.created_at")),1)]),default:e(()=>[l(" "+a(n.user.created_at),1)]),_:1}),s(C,{class:"mt-md"},{title:e(()=>[l(a(r(o)("user.system_admin")),1)]),default:e(()=>[l(" "+a(n.user.is_admin?r(o)("general.yes"):r(o)("general.no")),1)]),_:1})])]),_:1}),$("div",we,[s(he,{user:n.user},null,8,["user"])])])])],64))}});export{Oe as default};
