(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4545:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(8628)}])},3884:function(e,t){"use strict";var n="Andy's personal website",r={title:n,description:"Andy's personal website is used for recording all his work and thinking.",canonical:"https://2022.andycao.me",openGraph:{type:"website",title:n,description:"Andy's personal website is used for recording all his work and thinking.",locale:"en_US",url:"https://2022.andycao.me",site_name:n,images:[{url:"".concat("https://2022.andycao.me","/static/images/og-image-1200x627.png"),width:1200,height:627,alt:n,type:"image/jpeg"},{url:"".concat("https://2022.andycao.me","/static/images/og-image-900x800.png"),width:900,height:800,alt:n,type:"image/jpeg"}]},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};t.Z=r},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};s=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](s):s instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e));var s,l;var c=r=i({},r,t);0;if(c.suspense)return n(c);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)},t.noSSR=o;s(n(7294));var a=s(n(4588));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=(s=n(7294))&&s.__esModule?s:{default:s},l=n(2021),c=n(3644);var u=[],d=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,i;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function p(e){return function(e,t){var n=function(){if(!i){var t=new h(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var i=null;if(!f&&!r.suspense){var s=r.webpack?r.webpack():r.modules;s&&d.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=s[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(c){r=!0,i=c}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}))}var u=r.suspense?function(e,t){return o.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=o.default.useContext(c.LoadableContext),s=l.useSubscription(i);return o.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),o.default.useMemo((function(){return s.loading||s.error?o.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:i.retry}):s.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(s.loaded),e):null}),[e,s])};return u.preload=function(){return!r.suspense&&n()},u.displayName="LoadableComponent",o.default.forwardRef(u)}(m,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){b(u).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};b(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var y=p;t.default=y},3190:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),i=n(4184),a=n.n(i),s=n(7294),o=n(8995),l=n.n(o),c=function(e){var t=e.color,n="bg-".concat(void 0===t?"primary":t,"-medium");return(0,r.jsxs)("div",{"aria-busy":"true",role:"alert",className:l().ldsEllipsis,children:[(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n})]})};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=function(e){var t=e.src,n=e.width,i=e.height,o=(e.withLoader,e.className),l=e.style,u=void 0===l?{}:l,m=e.alt,h=void 0===m?"":m,p=f(e,["src","width","height","withLoader","className","style","alt"]),b=(0,s.useState)(!1),y=b[0],v=b[1],g=(0,s.useRef)(null);return(0,s.useEffect)((function(){g.current&&g.current.complete&&v(!0)}),[]),(0,r.jsxs)("div",d({style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"80px",width:n,height:i}},p,{children:[(0,r.jsx)("img",{ref:g,src:t,className:a()("object-contain opacity-0","transition-opacity ease-out duration-1000",o),alt:h,style:y?d({},u,{width:n,height:i,opacity:1}):{opacity:0},onLoad:function(){return v(!0)}}),!y&&(0,r.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(c,{})})]}))}},8003:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(4184),s=n.n(a),o=n(7926),l=n.n(o),c=i.forwardRef((function(e,t){return(0,r.jsx)("button",{ref:t,onClick:e.onClick,type:"button",className:s()(function(e){var t=s()("focus:outline-none","inline-flex","items-center","border-0","rounded","py-2","px-6","transition ease-in-out delay-100","hover:-translate-y-1","hover:scale-105",l().button_bubble);return"primary"===e?s()(t,"text-on-primary","hover:text-black","bg-primary-medium","hover:bg-primary-dark"):s()(t,"text-on-secondary","hover:text-black","bg-secondary-dark","hover:bg-secondary-light")}(e.type),e.className),children:e.children})}));c.displayName="Button",t.Z=c},9216:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(4184)),a=n.n(i);t.Z=function(e){e.type;var t=e.stacks,n=e.className;return(0,r.jsx)("div",{className:a()("flex flex-row flex-wrap","gap-y-2 gap-x-2",n),children:t.map((function(e,t){return(0,r.jsx)("span",{className:a()("px-2 py-0.5 rounded-lg","text-sm","text-on-surface bg-primary-dark"),children:e},e)}))})}},8737:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(4783)),a=n.n(i);t.Z=function(e){var t=e.children;return(0,r.jsx)("span",{className:a().headline,children:t})}},350:function(e,t,n){"use strict";var r=n(5893),i=n(4184),a=n.n(i),s=(n(7294),n(8737)),o=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["body-bold","p"],["small","p"]]),l=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["body-bold","text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);t.Z=function(e){var t,n=e.variant,i=void 0===n?"h1":n,c=e.as,u=void 0===c?void 0:c,d=e.className,f=e.highlight,m=void 0!==f&&f,h=e.style,p=e.children,b=u||o.get(i);return(0,r.jsx)(b,{className:a()("text-on-background",l.get(i),d),style:h,children:(t=p,m?(0,r.jsx)(s.Z,{children:t}):t)})}},1068:function(e,t,n){"use strict";var r=n(5893),i=n(7305),a=n(2962),s=n(3884),o=n(9318);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.pageTitle,n=e.seoConfig,c=void 0===n?s.Z:n,u=(0,o.Z)();return(0,r.jsx)(a.lX,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},c,{canonical:u,title:"".concat((0,i.t)(t)," - ").concat(s.Z.title)}))}},9698:function(e,t,n){"use strict";var r=n(5893),i=n(4184),a=n.n(i),s=n(6794),o=(n(7294),n(350)),l={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:1.8,type:"tween",staggerChildren:1.6}}},c={hidden:{opacity:0,y:-50},show:{opacity:1,y:0},transition:{type:"tween",duration:3}};t.Z=function(e){var t=e.title,n=e.subtitle,i=e.image,u=e.description,d=e.buttons,f=e.viewPortOnce,m=void 0===f||f,h=e.className,p=e.id;return(0,r.jsxs)(s.E.section,{className:a()("container mx-auto","flex","items-center","justify-center","flex-col",h),variants:l,initial:"hidden",whileInView:"show",viewport:{once:m},id:p,children:[(0,r.jsx)("img",{className:a()("mx-auto w-2/3 md:w-2/5"),alt:"hero",src:i}),(0,r.jsxs)("div",{className:"lg:w-3/4 w-full",children:[(0,r.jsx)(o.Z,{variant:"h2",as:"h2",className:"text-center",children:t}),n&&(0,r.jsx)(o.Z,{variant:"h3",className:"font-thin text-center",children:n}),(0,r.jsx)(s.E.div,{variants:c,className:"mb-8",children:(0,r.jsx)(o.Z,{variant:"body",className:"text-left",children:u})}),(0,r.jsx)(s.E.div,{variants:c,className:"flex justify-center",children:d})]})]})}},3464:function(e,t,n){"use strict";var r=n(5893),i=n(4184),a=n.n(i),s=(n(7294),n(6926)),o=n.n(s),l=n(8010),c=n.n(l),u=n(3190);t.Z=function(e){var t=e.image,n=(e.children,e.className),i=o()(c()).theme.colors.primary.medium;return(0,r.jsxs)("div",{className:a()("mb-12","flex flex-col",n),style:{backgroundPosition:"15px 0, 45px 0, 0 0, 0 0",backgroundSize:"30px 60px",background:"linear-gradient(0deg, ".concat(i," 25%, transparent 25%)")},children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)("div",{className:a()("mt-8 md:mt-16"),children:!!t&&(0,r.jsx)(u.Z,{src:t,alt:"hero image",className:"h-[360px] md:h-[540px]"})})]})}},9318:function(e,t,n){"use strict";var r=n(1163);t.Z=function(){return"https://2022.andycao.me"+(0,r.useRouter)().asPath}},8628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),i=n(7305),a=n(5152),s=n.n(a),o=n(1664),l=n.n(o),c=(n(7294),n(8003)),u=n(9778),d=n(350),f=n(1068),m=n(9698),h=n(3464),p=n(5154),b=n(3190),y=n(9216),v=function(e){var t=e.subtitle,n=e.title,i=void 0===n?void 0:n,a=e.cover,s=e.platform,o=void 0===s?void 0:s,l=e.description,c=void 0===l?void 0:l;return(0,r.jsxs)("div",{className:"w-full md:w-[540px] mb-4 md:mb-6",children:[(0,r.jsxs)("div",{className:"relative mb-8",children:[(0,r.jsx)(b.Z,{className:"rounded-lg object-cover w-full h-[240px] md:h-[360px]",alt:i,src:a}),o&&(0,r.jsx)("div",{className:"absolute right-2 bottom-2 md:right-4 md:bottom-4",children:(0,r.jsx)(y.Z,{stacks:o.split(",")})})]}),(0,r.jsxs)("div",{className:"px-0 md:px-2",children:[t&&(0,r.jsx)(d.Z,{variant:"body-bold",className:"text-secondary-dark",children:t}),i&&(0,r.jsx)(d.Z,{variant:"h3",children:i}),c&&(0,r.jsx)("div",{className:"text-left md:text-center",children:(0,r.jsx)(d.Z,{variant:"body",children:c})})]})]})},g=(s()((function(){return Promise.all([n.e(737),n.e(651),n.e(224)]).then(n.bind(n,5224))}),{loadableGenerated:{webpack:function(){return[5224]}},ssr:!1}),function(){return(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)(d.Z,{variant:"h2",children:"Working on"}),(0,r.jsxs)("div",{className:"flex flex-row justify-center",children:[(0,r.jsx)("div",{className:"w-6 mr-2",children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(d.Z,{variant:"body",children:"Video: How I build my WFH setups tour 2022"})]})]})}),x=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{variant:"h2",className:"text-center",style:{marginBottom:"2rem"},children:"Latest Projects"}),(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)(l(),{id:"test",href:"/blog/my-wfh-desk-setups-2022",children:(0,r.jsx)("button",{type:"button",children:(0,r.jsx)(v,{title:"My desktop setups for WFH 2022",cover:"https://raw.githubusercontent.com/f1982/planet-of-images/main/img/latest-project-wfh-setup-2022.png",description:"Last year, I was WFH for most of time, that made me to reconsider my desktop setups and working environment at home. I did some research, DIY some gadgets, bought some LED strips, two monitors, monitor stands, mechanical keyboard and new mouse. Iteratively to change the layout and reorganise the cables. It was a such great time to rethinking how the setups and arrangements can affect my daily work and productivity.",platform:"Article,Video"})})})})]})},j=function(){return(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,r.jsx)(d.Z,{variant:"h2",children:"My YouTube Channel"}),(0,r.jsx)(d.Z,{variant:"body",className:"w-full md:w-1/2",children:"I setup my YouTube channel for recording something I have learnt and share something interesting"}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("a",{href:p.rc,title:"Andy YouTube Channel",children:(0,r.jsx)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M107.715 32.49C110 41.4 110 60 110 60C110 60 110 78.6 107.715 87.51C106.445 92.435 102.73 96.31 98.025 97.62C89.48 100 60 100 60 100C60 100 30.535 100 21.975 97.62C17.25 96.29 13.54 92.42 12.285 87.51C10 78.6 10 60 10 60C10 60 10 41.4 12.285 32.49C13.555 27.565 17.27 23.69 21.975 22.38C30.535 20 60 20 60 20C60 20 89.48 20 98.025 22.38C102.75 23.71 106.46 27.58 107.715 32.49V32.49ZM50 77.5L80 60L50 42.5V77.5Z",fill:"#DD0000"})})})})]})},w=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{pageTitle:(0,i.t)("home.pageTitle")}),(0,r.jsx)(h.Z,{image:"/static/images/page-hero-workspace-2.png",className:"mb-8 md:mb-16"}),(0,r.jsx)(m.Z,{className:"mb-16 md:mb-24",image:"/static/images/andy-with-bubbles.png",title:(0,i.t)("home.intro.greeting"),subtitle:(0,i.t)("home.intro.role"),description:(0,i.t)("home.intro.description"),buttons:(0,r.jsxs)("div",{className:"flex gap-x-3",children:[(0,r.jsx)(l(),{href:"/about",passHref:!0,children:(0,r.jsx)(c.Z,{type:"primary",children:(0,i.t)("home.intro.button1")})}),(0,r.jsx)(l(),{href:"/project",passHref:!0,children:(0,r.jsx)(c.Z,{type:"secondary",children:(0,i.t)("home.intro.button2")})})]})}),(0,r.jsx)("div",{className:"container mx-auto mb-16 md:mb-24",children:(0,r.jsx)(x,{})}),(0,r.jsx)("div",{className:"container mx-auto mb-16 md:mb-24",children:(0,r.jsx)(g,{})}),(0,r.jsx)("div",{className:"container mx-auto mb-16 md:mb-24",children:(0,r.jsx)(j,{})})]})}},7926:function(e){e.exports={button_bubble:"button_button_bubble__y2ID4",bubbles:"button_bubbles__Bn4ru"}},8995:function(e){e.exports={ldsEllipsis:"threedots_ldsEllipsis__VXL97","lds-ellipsis1":"threedots_lds-ellipsis1__Jdgk8","lds-ellipsis2":"threedots_lds-ellipsis2__LQpq2","lds-ellipsis3":"threedots_lds-ellipsis3__GfLlZ"}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}},2021:function(e,t,n){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var s,o,l=i(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))n.call(s,u)&&(l[u]=s[u]);if(t){o=t(s);for(var d=0;d<o.length;d++)r.call(s,o[d])&&(l[o[d]]=s[o[d]])}}return l}},569:function(e,t,n){0},403:function(e,t,n){var r=n(800),i=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=i.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var s=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),s({getCurrentValue:t,subscribe:n,value:a})),i.useDebugValue(a),i.useEffect((function(){function e(){if(!i){var e=t();s((function(i){return i.getCurrentValue!==t||i.subscribe!==n||i.value===e?i:r({},i,{value:e})}))}}var i=!1,a=n(e);return e(),function(){i=!0,a()}}),[t,n]),a}},138:function(e,t,n){e.exports=n(403)},522:function(e){e.exports=n(7294)}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},s=!0;try{t[e](a,a.exports,i),s=!1}finally{s&&delete r[e]}return a.exports}i.ab="//";var a=i(138);e.exports=a}()},5152:function(e,t,n){e.exports=n(7645)}},function(e){e.O(0,[962,794,774,888,179],(function(){return t=4545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);