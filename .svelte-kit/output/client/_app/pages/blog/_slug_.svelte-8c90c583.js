var x=Object.defineProperty;var S=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var k=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,q=(e,t)=>{for(var a in t||(t={}))tt.call(t,a)&&k(e,a,t[a]);if(S)for(var a of S(t))et.call(t,a)&&k(e,a,t[a]);return e};import{S as Q,i as R,s as W,L as B,e as v,t as Y,k as w,c as g,a as h,h as j,d,m as E,b as m,g as X,F as l,j as G,G as C,M as at,w as F,x as U,y as z,q as J,o as K,B as O}from"../../chunks/vendor-e6b85d0a.js";import{b as H}from"../../chunks/blogMetaData-3df625f1.js";import{e as st}from"../../chunks/envVariables-1169fc78.js";function it(e){let t,a,i,o=e[0].title+"",s,r,n,u,$=B(new Date(e[0].date),"MMMM DD, YYYY")+"",b,T,V,c,I,P,f,D=e[0].body+"";return{c(){t=v("div"),a=v("div"),i=v("h1"),s=Y(o),r=w(),n=v("div"),u=v("span"),b=Y($),T=Y(","),V=w(),c=v("a"),I=Y("by Yourname"),P=w(),f=v("div"),this.h()},l(_){t=g(_,"DIV",{class:!0});var p=h(t);a=g(p,"DIV",{class:!0});var M=h(a);i=g(M,"H1",{class:!0});var L=h(i);s=j(L,o),L.forEach(d),r=E(M),n=g(M,"DIV",{class:!0});var y=h(n);u=g(y,"SPAN",{class:!0});var A=h(u);b=j(A,$),T=j(A,","),A.forEach(d),V=E(y),c=g(y,"A",{class:!0,href:!0});var N=h(c);I=j(N,"by Yourname"),N.forEach(d),y.forEach(d),M.forEach(d),P=E(p),f=g(p,"DIV",{class:!0});var Z=h(f);Z.forEach(d),p.forEach(d),this.h()},h(){m(i,"class","post-detail__top__title svelte-j00oao"),m(u,"class","post-detail__top__info__date svelte-j00oao"),m(c,"class","post-detail__top__info__author svelte-j00oao"),m(c,"href","/about"),m(n,"class","post-detail__top__info svelte-j00oao"),m(a,"class","post-detail__top svelte-j00oao"),m(f,"class","post-detail__content"),m(t,"class","post-detail svelte-j00oao")},m(_,p){X(_,t,p),l(t,a),l(a,i),l(i,s),l(a,r),l(a,n),l(n,u),l(u,b),l(u,T),l(n,V),l(n,c),l(c,I),l(t,P),l(t,f),f.innerHTML=D},p(_,[p]){p&1&&o!==(o=_[0].title+"")&&G(s,o),p&1&&$!==($=B(new Date(_[0].date),"MMMM DD, YYYY")+"")&&G(b,$),p&1&&D!==(D=_[0].body+"")&&(f.innerHTML=D)},i:C,o:C,d(_){_&&d(t)}}}function ot(e,t,a){let{post:i}=t;return e.$$set=o=>{"post"in o&&a(0,i=o.post)},[i]}class lt extends Q{constructor(t){super();R(this,t,ot,it,W,{post:0})}}function rt(e){let t,a,i,o;return t=new at({props:{title:e[1].title,description:e[1].description,canonical:e[1].url,openGraph:{article:{authors:[e[1].author]},images:[q({},e[1].image)],description:e[1].description,site_name:e[1].siteName,title:e[1].title,type:"article",url:e[1].url},twitter:{cardType:"summary_large_image",title:e[1].title,description:e[1].description,image:e[1].image.url,imageAlt:e[1].image.alt}}}),i=new lt({props:{post:e[0]}}),{c(){F(t.$$.fragment),a=w(),F(i.$$.fragment)},l(s){U(t.$$.fragment,s),a=E(s),U(i.$$.fragment,s)},m(s,r){z(t,s,r),X(s,a,r),z(i,s,r),o=!0},p(s,[r]){const n={};r&1&&(n.post=s[0]),i.$set(n)},i(s){o||(J(t.$$.fragment,s),J(i.$$.fragment,s),o=!0)},o(s){K(t.$$.fragment,s),K(i.$$.fragment,s),o=!1},d(s){O(t,s),s&&d(a),O(i,s)}}}function nt(e,t,a){var s;let{post:i}=t;const o={title:`${i.title} | ${H.blogTitle}`,description:(s=i.description)!=null?s:i.title,url:`/blog/${i.slug}`,siteName:H.blogTitle,author:H.blogTitle,image:{url:`${st.basePath}/background.jpeg`,width:1e3,height:523,alt:"image"}};return e.$$set=r=>{"post"in r&&a(0,i=r.post)},[i,o]}class ut extends Q{constructor(t){super();R(this,t,nt,rt,W,{post:0})}}export{ut as default};