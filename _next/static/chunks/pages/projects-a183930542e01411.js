(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4478:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(6486)}])},443:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},9950:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(8635);function c(e){var t=e.title;return(0,r.jsx)("section",{className:" flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 ",children:(0,r.jsxs)(i.E.h1,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2},className:" text-6xl text-th-accent-medium font-as md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:[t,"."]})})}},6486:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return j}});var r=n(5893),i=n(1163),c=(n(7294),n(9950)),s=n(1664),a=n(8635),l=n(1666);var o=function(e){var t=e.stacks;return(0,r.jsx)("div",{className:"text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200",children:t.map((function(e,n){return(0,r.jsxs)("span",{children:[e,n===t.length-1?"":", "]},e)}))})},u=n(2598);function d(e){var t=e.id,n=e.title,i=e.description,c=e.cover,d=e.type,f=e.platform,x=e.tech;return(0,r.jsxs)("div",{className:"sm:w-1/2 mb-10 px-4",children:[(0,r.jsx)("div",{className:"rounded-lg h-64 overflow-hidden",children:(0,r.jsx)(a.E.figure,{layoutId:"project-cover",children:(0,r.jsx)(u.Z,{alt:"content",src:"/projects/images/".concat(c),width:650,height:250})})}),(0,r.jsx)("h2",{className:"title-font text-2xl font-bold font-as text-gray-900 mt-6 mb-3",children:n}),(0,r.jsx)("p",{className:"leading-relaxed text-base",children:i}),(0,r.jsx)("p",{className:"leading-relaxed text-base",children:d}),(0,r.jsx)("p",{className:"leading-relaxed text-base",children:f}),(0,r.jsx)(o,{stacks:x.split(",")}),(0,r.jsx)(s.default,{href:"/project/".concat(t),passHref:!0,children:(0,r.jsx)(l.Z,{type:"primary",children:"View"})},t)]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var m=function(e){var t=e.list,n=e.type,i=void 0===n?"":n;return(0,r.jsx)("section",{className:"text-gray-600 body-font",children:(0,r.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,r.jsx)("div",{className:"flex flex-wrap -mx-4 -mb-10 text-center",children:i?t.filter((function(e){return e.type===i})).map((function(e){return(0,r.jsx)(s.default,{href:"/project/".concat(e.id),passHref:!0,children:(0,r.jsx)(d,x({},e))},e.id)})):t.map((function(e){return(0,r.jsx)(d,x({},e),e.id)}))})})})},p=n(443),h=!0;function j(e){var t=e.projects,n=(0,i.useRouter)().query.type;return(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(c.Z,{title:"Projects"}),(0,r.jsx)(m,{list:t,type:n})]})}}},function(e){e.O(0,[635,774,888,179],(function(){return t=4478,e(e.s=t);var t}));var t=e.O();_N_E=t}]);