(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2895)}])},413:function(e,n,t){"use strict";var r=t(3454),i="Andy website SEO title",a={title:i,description:"This this andy website seo desc.",canonical:r.env.NEXT_PUBLIC_APP_SITE_URL,openGraph:{type:"website",title:i,description:"this is the desc will show up in twitter sharing",locale:"en_US",url:r.env.NEXT_PUBLIC_APP_SITE_URL,site_name:i},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}};n.Z=a},6296:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(7305),a=t(2962),o=t(413);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){var n=e.pageTitle;return(0,r.jsx)(a.lX,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},o.Z,{title:"".concat((0,i.t)(n)," - ").concat(o.Z.title)}))}},2895:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(5893),i=t(1664),a=t(7294),o=t(3878);var c=t(1563),s=t(5267);function u(e,n){return(0,o.Z)(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(e,n)||(0,c.Z)(e,n)||(0,s.Z)()}var l=t(4942),f=t(8718);function d(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var p={};function g(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&p[n[0]]||("string"===typeof n[0]&&(p[n[0]]=new Date),d.apply(void 0,n))}function h(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return g("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!o(r,e)||i&&!o(a,e))))}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=t(413),x=t(6296);function j(e){var n=e.greeting,t=e.link;return(0,r.jsx)("div",{className:"container mx-auto flex px-5 py-24 items-center justify-center flex-col",children:(0,r.jsxs)("div",{className:"text-center lg:w-2/3 w-full",children:[(0,r.jsx)("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",children:n}),(0,r.jsx)("p",{className:"mb-8 leading-relaxed",children:"Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."}),(0,r.jsx)("div",{className:"flex justify-center",children:t})]})})}var w=t(3454);var P=function(){var e=function(){var e=(0,a.useRef)(1);return(0,a.useEffect)((function(){e.current+=1}),[]),e.current}();return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["NEXT_PUBLIC_APP_GAD:"," ",w.env.NEXT_PUBLIC_APP_GAD]}),(0,r.jsxs)("div",{children:["environment:"," ","production"]}),(0,r.jsxs)("div",{children:["App Version:"," ",w.env.NEXT_PUBLIC_APP_VERSION]}),(0,r.jsxs)("div",{children:["Site URL:"," ",w.env.NEXT_PUBLIC_APP_SITE_URL]}),(0,r.jsxs)("div",{children:["Render times:"," ",e]})]})},_=t(3454);function O(){return"off"===_.env.NEXT_PUBLIC_APP_GAD?(0,r.jsx)("div",{}):(0,r.jsxs)("div",{style:{height:"150px",width:"100%",border:"1px solid #cccccc"},children:[(0,r.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(_.env.NEXT_PUBLIC_APP_GAD_ID),crossOrigin:"anonymous"}),(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":_.env.NEXT_PUBLIC_APP_GAD_ID,"data-ad-slot":"7654736119"}),(0,r.jsxs)("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]})]})}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){N(e,n,t[n])}))}return e}var E=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(f.OO)||{},i=r.i18n,o=r.defaultNS,c=t||i||(0,f.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new f.zv),!c){g("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},l=[s,{},!1];return l.t=s,l.i18n={},l.ready=!1,l}c.options.react&&void 0!==c.options.react.wait&&g("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var d=b(b(b({},(0,f.JP)()),c.options.react),n),p=d.useSuspense,y=d.keyPrefix,m=e||o||c.options&&c.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(m);var x=(c.isInitialized||c.initializedStoreOnce)&&m.every((function(e){return v(e,c,d)}));function j(){return c.getFixedT(null,"fallback"===d.nsMode?m:m[0],y)}var w=u((0,a.useState)(j),2),P=w[0],_=w[1],O=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=d.bindI18n,n=d.bindI18nStore;function t(){O.current&&_(j)}return O.current=!0,x||p||h(c,m,(function(){O.current&&_(j)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){O.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,m.join()]);var N=(0,a.useRef)(!0);(0,a.useEffect)((function(){O.current&&!N.current&&_(j),N.current=!1}),[c]);var k=[P,c,x];if(k.t=P,k.i18n=c,k.ready=x,x)return k;if(!x&&!p)return k;throw new Promise((function(e){h(c,m,(function(){e()}))}))}().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,k({},m.Z,{pageTitle:e("welcome.pageTitle")})),(0,r.jsxs)("div",{children:[(0,r.jsx)(j,{greeting:e("greeting"),link:(0,r.jsx)(i.default,{href:"/home",passHref:!0,children:(0,r.jsx)("a",{className:" inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ",children:"Go"})})}),(0,r.jsx)(P,{}),(0,r.jsx)(O,{})]})]})}}},function(e){e.O(0,[962,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);