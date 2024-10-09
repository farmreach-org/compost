import{H as Z,B as P,Q as q,o as n,g as $,w as e,a as t,y as G,e as k,c as v,t as l,h as _,b as s,f as r,F as B,r as I,A as J,R as L,a8 as K,ac as X,a0 as z,u as Y,aB as ee,C as te,c5 as T,ae as se,af as U,l as R,U as j,ce as ae,m as le,Z as oe,aw as S,a1 as ie,bq as ne,n as re}from"./app.17a8bbe4.js";import{u as ue}from"./useSelectable.a2aaee50.js";import{_ as ce}from"./PageHeader.cbe4fcaf.js";import{_ as F,a as de}from"./PostsFilter.95c1f2d3.js";import{T as me,_ as V}from"./Tab.46ca3863.js";import{_ as fe}from"./Panel.1e5e6be2.js";import{_ as M}from"./Checkbox.dc42ffe0.js";import{_ as m,a as E,T as pe}from"./TableCell.5981e30d.js";import{_ as ve}from"./PureDangerButton.0dbbc01d.js";import{u as _e}from"./usePostVersions.ae0fd213.js";import{_ as he}from"./MediaFile.b8493171.js";import{u as ge,_ as N,c as ke,b as $e,a as xe}from"./VerticallyScrollableContent.986b6fa1.js";import{a as be,_ as we}from"./DropdownItem.409573e1.js";import{_ as A}from"./Account.137965b4.js";import{_ as ye}from"./Badge.82f1358a.js";import{_ as Ce}from"./SelectableBar.54da362b.js";import{_ as Ve}from"./Pagination.963a6d77.js";import{_ as Be}from"./NoResult.a422d351.js";import{T as De}from"./Trash.0f2ffd20.js";import"./Flex.4b1efe4e.js";import"./PureButtonLink.d6da9c4f.js";import"./EllipsisVertical.4969c8de.js";import"./PencilSquare.b8b4716b.js";import"./ProviderIcon.950fa870.js";import"./SearchInput.1ad6cb85.js";import"./ExclamationCircle.dd1367ec.js";import"./Variable.97fafecd.js";import"./index.92d9ef89.js";import"./EditorReadOnly.7f8139e9.js";import"./Alert.43894852.js";import"./Refresh.b96d0217.js";import"./Avatar.0b768219.js";import"./ArrowTopRightOnSquare.98b36170.js";import"./ColorPicker.a12f73e5.js";import"./ChevronLeft.fe9869cf.js";const Ie={class:"w-44"},Oe={key:0,class:"text-sm mt-xs text-gray-500"},Re={key:1,class:"text-sm mt-xs text-gray-500"},Pe={class:"w-96 text-left break-words"},Te={key:0,class:"w-48 flex relative"},Ue={key:0,class:"absolute top-0 -right-5 z-10"},je={class:"flex flex-wrap gap-xs"},Se={class:"flex gap-xs"},Fe={class:"mr-xs"},Me={class:"text-left"},Ne={class:"mr-xs flex items-center"},Ae={__name:"PostItem",props:{item:{type:Object,required:!0},filter:{type:Object,default:{accounts:[]}}},setup(a){const d=a,{getOriginalVersion:o,getAccountVersion:f}=_e(),{setupURLMetaForAllVersions:O}=ge(),p=Z(()=>{if(!d.item.versions.length)return{excerpt:"",media:null,media_count:0};let x=d.item.accounts;d.filter.accounts.length&&(x=x.filter(u=>d.filter.accounts.includes(u.id)));const C=x.map(u=>{const h=f(d.item.versions,u.id);return h?h.content[0]:o(d.item.versions).content[0]}),b=C.length?C[0]:d.item.versions[0].content[0];return{excerpt:b.excerpt,media:b.media.length?b.media[0]:null,media_count:b.media.length}}),w=P(!1),y=()=>{w.value=!0,O(d.item.versions)},D=()=>{w.value=!1};return(x,C)=>{const b=q("tooltip");return n(),$(E,{hoverable:!0},{default:e(()=>[t(m,{class:"w-10"},{default:e(()=>[G(x.$slots,"checkbox")]),_:3}),t(m,{clickable:!0,onClick:y},{default:e(()=>[k("div",Ie,[t(N,{value:a.item.status},null,8,["value"]),a.item.status==="scheduled"?(n(),v("div",Oe,l(a.item.scheduled_at.human),1)):_("",!0),a.item.status==="published"?(n(),v("div",Re,l(a.item.published_at.human),1)):_("",!0)])]),_:1}),t(m,{clickable:!0,onClick:y,class:"!pl-0"},{default:e(()=>[k("div",Pe,l(s(p).excerpt),1)]),_:1}),t(m,{clickable:!0,onClick:y},{default:e(()=>[s(p).media?(n(),v("div",Te,[s(p).media?(n(),$(he,{key:0,media:s(p).media,"img-height":"sm",imgWidthFull:!1},{default:e(()=>[s(p).media_count>1?(n(),v("div",Ue,[t(ye,null,{default:e(()=>[r("+"+l(s(p).media_count-1),1)]),_:1})])):_("",!0)]),_:1},8,["media"])):_("",!0)])):_("",!0)]),_:1}),t(m,{clickable:!0,onClick:y},{default:e(()=>[k("div",je,[(n(!0),v(B,null,I(a.item.tags,u=>(n(),$(ke,{key:u.id,item:u,removable:!1,editable:!1},null,8,["item"]))),128))])]),_:1}),t(m,null,{default:e(()=>[k("div",Se,[(n(!0),v(B,null,I(a.item.accounts.slice(0,3),(u,h)=>(n(),v("div",{key:u.id,class:J({"-ml-6":h>0})},[L(t(A,{provider:u.provider,name:u.name,"img-url":u.image,active:!0},null,8,["provider","name","img-url"]),[[b,u.name]])],2))),128)),a.item.accounts.length>3?(n(),$(be,{key:0,"width-classes":"w-64",placement:"bottom-end"},{trigger:e(()=>[t(K,{class:"mt-4 font-semibold"},{default:e(()=>[r("+"+l(a.item.accounts.slice(3).length),1)]),_:1})]),content:e(()=>[t($e,null,{default:e(()=>[(n(!0),v(B,null,I(a.item.accounts.slice(3),u=>(n(),$(we,{as:"div"},{default:e(()=>[k("span",Fe,[t(A,{provider:u.provider,name:u.name,"img-url":u.image,active:!0},null,8,["provider","name","img-url"])]),k("span",Me,l(u.name),1)]),_:2},1024))),256))]),_:1})]),_:1})):_("",!0)])]),_:1}),t(m,null,{default:e(()=>[r(l(a.item.user.name),1)]),_:1}),t(m,null,{default:e(()=>[t(F,{itemId:a.item.id,trashed:a.item.trashed},null,8,["itemId","trashed"])]),_:1}),t(X,{show:w.value,scrollableBody:!0,onClose:D},{body:e(()=>[t(N,{value:a.item.status,class:"mb-lg"},null,8,["value"]),w.value?(n(),$(xe,{key:0,accounts:a.item.accounts,versions:a.item.versions},null,8,["accounts","versions"])):_("",!0)]),footer:e(()=>[w.value?(n(),v(B,{key:0},[k("div",Ne,[t(F,{itemId:a.item.id,trashed:a.item.trashed},null,8,["itemId","trashed"])]),t(z,{onClick:D},{default:e(()=>[r(l(x.$t("general.close")),1)]),_:1})],64)):_("",!0)]),_:1},8,["show"])]),_:3})}}},qe={class:"row-py"},Le={class:"w-full row-px"},ze={class:"w-full row-px mt-lg"},Ee={key:0,class:"mt-lg"},Vt={__name:"Index",props:{filter:{type:Object,default:{}},posts:{type:Object},has_failed_posts:{type:Boolean,default:!1}},setup(a){const d=a,{t:o}=Y(),f=P({keyword:d.filter.keyword,status:d.filter.status,tags:d.filter.tags,accounts:d.filter.accounts}),O=ee({urlMeta:{}});ne("postCtx",O);const{selectedRecords:p,putPageRecords:w,toggleSelectRecordsOnPage:y,deselectRecord:D,deselectAllRecords:x}=ue(),C=le("workspaceCtx"),b=()=>d.posts.data.map(g=>g.id);te(()=>{w(b()),T.on("postDelete",g=>{D(g)})}),se(()=>{T.off("postDelete")}),U(()=>R.exports.cloneDeep(f.value),R.exports.throttle(()=>{j.get(route("mixpost.posts.index",{workspace:C.id}),R.exports.pickBy(f.value),{preserveState:!0,only:["posts","filter"]})},300)),U(()=>d.posts.data,()=>{w(b())});const{notify:u}=re(),h=P(!1),H=()=>{j.delete(route("mixpost.posts.deleteMultiple",{workspace:C.id}),{data:{posts:p.value,status:f.value.status},onSuccess(){x(),u("success",d.filter.status==="trash"?o("post.posts_deleted"):o("post.posts_to_trash"))},onFinish(){h.value=!1}})};return(g,i)=>{const Q=q("tooltip");return n(),v(B,null,[t(s(oe),{title:s(o)("post.posts")},null,8,["title"]),k("div",qe,[t(ce,{title:s(o)("post.posts")},{default:e(()=>[t(de,{modelValue:f.value,"onUpdate:modelValue":i[0]||(i[0]=c=>f.value=c),class:"md:ml-xs rtl:md:ml-0 rtl:md:mr-xs"},null,8,["modelValue"])]),_:1},8,["title"]),k("div",Le,[t(me,null,{default:e(()=>[t(V,{onClick:i[1]||(i[1]=c=>f.value.status=null),active:!g.$page.props.filter.status},{default:e(()=>[r(l(s(o)("general.all")),1)]),_:1},8,["active"]),t(V,{onClick:i[2]||(i[2]=c=>f.value.status="draft"),active:g.$page.props.filter.status==="draft"},{default:e(()=>[r(l(s(o)("post.drafts")),1)]),_:1},8,["active"]),t(V,{onClick:i[3]||(i[3]=c=>f.value.status="scheduled"),active:g.$page.props.filter.status==="scheduled"},{default:e(()=>[r(l(s(o)("post.scheduled")),1)]),_:1},8,["active"]),t(V,{onClick:i[4]||(i[4]=c=>f.value.status="published"),active:g.$page.props.filter.status==="published"},{default:e(()=>[r(l(s(o)("post.published")),1)]),_:1},8,["active"]),a.has_failed_posts?(n(),$(V,{key:0,onClick:i[5]||(i[5]=c=>f.value.status="failed"),active:g.$page.props.filter.status==="failed",class:"text-red-500"},{default:e(()=>[r(l(s(o)("post.failed")),1)]),_:1},8,["active"])):_("",!0),t(V,{onClick:i[6]||(i[6]=c=>f.value.status="trash"),active:g.$page.props.filter.status==="trash"},{default:e(()=>[r(l(s(o)("general.trash")),1)]),_:1},8,["active"])]),_:1})]),k("div",ze,[t(Ce,{count:s(p).length,onClose:s(x)},{default:e(()=>[L((n(),$(ve,{onClick:i[7]||(i[7]=c=>h.value=!0)},{default:e(()=>[t(De)]),_:1})),[[Q,s(o)("general.delete")]])]),_:1},8,["count","onClose"]),t(fe,{"with-padding":!1},{default:e(()=>[t(pe,null,{head:e(()=>[t(E,null,{default:e(()=>[t(m,{component:"th",scope:"col",class:"w-10"},{default:e(()=>[t(M,{checked:s(y),"onUpdate:checked":i[8]||(i[8]=c=>S(y)?y.value=c:null),disabled:!a.posts.meta.total},null,8,["checked","disabled"])]),_:1}),t(m,{component:"th",scope:"col",class:"w-44"},{default:e(()=>[r(l(s(o)("post.status")),1)]),_:1}),t(m,{component:"th",scope:"col",class:"!pl-0 text-left"},{default:e(()=>[r(l(s(o)("post.content")),1)]),_:1}),t(m,{component:"th",scope:"col",class:"w-48"},{default:e(()=>[r(l(s(o)("post.media")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(l(s(o)("post.labels")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(l(s(o)("post.accounts")),1)]),_:1}),t(m,{component:"th",scope:"col"},{default:e(()=>[r(l(s(o)("post.author")),1)]),_:1}),t(m,{component:"th",scope:"col"})]),_:1})]),body:e(()=>[(n(!0),v(B,null,I(a.posts.data,c=>(n(),$(Ae,{key:c.id,item:c,filter:a.posts.filter,onOnDelete:()=>{s(D)(c.id)}},{checkbox:e(()=>[t(M,{checked:s(p),"onUpdate:checked":i[9]||(i[9]=W=>S(p)?p.value=W:null),value:c.id},null,8,["checked","value"])]),_:2},1032,["item","filter","onOnDelete"]))),128))]),_:1}),a.posts.meta.total?_("",!0):(n(),$(Be,{key:0,class:"py-md px-md"},{default:e(()=>[r(l(s(o)("post.no_posts_found")),1)]),_:1}))]),_:1}),a.posts.meta.links.length>3?(n(),v("div",Ee,[t(Ve,{meta:a.posts.meta,links:a.posts.links},null,8,["meta","links"])])):_("",!0)])]),t(ae,{show:h.value,variant:"danger",onClose:i[11]||(i[11]=c=>h.value=!1)},{header:e(()=>[r(l(s(o)("post.delete_posts")),1)]),body:e(()=>[r(l(s(o)("post.confirmation_delete_post")),1)]),footer:e(()=>[t(z,{onClick:i[10]||(i[10]=c=>h.value=!1),class:"mr-xs rtl:mr-0 rtl:ml-xs"},{default:e(()=>[r(l(s(o)("general.cancel")),1)]),_:1}),t(ie,{onClick:H},{default:e(()=>[r(l(s(o)("general.delete")),1)]),_:1})]),_:1},8,["show"])],64)}}};export{Vt as default};