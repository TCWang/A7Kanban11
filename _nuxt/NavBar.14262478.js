import{_ as r,o as c,c as d,a as e,b as n,w as f,Y as u,Z as p,$ as h,a0 as w,a1 as m,a2 as v}from"./entry.dbf821b5.js";const b={},x=e("h3",{class:"font-bold text-white"},"A7社區網站-資訊匯總",-1),y=[x];function k(l,s){return c(),d("div",null,y)}const _=r(b,[["render",k]]),g={data(){return{isOpen:!1}},methods:{drawer(){this.isOpen=!this.isOpen}},watch:{isOpen:{immediate:!0,handler(l){l?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted(){document.addEventListener("keydown",l=>{l.keyCode==27&&this.isOpen&&(this.isOpen=!1)})}},O={class:"w-full p-6"},C={class:"flex items-center justify-between bg-indigo-600 px-1 py-2"},z={class:"md:hidden"},M=e("svg",{class:"h-8 w-8 fill-current text-black",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"white"},[e("path",{d:"M4 6h16M4 12h16M4 18h16"})],-1),B=[M],V=v('<div class="hidden md:block"><ul style="list-style:none;" class="flex space-x-8"><li><a href="/ai" class="active border-b-2 border-blue-500 pb-1 text-white">人工智慧</a></li><li><a href="/news" class="text-white">新聞雜誌</a></li><li><a href="/media" class="text-white">影音媒體</a></li><li><a href="/inquiry" class="text-white">生活查詢</a></li><li><a href="/mobile" class="text-white">手機軟件</a></li><li><a href="/websites" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white">社區網站</a></li></ul></div>',1),$={class:"close"},S=e("svg",{class:"w-6 h-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentcolor"},[e("path",{d:"M6 18L18 6M6 6l12 12"})],-1),j=[S],L={style:{"list-style":"none"},class:"divide-y text-base"},N=e("div",{class:"follow"},[e("p",{class:"italic text-sm"},"社群連接:"),e("div",{class:"social flex space-x-5 mt-4"},[e("a",{href:"https://www.facebook.com/groups/a7xinlinkou"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",class:"h-8 w-8 fill-current text-gray-600",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},[e("path",{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})])]),e("a",{href:"https://www.instagram.com/a7replanning/"},[e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",class:"h-8 w-8 fill-current text-gray-600",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[e("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})])])])],-1);function q(l,s,E,K,t,o){const a=_;return c(),d("nav",O,[e("div",C,[e("div",null,[n(a)]),e("div",z,[e("button",{onClick:s[0]||(s[0]=(...i)=>o.drawer&&o.drawer(...i))},B)]),V,n(w,{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"},{default:f(()=>[u(e("div",{onKeydown:s[2]||(s[2]=p(i=>t.isOpen=!1,["esc"])),class:"z-10 fixed inset-0 transition-opacity"},[e("div",{onClick:s[1]||(s[1]=i=>t.isOpen=!1),class:"absolute inset-0 bg-black opacity-50",tabindex:"0"})],544),[[h,t.isOpen]])]),_:1}),e("aside",{class:m(["p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",t.isOpen?"translate-x-0":"-translate-x-full"])},[e("div",$,[e("button",{class:"absolute top-0 right-0 mt-4 mr-4",onClick:s[3]||(s[3]=i=>t.isOpen=!1)},j)]),e("span",{onClick:s[4]||(s[4]=i=>t.isOpen=!1),class:"flex w-full items-center p-4 border-b"},[n(a)]),e("ul",L,[e("li",null,[e("a",{href:"/ai",onClick:s[5]||(s[5]=i=>t.isOpen=!1),class:"my-2 inline-block"},"人工智慧")]),e("li",null,[e("a",{href:"/news",onClick:s[6]||(s[6]=i=>t.isOpen=!1),class:"my-2 inline-block"},"新聞雜誌")]),e("li",null,[e("a",{href:"/media",onClick:s[7]||(s[7]=i=>t.isOpen=!1),class:"my-2 inline-block"},"影音媒體")]),e("li",null,[e("a",{href:"/inquiry",onClick:s[8]||(s[8]=i=>t.isOpen=!1),class:"my-2 inline-block"},"生活查詢")]),e("li",null,[e("a",{href:"/mobile",onClick:s[9]||(s[9]=i=>t.isOpen=!1),class:"my-2 inline-block"},"手機軟件")]),e("li",null,[e("a",{href:"/websites",onClick:s[10]||(s[10]=i=>t.isOpen=!1),class:"my-4 w-full text-center cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"},"社區網站")])]),N],2)])])}const A=r(g,[["render",q]]);export{A as _};