(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{46:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/apps",function(){return t(8340)}])},8340:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return C}});var e=t(5893),o=t(3234);function i(n,r,t){t.set(n&&r?n/r:0)}var u,s=t(1756),c=t(8868);function f(){return{xOffset:window.pageXOffset,yOffset:window.pageYOffset,xMaxOffset:document.body.clientWidth-window.innerWidth,yMaxOffset:document.body.clientHeight-window.innerHeight}}var a=!1;function l(){a=!0;var n=function(n,r){var t=function(){var t=r(),e=t.xOffset,o=t.yOffset,u=t.xMaxOffset,s=t.yMaxOffset;n.scrollX.set(e),n.scrollY.set(o),i(e,u,n.scrollXProgress),i(o,s,n.scrollYProgress)};return t(),t}(u,f);(0,s.E)(window,"scroll",n),(0,s.E)(window,"resize",n)}function d(){return u||(u={scrollX:(0,o.B)(0),scrollY:(0,o.B)(0),scrollXProgress:(0,o.B)(0),scrollYProgress:(0,o.B)(0)}),(0,c.L)((function(){!a&&l()}),[]),u}var v=t(655),x=t(9180),h=function(n){return function(n){return"object"===typeof n&&n.mix}(n)?n.mix:void 0};var g=t(7294),p=t(6014),w=t(6681);var y=t(4735);function _(n,r){var t=function(n){var r=(0,w.h)((function(){return(0,o.B)(n)}));if((0,g.useContext)(p._).isStatic){var t=(0,v.CR)((0,g.useState)(n),2)[1];(0,g.useEffect)((function(){return r.onChange(t)}),[])}return r}(r()),e=function(){return t.set(r())};return e(),function(n,r){(0,g.useEffect)((function(){var t=n.map((function(n){return n.onChange(r)}));return function(){return t.forEach((function(n){return n()}))}}))}(n,(function(){return y.ZP.update(e,!1,!0)})),t}function E(n,r,t,e){var o="function"===typeof r?r:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=!Array.isArray(n[0]),e=t?0:-1,o=n[0+e],i=n[1+e],u=n[2+e],s=n[3+e],c=(0,x.s)(i,u,(0,v.pi)({mixer:h(u[0])},s));return t?c(o):c}(r,t,e);return Array.isArray(n)?O(n,o):O([n],(function(n){var r=(0,v.CR)(n,1)[0];return o(r)}))}function O(n,r){var t=(0,w.h)((function(){return[]}));return _(n,(function(){t.length=0;for(var e=n.length,o=0;o<e;o++)t[o]=n[o].get();return r(t)}))}var b=t(6794),m=function(){var n=d().scrollYProgress,r=E(n,[.1,.2],[0,360]),t=E(n,[.2,.3],[0,1e3]);return(0,e.jsx)(b.E.h1,{style:{rotate:r,textAlign:"center",top:"calc(50vh - 40px)",x:t,position:"fixed",width:"100vw",fontSize:"80px"},children:"This is RotationItem"})},P=function(){var n=E(d().scrollYProgress,[.3,.4,.5,.6],[-1e3,0,0,-1e3]);return(0,e.jsx)(b.E.h1,{style:{textAlign:"center",top:"calc(50vh - 40px)",x:n,position:"fixed",width:"100vw",fontSize:"80px"},children:"This is MoveInItem"})},C=function(){var n=(0,g.useState)(!1);n[0],n[1],E(d().scrollYProgress,[0,.9],[0,360]);return(0,e.jsxs)("div",{className:"container mx-auto",style:{backgroundColor:"#dedbde",backgroundImage:"linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent)",backgroundSize:"700px 700px",height:"10000px"},children:[(0,e.jsx)(m,{}),(0,e.jsx)(P,{})]})}}},function(n){n.O(0,[794,774,888,179],(function(){return r=46,n(n.s=r);var r}));var r=n.O();_N_E=r}]);