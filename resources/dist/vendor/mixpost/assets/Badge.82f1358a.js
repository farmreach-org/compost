import{H as n,o as s,c as o,y as c,A as l,b as g}from"./app.17a8bbe4.js";const u={__name:"Badge",props:{variant:{type:String,default:"neutral"}},setup(e){const r=e,t=n(()=>({neutral:"bg-gray-100 text-gray-800",dark:"bg-gray-800 text-gray-100",info:"bg-cyan-100 text-cyan-800",success:"bg-lime-100 text-lime-600",warning:"bg-orange-100 text-orange-600",error:"bg-red-100 text-red-600"})[r.variant]);return(a,i)=>(s(),o("span",{class:l([g(t),"px-2 inline-flex items-center rounded-md"])},[c(a.$slots,"default")],2))}};export{u as _};