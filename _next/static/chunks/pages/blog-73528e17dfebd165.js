(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(5514)}])},1453:function(e,t,s){"use strict";s.d(t,{Z:function(){return Image}});var i=s(5893),a=s(3552),n=s.n(a),r=s(7294),spinner_DotLoader=e=>{let{color:t="primary"}=e,s="bg-".concat(t,"-medium");return(0,i.jsxs)("div",{"aria-busy":"true",role:"alert",className:n().ldsEllipsis,children:[(0,i.jsx)("div",{className:s}),(0,i.jsx)("div",{className:s}),(0,i.jsx)("div",{className:s}),(0,i.jsx)("div",{className:s})]})},l=s(3967),o=s.n(l),Image=e=>{let{src:t,width:s,height:a,withLoader:n=!0,className:l,style:c={},alt:d="",...m}=e,[h,u]=(0,r.useState)(!1),g=(0,r.useRef)(null);return(0,r.useEffect)(()=>{g.current&&g.current.complete&&u(!0)},[]),(0,i.jsxs)("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"80px",width:s,height:a},...m,children:[(0,i.jsx)("img",{ref:g,src:t,className:o()("object-contain opacity-0","transition-opacity ease-out duration-1000",l),alt:d,style:h?{...c,width:s,height:a,opacity:1}:{opacity:0},onLoad:()=>u(!0)}),!h&&(0,i.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(spinner_DotLoader,{})})]})}},9759:function(e,t,s){"use strict";var i=s(5893),a=s(6838),n=s.n(a);s(7294),t.Z=e=>{let{children:t}=e;return(0,i.jsx)("span",{className:n().headline,children:t})}},1523:function(e,t,s){"use strict";var i=s(5893),a=s(9759),n=s(3967),r=s.n(n);s(7294);let l=new Map([["h1","h1"],["h2","h2"],["h3","h3"],["h4","h4"],["body","p"],["body-bold","p"],["small","p"]]),o=new Map([["h1","text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight"],["h2","text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight"],["h3","text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3"],["h4","text-base font-bold t leading-tight mt-2 mb-2 tracking-tight"],["body","text-base md:text-base t mt-1 mb-1 tracking-tight leading-6"],["body-bold","text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6"],["small","text-sm t mt-1 mb-1"]]);t.Z=e=>{let{variant:t="h1",as:s,className:n,highlight:c=!1,style:d,children:m}=e,h=s||l.get(t);return(0,i.jsx)(h,{className:r()("text-on-background",o.get(t),n),style:d,children:c?(0,i.jsx)(a.Z,{children:m}):m})}},2040:function(e,t,s){"use strict";s.d(t,{Z:function(){return seo_SiteSEO}});var i=s(5893),a=s(5125),n=s(6609),seo_seoConfig=()=>{let e=(0,n.t)("siteName"),t=(0,n.t)("siteDescription");return{title:e,description:t,canonical:"https://2022.andycao.me",openGraph:{type:"website",title:e,description:t,locale:"en_US",url:"https://2022.andycao.me",siteTitle:e,images:[{url:"".concat("https://2022.andycao.me","/static/images/og-image-1200x627.png"),width:1200,height:627,alt:e,type:"image/jpeg"},{url:"".concat("https://2022.andycao.me","/static/images/og-image-900x800.png"),width:900,height:800,alt:e,type:"image/jpeg"}]},twitter:{handle:"@iandycao",creator:"@iandycao",cardType:"summary"}}},r=s(2962),seo_SiteSEO=e=>{let{pageTitle:t,seoConfig:s}=e,l=(0,a.Z)(),o=s||seo_seoConfig();return(0,i.jsx)(r.lX,{...o,canonical:l,title:"".concat((0,n.t)(t)," - ").concat(o.title)})}},6258:function(e,t,s){"use strict";var i=s(5893),a=s(2184),n=s(1523);t.Z=e=>{let{date:t}=e;return(0,i.jsx)(n.Z,{variant:"small",as:"time",children:(0,a.Z)(t)})}},9718:function(e,t,s){"use strict";var i=s(5893),a=s(9341),n=s.n(a),r=s(1453),l=s(3967),o=s.n(l);s(7294);var c=s(6926),d=s.n(c);t.Z=e=>{let{image:t,children:s,className:a}=e,l=d()(n()),c=l.theme.colors.primary.medium;return(0,i.jsxs)("div",{className:o()("mb-12","flex flex-col",a),style:{backgroundPosition:"15px 0, 45px 0, 0 0, 0 0",backgroundSize:"30px 60px",background:"linear-gradient(0deg, ".concat(c," 25%, transparent 25%)")},children:[(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsx)("div",{className:o()("mt-8 md:mt-16"),children:!!t&&(0,i.jsx)(r.Z,{src:t,alt:"hero image",className:"h-[360px] md:h-[540px]"})})]})}},7210:function(e,t,s){"use strict";var i=s(5893),a=s(1523),n=s(3967),r=s.n(n);s(7294),t.Z=e=>{let{title:t,description:s,className:n}=e;return(0,i.jsxs)("div",{className:r()("flex flex-col items-center justify-center mb-8 md:mb-16",n),children:[(0,i.jsx)(a.Z,{variant:"h1",as:"h1",className:"page-title",highlight:!0,children:t}),(0,i.jsx)(a.Z,{variant:"body",className:"page-description",children:s})]})}},5125:function(e,t,s){"use strict";var i=s(1163);t.Z=()=>{let e=(0,i.useRouter)();return"https://2022.andycao.me"+e.asPath}},5514:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x},default:function(){return blog}});var i=s(5893),a=s(1523),n=s(2040),r=s(9718),l=s(7210),o=s(1453),c=s(6258),d=s(1354),m=s(3967),h=s.n(m),u=s(1664),g=s.n(u);s(7294);var Blog_PostPreview=e=>{let{title:t,coverImage:s,date:n,excerpt:r,author:l,slug:m}=e;return(0,i.jsxs)("div",{className:"cursor-pointer",children:[(0,i.jsx)(g(),{as:"".concat(d.bQ,"/").concat(m),href:"".concat(d.bQ,"/[slug]"),passHref:!0,children:(0,i.jsx)("div",{className:"mb-5",children:s&&(0,i.jsx)(o.Z,{className:h()("rounded-xl object-cover","w-full h-[210px] md:h-[180px] lg:h-[270px] mb-6"),src:s,alt:"".concat(t," preview")})})}),(0,i.jsx)(a.Z,{variant:"h3",as:"h2",className:"leading-[1.2] line-clamp-2",children:t}),(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)(c.Z,{date:n})}),(0,i.jsx)(a.Z,{variant:"body",className:"leading-[1.2] line-clamp-3",children:r})]})},Blog_MoreStories=e=>{let{posts:t}=e;return(0,i.jsx)("section",{children:(0,i.jsx)("div",{className:" grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-16 mx-2 md:mx-auto",children:t.map(e=>"test-post-with-all-kinds-of-format"!==e.slug&&(0,i.jsx)(Blog_PostPreview,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug))})})},MoreMoreStories=e=>{let{posts:t}=e;return(0,i.jsx)("ul",{children:t.map(e=>(0,i.jsx)("li",{className:"cursor-pointer hover:underline",children:(0,i.jsx)(g(),{as:"/blog/".concat(e.slug),href:"/blog/[slug]",passHref:!0,legacyBehavior:!0,children:e.title})},"list_".concat(e.slug)))})},p=s(6609),x=!0,blog=e=>{let{allPosts:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Z,{pageTitle:(0,p.t)("blog.pageTitle")}),(0,i.jsx)(r.Z,{image:"/static/images/page-hero-typewriter.png"}),(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsx)(l.Z,{title:(0,p.t)("blog.headline"),description:(0,p.t)("blog.intro")}),t.length>0&&(0,i.jsx)(Blog_MoreStories,{posts:t}),(0,i.jsx)(a.Z,{variant:"h1",as:"h1",highlight:!0,children:(0,p.t)("blog.more")}),t.length>0&&(0,i.jsx)(MoreMoreStories,{posts:t})]})]})}},2184:function(e,t,s){"use strict";s.d(t,{A:function(){return getAge},Z:function(){return parseDate}});var i=s(3717),a=s(3595);function parseDate(e){let t=(0,a.Z)(e);return(0,i.ZP)(t,"LLLL d, yyyy")}function getAge(e){let t=new Date,s=new Date(e),i=t.getFullYear()-s.getFullYear(),a=t.getMonth()-s.getMonth();return(a<0||0===a&&t.getDate()<s.getDate())&&(i-=1),i}},3552:function(e){e.exports={ldsEllipsis:"threedots_ldsEllipsis___Rm1h","lds-ellipsis1":"threedots_lds-ellipsis1__WvnMp","lds-ellipsis2":"threedots_lds-ellipsis2__FHT00","lds-ellipsis3":"threedots_lds-ellipsis3__Vt11_"}},6838:function(e){e.exports={headline:"headline_headline__SOBeR"}}},function(e){e.O(0,[962,284,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);