import{_ as d}from"./nuxt-img.31cfb21a.js";import{o as a,c as _,b as i,a as t,t as o,d as p,_ as f,w as x,u as h,f as y,g as q,h as c,i as b}from"./entry.7db1413c.js";import{_ as $}from"./nuxt-link.81a49b0a.js";import{u as w}from"./useInquirys.6db11c75.js";import{u as g}from"./vue.f36acd1f.aa42c072.js";const v={class:"mt-2 flex flex-col md:flex-row"},k={class:"md:w-2/3"},N={class:"mt-1"},I={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},B={class:"flex-col"},V={class:""},j={class:""},C=["href"],H={__name:"Hero",props:{inquiry:Object},setup(e){return(r,n)=>{const s=d;return a(),_("div",v,[i(s,{src:`/images/inquiry/${e.inquiry.figure}`,class:"w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4",alt:""},null,8,["src"]),t("div",k,[t("h1",N,o(e.inquiry.title),1),t("div",I,[t("div",B,[t("p",V,"類別: "+o(e.inquiry.category),1),t("p",j,[p(" 網站: "),t("a",{href:e.inquiry.link},o(e.inquiry.title),9,C)])])])])])}}},D=H,E={},L={class:"container mb-4 mr-8 flex justify-end"},O=t("button",{class:"btn btn-primary"},"回列表清單",-1);function R(e,r){const n=$;return a(),_("div",L,[i(n,{to:"/inquiry"},{default:x(()=>[O]),_:1})])}const S=f(E,[["render",R]]),T={key:0},M={__name:"[name]",setup(e){const{inquirys:r}=w(),n=h(),s=y(()=>r.find(u=>u.title===n.params.name));if(!s.value)throw q({statusCode:404,message:`Inquiry  with name of ${n.params.name} does not exist`});return g({title:`生活查詢:${n.params.name}`}),(u,z)=>{const m=D,l=S;return c(s)?(a(),_("div",T,[t("h1",null,o(c(s).title),1),i(m,{inquiry:c(s)},null,8,["inquiry"]),i(l)])):b("",!0)}}};export{M as default};