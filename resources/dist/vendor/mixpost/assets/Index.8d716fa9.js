import{u as U,I as A,J as M,cb as R,ad as W,ae as S,l as k,ak as B,c as _,a as e,b as o,e as O,w as t,h as I,F as P,m as w,o as n,Z as z,f as m,t as u,j as J,a4 as Y,i as Z,S as q,g as b,aB as T,r as G,Y as H}from"./app.af17fce1.js";import{u as K}from"./useRouter.79115767.js";import{u as Q}from"./useSelectable.79aa5ce8.js";import{_ as X}from"./PageHeader.fa50e47e.js";import{_ as ee}from"./Panel.46137120.js";import{_ as j}from"./Checkbox.6f71d79b.js";import{T as oe,a as te,_ as i}from"./TableCell.387d3662.js";import{_ as se}from"./PureDangerButton.27630a26.js";import{_ as ae}from"./SelectableBar.4086aab5.js";import{_ as re}from"./Pagination.e1cebd0e.js";import{_ as ce}from"./NoResult.ab0b21a6.js";import{T as le}from"./Trash.ee5d54c5.js";import{_ as ne}from"./WebhookItem.b3a0a4d8.js";import"./Flex.16a0de6f.js";import"./ChevronLeft.bc8c49ce.js";import"./PureButtonLink.dbcc593f.js";import"./DropdownButton.19db68d6.js";import"./EllipsisVertical.42e3e8f4.js";import"./QueueList.3a1b730e.js";const ie={class:"w-full mx-auto row-py"},de={class:"w-full row-px mt-lg"},me={key:0,class:"mt-lg"},Ie={__name:"Index",props:{filter:{type:Object,default:{}},records:{type:Object}},setup(r){const f=r,{t:a}=U(),v=w("routePrefix"),p=w("workspaceCtx"),N=w("confirmation"),{selectedRecords:d,putPageRecords:x,toggleSelectRecordsOnPage:h,deselectRecord:g,deselectAllRecords:$}=Q(),{onError:V}=K(),y=A({keyword:f.filter.keyword}),C=()=>f.records.data.map(s=>s.id),E=()=>{N().title(a("webhook.delete_webhooks")).description(a("webhook.delete_webhooks_confirm")).destructive().onConfirm(s=>{D(s)}).show()},D=s=>{s.isLoading(!0),B.delete(route(`${v}.webhooks.deleteMultiple`,{workspace:p.id}),{data:{webhooks:d.value},preserveScroll:!0,onSuccess(){s.reset(),$()},onError(c){V(c,()=>{D(s)})},onFinish(){s.isLoading(!1)}})};return M(()=>{x(C()),R.on("webhookDeleted",s=>{g(s)})}),W(()=>{R.off("webhookDeleted")}),S(()=>k.exports.cloneDeep(y.value),k.exports.throttle(()=>{B.get(route("mixpost.webhooks.index",{workspace:p.id}),k.exports.pickBy(y.value),{preserveState:!0,only:["records","filter"]})},300)),S(()=>f.records.data,()=>{x(C())}),(s,c)=>{const F=H("tooltip");return n(),_(P,null,[e(o(z),{title:o(a)("webhook.webhooks")},null,8,["title"]),O("div",ie,[e(X,{title:o(a)("webhook.webhooks")},{description:t(()=>[m(u(o(a)("webhook.webhooks_desc")),1)]),_:1},8,["title"]),O("div",de,[e(o(Z),{href:s.route(`${o(v)}.webhooks.create`,{workspace:o(p).id})},{default:t(()=>[e(J,{size:"sm"},{icon:t(()=>[e(Y)]),default:t(()=>[m(" "+u(o(a)("webhook.create_webhook")),1)]),_:1})]),_:1},8,["href"]),e(ae,{count:o(d).length,onClose:o($)},{default:t(()=>[q((n(),b(se,{onClick:E},{default:t(()=>[e(le)]),_:1})),[[F,o(a)("general.delete")]])]),_:1},8,["count","onClose"]),e(ee,{"with-padding":!1,class:"mt-lg"},{default:t(()=>[e(oe,null,{head:t(()=>[e(te,null,{default:t(()=>[e(i,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[e(j,{checked:o(h),"onUpdate:checked":c[0]||(c[0]=l=>T(h)?h.value=l:null),disabled:!r.records.meta.total},null,8,["checked","disabled"])]),_:1}),e(i,{component:"th",scope:"col",class:"w-10"}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("general.name")),1)]),_:1}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("webhook.callback_url")),1)]),_:1}),e(i,{component:"th",scope:"col"},{default:t(()=>[m(u(o(a)("post.status")),1)]),_:1}),e(i,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(n(!0),_(P,null,G(r.records.data,l=>(n(),b(ne,{key:l.id,item:l,onOnDelete:()=>{o(g)(l.id)}},{checkbox:t(()=>[e(j,{checked:o(d),"onUpdate:checked":c[1]||(c[1]=L=>T(d)?d.value=L:null),value:l.id},null,8,["checked","value"])]),_:2},1032,["item","onOnDelete"]))),128))]),_:1}),r.records.meta.total?I("",!0):(n(),b(ce,{key:0,class:"py-md px-md"}))]),_:1}),r.records.meta.links.length>3?(n(),_("div",me,[e(re,{meta:r.records.meta,links:r.records.links},null,8,["meta","links"])])):I("",!0)])])],64)}}};export{Ie as default};