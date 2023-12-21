import{_ as d}from"./nuxt-img.bcacf876.js";import{o as r,c as _,b as c,a as t,t as o,d as p,_ as f,w as x,u as h,f as y,g as q,h as a,i as b}from"./entry.b2f74caf.js";import{_ as g}from"./nuxt-link.f49cb3ee.js";import{u as $}from"./useInquirys.56a32417.js";import{u as k}from"./vue.f36acd1f.c8281fbb.js";const w={class:"mt-2 flex flex-col md:flex-row"},v={class:"md:w-2/3"},N={class:"mt-1"},I={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},j={class:"flex-col"},B={class:""},V={class:""},C=["href"],H={__name:"Hero",props:{inquiry:Object},setup(e){return(i,s)=>{const n=d;return r(),_("div",w,[c(n,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/inquiry/${e.inquiry.figure}`,class:"w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4",alt:""},null,8,["src"]),t("div",v,[t("h1",N,o(e.inquiry.title),1),t("div",I,[t("div",j,[t("p",B,"類別: "+o(e.inquiry.category),1),t("p",V,[p(" 網站: "),t("a",{href:e.inquiry.link},o(e.inquiry.title),9,C)])])])])])}}},D=H,E={},L={class:"container mb-4 mr-8 flex justify-end"},O=t("button",{class:"btn btn-primary"},"回列表清單",-1);function R(e,i){const s=g;return r(),_("div",L,[c(s,{to:"/inquiry"},{default:x(()=>[O]),_:1})])}const S=f(E,[["render",R]]),T={key:0},M={__name:"[name]",setup(e){const{inquirys:i}=$(),s=h(),n=y(()=>i.find(u=>u.title===s.params.name));if(!n.value)throw q({statusCode:404,message:`Inquiry  with name of ${s.params.name} does not exist`});return k({title:`生活查詢:${s.params.name}`}),(u,z)=>{const m=D,l=S;return a(n)?(r(),_("div",T,[t("h1",null,o(a(n).title),1),c(m,{inquiry:a(n)},null,8,["inquiry"]),c(l)])):b("",!0)}}};export{M as default};
