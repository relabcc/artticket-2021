(this["webpackJsonpstyled-cra"]=this["webpackJsonpstyled-cra"]||[]).push([[3],{112:function(e,t,n){"use strict";var r,c=n(6),a=n(49),i=n(1),o=n(602),l=n(50),b=n(12),u=n(5),s=Object(l.a)(o.a)(r||(r=Object(a.a)([""])));s.defaultProps={fontSize:Object(b.f)("0.875em","1em")},s.Inline=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({as:"span"},e),{},{ref:t}))})),s.Bold=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({fontWeight:"700"},e),{},{ref:t}))})),s.Note=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({fontWeight:"300",fontSize:Object(b.f)("0.75em","0.875em")},e),{},{ref:t}))})),s.H1=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({letterSpacing:"wider",as:"h1",fontSize:Object(b.f)("1.75em","3.25em"),fontWeight:"900"},e),{},{ref:t}))})),s.H2=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({as:"h2",fontSize:Object(b.f)("1.375em","1.75em"),fontWeight:"900"},e),{},{ref:t}))})),s.H3=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({as:"h3",fontSize:Object(b.f)("1.125em","1.375em"),fontWeight:"700"},e),{},{ref:t}))})),s.H4=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(c.a)(Object(c.a)({as:"h4",fontSize:Object(b.f)("1.125em","1.25em"),fontWeight:Object(b.f)(700,400)},e),{},{ref:t}))})),t.a=s},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return C}));var r=n(6),c=n(7),a=n(71),i=n(598),o=n(597),l=n(292),b=n(109),u=n.n(b),s=Object(o.a)({sm:"30em",md:"48em",lg:"60em",xl:"80em","2xl":"96em"}),j=Object.values(s).slice(1),f=[[1,"mobile"],[2,"tablet"],[3,"laptop"],[4,"desktop"]],d=j.map((function(e,t){var n=f.findIndex((function(e){return Object(c.a)(e,1)[0]>t}));return n>=0?n:f.length})),O=Object(l.a)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length;return r<=1?t[0]:j.map((function(e,n){return u()(t,[d[n]],null)}))})),m="81.25em",h=O("1.75em","6.25em"),p='"Noto Sans TC", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',g="#E05B5A",x="#ECA687",v="#FAF599",w="#9DC29F",y="#39868C",C=[g,x,v,w,y],k={fonts:{heading:p,body:p,mono:"Menlo, monospace"},colors:Object(r.a)(Object(r.a)({},a.theme.colors),{},{primary:u()(a.theme.colors,"".concat("blue",".500")),secondary:u()(a.theme.colors,"".concat("green",".500")),danger:u()(a.theme.colors,"".concat("red",".500")),text:u()(a.theme.colors,"black"),drama:g,music:x,dance:v,family:w,other:y}),breakpoints:j,containerWidth:m,headerHeight:O("48px","60px")},F=Object(i.a)(k);t.e=F},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),c=n(68),a=(n(1),n(208)),i=n(299),o=n(303),l=n(604),b=n(26),u=n(5),s=function(e){var t=e.children,n=Object(c.a)(e,["children"]);return Object(u.jsxs)(a.a,Object(r.a)(Object(r.a)({mt:"2em",flexDirection:"column",fontSize:"0.875em",variant:"ghost",colorScheme:"whiteAlpha",color:"white",_hover:{bg:"transparent"},fontWeight:"400"},n),{},{children:[t,Object(u.jsx)(l.a.div,{animate:{y:[2,10,2]},transition:{duration:1,repeat:1/0},children:Object(u.jsx)(i.a,{size:"1.5em"})})]}))};t.b=function(e){var t=e.children,n=e.onClick,a=Object(c.a)(e,["children","onClick"]);return Object(u.jsxs)(b.a.Absolute,Object(r.a)(Object(r.a)({left:"50%",bottom:"0",transform:"translateX(-50%)",pb:"1em",width:"9em",textAlign:"center"},a),{},{children:[Object(u.jsxs)(b.a,{position:"absolute",width:"100%",top:"2em",children:[Object(u.jsx)(o.a,{ratio:1,children:Object(u.jsx)(b.a,{bgImage:"radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"})}),Object(u.jsx)(o.a,{ratio:1,children:Object(u.jsx)(b.a,{bgImage:"radial-gradient(50% 50% at 50% 50%, rgba(255, 246, 159, 0.25) 0%, rgba(255, 249, 196, 0.02) 81.25%)"})})]}),Object(u.jsx)(s,{onClick:n,children:t})]}))}},167:function(e,t,n){"use strict";var r=n(1);t.a=Object(r.createContext)({})},212:function(e,t,n){"use strict";var r=n(6),c=n(1),a=n(111),i=n.n(a),o=n(167),l=n(7),b=n(296),u=n.n(b),s=n(12),j=function(e){return s.g.reduce((function(t,n){var r=Object(l.a)(n,2),c=r[0],a=r[1];return t[u()("is-".concat(a))]=!e[c],t}),{})};t.a=function(){var e=Object(c.useContext)(o.a);return Object(r.a)(Object(r.a)({},j(e)),{},{responsive:s.f,getCurrentValue:Object(c.useCallback)((function(t){if(!i()(t))return t;var n=e.findIndex((function(e){return!e}))-1;for(-2===n&&(n=t.length-1);!t[n]&&n>=0;)n-=1;return t[n]}),[e])})}},217:function(e,t,n){"use strict";var r,c=n(6),a=n(49),i=n(1),o=n(209),l=n(50),b=n(5),u=Object(l.a)(o.a)(r||(r=Object(a.a)([""])));u.Vertical=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(o.a,Object(c.a)(Object(c.a)({direction:"column"},e),{},{ref:t}))})),t.a=u},219:function(e,t,n){"use strict";var r,c=n(6),a=n(68),i=(n(1),n(208)),o=n(49),l=n(622),b=n(50),u=Object(b.a)(l.a)(r||(r=Object(o.a)([""]))),s=n(5),j=function(e){var t=e.href,n=Object(a.a)(e,["href"]);return t?Object(s.jsx)(i.a,Object(c.a)({as:function(e){return Object(s.jsx)(u,Object(c.a)(Object(c.a)({},e),{},{href:t}))}},n)):Object(s.jsx)(i.a,Object(c.a)({},n))};j.defaultProps={colorScheme:"blue",lineHeight:1.5,_foucs:{boxShadow:"unset",outline:"none"}},j.Secondary=function(e){return Object(s.jsx)(j,Object(c.a)({colorScheme:"green"},e))},j.Danger=function(e){return Object(s.jsx)(j,Object(c.a)({colorScheme:"red"},e))},j.Transparent=function(e){return Object(s.jsx)(j,Object(c.a)({color:"dance",bg:"transparent",border:"1px solid white",borderRadius:"1.25rem",_hover:{bg:"transparent"}},e))};t.a=j},26:function(e,t,n){"use strict";var r,c=n(6),a=n(49),i=n(1),o=n(599),l=n(50),b=n(5),u=Object(l.a)(o.a)(r||(r=Object(a.a)([""])));t.a=u,u.Inline=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(c.a)(Object(c.a)({as:"span",display:"inline-block",verticalAlign:"middle"},e),{},{ref:t}))})),u.Absolute=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(c.a)(Object(c.a)({position:"absolute"},e),{},{ref:t}))})),u.FullAbs=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u.Absolute,Object(c.a)(Object(c.a)({top:"0",left:"0",right:"0",bottom:"0"},e),{},{ref:t}))})),u.Relative=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(c.a)(Object(c.a)({position:"relative"},e),{},{ref:t}))})),u.Fixed=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(c.a)(Object(c.a)({position:"fixed"},e),{},{ref:t}))})),u.Invisible=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u.Absolute,Object(c.a)(Object(c.a)({width:"0",height:"0",overflow:"hidden",opacity:"0"},e),{},{ref:t}))})),u.AbsCenter=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(c.a)(Object(c.a)({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e),{},{ref:t}))}))},289:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,610))},loading:a.a,delay:700});t.default=i},30:function(e,t,n){"use strict";var r=n(209),c=n(600),a=(n(1),n(5));t.a=function(){return Object(a.jsx)(r.a,{width:"100%",justifyContent:"center",children:Object(a.jsx)(c.a,{})})}},577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg.10e38d7f.webp"},578:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg.f6e001c1.png"},579:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg2.74db8f98.webp"},580:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg2.95ba91b4.png"},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg1.e5a4ca2c.webp"},582:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg1.27be5461.png"},583:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg2.f362031e.webp"},584:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg2.f1f69ab2.png"},585:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,607))},loading:a.a,delay:700});t.default=i},588:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,608))},loading:a.a,delay:700});t.default=i},589:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return n.e(10).then(n.bind(null,609))},loading:a.a,delay:700});t.default=i},590:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,611))},loading:a.a,delay:700});t.default=i},591:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,612))},loading:a.a,delay:700});t.default=i},592:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,615))},loading:a.a});t.default=i},593:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,613))},loading:a.a,delay:700});t.default=i},594:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n.n(r),a=n(30),i=c()({loader:function(){return n.e(11).then(n.bind(null,614))},loading:a.a,delay:700});t.default=i},595:function(e,t,n){"use strict";n.r(t);n(325),n(334);var r,c,a=n(1),i=n(129),o=n.n(i),l=(n(258),n(51)),b=n(627),u=(n(525),n(49)),s=Object(l.b)(r||(r=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&display=swap');\n  body {\n    min-width: 100%;\n    height: 100%;\n    background: black;\n    color: white;\n  }\n\n  img {\n    width: 100%;\n  }\n  #root {\n    height: 100%;\n  }\n"]))),j=n(12),f=n(5),d=function(e){var t=e.children;return Object(f.jsx)(b.a,{theme:j.e,resetCSS:!0,children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{styles:s}),t]})})},O=n(167),m=n(295),h=function(e){return Object(m.useMediaQuery)({query:"(min-width: ".concat(e,")")})},p=function(e){var t=e.children,n=j.a.map(h);return Object(f.jsx)(O.a.Provider,{value:n,children:t})},g=n(7),x=Object(a.createContext)({hideHeader:!1,setHideHeader:function(){}}),v=function(e){var t=e.children,n=Object(a.useState)(),r=Object(g.a)(n,2),c=r[0],i=r[1];return Object(f.jsx)(x.Provider,{value:{hideHeader:c,setHideHeader:i},children:t})},w=n(35),y=n(206),C=n.n(y),k=n(89),F=n(632),S=n(212),A=n(50),M=n(26),H=Object(A.a)(M.a)(c||(c=Object(u.a)([""])));H.defaultProps={mx:"auto",px:j.c,maxWidth:j.d},H.displayName="Container";var P,R,I,_,E=H,z=n(631),N=n(6),W=n(68),T=n(624),D=n(629),V=n(625),B=n(630),K=n(65),Z=n(219),J=n(217),X=n.p+"static/media/logo.17b4e115.svg";function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function q(e,t){var n=e.title,r=e.titleId,c=Y(e,["title","titleId"]);return a.createElement("svg",U({width:30,height:20,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,P||(P=a.createElement("path",{d:"M1.66667 11.4423C2.58714 11.4423 3.33333 10.7105 3.33333 9.80771C3.33333 8.90494 2.58714 8.1731 1.66667 8.1731C0.746192 8.1731 0 8.90494 0 9.80771C0 10.7105 0.746192 11.4423 1.66667 11.4423Z",fill:"#F6F6F6"})),R||(R=a.createElement("path",{d:"M28.4337 8.1731H8.23366C7.36841 8.1731 6.66699 8.86103 6.66699 9.70963V9.90579C6.66699 10.7544 7.36841 11.4423 8.23366 11.4423H28.4337C29.2989 11.4423 30.0003 10.7544 30.0003 9.90579V9.70963C30.0003 8.86103 29.2989 8.1731 28.4337 8.1731Z",fill:"#F6F6F6"})),I||(I=a.createElement("path",{d:"M28.4333 16.3462H1.56667C0.701421 16.3462 0 17.0341 0 17.8827V18.0789C0 18.9275 0.701421 19.6154 1.56667 19.6154H28.4333C29.2986 19.6154 30 18.9275 30 18.0789V17.8827C30 17.0341 29.2986 16.3462 28.4333 16.3462Z",fill:"#F6F6F6"})),_||(_=a.createElement("path",{d:"M28.4333 0H1.56667C0.701421 0 0 0.687931 0 1.53654V1.73269C0 2.5813 0.701421 3.26923 1.56667 3.26923H28.4333C29.2986 3.26923 30 2.5813 30 1.73269V1.53654C30 0.687931 29.2986 0 28.4333 0Z",fill:"#F6F6F6"})))}var Q=a.forwardRef(q),G=(n.p,[{label:"\u9996\u9801",color:"dance",link:0},{label:"\u7e3d\u9ad4\u7522\u503c",link:3},{label:"2020\u7522\u503c\u8b8a\u5316",link:5},{label:"\u89c0\u773e\u8cfc\u7968\u884c\u70ba\u8207\u4eba\u6c23\u7bc0\u76ee",link:13},{label:"\u85ddFUN\u5238\u632f\u8208\u6548\u679c",link:14},{label:"\u4e0b\u8f09\u5b8c\u6574\u5831\u544a",link:15}]),L=function(e){var t=e.active,n=e.bodyHeight,r=e.getFullpageApi,c=Object(W.a)(e,["active","bodyHeight","getFullpageApi"]),a=Object(T.a)(),i=a.isOpen,o=a.onOpen,l=a.onClose;return Object(f.jsxs)(J.a,Object(N.a)(Object(N.a)({position:"fixed",top:0,left:0,right:0,alignItems:"center",justifyContent:Object(j.f)("flex-end","space-between"),zIndex:"docked",px:"2em",_before:{content:'""',position:"absolute",display:"block",left:0,right:0,top:0,bottom:0,bgImage:"linear-gradient(180deg, #000000 0%, #5C5C5C 100%)",opacity:Number(t),transition:"opacity 0.75s"}},c),{},{children:[Object(f.jsx)(M.a,{position:Object(j.f)("absolute","relative"),left:Object(j.f)("50%","auto"),transform:Object(j.f)("translate(-50%, ".concat(t?"0":"calc(".concat(n,"px - 14em)"),")"),"none"),transition:"all 1s",width:Object(j.f)(t?"118px":"138px","138px"),children:Object(f.jsx)(D.a,{src:X})}),Object(f.jsx)(V.a,{variant:"ghost",colorScheme:"blackAlpha",icon:Object(f.jsx)(Q,{}),onClick:o}),Object(f.jsxs)(B.a,{isOpen:i,placement:"right",onClose:l,children:[Object(f.jsx)(K.e,{}),Object(f.jsxs)(B.b,{bg:"linear-gradient(270deg, #242424 0%, #474747 53.13%, #5C5C5C 100%)","box-shadow":"0px 5px 10px 4px rgba(255, 255, 255, 0.2)",children:[Object(f.jsx)(K.c,{size:"lg",fontSize:"1.25em",color:"white",_focus:{outline:"none"}}),Object(f.jsx)(K.b,{position:"absolute",top:"50%",transform:"translateY(-50%)",children:G.map((function(e,t){var n=e.label,c=e.link,a=e.color;return Object(f.jsx)(M.a,{pt:t&&Object(j.f)("1.5rem","1.75rem"),children:Object(f.jsx)(Z.a.Transparent,{border:"none",height:"auto",color:a,onClick:function(){l(),r().moveTo(c)},_focus:{outline:"none"},_active:{bg:"transparent"},children:n})},t)}))})]})]})]}))},$=Object(a.memo)(L),ee=function(e){var t=Object(k.get)(window,"Modernizr.webp");return Object(a.useMemo)((function(){return Object(k.isArray)(e)?t?e[0]:e[1]:null}),[t,e])},te=[n(577).default,n(578).default],ne=[n(579).default,n(580).default],re=[n(581).default,n(582).default],ce=[n(583).default,n(584).default],ae=function(e){var t=e.variant,n=Object(W.a)(e,["variant"]),r=ee(te),c=ee(ne),i=ee(re),o=ee(ce),l=Object(z.a)(),b=Object(g.a)(l,2),u=b[0],s=b[1],j=s.width,d=s.height,O=Object(a.useMemo)((function(){return d/j>1.5}),[j,d]),m=Object(a.useMemo)((function(){var e={backgroundSize:O?"auto 125%":"100%",backgroundPosition:"".concat(O?-.6*j:0,"px 50%")},t={backgroundSize:O?"auto 140%":"100%",backgroundPosition:"".concat(j*(O?-.2:.2),"px 50%")};return{full:e,side:t,fade:Object(N.a)(Object(N.a)({},t),{},{opacity:.3}),none:Object(N.a)(Object(N.a)({},t),{},{opacity:0}),gray:Object(N.a)(Object(N.a)({},e),{},{backgroundImage:"url(".concat(o,")")}),thanks:Object(N.a)(Object(N.a)({},e),{},{backgroundImage:"url(".concat(c,")")})}}),[j,o,c,O]);return Object(f.jsx)(M.a,Object(N.a)({height:"100%",position:"relative",ref:u,_before:Object(N.a)({content:j>0?'""':null,position:"absolute",display:"block",left:0,right:0,top:0,bottom:0,backgroundImage:"url(".concat(O?i:r,")"),backgroundRepeat:"no-repeat",transition:"all 1s"},m[t])},n))},ie=function(e){var t=e.children,n=e.isMobile,r=e.active,c=e.getFullpageApi,i=e.bg,o=Object(a.useMemo)((function(){return Object(k.isArray)(i)?i[n?0:1]:i}),[i,n]),l=Object(z.a)(),b=Object(g.a)(l,2),u=b[0],s=b[1].height;return Object(f.jsxs)(ae,{isMobile:n,variant:o,children:[Object(f.jsx)($,{getFullpageApi:c,height:j.e.headerHeight,active:r,bodyHeight:s}),Object(f.jsx)(M.a,{height:"100%",position:"relative",ref:u,children:t})]})},oe=Object(a.memo)(ie),le=n(112),be=n(154),ue=function(e){var t=e.fullpageApi,n=e.currentPage,r=void 0===n?0:n,c=e.isMobile,i=Object(a.useMemo)((function(){return r<1}),[r]),o=Object(a.useMemo)((function(){return r>1}),[r]);return Object(a.useMemo)((function(){return Object(f.jsx)(M.a,{position:"absolute",left:Object(j.f)("2.5em","4em"),right:"2.5em",bottom:i?Object(j.f)("9em","16em"):"50%",transform:"translateY(".concat(i?"100%":o?"calc(50% - 100vh)":"50%",")"),transition:"transform 1s, bottom 1s",children:Object(f.jsxs)(M.a,{display:Object(j.f)("block","inline-block"),textAlign:"center",mx:Object(j.f)("auto",0),children:[Object(f.jsx)(le.a,{letterSpacing:Object(j.f)("wide","widest"),fontSize:Object(j.f)("0.875em","1.375em"),children:"\u5169\u5ef3\u9662\u552e\u7968\u7cfb\u7d71 x OPENTIX \u5169\u5ef3\u9662\u6587\u5316\u751f\u6d3b"}),Object(f.jsx)(le.a.H1,{letterSpacing:"0.1em",color:"gray.100",children:"2020\u5e74\u6d88\u8cbb\u884c\u70ba\u5831\u544a"}),!c&&Object(f.jsx)(M.a,{position:"relative",zIndex:1,children:Object(f.jsx)(be.a,{opacity:Number(i),onClick:function(){return i&&t.moveSectionDown()},pointerEvents:i?"all":"none",children:"\u9032\u5165\u5831\u544a"})}),Object(f.jsxs)(M.a,{opacity:Number(!i),transition:"all 1s",textAlign:"justify",maxWidth:"36em",mt:Object(j.f)(0,"-4em"),children:[Object(f.jsxs)(le.a,{my:"2em",children:["2020\u5e74\u96a8\u8457\u56b4\u91cd\u7279\u6b8a\u50b3\u67d3\u6027\u80ba\u708e\u5f71\u97ff\u5168\u7403\u751a\u9245\uff0c\u570b\u5167\u4e0a\u534a\u5e74\u85dd\u6587\u6d3b\u52d5\u5e7e\u8fd1\u505c\u64fa\uff0c\u9762\u5c0d\u56b4\u5cfb\u74b0\u5883\u6311\u6230\uff0c\u8868\u6f14\u85dd\u8853\u7522\u696d\u5728\u9019\u6bb5\u6642\u9593\u6574\u88dd\u5f85\u767c\u3001\u84c4\u5132\u672a\u4f86\u80fd\u91cf\uff0c\u6240\u5e78\u53f0\u7063\u9632\u75ab\u63aa\u65bd\u56b4\u5bc6\u7ba1\u63a7\uff0c\u5f97\u4ee5\u5728\u4e0b\u534a\u5e74\u9818\u5148\u570b\u969b\u89e3\u5c01\u958b\u6f14\u3002",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"\u672c\u6b21\u59d4\u8a17\u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u7d71\u8a08\u5b78\u7814\u7a76\u6240\u7d71\u8a082018~2020\u5e74\u8868\u6f14\u85dd\u8853\u92b7\u552e\u6578\u64da\uff0c\u671f\u5f85\u900f\u904e\u6578\u64da\uff0c\u63d0\u4f9b\u85dd\u6587\u5925\u4f34\u591a\u5143\u7684\u601d\u8003\u8207\u6b63\u9762\u80fd\u91cf\u3002"]}),Object(f.jsx)(le.a.Note,{children:"\u8cc7\u6599\u4f86\u6e90\uff1a\u5169\u5ef3\u9662\u552e\u7968\u5e73\u53f02018~2020\u5e74\u53caOPENTIX 2020\u5e74\u6f14\u51fa\u7bc0\u76ee\u92b7\u552e\u8207\u8cfc\u7968\u6703\u54e1\u8cc7\u6599\uff1b\u672a\u6db5\u84cb\u975e\u552e\u7968\u7684\u85dd\u6587\u6d3b\u52d5\u3002"})]})]})})}),[i,o,c,t])},se=[{comp:"div",bg:"full",next:"\u9032\u5165\u5831\u544a"},{comp:"div",bg:"side",next:"\u7e3d\u9ad4\u7522\u503c"},{comp:n(585).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"},{comp:n(588).default,bg:"none",next:"2020\u7522\u503c\u8b8a\u5316"},{comp:n(589).default,bg:["side","side"],next:"\u4e0b\u4e00\u9801"},{comp:n(289).default,bg:"none",next:"\u4e0b\u4e00\u9801"},{comp:n(289).default,bg:"none",next:"\u4e0b\u4e00\u9801",dataKey:1},{comp:n(590).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"}].concat(Object(w.a)(Object(k.range)(4).map((function(e){return{comp:n(591).default,bg:"none",next:"\u4e0b\u4e00\u9801",dataKey:e}}))),[{comp:n(592).default,bg:"none",next:"\u85ddFUN\u5238\u632f\u8208\u6548\u679c"},{comp:n(593).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"},{comp:n(594).default,bg:["full","thanks"]}]),je=Object(a.forwardRef)((function(e,t){var n=e.isMobile;return Object(a.useMemo)((function(){return Object(f.jsx)(C.a,{licenseKey:"6313A8FC-72634A8F-B83D01C8-ACBFD3D5",scrollingSpeed:1e3,render:function(e){var r=e.fullpageApi;return t.current=r,Object(f.jsx)(C.a.Wrapper,{children:se.map((function(e,t){return Object(f.jsx)("section",{className:"section","data-anchor":"page".concat(t+1),children:Object(f.jsx)(E,{children:Object(a.createElement)(e.comp,{fullpageApi:r,isMobile:n,dataKey:e.dataKey})})},t)}))})},normalScrollElements:".leaderboard"})}),[n])})),fe=function(){var e,t,n=Object(F.a)(),r=Object(g.a)(n,1)[0],c=Object(a.useRef)();Object(a.useEffect)((function(){c.current&&window.gtag("event","page_view",{page_path:window.location.pathname+window.location.hash})}),[r]);var i=Object(a.useMemo)((function(){return function(e){return Math.max(e.replace(/\D+/,"")-1,0)}(r)}),[r]),o=Object(S.a)().isMobile;return Object(f.jsxs)(oe,{getFullpageApi:function(){return c.current},isMobile:o,active:i>0,bg:null===(e=se[i])||void 0===e?void 0:e.bg,children:[Object(f.jsx)(je,{isMobile:o,ref:c}),Object(f.jsx)(M.a.FullAbs,{pointerEvents:"none",children:Object(f.jsx)(E,{position:"relative",height:"100%",children:Object(f.jsx)(ue,{currentPage:i,fullpageApi:c.current,isMobile:o})})}),(null===(t=se[i])||void 0===t?void 0:t.next)&&Object(f.jsx)(be.b,{opacity:Number(o||i>0),onClick:function(){return c.current.moveSectionDown()},children:se[i].next})]})};var de=function(){return Object(f.jsx)(fe,{})};o.a.render(Object(f.jsx)(d,{children:Object(f.jsx)(p,{children:Object(f.jsx)(v,{children:Object(f.jsx)(de,{})})})}),document.getElementById("root"))}},[[595,4,5]]]);
//# sourceMappingURL=main.d7bac8d1.chunk.js.map