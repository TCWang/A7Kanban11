import{_ as l}from"./nuxt-img.96b3895f.js";import{o as m,c as r,b as o,a,t as c,d as p,_ as f,w as x,u as h,f as $,g as w,h as _,i as g}from"./entry.2f50f5c7.js";import{_ as b}from"./nuxt-link.5a6aa9dc.js";import{u as k}from"./useMedias.84bd4f77.js";import{u as N}from"./vue.f36acd1f.75172413.js";const v={class:"container flex flex-col md:flex-row"},y={class:"md:w-2/3"},B={class:"mt-1"},M=["href"],V={__name:"Hero",props:{media:Object},setup(e){return(s,t)=>{const n=l;return m(),r("div",v,[o(n,{src:`/images/media/${e.media.figure}`,class:"w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4",alt:""},null,8,["src"]),a("div",y,[a("h1",B,c(e.media.title),1),a("p",null,"類別: "+c(e.media.category),1),a("p",null,[p(" 網站: "),a("a",{href:e.media.link},c(e.media.title),9,M)])])])}}},C=V,H={},j={class:"container mb-4 mr-8 flex justify-end"},D=a("button",{class:"btn btn-primary"},"回列表清單",-1);function E(e,s){const t=b;return m(),r("div",j,[o(t,{to:"/media"},{default:x(()=>[D]),_:1})])}const I=f(H,[["render",E]]),L={key:0},A={__name:"[name]",setup(e){const{medias:s}=k(),t=h(),n=$(()=>s.find(i=>i.title===t.params.name));if(!n.value)throw w({statusCode:404,message:`Media  with name of ${t.params.name} does not exist`});return N({title:`影音媒體:${t.params.name}`}),(i,O)=>{const d=C,u=I;return _(n)?(m(),r("div",L,[o(d,{media:_(n)},null,8,["media"]),o(u)])):g("",!0)}}};export{A as default};