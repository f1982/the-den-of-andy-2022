"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(7294),i=n(8626),a=n(9521),s=n(7854),c=n(51),l=n(35);function u(){var e=(0,a.S)().progress;return(0,r.jsx)(s.V,{center:!0,children:"".concat(e,": % loaded")})}function h(e){var t=e.children;return(0,r.jsx)(l.Xz,{dpr:2,camera:{position:[0,0,5],fov:50},children:(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(u,{}),children:[(0,r.jsx)("ambientLight",{intensity:.5}),(0,r.jsx)("pointLight",{position:[-20,10,25]}),(0,r.jsx)(c.N,{global:!0,config:{mass:2,tension:500},snap:!0,rotation:[0,.3,0],polar:[-Math.PI/3,Math.PI/3],azimuth:[-Math.PI/1.4,Math.PI/2],children:t})]})})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="https://raw.githubusercontent.com/f1982/planet-of-images/main/model/viking_room/scene.gltf";function m(e){var t=(0,o.useRef)(),n=(0,i.L)(p),a=n.nodes;n.materials;return(0,r.jsx)("group",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({ref:t},e,{dispose:null,children:(0,r.jsx)("mesh",{name:"Room",castShadow:!0,receiveShadow:!0,geometry:a.mesh_all1_Texture1_0.geometry,material:a.mesh_all1_Texture1_0.material,position:[0,-.3,0],rotation:[.5,150,.12],scale:.11})}))}function d(){return(0,r.jsx)("div",{style:{width:"100%",height:"800px"},children:(0,r.jsx)(h,{children:(0,r.jsx)(m,{})})})}i.L.preload(p)}}]);