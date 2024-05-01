import{_ as m}from"./nuxt-img.83b478ae.js";import{o as s,c,a as e,b as l,t as u,h as d,n as x,F as p,r as h,j as f,u as y,w as _}from"./entry.a1284494.js";import{u as g}from"./useInquirys.6db11c75.js";import{_ as v}from"./nuxt-error-boundary.e2a360de.js";import{u as w}from"./vue.f36acd1f.2fac6f30.js";const $={class:"flex flex-col h-full bg-zinc-100 rounded-2xl shadow-md"},q={class:"p-4 flex flex-col"},b={class:"mt-auto"},k={class:"bg-blue-200 hover:bolder-red px-3 py-2 rounded text-lg"},C=["href"],B={__name:"Card",props:{inquiry:Object},setup(t){return(n,r)=>{const i=m;return s(),c("div",{class:"flex-row flex-wrap shadow border-hidden mb-1 cursor-pointer w-1/2 md:w-1/4 lg:1/6 h-[200px] md:h-[220px]",onClick:r[0]||(r[0]=a=>("navigateTo"in n?n.navigateTo:d(x))(`/inquiry/${t.inquiry.title}`))},[e("div",$,[l(i,{src:`/images/inquiry/${t.inquiry.figure}`,alt:"",class:"ml-4 w-[80px] md:w-[120px] h-[100px] md:h-[120px] rounded-xl transform hover:scale-110 duration-200"},null,8,["src"]),e("div",q,[e("div",null,[e("p",b,"類別: "+u(t.inquiry.category),1),e("p",k,[e("a",{href:t.inquiry.link},u(t.inquiry.title),9,C)])])])])])}}},I=B,N={class:"flex flex-row flex-wrap"},S={__name:"Cards",setup(t){const{inquirys:n}=g();return(r,i)=>{const a=I;return s(),c("div",N,[(s(!0),c(p,null,h(d(n),o=>(s(),f(a,{key:o.no,inquiry:o},null,8,["inquiry"]))),128))])}}},T=S,j={class:"container"},E=e("h1",null,"生活查詢",-1),F={class:"text-center mx-auto flex flex-col"},V=e("h1",{class:"text-5xl text-red-600 mb-4"},"Sorry Something went wrong",-1),z=["onClick"],A={__name:"index",setup(t){return y(),w({title:"資訊匯總-生活查詢"}),(n,r)=>{const i=T,a=v;return s(),c("div",j,[l(a,null,{error:_(({error:o})=>[e("div",F,[V,e("code",null,u(o),1),e("button",{class:"text-white bg-blue-400 px-10 py-3 rounded mt-4",onClick:D=>o.value=null}," Go Back ",8,z)])]),default:_(()=>[E,l(i)]),_:1})])}}};export{A as default};
