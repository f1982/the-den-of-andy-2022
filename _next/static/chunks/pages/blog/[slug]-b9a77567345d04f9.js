(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(6441)}])},8737:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(4783)),i=n.n(a);t.Z=function(e){var t=e.children;return(0,r.jsx)("span",{className:i().headline,children:t})}},350:function(e,t,n){"use strict";var r=n(5893),a=n(4184),i=n.n(a),s=(n(7294),n(8737)),o=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["body-bold","p"],["small","p"]]),c=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["body-bold","text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);t.Z=function(e){var t,n=e.variant,a=void 0===n?"h1":n,l=e.as,u=void 0===l?void 0:l,d=e.className,m=e.highlight,h=void 0!==m&&m,f=e.style,v=e.children,x=u||o.get(a);return(0,r.jsx)(x,{className:i()("text-on-background",c.get(a),d),style:f,children:(t=v,h?(0,r.jsx)(s.Z,{children:t}):t)})}},9854:function(e,t,n){"use strict";var r=n(5893),a=n(350),i=n(8499);t.Z=function(e){var t=e.date;return(0,r.jsx)(a.Z,{variant:"small",as:"time",children:(0,i.Z)(t)})}},7344:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(350));t.Z=function(e){var t=e.image,n=e.text;return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"30vh",backgroundImage:"url(".concat(t,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"100%",marginBottom:"2rem"},children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)("div",{className:"container mx-auto flex flex-col items-end ",style:{marginBottom:"20px",bottom:0,float:"right"},children:!!n&&(0,r.jsx)("div",{className:"bg-black p-6 w-1/2",children:(0,r.jsx)(a.Z,{className:"text-on-surface",variant:"body",children:n})})})]})}},9318:function(e,t,n){"use strict";var r=n(1163),a=n(4155);t.Z=function(){var e=(0,r.useRouter)();return a.env.NEXT_PUBLIC_APP_SITE_URL+e.asPath}},6441:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return k}});var r=n(5893),a=n(2962),i=n(2918),s=n(1163),o=n(7294),c=n(801),l=n(350),u=n(9854),d=n(7344),m=function(e){var t=e.url,n=e.theme,r=e.issueTerm,a=e.repo,i=e.ref,s=(0,o.useState)(t?"loading":"idle"),c=s[0],l=s[1];return(0,o.useEffect)((function(){if(t){var e=document.createElement("script");e.src=t,e.async=!0,e.crossOrigin="anonymous",e.setAttribute("label","comment"),e.setAttribute("theme",n),e.setAttribute("issue-term",r),e.setAttribute("repo",a),i.current.appendChild(e);var s=function(e){l("load"===e.type?"ready":"error")};return e.addEventListener("load",s),e.addEventListener("error",s),function(){e&&(e.removeEventListener("load",s),e.removeEventListener("error",s))}}l("idle")}),[r,i,a,n,t]),c},h=function(){var e=(0,o.useRef)(null);return m({url:"https://utteranc.es/client.js",theme:"github-light",issueTerm:"pathname",repo:"f1982/the-den-of-andy-2022",ref:e}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("div",{ref:e})})},f=function(e){var t=e.name,n=e.picture;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:n,className:"w-12 h-12 rounded-full mr-4",width:50,height:50,alt:t}),(0,r.jsx)("div",{className:"font-bold",children:t})]})},v=n(9636),x=n.n(v),g=function(e){var t=e.content;return(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsx)("div",{className:x().markdown,dangerouslySetInnerHTML:{__html:t}})})},b=function(e){var t=e.title,n=e.date,a=e.author,i=e.content,s=e.coverImage;return(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)(l.Z,{variant:"h2",as:"h1",children:t}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(u.Z,{date:n})}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(f,{name:a.name,picture:a.picture})})]}),(0,r.jsx)(d.Z,{image:s}),(0,r.jsx)(g,{content:i}),(0,r.jsx)(h,{})]})},p=n(9318);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}var w=function(e){var t=e.post,n=(e.preview,(0,s.useRouter)()),o=(0,p.Z)();if(!n.isFallback&&!(null===t||void 0===t?void 0:t.slug))return(0,r.jsx)(i.default,{statusCode:404});if(n.isFallback)return(0,r.jsx)("div",{children:"Loading..."});var l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:t.title,additionalMetaTags:[{name:"keywords",content:t.keywords}],openGraph:{title:t.title,description:t.excerpt,url:o,type:"article",article:{publishedTime:t.date,authors:[t.author.name],tags:(l=t.keywords,l.split(",").map((function(e){return e.trim()})))},images:[{url:t.coverImage,width:850,height:650,alt:"Photo of ".concat(t.title)}]}}),(0,r.jsxs)("div",{className:"flex container mx-auto mt-3",children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)(c.Z,{onClick:function(){n.push("/blog")}})]}),(0,r.jsx)("article",{className:"mb-32",children:(0,r.jsx)(b,y({},t))})]})};w.getLayout=function(e){return(0,r.jsx)("div",{children:e})};var _=!0,k=w},8499:function(e,t,n){"use strict";n.d(t,{A:function(){return s},Z:function(){return i}});var r=n(8420),a=n(5313);function i(e){var t=(0,r.Z)(e);return(0,a.Z)(t,"LLLL d, yyyy")}function s(e){var t=new Date,n=new Date(e),r=t.getFullYear()-n.getFullYear(),a=t.getMonth()-n.getMonth();return(a<0||0===a&&t.getDate()<n.getDate())&&(r-=1),r}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}},9636:function(e){e.exports={markdown:"markdown_markdown__waVKR",mardown:"markdown_mardown__I8IAM"}},2918:function(e,t,n){e.exports=n(67)}},function(e){e.O(0,[962,771,774,888,179],(function(){return t=1127,e(e.s=t);var t}));var t=e.O();_N_E=t}]);