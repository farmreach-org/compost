import{d as k,u as x,c as m,a as t,b as i,e as c,w as e,F as z,o as _,Z as w,j as H,f as a,t as l,am as f,h,g as T,n as M}from"./app.af17fce1.js";import{_ as S}from"./Admin.ea7882ea.js";import{_ as q}from"./PageHeader.fa50e47e.js";import{_ as g}from"./Panel.46137120.js";import{T as b,a as d,_ as n}from"./TableCell.387d3662.js";import{C as B}from"./Clipboard.4340ad3d.js";import"./QueueList.3a1b730e.js";import"./Flex.16a0de6f.js";const C={class:"w-full mx-auto row-py"},L={class:"mt-lg row-px w-full"},N={key:0},j={class:"block"},E={key:1},P={class:"block"},V={key:2},O={class:"block"},D=["innerHTML"],F={key:0},I={key:1},Z={class:"block"},A={class:"block"},G=["innerHTML"],J=k({layout:S}),se=Object.assign(J,{__name:"Status",props:{env:String,debug:Boolean,horizon_status:String,has_queue_connection:Boolean,last_scheduled_run:Object,base_path:String,disk:String,log_channel:String,user_agent:String,versions:Object},setup(o){const r=o,{t:s}=x(),{notify:v}=M(),y=s("system.system_status"),p=()=>{let u=`## ${s("system.describe_your_issue")}

--- 
`;return u+=`## ${s("system.health")}

`,u+=`**${s("system.environment")}**: ${r.env} 
`,u+=`**${s("system.debug_mode")}**: ${r.debug?s("general.enabled"):s("general.disabled")} 
`,u+=`**Horizon**: ${s("system."+r.horizon_status)} 
`,u+=`**${s("system.queue_connection")}**: ${r.has_queue_connection?s("general.ok"):s("system.not_ok")} 
`,u+=`**${s("system.schedule")}**: ${r.last_scheduled_run.message} 
`,u+=`
`,u+=`## ${s("system.technical_details")}:

`,u+=`**${s("system.app_directory")}**: ${r.base_path} 
`,u+=`**${s("system.upload_media_disk")}**: ${r.disk} 
`,u+=`**${s("system.log_channel")}**: ${r.log_channel} 
`,u+=`**${s("system.user_agent")}**: ${r.user_agent} 
`,u+=`**PHP**: ${r.versions.php} 
`,u+=`**Laravel**: ${r.versions.laravel} 
`,u+=`**Horizon**: ${r.versions.horizon} 
`,u+=`**Mixpost**: ${r.versions.mixpost} 
`,r.versions.mixpost_enterprise&&(u+=`**Mixpost Enterprise**: ${r.versions.mixpost_enterprise} 
`),u},$=()=>{navigator.clipboard.writeText(p()).then(()=>{v("success",s("system.info_copied"))}).catch(()=>{v("error",s("system.error_copy_info"))})};return(u,K)=>(_(),m(z,null,[t(i(w),{title:i(y)},null,8,["title"]),c("div",C,[t(q,{title:i(y)},{default:e(()=>[t(H,{onClick:$,size:"md"},{default:e(()=>[t(B,{class:"mr-xs"}),a(" "+l(i(s)("system.copy")),1)]),_:1})]),_:1},8,["title"]),c("div",L,[t(g,null,{title:e(()=>[a(l(i(s)("system.health")),1)]),default:e(()=>[t(b,null,{body:e(()=>[t(d,{hoverable:!0},{default:e(()=>[t(n,null,{default:e(()=>[t(f,{variant:o.env==="production"?"success":"warning"},{default:e(()=>[a("Environment")]),_:1},8,["variant"])]),_:1}),t(n,null,{default:e(()=>[a(l(o.env),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,null,{default:e(()=>[t(f,{variant:o.debug?"warning":"success"},{default:e(()=>[a("Debug Mode")]),_:1},8,["variant"])]),_:1}),t(n,null,{default:e(()=>[a(l(o.debug?i(s)("general.enabled"):i(s)("general.disabled")),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,null,{default:e(()=>[t(f,{variant:o.horizon_status==="active"?"success":o.horizon_status==="paused"?"warning":"error"},{default:e(()=>[a(" Horizon ")]),_:1},8,["variant"])]),_:1}),t(n,null,{default:e(()=>[o.horizon_status==="active"?(_(),m("span",N,[c("span",j,l(i(s)("system.active")),1)])):h("",!0),o.horizon_status==="paused"?(_(),m("span",E,[c("span",P,l(i(s)("system.paused")),1)])):h("",!0),o.horizon_status==="inactive"?(_(),m("span",V,[c("span",O,l(i(s)("system.inactive")),1),c("span",{innerHTML:i(s)("util.read_doc",{href:`${u.$page.props.mixpost.docs_link}/${o.versions.mixpost_enterprise?"enterprise/installation/laravel-package#6-install-horizon":"pro/installation/laravel-package#5-install-horizon"}`})},null,8,D)])):h("",!0)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,null,{default:e(()=>[t(f,{variant:o.has_queue_connection?"success":"error"},{default:e(()=>[a(l(i(s)("system.queue_connection")),1)]),_:1},8,["variant"])]),_:1}),t(n,null,{default:e(()=>[o.has_queue_connection?(_(),m("span",F,l(i(s)("system.connection_settings_redis_exist")),1)):(_(),m("span",I,[c("span",Z,l(i(s)("system.no_queue_connection")),1),c("span",A,l(i(s)("system.config_connection")),1),c("span",{innerHTML:i(s)("util.read_doc",{href:`${u.$page.props.mixpost.docs_link}/${o.versions.mixpost_enterprise?"enterprise/installation/laravel-package#6-install-horizon":"pro/installation/laravel-package#5-install-horizon"}`})},null,8,G)]))]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,null,{default:e(()=>[t(f,{variant:o.last_scheduled_run.variant},{default:e(()=>[a(l(i(s)("system.schedule")),1)]),_:1},8,["variant"])]),_:1}),t(n,null,{default:e(()=>[a(l(o.last_scheduled_run.message),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(g,{class:"mt-lg"},{title:e(()=>[a(l(i(s)("system.technical_details")),1)]),default:e(()=>[t(b,null,{body:e(()=>[t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(l(i(s)("system.app_directory")),1)]),_:1}),t(n,null,{default:e(()=>[a(l(o.base_path),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(l(i(s)("system.upload_media_disk")),1)]),_:1}),t(n,null,{default:e(()=>[a(l(o.disk),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(l(i(s)("system.log_channel")),1)]),_:1}),t(n,null,{default:e(()=>[a(l(o.log_channel),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(l(i(s)("system.user_agent")),1)]),_:1}),t(n,null,{default:e(()=>[a(l(o.user_agent),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(" PHP ")]),_:1}),t(n,null,{default:e(()=>[a(l(o.versions.php),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(" Laravel ")]),_:1}),t(n,null,{default:e(()=>[a(l(o.versions.laravel),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(" Horizon ")]),_:1}),t(n,null,{default:e(()=>[a(l(o.versions.horizon),1)]),_:1})]),_:1}),t(d,{hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(" Mixpost ")]),_:1}),t(n,null,{default:e(()=>[a(l(o.versions.mixpost),1)]),_:1})]),_:1}),o.versions.mixpost_enterprise?(_(),T(d,{key:0,hoverable:!0},{default:e(()=>[t(n,{class:"font-medium"},{default:e(()=>[a(" Mixpost Enterprise ")]),_:1}),t(n,null,{default:e(()=>[a(l(o.versions.mixpost_enterprise),1)]),_:1})]),_:1})):h("",!0)]),_:1})]),_:1})])])],64))}});export{se as default};
