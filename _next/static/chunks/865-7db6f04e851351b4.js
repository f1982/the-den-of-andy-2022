"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{3810:function(e,n,r){r.d(n,{re:function(){return k}});var t=function(){return t=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var u in n=arguments[r])Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u]);return e},t.apply(this,arguments)};var u=function(e,n){return function(r){return Math.max(Math.min(r,n),e)}},i=function(e){return e%1?Number(e.toFixed(5)):e},a=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,o={test:function(e){return"number"===typeof e},parse:parseFloat,transform:function(e){return e}},f=t(t({},o),{transform:u(0,1)}),s=(t(t({},o),{default:1}),function(e){return{test:function(n){return"string"===typeof n&&n.endsWith(e)&&1===n.split(" ").length},parse:parseFloat,transform:function(n){return""+n+e}}}),c=(s("deg"),s("%")),l=(s("px"),s("vh"),s("vw"),t(t({},c),{parse:function(e){return c.parse(e)/100},transform:function(e){return c.transform(100*e)}}),u(0,255)),p=function(e){return void 0!==e.red},v=function(e){return void 0!==e.hue};var d=function(e){return function(n){if("string"!==typeof n)return n;for(var r={},t=function(e){return e.substring(e.indexOf("(")+1,e.lastIndexOf(")"))}(n).replace(/(,|\/)/g," ").split(/ \s*/),u=0;u<4;u++)r[e[u]]=void 0!==t[u]?parseFloat(t[u]):1;return r}},m=t(t({},o),{transform:function(e){return Math.round(l(e))}});function h(e,n){return e.startsWith(n)&&a.test(e)}var g={test:function(e){return"string"===typeof e?h(e,"rgb"):p(e)},parse:d(["red","green","blue","alpha"]),transform:function(e){var n=e.red,r=e.green,t=e.blue,u=e.alpha,a=void 0===u?1:u;return function(e){var n=e.red,r=e.green,t=e.blue,u=e.alpha;return"rgba("+n+", "+r+", "+t+", "+(void 0===u?1:u)+")"}({red:m.transform(n),green:m.transform(r),blue:m.transform(t),alpha:i(f.transform(a))})}},b=(d(["hue","saturation","lightness","alpha"]),t(t({},g),{test:function(e){return"string"===typeof e&&h(e,"#")},parse:function(e){var n="",r="",t="";return e.length>4?(n=e.substr(1,2),r=e.substr(3,2),t=e.substr(5,2)):(n=e.substr(1,1),r=e.substr(2,1),t=e.substr(3,1),n+=n,r+=r,t+=t),{red:parseInt(n,16),green:parseInt(r,16),blue:parseInt(t,16),alpha:1}}}),r(4394),0);"undefined"!==typeof window&&window.requestAnimationFrame;var y=function(e){return function(n,r,t){return void 0!==t?e(n,r,t):function(t){return e(n,r,t)}}},E=y((function(e,n,r){return Math.min(Math.max(r,e),n)}));var x=function(e){return e},C=function(e){return void 0===e&&(e=x),y((function(n,r,t){var u=r-t,i=-(0-n+1)*(0-e(Math.abs(u)));return u<=0?r+i:r-i}))},k=(C(),C(Math.sqrt),y((function(e,n,r){var t=n-e;return((r-e)%t+t)%t+e})));E(0,1)},4332:function(e,n,r){r.d(n,{M:function(){return m}});var t=r(655),u=r(7294),i=r(4735),a=r(5411);var o=r(240),f=r(6681),s=0;function c(){var e=s;return s++,e}var l=function(e){var n=e.children,r=e.initial,i=e.isPresent,a=e.onExitComplete,s=e.custom,l=e.presenceAffectsLayout,v=(0,f.h)(p),d=(0,f.h)(c),m=(0,u.useMemo)((function(){return{id:d,initial:r,isPresent:i,custom:s,onExitComplete:function(e){var n,r;v.set(e,!0);try{for(var u=(0,t.XA)(v.values()),i=u.next();!i.done;i=u.next()){if(!i.value)return}}catch(o){n={error:o}}finally{try{i&&!i.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}null===a||void 0===a||a()},register:function(e){return v.set(e,!1),function(){return v.delete(e)}}}}),l?void 0:[i]);return(0,u.useMemo)((function(){v.forEach((function(e,n){return v.set(n,!1)}))}),[i]),u.useEffect((function(){!i&&!v.size&&(null===a||void 0===a||a())}),[i]),u.createElement(o.O.Provider,{value:m},n)};function p(){return new Map}var v=r(5364);function d(e){return e.key||""}var m=function(e){var n=e.children,r=e.custom,o=e.initial,f=void 0===o||o,s=e.onExitComplete,c=e.exitBeforeEnter,p=e.presenceAffectsLayout,m=void 0===p||p,h=(0,t.CR)(function(){var e=(0,u.useRef)(!1),n=(0,t.CR)((0,u.useState)(0),2),r=n[0],o=n[1];(0,a.z)((function(){return e.current=!0}));var f=(0,u.useCallback)((function(){!e.current&&o(r+1)}),[r]);return[(0,u.useCallback)((function(){return i.ZP.postRender(f)}),[f]),r]}(),1),g=h[0],b=(0,u.useContext)(v.p).forceRender;b&&(g=b);var y=(0,u.useRef)(!0),E=(0,u.useRef)(!0);(0,u.useEffect)((function(){return function(){E.current=!1}}),[]);var x=function(e){var n=[];return u.Children.forEach(e,(function(e){(0,u.isValidElement)(e)&&n.push(e)})),n}(n),C=(0,u.useRef)(x),k=(0,u.useRef)(new Map).current,w=(0,u.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var r=d(e);n.set(r,e)}))}(x,k),y.current)return y.current=!1,u.createElement(u.Fragment,null,x.map((function(e){return u.createElement(l,{key:d(e),isPresent:!0,initial:!!f&&void 0,presenceAffectsLayout:m},e)})));for(var M=(0,t.ev)([],(0,t.CR)(x),!1),R=C.current.map(d),O=x.map(d),P=R.length,A=0;A<P;A++){var F=R[A];-1===O.indexOf(F)?w.add(F):w.delete(F)}return c&&w.size&&(M=[]),w.forEach((function(e){if(-1===O.indexOf(e)){var n=k.get(e);if(n){var t=R.indexOf(e);M.splice(t,0,u.createElement(l,{key:d(n),isPresent:!1,onExitComplete:function(){k.delete(e),w.delete(e);var n=C.current.findIndex((function(n){return n.key===e}));if(C.current.splice(n,1),!w.size){if(C.current=x,!1===E.current)return;g(),s&&s()}},custom:r,presenceAffectsLayout:m},n))}}})),M=M.map((function(e){var n=e.key;return w.has(n)?e:u.createElement(l,{key:d(e),isPresent:!0,presenceAffectsLayout:m},e)})),C.current=M,u.createElement(u.Fragment,null,w.size?M:M.map((function(e){return(0,u.cloneElement)(e)})))}}}]);