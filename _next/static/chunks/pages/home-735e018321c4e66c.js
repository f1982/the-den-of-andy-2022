(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{4545:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(433)}])},3884:function(e,t){"use strict";var n="Andy's personal website",r={title:n,description:"Andy's personal website is used for recording all his work and thinking.",canonical:"",openGraph:{type:"website",title:n,description:"this is the desc will show up in twitter sharing",locale:"en_US",url:"",site_name:n,images:[{url:"https://www.example.ie/og-image-01.jpg",width:800,height:600,alt:"Og Image Alt",type:"image/jpeg"},{url:"https://www.example.ie/og-image-02.jpg",width:900,height:800,alt:"Og Image Alt Second",type:"image/jpeg"},{url:"https://www.example.ie/og-image-03.jpg"},{url:"https://www.example.ie/og-image-04.jpg"}]},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};t.Z=r},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var o,l;var u=r=a({},r,t);0;if(u.suspense)return n(u);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)},t.noSSR=s;o(n(7294));var i=o(n(4588));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},l=n(2021),u=n(3644);var c=[],d=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function b(e){return function(e,t){var n=function(){if(!a){var t=new h(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=s.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var i,s=o[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(u){r=!0,a=u}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return s.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=s.default.useContext(u.LoadableContext),o=l.useSubscription(a);return s.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),s.default.useMemo((function(){return o.loading||o.error?s.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",s.default.forwardRef(c)}(m,e)}function p(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return p(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){p(c).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};p(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var y=b;t.default=y},8003:function(e,t,n){"use strict";var r=n(5893),a=n(7294),i=n(4184),o=n.n(i),s=n(7926),l=n.n(s),u=a.forwardRef((function(e,t){return(0,r.jsx)("a",{href:e.href,onClick:e.onClick,ref:t,children:(0,r.jsx)("button",{type:"button",className:o()(function(e){var t=o()("focus:outline-none","inline-flex","items-center","border-0","rounded","py-2","px-6","transition ease-in-out delay-100","hover:-translate-y-1","hover:scale-105",l().button_bubble);return"primary"===e?o()(t,"text-on-primary","hover:text-black","bg-primary-medium","hover:bg-primary-dark"):o()(t,"text-on-secondary","hover:text-black","bg-secondary-dark","hover:bg-secondary-light")}(e.type),e.className),children:e.children})})}));u.displayName="Button",u.defaultProps={onClick:null,href:null},t.Z=u},8737:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(4783)),i=n.n(a);t.Z=function(e){var t=e.children;return(0,r.jsx)("span",{className:i().headline,children:t})}},350:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),a=n(4184),i=n.n(a),o=(n(7294),n(8737)),s=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["small","p"]]),l=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight"],["small","text-sm t mt-1 mb-1"]]);function u(e){var t,n=e.variant,a=void 0===n?"h1":n,u=e.as,c=void 0===u?void 0:u,d=e.className,f=e.highlight,m=void 0!==f&&f,h=e.children,b=c||s.get(a);return(0,r.jsx)(b,{className:i()("text-on-background leading-tight",l.get(a),d),children:(t=h,m?(0,r.jsx)(o.Z,{children:t}):t)})}},1068:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),a=n(7305),i=n(2962),o=n(3884);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=e.pageTitle;return(0,r.jsx)(i.lX,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},o.Z,{title:"".concat((0,a.t)(t)," - ").concat(o.Z.title)}))}},9698:function(e,t,n){"use strict";var r=n(5893),a=n(4184),i=n.n(a),o=n(6794),s=(n(7294),n(350)),l={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.8,type:"tween",staggerChildren:1}}},u={hidden:{opacity:0,y:-50},show:{opacity:1,y:0},transition:{type:"tween",duration:2.6}};t.Z=function(e){var t=e.title,n=e.subtitle,a=e.image,c=e.description,d=e.buttons,f=e.viewPortOnce,m=void 0!==f&&f,h=e.className,b=e.id;return(0,r.jsxs)(o.E.section,{className:i()("container mx-auto","flex","items-center","justify-center","flex-col",h),variants:l,initial:"hidden",whileInView:"show",viewport:{once:m},id:b,children:[(0,r.jsx)(o.E.figure,{className:i()("mb-4 md:mb-6","md:w-2/5","object-center rounded"),variants:u,children:(0,r.jsx)("img",{alt:"hero",src:a})}),(0,r.jsxs)("div",{className:"text-center lg:w-3/4 w-full",children:[(0,r.jsx)(s.Z,{variant:"h2",as:"h2",children:t}),n&&(0,r.jsx)(s.Z,{variant:"h3",className:"font-thin",children:n}),(0,r.jsx)(o.E.div,{variants:u,className:"mb-8",children:(0,r.jsx)(s.Z,{variant:"body",children:c})}),(0,r.jsx)(o.E.div,{variants:u,className:"flex justify-center",children:d})]})]})}},3464:function(e,t,n){"use strict";var r=n(5893),a=n(4184),i=n.n(a),o=(n(7294),n(6926)),s=n.n(o),l=n(8010),u=n.n(l);t.Z=function(e){var t=e.image,n=e.children,a=e.className,o=s()(u()).theme.colors.primary.medium;return(0,r.jsxs)("div",{className:i()("mb-12","flex flex-col",a),style:{backgroundPosition:"15px 0, 45px 0, 0 0, 0 0",backgroundSize:"30px 60px",background:"linear-gradient(0deg, ".concat(o," 25%, transparent 25%)")},children:[(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsxs)("div",{className:i()("mx-auto ml-0 mr-0","flex flex-col items-center"),children:[!!t&&(0,r.jsx)("img",{className:i()("mt-8","md:mt-16","w-auto","md:h-1/3","object-fit"),src:t,alt:"andy"}),n]})]})}},819:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.text;return(0,r.jsx)("span",{className:" top-3 right-12 bg-secondary-dark font-bold text-on-surface px-2 py-0.5 rounded-lg tracking-widest text-sm ",children:t})}},433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),a=n(7305),i=n(5152),o=n.n(i),s=n(1664),l=n.n(s),u=(n(7294),n(8003)),c=n(9778),d=n(350),f=n(1068),m=n(9698),h=n(3464),b=n(819);var p=function(e){var t=e.id,n=e.title,a=e.cover,i=(e.type,e.platform),o=(e.tech,e.description);return(0,r.jsx)(l(),{href:"/project/".concat(t),passHref:!0,children:(0,r.jsx)("div",{className:"md:w-[600px] w-full h-[480px] cursor-pointer",children:(0,r.jsxs)("div",{className:" bg-surface w-full h-full transition-shadow ease-in duration-600 rounded-lg relative ",children:[(0,r.jsx)("div",{className:"absolute w-full h-full",children:(0,r.jsx)("img",{className:"rounded-lg w-full h-full object-cover",alt:n,src:a})}),(0,r.jsxs)("div",{className:"absolute bg-background z-20 right-0 bottom-0 p-4 md:p-8",children:[(0,r.jsx)(d.Z,{variant:"h3",className:"mb-0",children:n}),i&&(0,r.jsx)("div",{children:(0,r.jsx)(b.Z,{text:i})}),o&&(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(d.Z,{variant:"body",className:"text-on-primary",children:o})})]})]})})},t)};o()((function(){return Promise.all([n.e(737),n.e(657),n.e(608)]).then(n.bind(n,4608))}),{loadableGenerated:{webpack:function(){return[4608]}},ssr:!1});function y(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{variant:"h2",as:"h1",className:"text-center",children:"Latest Projects"}),(0,r.jsx)("div",{className:"flex flex-col items-center",style:{rowGap:"2rem",marginTop:"2rem"},children:(0,r.jsx)(p,{id:"114",title:"Bluetooth Auto Blinder System",cover:"https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg",type:"test",description:"Watch believe send must. Majority hit lay become impact opportunity ask. Story art single item.",platform:"iOS, web, Android, Other"})})]})}function v(){return(0,r.jsxs)("div",{className:"container mx-auto mb-20 flex flex-col items-center text-center",children:[(0,r.jsx)(d.Z,{variant:"h2",children:"My YouTube Channel"}),(0,r.jsx)(d.Z,{variant:"body",className:"w-full md:w-1/2",children:"I setup my YouTube channel for recording something I have learnt and share something interesting"}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("a",{href:"https://youtube.com/AndyCaoisme",title:"Andy YouTube Channel",children:(0,r.jsx)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M107.715 32.49C110 41.4 110 60 110 60C110 60 110 78.6 107.715 87.51C106.445 92.435 102.73 96.31 98.025 97.62C89.48 100 60 100 60 100C60 100 30.535 100 21.975 97.62C17.25 96.29 13.54 92.42 12.285 87.51C10 78.6 10 60 10 60C10 60 10 41.4 12.285 32.49C13.555 27.565 17.27 23.69 21.975 22.38C30.535 20 60 20 60 20C60 20 89.48 20 98.025 22.38C102.75 23.71 106.46 27.58 107.715 32.49V32.49ZM50 77.5L80 60L50 42.5V77.5Z",fill:"#DD0000"})})})})]})}var g=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{pageTitle:(0,a.t)("home.pageTitle")}),(0,r.jsx)(h.Z,{image:"/static/images/voxel-home.png",className:"mb-8 md:mb-16"}),(0,r.jsx)(m.Z,{className:"mb-8 md:mb-16",image:"/static/images/andy-with-bubbles.png",title:(0,a.t)("home.intro.greeting"),subtitle:(0,a.t)("home.intro.role"),description:(0,a.t)("home.intro.description"),buttons:(0,r.jsxs)("div",{className:"flex gap-x-3",children:[(0,r.jsx)(l(),{href:"/about",passHref:!0,children:(0,r.jsx)(u.Z,{type:"primary",children:(0,a.t)("home.intro.button1")})}),(0,r.jsx)(l(),{href:"/project",passHref:!0,children:(0,r.jsx)(u.Z,{type:"secondary",children:(0,a.t)("home.intro.button2")})})]})}),(0,r.jsxs)("div",{className:"container mx-auto mb-8 md:mb-16",children:[(0,r.jsx)(d.Z,{variant:"h2",as:"h1",className:"text-center",children:"Working on"}),(0,r.jsxs)("div",{className:"text-center flex flex-row justify-center mb-8",children:[(0,r.jsx)("div",{className:"w-6 mr-2",children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(d.Z,{variant:"body",children:"Video: How I build my WFH setups tour 2022"})]})]}),(0,r.jsx)("div",{className:"container mx-auto mb-8 md:mb-16",children:(0,r.jsx)(y,{})}),(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsx)(v,{})})]})}},7926:function(e){e.exports={button_bubble:"button_button_bubble__y2ID4",bubbles:"button_bubbles__Bn4ru"}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}},2021:function(e,t,n){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,s,l=a(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))n.call(o,c)&&(l[c]=o[c]);if(t){s=t(o);for(var d=0;d<s.length;d++)r.call(o,s[d])&&(l[s[d]]=o[s[d]])}}return l}},569:function(e,t,n){0},403:function(e,t,n){var r=n(800),a=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),o({getCurrentValue:t,subscribe:n,value:i})),a.useDebugValue(i),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,i=n(e);return e(),function(){a=!0,i()}}),[t,n]),i}},138:function(e,t,n){e.exports=n(403)},522:function(e){e.exports=n(7294)}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,a),o=!1}finally{o&&delete r[e]}return i.exports}a.ab="//";var i=a(138);e.exports=i}()},5152:function(e,t,n){e.exports=n(7645)}},function(e){e.O(0,[962,794,774,888,179],(function(){return t=4545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);