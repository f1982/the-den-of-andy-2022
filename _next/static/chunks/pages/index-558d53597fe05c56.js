(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7920)}])},3884:function(e,t){"use strict";var n="Andy's personal website",r={title:n,description:"Andy's personal website is used for recording all his work and thinking.",canonical:"https://2022.andycao.me/",openGraph:{type:"website",title:n,description:"this is the desc will show up in twitter sharing",locale:"en_US",url:"https://2022.andycao.me/",site_name:n,images:[{url:"https://www.example.ie/og-image-01.jpg",width:800,height:600,alt:"Og Image Alt",type:"image/jpeg"},{url:"https://www.example.ie/og-image-02.jpg",width:900,height:800,alt:"Og Image Alt Second",type:"image/jpeg"},{url:"https://www.example.ie/og-image-03.jpg"},{url:"https://www.example.ie/og-image-04.jpg"}]},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};t.Z=r},8003:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(4184),o=n.n(a),s=n(7926),c=n.n(s),l=i.forwardRef((function(e,t){return(0,r.jsx)("a",{href:e.href,onClick:e.onClick,ref:t,children:(0,r.jsx)("button",{type:"button",className:o()(function(e){var t=o()("focus:outline-none","inline-flex","items-center","border-0","rounded","py-2","px-6","transition ease-in-out delay-100","hover:-translate-y-1","hover:scale-105",c().button_bubble);return"primary"===e?o()(t,"text-on-primary","hover:text-black","bg-primary-medium","hover:bg-primary-dark"):o()(t,"text-on-secondary","hover:text-black","bg-secondary-dark","hover:bg-secondary-light")}(e.type),e.className),children:e.children})})}));l.displayName="Button",l.defaultProps={onClick:null,href:null},t.Z=l},8737:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(4783)),a=n.n(i);t.Z=function(e){var t=e.children;return(0,r.jsx)("span",{className:a().headline,children:t})}},350:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(4184),a=n.n(i),o=(n(7294),n(8737)),s=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["small","p"]]),c=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);function l(e){var t,n=e.variant,i=void 0===n?"h1":n,l=e.as,u=void 0===l?void 0:l,f=e.className,d=e.highlight,g=void 0!==d&&d,h=e.children,p=u||s.get(i);return(0,r.jsx)(p,{className:a()("text-on-background",c.get(i),f),children:(t=h,g?(0,r.jsx)(o.Z,{children:t}):t)})}},1068:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(7305),a=n(2962),o=n(3884);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=e.pageTitle;return(0,r.jsx)(a.lX,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},o.Z,{title:"".concat((0,i.t)(t)," - ").concat(o.Z.title)}))}},7920:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),i=n(7294),a=n(3878);var o=n(1563),s=n(5267);function c(e,t){return(0,a.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||(0,o.Z)(e,t)||(0,s.Z)()}var l=n(4942),u=n(8718);function f(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var d={};function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),f.apply(void 0,t))}function h(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],i=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!o(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!o(r,e)||i&&!o(a,e))))}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return g("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):p(e,t,n)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=n(3884),w=n(1068),x=n(8003),j=n(350),O=n(6794),k=n(7468),N=n.n(k),_={duration:4,yoyo:100,ease:"easeInOut"};function C(){return(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("svg",{viewBox:"-2 0 126 120",width:"100%",height:"100%",className:N().svgAnimation,xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(O.E.path,{fillRule:"evenodd",clipRule:"evenodd",d:"M38.6478 3.0463C41.1569 -1.16569 47.3043 -0.971486 49.5442 3.39058L68.4865 40.2795L84.4988 6.07988C85.5263 3.88529 87.7257 2.48419 90.1429 2.48419H115.843C118.139 2.48419 120 4.35047 120 6.6531C120 8.95538 118.139 10.822 115.843 10.822H91.4631L73.2909 49.6356L91.3578 84.8201H115.843C118.139 84.8201 120 86.6864 120 88.989C120 91.2913 118.139 93.1579 115.843 93.1579H90.0903C87.7551 93.1579 85.6156 91.8496 84.5466 89.7675L68.8308 59.1615L62.3931 72.9113C60.1642 77.6718 53.4272 77.7145 51.1388 72.9821L42.3288 54.7668L21.8398 88.3786C19.4637 92.2762 13.858 92.3867 11.3313 88.5857L1.0473 73.1155C-0.287087 71.1082 -0.351176 68.5106 0.882751 66.4397L38.6478 3.0463ZM64.0264 49.8055L43.8658 10.5441L8.69301 69.5859L16.4437 81.2452L37.2192 47.1638C39.7913 42.9445 45.9977 43.2471 48.1496 47.6963L56.7185 65.4138L64.0264 49.8055Z",fill:"white",strokeWidth:"1",stroke:"black",initial:{pathLength:0},animate:{pathLength:1},transition:_})}),(0,r.jsx)(O.E.div,{className:"box",initial:{offsetDistance:"0%",scale:2.5},animate:{offsetDistance:"100%",scale:1},transition:_})]})}function L(e){var t=e.title,n=e.subtitle,i=e.label,a=e.link,o=void 0===a?"/home":a;return(0,r.jsxs)("div",{className:" container mx-auto flex flex-col items-center justify-center ",children:[(0,r.jsx)(C,{}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(j.Z,{variant:"h1",as:"h1",children:t}),(0,r.jsx)("p",{className:"mb-8 leading-relaxed",children:n}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(x.Z,{href:o,type:"primary",children:i})})]})]})}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function Z(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,i.useContext)(u.OO)||{},a=r.i18n,o=r.defaultNS,s=n||a||(0,u.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.zv),!s){g("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}s.options.react&&void 0!==s.options.react.wait&&g("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=v(v(v({},(0,u.JP)()),s.options.react),t),p=d.useSuspense,m=d.keyPrefix,y=e||o||s.options&&s.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(y);var w=(s.isInitialized||s.initializedStoreOnce)&&y.every((function(e){return b(e,s,d)}));function x(){return s.getFixedT(null,"fallback"===d.nsMode?y:y[0],m)}var j=c((0,i.useState)(x),2),O=j[0],k=j[1],N=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=d.bindI18n,t=d.bindI18nStore;function n(){N.current&&k(x)}return N.current=!0,w||p||h(s,y,(function(){N.current&&k(x)})),e&&s&&s.on(e,n),t&&s&&s.store.on(t,n),function(){N.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,n)})),t&&s&&t.split(" ").forEach((function(e){return s.store.off(e,n)}))}}),[s,y.join()]);var _=(0,i.useRef)(!0);(0,i.useEffect)((function(){N.current&&!_.current&&k(x),_.current=!1}),[s]);var C=[O,s,w];if(C.t=O,C.i18n=s,C.ready=w,w)return C;if(!w&&!p)return C;throw new Promise((function(e){h(s,y,(function(){e()}))}))}().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.Z,S({},y.Z,{pageTitle:e("welcome.pageTitle")})),(0,r.jsx)("div",{className:"h-screen flex flex-col justify-center items-center",children:(0,r.jsx)(L,{title:e("welcome.greeting"),subtitle:e("welcome.description"),label:e("welcome.buttonLabel"),link:"/home"})})]})}Z.getLayout=function(e){return(0,r.jsx)("div",{children:e})};var E=Z},7926:function(e){e.exports={button_bubble:"button_button_bubble__y2ID4",bubbles:"button_bubbles__Bn4ru"}},4783:function(e){e.exports={headline:"headline_headline___BDO4"}},7468:function(e){e.exports={svgAnimation:"default_svgAnimation__ZktRS"}}},function(e){e.O(0,[962,794,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);