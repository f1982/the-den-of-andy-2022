(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{533:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[slug]",function(){return n(9972)}])},8737:function(t,e,n){"use strict";var r=n(5893),a=(n(7294),n(4783)),i=n.n(a);e.Z=function(t){var e=t.children;return(0,r.jsx)("span",{className:i().headline,children:e})}},350:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),a=n(4184),i=n.n(a),s=(n(7294),n(8737)),c=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["small","p"]]),o=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight"],["small","text-sm t mt-1 mb-1"]]);function l(t){var e,n=t.variant,a=void 0===n?"h1":n,l=t.as,u=void 0===l?void 0:l,d=t.className,m=t.highlight,x=void 0!==m&&m,h=t.children,f=u||c.get(a);return(0,r.jsx)(f,{className:i()("text-on-background leading-tight",o.get(a),d),children:(e=h,x?(0,r.jsx)(s.Z,{children:e}):e)})}},9854:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),a=n(350),i=n(8499);function s(t){var e=t.date;return(0,r.jsx)(a.Z,{variant:"small",as:"time",children:(0,i.Z)(e)})}},7344:function(t,e,n){"use strict";var r=n(5893),a=n(350);e.Z=function(t){var e=t.image,n=t.text;return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"30vh",backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"100%"},children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)("div",{className:"container mx-auto flex flex-col items-end ",style:{marginBottom:"20px",bottom:0,float:"right"},children:!!n&&(0,r.jsx)("div",{className:"bg-black p-6 w-1/2",children:(0,r.jsx)(a.Z,{className:"text-on-surface",variant:"body",children:n})})})]})}},819:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893);function a(t){var e=t.text;return(0,r.jsx)("span",{className:" top-3 right-12 bg-secondary-dark font-bold text-on-surface px-2 py-0.5 rounded-lg tracking-widest text-sm ",children:e})}},9972:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return N}});var r=n(5893),a=n(1163),i=n(3253),s=n.n(i),c=n(801),o=n(2672),l=n(350),u=n(7344),d=n(1685),m=n(9854),x=(n(7294),n(4184)),h=n.n(x);var f=function(t){var e=t.stacks,n=t.className;return(0,r.jsx)("div",{className:h()("flex flex-row flex-wrap","gap-y-2 gap-x-2",n),children:e.map((function(t,e){return(0,r.jsx)("span",{className:h()("px-2 py-0.5 rounded-lg","text-sm","text-on-surface bg-primary-dark"),children:t},t)}))})},g=n(819);var b=function(t){t.slug;var e=t.title,n=t.cover,i=t.tech,s=t.platform,c=t.start,o=t.end,x=t.description,h=t.responsibility,b=t.images;return(0,a.useRouter)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"container mx-auto mb-8",children:[(0,r.jsx)(l.Z,{variant:"h2",as:"h1",children:e}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)(m.Z,{date:c}),(0,r.jsx)("span",{children:" - "}),(0,r.jsx)(m.Z,{date:o})]}),s&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(g.Z,{text:s})})]}),(0,r.jsx)(u.Z,{text:"",image:"".concat(d.V,"/").concat(n)}),(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsxs)("div",{className:"mt-10 mb-8",children:[(0,r.jsx)(l.Z,{variant:"h3",children:"Technology stacks:"}),(0,r.jsx)(f,{stacks:i.split(",")})]}),(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(l.Z,{variant:"body",children:x})}),h&&(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(l.Z,{variant:"body",children:h})}),(0,r.jsx)("div",{className:"mb-9",children:function(t,e){if(!t)return null;t.map((function(t){return"".concat(d.V,"/").concat(t)}));return t.map((function(t){return(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("img",{src:"".concat(d.V,"/").concat(t),alt:e})},t)}))}(b,e)})]})]})};function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){v(t,e,n[e])}))}return t}function p(t){var e=t.detail,n=(0,a.useRouter)(),i=n.query.slug;return(0,r.jsx)(s(),{isOpen:!0,onRequestClose:function(){return n.back()},style:o.Z,contentLabel:"Post modal",children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsxs)("div",{className:"flex container mx-auto mt-8",children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)(c.Z,{onClick:function(){n.back()}})]}),(0,r.jsx)(b,j({slug:i},e))]})})}p.getLayout=function(t){return(0,r.jsx)("div",{children:t})};var y=!0,N=p},8499:function(t,e,n){"use strict";n.d(e,{A:function(){return s},Z:function(){return i}});var r=n(3855),a=n(4797);function i(t){var e=(0,r.Z)(t);return(0,a.Z)(e,"LLLL d, yyyy")}function s(t){var e=new Date,n=new Date(t),r=e.getFullYear()-n.getFullYear(),a=e.getMonth()-n.getMonth();return(a<0||0===a&&e.getDate()<n.getDate())&&(r-=1),r}},4783:function(t){t.exports={headline:"headline_headline___BDO4"}}},function(t){t.O(0,[106,774,888,179],(function(){return e=533,t(t.s=e);var e}));var e=t.O();_N_E=e}]);