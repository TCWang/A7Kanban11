import{_ as l}from"./nuxt-img.321df2ee.js";import{o as r,c as i,b as o,a,t as c,d as p,_ as f,w as x,u as h,f as b,g as $,h as _,i as g}from"./entry.f14d371e.js";import{_ as k}from"./nuxt-link.526c3955.js";import{u as w}from"./useMedias.84bd4f77.js";import{u as v}from"./vue.f36acd1f.b4e5b5c1.js";const N={class:"container flex flex-col md:flex-row"},y={class:"md:w-2/3"},B={class:"mt-1"},M=["href"],V={__name:"Hero",props:{media:Object},setup(e){return(n,t)=>{const s=l;return r(),i("div",N,[o(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/media/${e.media.figure}`,class:"w-[150px] h-[150px] md:w-[200px] md:h-[200px] px-1 md:px-4",alt:""},null,8,["src"]),a("div",y,[a("h1",B,c(e.media.title),1),a("p",null,"類別: "+c(e.media.category),1),a("p",null,[p(" 網站: "),a("a",{href:e.media.link},c(e.media.title),9,M)])])])}}},j=V,C={},H={class:"container mb-4 mr-8 flex justify-end"},q=a("button",{class:"btn btn-primary"},"回列表清單",-1);function D(e,n){const t=k;return r(),i("div",H,[o(t,{to:"/media"},{default:x(()=>[q]),_:1})])}const E=f(C,[["render",D]]),I={key:0},A={__name:"[name]",setup(e){const{medias:n}=w(),t=h(),s=b(()=>n.find(m=>m.title===t.params.name));if(!s.value)throw $({statusCode:404,message:`Media  with name of ${t.params.name} does not exist`});return v({title:`影音媒體:${t.params.name}`}),(m,L)=>{const d=j,u=E;return _(s)?(r(),i("div",I,[o(d,{media:_(s)},null,8,["media"]),o(u)])):g("",!0)}}};export{A as default};
