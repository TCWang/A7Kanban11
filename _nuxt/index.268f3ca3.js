import{_ as m}from"./nuxt-img.d8d02889.js";import{o,c as l,a as e,b as _,t as i,h as u,n as x,F as p,r as h,j as w,u as f,w as d}from"./entry.dbf821b5.js";import{u as g}from"./useNewss.d1c3ad8e.js";import{_ as v}from"./nuxt-error-boundary.aa0e0217.js";import{u as $}from"./vue.f36acd1f.3d31b757.js";const b={class:"flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md"},k={class:"p-4 flex flex-col"},C={class:"mt-auto"},N={class:""},y=["href"],B={__name:"Card",props:{news:Object},setup(t){return(s,a)=>{const c=m;return o(),l("div",{class:"flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[160px] md:w-[200px] h-[180px] md:h-[200px]",onClick:a[0]||(a[0]=r=>("navigateTo"in s?s.navigateTo:u(x))(`/news/${t.news.title}`))},[e("div",b,[_(c,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/news/${t.news.figure}`,alt:"",class:"w-[80px] md:w-[120px] h-[100px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),e("div",k,[e("div",null,[e("p",C,"類別: "+i(t.news.category),1),e("h3",N,[e("a",{href:t.news.link},i(t.news.title),9,y)])])])])])}}},j=B,S={class:"flex flex-row flex-wrap"},T={__name:"Cards",setup(t){const{newss:s}=g();return(a,c)=>{const r=j;return o(),l("div",S,[(o(!0),l(p,null,h(u(s),n=>(o(),w(r,{key:n.no,news:n},null,8,["news"]))),128))])}}},q=T,E={class:"container"},F=e("h1",null,"新聞雜誌",-1),V={class:"text-center mx-auto flex flex-col"},z=e("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),D=["onClick"],A={__name:"index",setup(t){return f(),$({title:"資訊匯總-新聞雜誌"}),(s,a)=>{const c=q,r=v;return o(),l("div",E,[_(r,null,{error:d(({error:n})=>[e("div",V,[z,e("code",null,i(n),1),e("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:G=>n.value=null}," Go Back ",8,D)])]),default:d(()=>[F,_(c)]),_:1})])}}};export{A as default};
