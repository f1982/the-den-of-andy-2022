(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{1344:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return r(408)}])},3884:function(e,t){"use strict";var r="Andy website SEO title",n={title:r,description:"This this andy website seo desc.",canonical:"https://2022.andycao.me",openGraph:{type:"website",title:r,description:"this is the desc will show up in twitter sharing",locale:"en_US",url:"https://2022.andycao.me",site_name:r},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};t.Z=n},8003:function(e,t,r){"use strict";var n=r(5893),a=r(7294),i=r(4184),s=r.n(i),o=r(7926),l=r.n(o),c=a.forwardRef((function(e,t){return(0,n.jsx)("a",{href:e.href,onClick:e.onClick,ref:t,children:(0,n.jsx)("button",{type:"button",className:s()(function(e){var t=s()("focus:outline-none","inline-flex","items-center","border-0","rounded","py-2","px-6","transition ease-in-out delay-100","hover:-translate-y-1","hover:scale-105",l().button_bubble);return"primary"===e?s()(t,"text-on-primary","hover:text-black","bg-primary-medium","hover:bg-primary-dark"):s()(t,"text-on-secondary","hover:text-black","bg-secondary-dark","hover:bg-secondary-light")}(e.type),e.className),children:e.children})})}));c.displayName="Button",c.defaultProps={onClick:null,href:null},t.Z=c},8737:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(4783)),i=r.n(a);t.Z=function(e){var t=e.children;return(0,n.jsx)("span",{className:i().headline,children:t})}},350:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),a=r(4184),i=r.n(a),s=r(1511),o=(r(7294),r(8737)),l={duration:.3,type:"tween",ease:"easeInOut"},c={hidden:{opacity:0,x:60,transition:l},whileHover:{y:3,transition:l},show:{opacity:1,y:0,x:0,transition:l}},d="text-on-background leading-tight",m=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["small","p"]]),u=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3"],["h2","text-[1.85rem] md:text-[1.85rem] font-bold mt-3 mb-3"],["h3","text-[1.5rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2"],["body","text-base md:text-base t mt-1 mb-1"],["small","text-sm t mt-1 mb-1"]]);function h(e){var t=e.title,r=e.variant,a=void 0===r?"h1":r,l=e.as,h=void 0===l?void 0:l,x=e.className,f=e.highlight,p=void 0!==f&&f,b=h||m.get(a),g=function(e){return p?(0,n.jsx)(o.Z,{children:e}):e};return["h1","h2"].includes(a)?(0,n.jsx)(s.E.div,{variants:c,initial:"hidden",whileInView:"show",whileHover:"whileHover",viewport:{once:!0},children:(0,n.jsx)(b,{className:i()(d,u.get(a),x),children:g(t)})}):(0,n.jsx)(b,{className:i()(d,u.get(a),x),children:g(t)})}},1068:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(7305),i=r(2962),s=r(3884);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){var t=e.pageTitle;return(0,n.jsx)(i.lX,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},s.Z,{title:"".concat((0,a.t)(t)," - ").concat(s.Z.title)}))}},4964:function(e,t,r){"use strict";var n=r(5893),a=r(1511),i=r(4184),s=r.n(i),o=r(350),l={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.8,type:"tween",staggerChildren:1}}},c={hidden:{opacity:0,x:200},show:{opacity:1,x:0},transition:{type:"tween",duration:2.6}};t.Z=function(e){var t=e.title,r=e.subtitle,i=e.image,d=e.description,m=e.buttons,u=e.viewPortOnce,h=void 0!==u&&u;return(0,n.jsxs)(a.E.section,{className:s()("container mx-auto flex gap-x-16 mb-[3rem] md:flex-row flex-col items-center"),variants:l,initial:"hidden",whileInView:"show",viewport:{once:h},children:[(0,n.jsx)("img",{className:"object-cover mb-6 md:mb-0 w-1/3",alt:"hero",src:i}),(0,n.jsxs)("div",{className:"w-2/3 flex flex-col md:items-start md:text-left items-center text-center",children:[(0,n.jsx)(o.Z,{variant:"h2",title:t,as:"h2"}),r&&(0,n.jsx)(o.Z,{variant:"h3",title:r}),(0,n.jsx)("p",{className:"leading-relaxed",children:d}),(0,n.jsx)(a.E.div,{variants:c,className:"flex flex gap-x-3",children:m})]})]})}},3464:function(e,t,r){"use strict";var n=r(5893),a=r(4184),i=r.n(a),s=(r(7294),r(6926)),o=r.n(s),l=r(8010),c=r.n(l);t.Z=function(e){var t=e.image,r=e.children,a=o()(c()).theme.colors.primary.medium;return(0,n.jsxs)("div",{className:i()("mb-[3rem]","h-[600px]","flex flex-col"),style:{backgroundPosition:"15px 0, 45px 0, 0 0, 0 0",backgroundSize:"30px 60px",background:"linear-gradient(0deg, ".concat(a," 25%, transparent 25%)")},children:[(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsxs)("div",{className:i()("container mx-auto","flex flex-col items-center"),children:[!!t&&(0,n.jsx)("img",{className:i()("mx-auto","md:max-w-xl"),src:t,alt:"andy"}),r]})]})}},819:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){var t=e.text;return(0,n.jsx)("span",{className:" top-3 right-12 bg-secondary-dark font-bold text-on-surface px-2 py-0.5 rounded-lg tracking-widest text-sm ",children:t})}},408:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),a=r(7305),i=r(7294),s=r(8003),o=r(1068),l=r(3612),c=r(6447);function d(e){var t=e.children;return(0,n.jsxs)(c.Xz,{dpr:2,camera:{position:[0,0,5],fov:50},children:[(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)("pointLight",{position:[-20,10,25]}),(0,n.jsx)(l.N,{global:!0,config:{mass:2,tension:500},snap:!0,rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:t})]})}var m=r(8626);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h="/static/models/viking_room/scene.gltf";function x(e){var t=(0,i.useRef)(),r=(0,m.L)(h),a=r.nodes;r.materials;return(0,n.jsx)("group",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({ref:t},e,{dispose:null,children:(0,n.jsx)("mesh",{name:"Room",castShadow:!0,receiveShadow:!0,geometry:a.mesh_all1_Texture1_0.geometry,material:a.mesh_all1_Texture1_0.material,position:[0,-.3,0],rotation:[.5,150,.12],scale:.11})}))}m.L.preload(h);function f(){return(0,n.jsx)("div",{style:{width:"100%",height:"600px"},children:(0,n.jsx)(d,{children:(0,n.jsx)(i.Suspense,{fallback:null,children:(0,n.jsx)(x,{})})})})}var p=r(4964),b=r(3464),g=r(1664),v=r.n(g);var y=function(){return(0,n.jsx)("section",{className:"mt-12",children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row mt-10",children:[(0,n.jsxs)("div",{className:"sm:w-1/3 text-center sm:pr-8 sm:py-8",children:[(0,n.jsx)("div",{className:"w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200",children:(0,n.jsx)("img",{className:"rounded-full",width:80,src:"/static/images/avatar-pixel.jpg",alt:"andy avatar"})}),(0,n.jsxs)("div",{className:"flex flex-col items-center text-center justify-center",children:[(0,n.jsx)("h2",{className:"font-medium mt-4 text-md",children:"Andy Cao"}),(0,n.jsx)("div",{className:"w-12 h-1 bg-red-500 rounded mt-2 mb-4"}),(0,n.jsx)("p",{children:"A Software Developer who also love to make hardware"})]})]}),(0,n.jsxs)("div",{className:"sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left",children:[(0,n.jsx)("p",{className:"text-md mb-4",children:"Love to explore and create"}),(0,n.jsx)("p",{className:"mb-4",children:"My name is Andy Cao and I come from China \ud83c\udde8\ud83c\uddf3. I am a Software Developer \ud83d\udc68\u200d\ud83d\udcbb who focuses on website and mobile \ud83d\udcf1 application development."}),(0,n.jsx)("p",{className:"mb-4",children:"I consider indie game \ud83d\udd79 development as a leisure time hobby. I know some design \ud83c\udfa8. I am trying to be a life-long learner \ud83e\udde0 an excellent drone \ud83d\udef8 pilot as well as a good father \ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"}),(0,n.jsx)(v(),{href:"/about/",passHref:!0,children:(0,n.jsxs)("a",{className:"inline-flex items-center",children:["Learn More",(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})},j=r(350),w=r(819);var N=function(e){var t=e.id,r=e.title,a=e.cover,i=(e.type,e.platform);return e.tech,(0,n.jsx)(v(),{href:"/project/".concat(t),passHref:!0,children:(0,n.jsx)("div",{className:"w-full cursor-pointer",children:(0,n.jsxs)("div",{className:" bg-background transition-shadow ease-in duration-600 rounded-[2rem] h-48 relative hover:shadow-md ",children:[(0,n.jsx)("img",{className:"absolute rounded-xl w-full h-full object-cover",alt:r,src:a}),(0,n.jsxs)("div",{className:"absolute z-20 flex flex-row w-full h-full",children:[(0,n.jsx)("div",{className:"flex-1"}),(0,n.jsxs)("div",{className:"pr-10 flex flex-col ",children:[(0,n.jsx)(j.Z,{variant:"h3",title:r,className:"text-[white]"}),i&&(0,n.jsx)("div",{children:(0,n.jsx)(w.Z,{text:i})})]})]})]})})},t)};var k=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{pageTitle:(0,a.t)("home.pageTitle")}),(0,n.jsx)(b.Z,{children:(0,n.jsx)(f,{})}),(0,n.jsx)(p.Z,{image:"/static/images/andy-with-bubbles.png",title:(0,a.t)("home.self.hey"),subtitle:"I am a software engineer",description:(0,a.t)("hobbies.drawing.description"),buttons:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{type:"primary",children:(0,a.t)("home.button1")}),(0,n.jsx)(s.Z,{type:"secondary",children:(0,a.t)("home.button2")})]})}),(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)(N,{id:"121",title:"Bluetooth Auto Blinder System",cover:"https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg",type:"test",platform:"iOS"})}),(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)(y,{})})]})}},8010:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(9808),s=r(5874);e.exports={purge:["./src/**/*.{js.ts,jsx,tsx}"],mode:"jit",plugins:[r(4270)],theme:{extend:{colors:{emerald:i.emerald,yellow:i.yellow,fuchsia:i.fuchsia,primary:{dark:"var(--primary-dark)",light:"var(--primary-light)",medium:"var(--primary)"},secondary:{dark:"var(--secondary-dark)",medium:"var(--secondary)",light:"var(--secondary-light)"},background:"var(--background)",surface:"var(--surface)",warning:"var(--warning)",error:"var(--error)","on-background":"var(--on-background)","on-surface":"var(--on-surface)","on-error":"var(--on-error)","on-warning":"var(--on-warning)","on-primary":"var(--on-primary)","on-secondary":"var(--on-secondary)"},container:{padding:{DEFAULT:"1rem",lg:"8rem","2xl":"16rem"}},spacing:{28:"7rem"},letterSpacing:{tighter:"-0.08em"},lineHeight:{tight:1.2},fontFamily:{sans:["Inter"].concat(a(s.fontFamily.sans)),serif:["Inter"].concat(a(s.fontFamily.serif))},fontSize:{"2xl":["4.2rem",{lineHeight:"4.5rem"}],xl:["3.15rem",{lineHeight:"3.5rem"}],lg:["2.4rem",{lineHeight:"2.5rem"}],md:["1.7rem",{lineHeight:"2rem"}]},boxShadow:{sm:"0 5px 10px rgba(0, 0, 0, 0.12)",md:"0 8px 30px rgba(0, 0, 0, 0.12)"}}},variants:{extend:{padding:["last"],margin:["responsive","hover","last"]}}}},7926:function(e){e.exports={button_bubble:"button_button_bubble__y2ID4",bubbles:"button_bubbles__Bn4ru"}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}}},function(e){e.O(0,[662,737,511,962,999,813,774,888,179],(function(){return t=1344,e(e.s=t);var t}));var t=e.O();_N_E=t}]);