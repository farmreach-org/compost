import{d as L,u as U,I as A,J as M,cb as D,ad as W,ae as C,l as _,ak as O,c as h,a as e,b as o,e as R,w as t,h as S,F as B,o as n,Z as z,f as m,t as u,j as J,a4 as Y,i as Z,S as q,g as k,aB as j,r as G,m as I,Y as H}from"./app.af17fce1.js";import{u as K}from"./useRouter.79115767.js";import{u as Q}from"./useSelectable.79aa5ce8.js";import{_ as X}from"./Admin.ea7882ea.js";import{_ as ee}from"./PageHeader.fa50e47e.js";import{_ as oe}from"./Panel.46137120.js";import{_ as P}from"./Checkbox.6f71d79b.js";import{T as te,a as se,_ as i}from"./TableCell.387d3662.js";import{_ as ae}from"./PureDangerButton.27630a26.js";import{_ as re}from"./SelectableBar.4086aab5.js";import{_ as le}from"./Pagination.e1cebd0e.js";import{_ as ce}from"./NoResult.ab0b21a6.js";import{T as ne}from"./Trash.ee5d54c5.js";import{_ as ie}from"./WebhookItem.b3a0a4d8.js";import"./QueueList.3a1b730e.js";import"./Flex.16a0de6f.js";import"./ChevronLeft.bc8c49ce.js";import"./PureButtonLink.dbcc593f.js";import"./DropdownButton.19db68d6.js";import"./EllipsisVertical.42e3e8f4.js";const de={class:"w-full mx-auto row-py"},me={class:"w-full row-px mt-lg"},ue={key:0,class:"mt-lg"},fe=L({layout:X}),Te=Object.assign(fe,{__name:"Index",props:{filter:{type:Object,default:{}},records:{type:Object}},setup(r){const f=r,{t:a}=U(),b=I("routePrefix"),T=I("confirmation"),{selectedRecords:d,putPageRecords:w,toggleSelectRecordsOnPage:p,deselectRecord:v,deselectAllRecords:y}=Q(),{onError:N}=K(),g=A({keyword:f.filter.keyword}),x=()=>f.records.data.map(s=>s.id),V=()=>{T().title(a("webhook.delete_webhooks")).description(a("webhook.delete_webhooks_confirm")).destructive().onConfirm(s=>{$(s)}).show()},$=s=>{s.isLoading(!0),O.delete(route(`${b}.system.webhooks.deleteMultiple`),{data:{webhooks:d.value},preserveScroll:!0,onSuccess(){s.reset(),y()},onError(l){N(l,()=>{$(s)})},onFinish(){s.isLoading(!1)}})};return M(()=>{w(x()),D.on("webhookDeleted",s=>{v(s)})}),W(()=>{D.off("webhookDeleted")}),C(()=>_.exports.cloneDeep(g.value),_.exports.throttle(()=>{O.get(route("mixpost.system.webhooks.index"),_.exports.pickBy(g.value),{preserveState:!0,only:["records","filter"]})},300)),C(()=>f.records.data,()=>{w(x())}),(s,l)=>{const E=H("tooltip");return n(),h(B,null,[e(o(z),{title:o(a)("webhook.webhooks")},null,8,["title"]),R("div",de,[e(ee,{title:o(a)("webhook.webhooks")},{description:t(()=>[m(u(o(a)("webhook.webhooks_desc")),1)]),_:1},8,["title"]),R("div",me,[e(o(Z),{href:s.route(`${o(b)}.system.webhooks.create`)},{default:t(()=>[e(J,{size:"sm"},{icon:t(()=>[e(Y)]),default:t(()=>[m(" "+u(o(a)("webhook.create_webhook")),1)]),_:1})]),_:1},8,["href"]),e(re,{count:o(d).length,onClose:o(y)},{default:t(()=>[q((n(),k(ae,{onClick:V},{default:t(()=>[e(ne)]),_:1})),[[E,o(a)("general.delete")]])]),_:1},8,["count","onClose"]),e(oe,{"with-padding":!1,class:"mt-lg"},{default:t(()=>[e(te,null,{head:t(()=>[e(se,null,{default:t(()=>[e(i,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[e(P,{checked:o(p),"onUpdate:checked":l[0]||(l[0]=c=>j(p)?p.value=c:null),disabled:!r.records.meta.total},null,8,["checked","disabled"])]),_:1}),e(i,{component:"th",scope:"col",class:"w-10"}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("general.name")),1)]),_:1}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("webhook.callback_url")),1)]),_:1}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("post.status")),1)]),_:1}),e(i,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(n(!0),h(B,null,G(r.records.data,c=>(n(),k(ie,{key:c.id,item:c,onOnDelete:()=>{o(v)(c.id)}},{checkbox:t(()=>[e(P,{checked:o(d),"onUpdate:checked":l[1]||(l[1]=F=>j(d)?d.value=F:null),value:c.id},null,8,["checked","value"])]),_:2},1032,["item","onOnDelete"]))),128))]),_:1}),r.records.meta.total?S("",!0):(n(),k(ce,{key:0,class:"py-md px-md"}))]),_:1}),r.records.meta.links.length>3?(n(),h("div",ue,[e(le,{meta:r.records.meta,links:r.records.links},null,8,["meta","links"])])):S("",!0)])])],64)}}});export{Te as default};
