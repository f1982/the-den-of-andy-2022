(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{5129:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hobbies",function(){return i(4292)}])},3884:function(e,t){"use strict";var i="Andy's personal website",n={title:i,description:"Andy's personal website is used for recording all his work and thinking.",canonical:"https://2022.andycao.me/",openGraph:{type:"website",title:i,description:"this is the desc will show up in twitter sharing",locale:"en_US",url:"https://2022.andycao.me/",site_name:i,images:[{url:"https://www.example.ie/og-image-01.jpg",width:800,height:600,alt:"Og Image Alt",type:"image/jpeg"},{url:"https://www.example.ie/og-image-02.jpg",width:900,height:800,alt:"Og Image Alt Second",type:"image/jpeg"},{url:"https://www.example.ie/og-image-03.jpg"},{url:"https://www.example.ie/og-image-04.jpg"}]},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};t.Z=n},3190:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var n=i(5893),r=i(4184),s=i.n(r),a=i(7294),o=i(8995),l=i.n(o),c=function(e){var t=e.color,i="bg-".concat(void 0===t?"primary":t,"-medium");return(0,n.jsxs)("div",{"aria-busy":"true",role:"alert",className:l().ldsEllipsis,children:[(0,n.jsx)("div",{className:i}),(0,n.jsx)("div",{className:i}),(0,n.jsx)("div",{className:i}),(0,n.jsx)("div",{className:i})]})};function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){d(e,t,i[t])}))}return e}function m(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var b=function(e){var t=e.src,i=e.width,r=e.height,o=(e.withLoader,e.className),l=e.style,d=void 0===l?{}:l,b=e.alt,u=void 0===b?"":b,p=m(e,["src","width","height","withLoader","className","style","alt"]),g=(0,a.useState)(!1),x=g[0],f=g[1],y=(0,a.useRef)(null);return(0,a.useEffect)((function(){y.current&&y.current.complete&&f(!0)}),[]),(0,n.jsxs)("div",h({style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"80px",width:i,height:r}},p,{children:[(0,n.jsx)("img",{ref:y,src:t,className:s()("object-contain opacity-0","transition-opacity ease-out duration-1000",o),alt:u,style:x?h({},d,{width:i,height:r,opacity:1}):{opacity:0},onLoad:function(){return f(!0)}}),!x&&(0,n.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(c,{})})]}))}},8003:function(e,t,i){"use strict";var n=i(5893),r=i(7294),s=i(4184),a=i.n(s),o=i(7926),l=i.n(o),c=r.forwardRef((function(e,t){return(0,n.jsx)("button",{ref:t,onClick:e.onClick,type:"button",className:a()(function(e){var t=a()("focus:outline-none","inline-flex","items-center","border-0","rounded","py-2","px-6","transition ease-in-out delay-100","hover:-translate-y-1","hover:scale-105",l().button_bubble);return"primary"===e?a()(t,"text-on-primary","hover:text-black","bg-primary-medium","hover:bg-primary-dark"):a()(t,"text-on-secondary","hover:text-black","bg-secondary-dark","hover:bg-secondary-light")}(e.type),e.className),children:e.children})}));c.displayName="Button",t.Z=c},8737:function(e,t,i){"use strict";var n=i(5893),r=(i(7294),i(4783)),s=i.n(r);t.Z=function(e){var t=e.children;return(0,n.jsx)("span",{className:s().headline,children:t})}},350:function(e,t,i){"use strict";var n=i(5893),r=i(4184),s=i.n(r),a=(i(7294),i(8737)),o=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["body-bold","p"],["small","p"]]),l=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["body-bold","text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);t.Z=function(e){var t,i=e.variant,r=void 0===i?"h1":i,c=e.as,d=void 0===c?void 0:c,h=e.className,m=e.highlight,b=void 0!==m&&m,u=e.style,p=e.children,g=d||o.get(r);return(0,n.jsx)(g,{className:s()("text-on-background",l.get(r),h),style:u,children:(t=p,b?(0,n.jsx)(a.Z,{children:t}):t)})}},1068:function(e,t,i){"use strict";var n=i(5893),r=i(7305),s=i(2962),a=i(1163),o=i(3884);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.Z=function(e){var t=e.pageTitle;var i="https://2022.andycao.me/"+(0,a.useRouter)().asPath.split("?")[0];return(0,n.jsx)(s.lX,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){l(e,t,i[t])}))}return e}({},o.Z,{canonical:i,title:"".concat((0,r.t)(t)," - ").concat(o.Z.title)}))}},9698:function(e,t,i){"use strict";var n=i(5893),r=i(4184),s=i.n(r),a=i(6794),o=(i(7294),i(350)),l={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.8,type:"tween",staggerChildren:.6}}},c={hidden:{opacity:0,y:-50},show:{opacity:1,y:0},transition:{type:"tween",duration:3}};t.Z=function(e){var t=e.title,i=e.subtitle,r=e.image,d=e.description,h=e.buttons,m=e.viewPortOnce,b=void 0===m||m,u=e.className,p=e.id;return(0,n.jsxs)(a.E.section,{className:s()("container mx-auto","flex","items-center","justify-center","flex-col",u),variants:l,initial:"hidden",whileInView:"show",viewport:{once:b},id:p,children:[(0,n.jsx)(a.E.figure,{className:s()("mb-4 md:mb-6 w-full"),variants:c,children:(0,n.jsx)("img",{alt:"hero",className:"mx-auto w-2/3 md:w-2/5",src:r})}),(0,n.jsxs)("div",{className:"lg:w-3/4 w-full",children:[(0,n.jsx)(o.Z,{variant:"h2",as:"h2",className:"text-center",children:t}),i&&(0,n.jsx)(o.Z,{variant:"h3",className:"font-thin text-center",children:i}),(0,n.jsx)(a.E.div,{variants:c,className:"mb-8",children:(0,n.jsx)(o.Z,{variant:"body",className:"text-left",children:d})}),(0,n.jsx)(a.E.div,{variants:c,className:"flex justify-center",children:h})]})]})}},3464:function(e,t,i){"use strict";var n=i(5893),r=i(4184),s=i.n(r),a=(i(7294),i(6926)),o=i.n(a),l=i(8010),c=i.n(l),d=i(3190);t.Z=function(e){var t=e.image,i=(e.children,e.className),r=o()(c()).theme.colors.primary.medium;return(0,n.jsxs)("div",{className:s()("mb-12","flex flex-col",i),style:{backgroundPosition:"15px 0, 45px 0, 0 0, 0 0",backgroundSize:"30px 60px",background:"linear-gradient(0deg, ".concat(r," 25%, transparent 25%)")},children:[(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsx)("div",{className:s()("mt-8 md:mt-16"),children:!!t&&(0,n.jsx)(d.Z,{src:t,alt:"hero image",className:"h-[360px] md:h-[540px]"})})]})}},6375:function(e,t,i){"use strict";var n=i(5893),r=i(4184),s=i.n(r),a=(i(7294),i(350));t.Z=function(e){var t=e.title,i=e.description,r=e.className;return(0,n.jsxs)("div",{className:s()("flex flex-col items-center justify-center mb-8 md:mb-16",r),children:[(0,n.jsx)(a.Z,{variant:"h1",as:"h1",className:"page-title",highlight:!0,children:t}),(0,n.jsx)(a.Z,{variant:"body",className:"page-description",children:i})]})}},4292:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(5893),r=i(7305),s=i(8003),a=i(1068),o=i(4184),l=i.n(o),c=i(6794),d=(i(7294),i(350)),h={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.8,type:"tween",staggerChildren:1.6}}},m={hidden:{opacity:0,y:-50},show:{opacity:1,y:0},transition:{type:"tween",duration:1.6}},b=function(e){var t=e.title,i=e.subtitle,r=e.image,s=e.description,a=e.buttons,o=e.viewPortOnce,b=void 0!==o&&o,u=e.direction,p=void 0===u?"l2r":u,g=e.className;return(0,n.jsxs)(c.E.section,{className:l()("container mx-auto flex gap-x-16 flex-col items-center","l2r"===p?"md:flex-row":"md:flex-row-reverse",g),variants:h,initial:"hidden",whileInView:"show",viewport:{once:b},children:[(0,n.jsx)("img",{className:"object-cover mb-6 md:mb-0 md:w-2/5",alt:"hero",src:r}),(0,n.jsxs)("div",{className:"md:w-3/5 flex flex-col md:items-start items-center ",children:[(0,n.jsx)(d.Z,{variant:"h2",as:"h2",children:t}),i&&(0,n.jsx)(d.Z,{variant:"h4",as:"h3",className:"mt-[0]",children:i}),(0,n.jsx)(c.E.div,{variants:m,children:(0,n.jsx)(d.Z,{variant:"body",children:s})}),(0,n.jsx)(c.E.div,{variants:m,className:"flex flex gap-x-3 mt-6",children:a})]})]})},u=i(9698),p=i(3464),g=i(6375),x=i(5154),f=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{pageTitle:(0,r.t)("hobbies.pageTitle")}),(0,n.jsx)(p.Z,{image:"/static/images/page-hero-hobby.png"}),(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)(g.Z,{title:(0,r.t)("hobbies.headline"),description:(0,r.t)("hobbies.intro")}),(0,n.jsx)(b,{className:"mb-16 md:mb-20",image:"/static/images/3d-printing-ender-3-v2.png",title:(0,r.t)("hobbies.print3d.title"),description:(0,r.t)("hobbies.print3d.description"),direction:"r2l",buttons:(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)("a",{href:x.ne,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{type:"primary",children:(0,r.t)("hobbies.print3d.button1")})})})}),(0,n.jsx)(u.Z,{id:"rc-hobby-id",className:"mb-16 md:mb-20",image:"/static/images/hobby-rc-cover.png",title:(0,r.t)("hobbies.rc.title"),description:(0,r.t)("hobbies.rc.description"),buttons:(0,n.jsxs)("div",{className:"flex gap-x-3",children:[(0,n.jsx)("a",{target:"_blank",href:x.VY,rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{type:"primary",children:(0,r.t)("hobbies.rc.button1")})}),(0,n.jsx)("a",{target:"_blank",href:x.gL,rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{type:"secondary",children:(0,r.t)("hobbies.rc.button2")})})]})}),(0,n.jsx)(b,{className:"mb-16 md:mb-20",image:"/static/images/hobby-drawing-cover.png",title:(0,r.t)("hobbies.drawing.title"),description:(0,r.t)("hobbies.drawing.description"),buttons:(0,n.jsx)("div",{className:"flex gap-x-3",children:(0,n.jsx)("a",{target:"_blank",href:x.HS,rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{type:"primary",children:(0,r.t)("hobbies.drawing.button1")})})})}),(0,n.jsx)(u.Z,{className:"mb-16 md:mb-20",image:"/static/images/hobby-cover-video.png",title:(0,r.t)("hobbies.video.title"),description:(0,r.t)("hobbies.video.description"),buttons:(0,n.jsx)("div",{className:"flex gap-x-3",children:(0,n.jsx)("a",{target:"_blank",href:x.rc,rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{type:"primary",children:(0,r.t)("hobbies.video.button1")})})})})]})]})}},7926:function(e){e.exports={button_bubble:"button_button_bubble__y2ID4",bubbles:"button_bubbles__Bn4ru"}},8995:function(e){e.exports={ldsEllipsis:"threedots_ldsEllipsis__VXL97","lds-ellipsis1":"threedots_lds-ellipsis1__Jdgk8","lds-ellipsis2":"threedots_lds-ellipsis2__LQpq2","lds-ellipsis3":"threedots_lds-ellipsis3__GfLlZ"}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}}},function(e){e.O(0,[962,794,774,888,179],(function(){return t=5129,e(e.s=t);var t}));var t=e.O();_N_E=t}]);