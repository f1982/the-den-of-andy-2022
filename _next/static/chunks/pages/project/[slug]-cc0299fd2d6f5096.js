(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{533:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[slug]",function(){return n(3060)}])},9216:function(t,e,n){"use strict";var r=n(5893),a=(n(7294),n(4184)),i=n.n(a);e.Z=function(t){t.type;var e=t.stacks,n=t.className;return(0,r.jsx)("div",{className:i()("flex flex-row flex-wrap","gap-y-2 gap-x-2",n),children:e.map((function(t,e){return(0,r.jsx)("span",{className:i()("px-2 py-0.5 rounded-lg","text-sm","text-on-surface bg-primary-dark"),children:t},t)}))})}},8737:function(t,e,n){"use strict";var r=n(5893),a=(n(7294),n(4783)),i=n.n(a);e.Z=function(t){var e=t.children;return(0,r.jsx)("span",{className:i().headline,children:e})}},350:function(t,e,n){"use strict";var r=n(5893),a=n(4184),i=n.n(a),s=(n(7294),n(8737)),c=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["body-bold","p"],["small","p"]]),o=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["body-bold","text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);e.Z=function(t){var e,n=t.variant,a=void 0===n?"h1":n,l=t.as,d=void 0===l?void 0:l,u=t.className,m=t.highlight,h=void 0!==m&&m,x=t.style,f=t.children,g=d||c.get(a);return(0,r.jsx)(g,{className:i()("text-on-background",o.get(a),u),style:x,children:(e=f,h?(0,r.jsx)(s.Z,{children:e}):e)})}},9854:function(t,e,n){"use strict";var r=n(5893),a=n(350),i=n(8499);e.Z=function(t){var e=t.date;return(0,r.jsx)(a.Z,{variant:"small",as:"time",children:(0,i.Z)(e)})}},7344:function(t,e,n){"use strict";var r=n(5893),a=(n(7294),n(350));e.Z=function(t){var e=t.image,n=t.text;return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"30vh",backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"100%",marginBottom:"2rem"},children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)("div",{className:"container mx-auto flex flex-col items-end ",style:{marginBottom:"20px",bottom:0,float:"right"},children:!!n&&(0,r.jsx)("div",{className:"bg-black p-6 w-1/2",children:(0,r.jsx)(a.Z,{className:"text-on-surface",variant:"body",children:n})})})]})}},819:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.text;return(0,r.jsx)("span",{className:" top-3 right-12 bg-secondary-dark font-bold text-on-surface px-2 py-0.5 rounded-lg tracking-widest text-sm ",children:e})}},9318:function(t,e,n){"use strict";var r=n(1163);e.Z=function(){return"https://2022.andycao.me"+(0,r.useRouter)().asPath}},3060:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return p}});var r=n(5893),a=n(2962),i=n(1163),s=(n(7294),n(801)),c=n(9216),o=n(350),l=n(9854),d=n(7344),u=n(1685),m=n(819),h=function(t){var e=t.title,n=t.cover,a=t.tech,i=t.platform,s=t.start,h=t.end,x=t.description,f=t.responsibility,g=t.images;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"container mx-auto mb-8",children:[(0,r.jsx)(o.Z,{variant:"h2",as:"h1",children:e}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)(l.Z,{date:s}),(0,r.jsx)("span",{children:" - "}),(0,r.jsx)(l.Z,{date:h})]}),i&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(m.Z,{text:i})})]}),(0,r.jsx)(d.Z,{text:"",image:"".concat(u.Vn,"/").concat(n)}),(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsxs)("div",{className:"mt-10 mb-8",children:[(0,r.jsx)(o.Z,{variant:"h3",children:"Technology stacks:"}),(0,r.jsx)(c.Z,{stacks:a.split(",")})]}),(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(o.Z,{variant:"body",children:x})}),f&&(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(o.Z,{variant:"body",children:f})}),(0,r.jsx)("div",{className:"mb-9",children:function(t,e){if(!t)return null;t.map((function(t){return"".concat(u.Vn,"/").concat(t)}));return t.map((function(t){return(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("img",{src:"".concat(u.Vn,"/").concat(t),alt:e})},t)}))}(g,e)})]})]})},x=n(9318);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}var b=function(t){var e=t.detail,n=(0,i.useRouter)(),c=(0,x.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:e.title,additionalMetaTags:[{name:"keywords",content:e.tech}],openGraph:{title:e.title,description:e.description,url:c,type:"project",images:[{url:e.cover,width:850,height:650,alt:"Photo of ".concat(e.title)}]}}),(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)("div",{className:"flex container mx-auto mt-8",children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)(s.Z,{onClick:function(){n.push("/project")}})]}),(0,r.jsx)(h,g({},e))]})]})};b.getLayout=function(t){return(0,r.jsx)("div",{children:t})};var v=!0,p=b},8499:function(t,e,n){"use strict";n.d(e,{A:function(){return s},Z:function(){return i}});var r=n(8420),a=n(5313);function i(t){var e=(0,r.Z)(t);return(0,a.Z)(e,"LLLL d, yyyy")}function s(t){var e=new Date,n=new Date(t),r=e.getFullYear()-n.getFullYear(),a=e.getMonth()-n.getMonth();return(a<0||0===a&&e.getDate()<n.getDate())&&(r-=1),r}},4783:function(t){t.exports={headline:"headline_headline___BDO4"}}},function(t){t.O(0,[962,771,774,888,179],(function(){return e=533,t(t.s=e);var e}));var e=t.O();_N_E=e}]);