import{_ as u}from"./nuxt-img.5d11114d.js";import{o as s,c as r,a as e,b as i,t as _,h as m,n as x,F as p,r as h,j as f,u as b,w as d}from"./entry.f698425c.js";import{u as g}from"./useMobiles.bb6afd1a.js";import{_ as v}from"./nuxt-error-boundary.f0337987.js";import{u as w}from"./vue.f36acd1f.5e7e06f9.js";const $={class:"flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md"},k={class:"p-4 flex flex-col"},C={class:"mt-auto"},y={class:""},B=["href"],N={__name:"Card",props:{mobile:Object},setup(t){return(o,a)=>{const l=u;return s(),r("div",{class:"flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-[160px] md:w-[200px] h-[180px] md:h-[200px]",onClick:a[0]||(a[0]=c=>("navigateTo"in o?o.navigateTo:m(x))(`/mobile/${t.mobile.title}`))},[e("div",$,[i(l,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/mobile/${t.mobile.figure}`,alt:"",class:"w-[80px] md:w-[120px] h-[100px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),e("div",k,[e("div",null,[e("p",C,"類別: "+_(t.mobile.category),1),e("h3",y,[e("a",{href:t.mobile.link},_(t.mobile.title),9,B)])])])])])}}},j=N,M={class:"flex flex-row flex-wrap"},S={__name:"Cards",setup(t){const{mobiles:o}=g();return(a,l)=>{const c=j;return s(),r("div",M,[(s(!0),r(p,null,h(m(o),n=>(s(),f(c,{key:n.no,mobile:n},null,8,["mobile"]))),128))])}}},T=S,q={class:"container"},E=e("h1",null,"手機軟件",-1),F={class:"text-center mx-auto flex flex-col"},V=e("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),z=["onClick"],R={__name:"index",setup(t){return b(),w({title:"資訊匯總-手機軟件"}),(o,a)=>{const l=T,c=v;return s(),r("div",q,[i(c,null,{error:d(({error:n})=>[e("div",F,[V,e("code",null,_(n),1),e("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:D=>n.value=null}," Go Back ",8,z)])]),default:d(()=>[E,i(l)]),_:1})])}}};export{R as default};