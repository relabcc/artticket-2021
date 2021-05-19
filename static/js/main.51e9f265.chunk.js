(this["webpackJsonpstyled-cra"]=this["webpackJsonpstyled-cra"]||[]).push([[3],{111:function(e,t,n){"use strict";var a,r=n(6),c=n(49),i=n(1),o=n(602),l=n(50),b=n(12),u=n(5),s=Object(l.a)(o.a)(a||(a=Object(c.a)([""])));s.defaultProps={fontSize:Object(b.f)("0.875em","1em")},s.Inline=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({as:"span"},e),{},{ref:t}))})),s.Bold=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({fontWeight:"700"},e),{},{ref:t}))})),s.Note=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({fontWeight:"300",fontSize:Object(b.f)("0.75em","0.875em")},e),{},{ref:t}))})),s.H1=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({letterSpacing:"wider",as:"h1",fontSize:Object(b.f)("1.75em","3.25em"),fontWeight:"900"},e),{},{ref:t}))})),s.H2=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({as:"h2",fontSize:Object(b.f)("1.375em","1.75em"),fontWeight:"900"},e),{},{ref:t}))})),s.H3=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({as:"h3",fontSize:Object(b.f)("1.125em","1.375em"),fontWeight:"700"},e),{},{ref:t}))})),s.H4=Object(i.forwardRef)((function(e,t){return Object(u.jsx)(s,Object(r.a)(Object(r.a)({as:"h4",fontSize:Object(b.f)("1.125em","1.25em"),fontWeight:Object(b.f)(700,400)},e),{},{ref:t}))})),t.a=s},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return C}));var a=n(6),r=n(7),c=n(71),i=n(598),o=n(597),l=n(291),b=n(108),u=n.n(b),s=Object(o.a)({sm:"30em",md:"48em",lg:"60em",xl:"80em","2xl":"96em"}),j=Object.values(s).slice(1),f=[[1,"mobile"],[2,"tablet"],[3,"laptop"],[4,"desktop"]],d=j.map((function(e,t){var n=f.findIndex((function(e){return Object(r.a)(e,1)[0]>t}));return n>=0?n:f.length})),O=Object(l.a)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.length;return a<=1?t[0]:j.map((function(e,n){return u()(t,[d[n]],null)}))})),h="81.25em",m=O("1.75em","6.25em"),p='"Noto Sans TC", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif',g="#E05B5A",x="#ECA687",v="#FAF599",w="#9DC29F",y="#39868C",C=[g,x,v,w,y],S={fonts:{heading:p,body:p,mono:"Menlo, monospace"},colors:Object(a.a)(Object(a.a)({},c.theme.colors),{},{primary:u()(c.theme.colors,"".concat("blue",".500")),secondary:u()(c.theme.colors,"".concat("green",".500")),danger:u()(c.theme.colors,"".concat("red",".500")),text:u()(c.theme.colors,"black"),drama:g,music:x,dance:v,family:w,other:y}),breakpoints:j,containerWidth:h,headerHeight:O("48px","60px")},k=Object(i.a)(S);t.e=k},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(6),r=n(68),c=(n(1),n(208)),i=n(298),o=n(302),l=n(604),b=n(26),u=n(5),s=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return Object(u.jsxs)(c.a,Object(a.a)(Object(a.a)({mt:"2em",flexDirection:"column",fontSize:"0.875em",variant:"ghost",colorScheme:"whiteAlpha",color:"white",_hover:{bg:"transparent"},fontWeight:"400"},n),{},{children:[t,Object(u.jsx)(l.a.div,{animate:{y:[2,10,2]},transition:{duration:1,repeat:1/0},children:Object(u.jsx)(i.a,{size:"1.5em"})})]}))};t.b=function(e){var t=e.children,n=e.onClick,c=Object(r.a)(e,["children","onClick"]);return Object(u.jsxs)(b.a.Absolute,Object(a.a)(Object(a.a)({left:"50%",bottom:"0",transform:"translateX(-50%)",pb:"1em",width:"9em",textAlign:"center"},c),{},{children:[Object(u.jsxs)(b.a,{position:"absolute",width:"100%",top:"2em",children:[Object(u.jsx)(o.a,{ratio:1,children:Object(u.jsx)(b.a,{bgImage:"radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"})}),Object(u.jsx)(o.a,{ratio:1,children:Object(u.jsx)(b.a,{bgImage:"radial-gradient(50% 50% at 50% 50%, rgba(255, 246, 159, 0.25) 0%, rgba(255, 249, 196, 0.02) 81.25%)"})})]}),Object(u.jsx)(s,{onClick:n,children:t})]}))}},167:function(e,t,n){"use strict";var a=n(1);t.a=Object(a.createContext)({})},212:function(e,t,n){"use strict";var a=n(6),r=n(1),c=n(110),i=n.n(c),o=n(167),l=n(7),b=n(295),u=n.n(b),s=n(12),j=function(e){return s.g.reduce((function(t,n){var a=Object(l.a)(n,2),r=a[0],c=a[1];return t[u()("is-".concat(c))]=!e[r],t}),{})};t.a=function(){var e=Object(r.useContext)(o.a);return Object(a.a)(Object(a.a)({},j(e)),{},{responsive:s.f,getCurrentValue:Object(r.useCallback)((function(t){if(!i()(t))return t;var n=e.findIndex((function(e){return!e}))-1;for(-2===n&&(n=t.length-1);!t[n]&&n>=0;)n-=1;return t[n]}),[e])})}},216:function(e,t,n){"use strict";var a,r=n(6),c=n(49),i=n(1),o=n(209),l=n(50),b=n(5),u=Object(l.a)(o.a)(a||(a=Object(c.a)([""])));u.Vertical=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(o.a,Object(r.a)(Object(r.a)({direction:"column"},e),{},{ref:t}))})),t.a=u},218:function(e,t,n){"use strict";var a,r=n(6),c=n(68),i=(n(1),n(208)),o=n(49),l=n(622),b=n(50),u=Object(b.a)(l.a)(a||(a=Object(o.a)([""]))),s=n(5),j=function(e){var t=e.href,n=Object(c.a)(e,["href"]);return t?Object(s.jsx)(i.a,Object(r.a)({as:function(e){return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{href:t}))}},n)):Object(s.jsx)(i.a,Object(r.a)({},n))};j.defaultProps={colorScheme:"blue",lineHeight:1.5,_foucs:{boxShadow:"unset",outline:"none"}},j.Secondary=function(e){return Object(s.jsx)(j,Object(r.a)({colorScheme:"green"},e))},j.Danger=function(e){return Object(s.jsx)(j,Object(r.a)({colorScheme:"red"},e))},j.Transparent=function(e){return Object(s.jsx)(j,Object(r.a)({color:"dance",bg:"transparent",border:"1px solid white",borderRadius:"1.25rem",_hover:{bg:"transparent"}},e))};t.a=j},26:function(e,t,n){"use strict";var a,r=n(6),c=n(49),i=n(1),o=n(599),l=n(50),b=n(5),u=Object(l.a)(o.a)(a||(a=Object(c.a)([""])));t.a=u,u.Inline=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({as:"span",display:"inline-block",verticalAlign:"middle"},e),{},{ref:t}))})),u.Absolute=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({position:"absolute"},e),{},{ref:t}))})),u.FullAbs=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u.Absolute,Object(r.a)(Object(r.a)({top:"0",left:"0",right:"0",bottom:"0"},e),{},{ref:t}))})),u.Relative=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({position:"relative"},e),{},{ref:t}))})),u.Fixed=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({position:"fixed"},e),{},{ref:t}))})),u.Invisible=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u.Absolute,Object(r.a)(Object(r.a)({width:"0",height:"0",overflow:"hidden",opacity:"0"},e),{},{ref:t}))})),u.AbsCenter=Object(i.forwardRef)((function(e,t){return Object(b.jsx)(u,Object(r.a)(Object(r.a)({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},e),{},{ref:t}))}))},288:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,610))},loading:c.a,delay:700});t.default=i},30:function(e,t,n){"use strict";var a=n(209),r=n(600),c=(n(1),n(5));t.a=function(){return Object(c.jsx)(a.a,{width:"100%",justifyContent:"center",children:Object(c.jsx)(r.a,{})})}},577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg.10e38d7f.webp"},578:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg.f6e001c1.png"},579:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg2.74db8f98.webp"},580:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/web_bg2.95ba91b4.png"},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg1.a36c41a5.webp"},582:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg1.ec0fcabb.png"},583:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg2.badc4a5c.webp"},584:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mobile_bg2.3ba35669.png"},585:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,607))},loading:c.a,delay:700});t.default=i},588:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,608))},loading:c.a,delay:700});t.default=i},589:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return n.e(10).then(n.bind(null,609))},loading:c.a,delay:700});t.default=i},590:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,611))},loading:c.a,delay:700});t.default=i},591:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,612))},loading:c.a,delay:700});t.default=i},592:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,615))},loading:c.a});t.default=i},593:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,613))},loading:c.a,delay:700});t.default=i},594:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a),c=n(30),i=r()({loader:function(){return n.e(11).then(n.bind(null,614))},loading:c.a,delay:700});t.default=i},595:function(e,t,n){"use strict";n.r(t);n(325),n(334);var a,r,c,i,o,l=n(1),b=n(129),u=n.n(b),s=(n(257),n(51)),j=n(627),f=(n(525),n(49)),d=Object(s.b)(a||(a=Object(f.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700;900&display=swap');\n  body {\n    min-width: 100%;\n    height: 100%;\n    background: black;\n    color: white;\n  }\n\n  img {\n    width: 100%;\n  }\n  #root {\n    height: 100%;\n  }\n"]))),O=n(12),h=n(5),m=function(e){var t=e.children;return Object(h.jsx)(j.a,{theme:O.e,resetCSS:!0,children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{styles:d}),t]})})},p=n(167),g=n(294),x=function(e){return Object(g.useMediaQuery)({query:"(min-width: ".concat(e,")")})},v=function(e){var t=e.children,n=O.a.map(x);return Object(h.jsx)(p.a.Provider,{value:n,children:t})},w=n(7),y=Object(l.createContext)({hideHeader:!1,setHideHeader:function(){}}),C=function(e){var t=e.children,n=Object(l.useState)(),a=Object(w.a)(n,2),r=a[0],c=a[1];return Object(h.jsx)(y.Provider,{value:{hideHeader:r,setHideHeader:c},children:t})},S=n(35),k=n(206),F=n.n(k),A=n(88),_=n(212),H=n(631),P=n(26),E=n(6),R=n(68),M=n(624),I=n(629),T=n(625),z=n(630),N=n(65),W=n(218),D=n(216),K=n.p+"static/media/logo.17b4e115.svg";function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L(e,t){var n=e.title,a=e.titleId,b=B(e,["title","titleId"]);return l.createElement("svg",V({width:30,height:20,viewBox:"0 0 30 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},b),n?l.createElement("title",{id:a},n):null,r||(r=l.createElement("path",{d:"M1.66667 11.4423C2.58714 11.4423 3.33333 10.7105 3.33333 9.80771C3.33333 8.90494 2.58714 8.1731 1.66667 8.1731C0.746192 8.1731 0 8.90494 0 9.80771C0 10.7105 0.746192 11.4423 1.66667 11.4423Z",fill:"#F6F6F6"})),c||(c=l.createElement("path",{d:"M28.4337 8.1731H8.23366C7.36841 8.1731 6.66699 8.86103 6.66699 9.70963V9.90579C6.66699 10.7544 7.36841 11.4423 8.23366 11.4423H28.4337C29.2989 11.4423 30.0003 10.7544 30.0003 9.90579V9.70963C30.0003 8.86103 29.2989 8.1731 28.4337 8.1731Z",fill:"#F6F6F6"})),i||(i=l.createElement("path",{d:"M28.4333 16.3462H1.56667C0.701421 16.3462 0 17.0341 0 17.8827V18.0789C0 18.9275 0.701421 19.6154 1.56667 19.6154H28.4333C29.2986 19.6154 30 18.9275 30 18.0789V17.8827C30 17.0341 29.2986 16.3462 28.4333 16.3462Z",fill:"#F6F6F6"})),o||(o=l.createElement("path",{d:"M28.4333 0H1.56667C0.701421 0 0 0.687931 0 1.53654V1.73269C0 2.5813 0.701421 3.26923 1.56667 3.26923H28.4333C29.2986 3.26923 30 2.5813 30 1.73269V1.53654C30 0.687931 29.2986 0 28.4333 0Z",fill:"#F6F6F6"})))}var U,Z=l.forwardRef(L),J=(n.p,[{label:"\u9996\u9801",color:"dance",link:0},{label:"\u7e3d\u9ad4\u7522\u503c",link:3},{label:"2020\u7522\u503c\u8b8a\u5316",link:5},{label:"\u89c0\u773e\u8cfc\u7968\u884c\u70ba\u8207\u4eba\u6c23\u7bc0\u76ee",link:13},{label:"\u85ddFUN\u5238\u632f\u8208\u6548\u679c",link:14},{label:"\u4e0b\u8f09\u5b8c\u6574\u5831\u544a",link:15}]),X=function(e){var t=e.active,n=e.bodyHeight,a=e.getFullpageApi,r=Object(R.a)(e,["active","bodyHeight","getFullpageApi"]),c=Object(M.a)(),i=c.isOpen,o=c.onOpen,l=c.onClose;return Object(h.jsxs)(D.a,Object(E.a)(Object(E.a)({position:"fixed",top:0,left:0,right:0,alignItems:"center",justifyContent:Object(O.f)("flex-end","space-between"),zIndex:"docked",px:"2em",_before:{content:'""',position:"absolute",display:"block",left:0,right:0,top:0,bottom:0,bgImage:"linear-gradient(180deg, #000000 0%, #5C5C5C 100%)",opacity:Number(t),transition:"opacity 0.75s"}},r),{},{children:[Object(h.jsx)(P.a,{position:Object(O.f)("absolute","relative"),left:Object(O.f)("50%","auto"),transform:Object(O.f)("translate(-50%, ".concat(t?"0":"calc(".concat(n,"px - 14em)"),")"),"none"),transition:"all 1s",width:Object(O.f)(t?"118px":"138px","138px"),children:Object(h.jsx)(I.a,{src:K})}),Object(h.jsx)(T.a,{variant:"ghost",colorScheme:"blackAlpha",icon:Object(h.jsx)(Z,{}),onClick:o}),Object(h.jsxs)(z.a,{isOpen:i,placement:"right",onClose:l,children:[Object(h.jsx)(N.e,{}),Object(h.jsxs)(z.b,{bg:"linear-gradient(270deg, #242424 0%, #474747 53.13%, #5C5C5C 100%)","box-shadow":"0px 5px 10px 4px rgba(255, 255, 255, 0.2)",children:[Object(h.jsx)(N.c,{size:"lg",fontSize:"1.25em",color:"white",_focus:{outline:"none"}}),Object(h.jsx)(N.b,{position:"absolute",top:"50%",transform:"translateY(-50%)",children:J.map((function(e,t){var n=e.label,r=e.link,c=e.color;return Object(h.jsx)(P.a,{pt:t&&Object(O.f)("1.5rem","1.75rem"),children:Object(h.jsx)(W.a.Transparent,{border:"none",height:"auto",color:c,onClick:function(){l(),a().moveTo(r)},_focus:{outline:"none"},_active:{bg:"transparent"},children:n})},t)}))})]})]})]}))},Y=Object(l.memo)(X),q=function(e){var t=Object(A.get)(window,"Modernizr.webp");return Object(l.useMemo)((function(){return Object(A.isArray)(e)?t?e[0]:e[1]:null}),[t,e])},G=[n(577).default,n(578).default],Q=[n(579).default,n(580).default],$=[n(581).default,n(582).default],ee=[n(583).default,n(584).default],te=function(e){var t=e.variant,n=Object(R.a)(e,["variant"]),a=q(G),r=q(Q),c=q($),i=q(ee),o=Object(H.a)(),b=Object(w.a)(o,2),u=b[0],s=b[1],j=s.width,f=s.height,d=Object(l.useMemo)((function(){return f/j>1.5}),[j,f]),O=Object(l.useMemo)((function(){var e={backgroundSize:d?"auto 125%":"100%",backgroundPosition:"".concat(d?-.6*j:0,"px 50%")},t={backgroundSize:d?"auto 140%":"100%",backgroundPosition:"".concat(j*(d?-.2:.2),"px 50%")};return{full:e,side:t,fade:Object(E.a)(Object(E.a)({},t),{},{opacity:.3}),none:Object(E.a)(Object(E.a)({},t),{},{opacity:0}),gray:Object(E.a)(Object(E.a)({},e),{},{backgroundImage:"url(".concat(i,")")}),thanks:Object(E.a)(Object(E.a)({},e),{},{backgroundImage:"url(".concat(r,")")})}}),[j,i,r,d]);return Object(h.jsx)(P.a,Object(E.a)({height:"100%",position:"relative",ref:u,_before:Object(E.a)({content:j>0?'""':null,position:"absolute",display:"block",left:0,right:0,top:0,bottom:0,backgroundImage:"url(".concat(d?c:a,")"),backgroundRepeat:"no-repeat",transition:"all 1s"},O[t])},n))},ne=function(e){var t=e.children,n=e.isMobile,a=e.active,r=e.getFullpageApi,c=e.bg,i=Object(l.useMemo)((function(){return Object(A.isArray)(c)?c[n?0:1]:c}),[c,n]),o=Object(H.a)(),b=Object(w.a)(o,2),u=b[0],s=b[1].height;return Object(h.jsxs)(te,{isMobile:n,variant:i,children:[Object(h.jsx)(Y,{getFullpageApi:r,height:O.e.headerHeight,active:a,bodyHeight:s}),Object(h.jsx)(P.a,{height:"100%",position:"relative",ref:u,children:t})]})},ae=Object(l.memo)(ne),re=n(50),ce=Object(re.a)(P.a)(U||(U=Object(f.a)([""])));ce.defaultProps={mx:"auto",px:O.c,maxWidth:O.d},ce.displayName="Container";var ie=ce,oe=n(111),le=n(154),be=function(e){var t=e.fullpageApi,n=e.currentPage,a=void 0===n?0:n,r=e.isMobile,c=Object(l.useMemo)((function(){return a<1}),[a]),i=Object(l.useMemo)((function(){return a>1}),[a]);return Object(l.useMemo)((function(){return Object(h.jsx)(P.a,{position:"absolute",left:Object(O.f)("2.5em","4em"),right:"2.5em",bottom:c?Object(O.f)("9em","16em"):"50%",transform:"translateY(".concat(c?"100%":i?"calc(50% - 100vh)":"50%",")"),transition:"transform 1s, bottom 1s",children:Object(h.jsxs)(P.a,{display:Object(O.f)("block","inline-block"),textAlign:"center",mx:Object(O.f)("auto",0),children:[Object(h.jsx)(oe.a,{letterSpacing:Object(O.f)("wide","widest"),fontSize:Object(O.f)("0.875em","1.375em"),children:"\u5169\u5ef3\u9662\u552e\u7968\u7cfb\u7d71 x OPENTIX \u5169\u5ef3\u9662\u6587\u5316\u751f\u6d3b"}),Object(h.jsx)(oe.a.H1,{letterSpacing:"0.1em",color:"gray.100",children:"2020\u5e74\u6d88\u8cbb\u884c\u70ba\u5831\u544a"}),!r&&Object(h.jsx)(P.a,{position:"relative",zIndex:1,children:Object(h.jsx)(le.a,{opacity:Number(c),onClick:function(){return c&&t.moveSectionDown()},pointerEvents:c?"all":"none",children:"\u9032\u5165\u5831\u544a"})}),Object(h.jsxs)(P.a,{opacity:Number(!c),transition:"all 1s",textAlign:"justify",maxWidth:"36em",mt:Object(O.f)(0,"-4em"),children:[Object(h.jsxs)(oe.a,{my:"2em",children:["2020\u5e74\u96a8\u8457\u56b4\u91cd\u7279\u6b8a\u50b3\u67d3\u6027\u80ba\u708e\u5f71\u97ff\u5168\u7403\u751a\u9245\uff0c\u570b\u5167\u4e0a\u534a\u5e74\u85dd\u6587\u6d3b\u52d5\u5e7e\u8fd1\u505c\u64fa\uff0c\u9762\u5c0d\u56b4\u5cfb\u74b0\u5883\u6311\u6230\uff0c\u8868\u6f14\u85dd\u8853\u7522\u696d\u5728\u9019\u6bb5\u6642\u9593\u6574\u88dd\u5f85\u767c\u3001\u84c4\u5132\u672a\u4f86\u80fd\u91cf\uff0c\u6240\u5e78\u53f0\u7063\u9632\u75ab\u63aa\u65bd\u56b4\u5bc6\u7ba1\u63a7\uff0c\u5f97\u4ee5\u5728\u4e0b\u534a\u5e74\u9818\u5148\u570b\u969b\u89e3\u5c01\u958b\u6f14\u3002",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"\u672c\u6b21\u59d4\u8a17\u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u7d71\u8a08\u5b78\u7814\u7a76\u6240\u7d71\u8a082018~2020\u5e74\u8868\u6f14\u85dd\u8853\u92b7\u552e\u6578\u64da\uff0c\u671f\u5f85\u900f\u904e\u6578\u64da\uff0c\u63d0\u4f9b\u85dd\u6587\u5925\u4f34\u591a\u5143\u7684\u601d\u8003\u8207\u6b63\u9762\u80fd\u91cf\u3002"]}),Object(h.jsx)(oe.a.Note,{children:"\u8cc7\u6599\u4f86\u6e90\uff1a\u5169\u5ef3\u9662\u552e\u7968\u5e73\u53f02018~2020\u5e74\u53caOPENTIX 2020\u5e74\u6f14\u51fa\u7bc0\u76ee\u92b7\u552e\u8207\u8cfc\u7968\u6703\u54e1\u8cc7\u6599\uff1b\u672a\u6db5\u84cb\u975e\u552e\u7968\u7684\u85dd\u6587\u6d3b\u52d5\u3002"})]})]})})}),[c,i,r,t])},ue=[{comp:"div",bg:"full",next:"\u9032\u5165\u5831\u544a"},{comp:"div",bg:"side",next:"\u7e3d\u9ad4\u7522\u503c"},{comp:n(585).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"},{comp:n(588).default,bg:"none",next:"2020\u7522\u503c\u8b8a\u5316"},{comp:n(589).default,bg:["side","side"],next:"\u4e0b\u4e00\u9801"},{comp:n(288).default,bg:"none",next:"\u4e0b\u4e00\u9801"},{comp:n(288).default,bg:"none",next:"\u4e0b\u4e00\u9801",dataKey:1},{comp:n(590).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"}].concat(Object(S.a)(Object(A.range)(4).map((function(e){return{comp:n(591).default,bg:"none",next:"\u4e0b\u4e00\u9801",dataKey:e}}))),[{comp:n(592).default,bg:"none",next:"\u85ddFUN\u5238\u632f\u8208\u6548\u679c"},{comp:n(593).default,bg:["none","fade"],next:"\u4e0b\u4e00\u9801"},{comp:n(594).default,bg:["full","thanks"]}]),se=function(){var e,t,n=Object(_.a)().isMobile,a=Object(l.useState)(0),r=Object(w.a)(a,2),c=r[0],i=r[1],o=Object(l.useRef)(),b=Object(l.useCallback)((function(e){var t=e.fullpageApi;return o.current=t,Object(h.jsx)(F.a.Wrapper,{children:ue.map((function(e,a){return Object(h.jsx)("section",{className:"section","data-anchor":"page".concat(a+1),children:Object(h.jsx)(ie,{children:Object(l.createElement)(e.comp,{fullpageApi:t,isMobile:n,dataKey:e.dataKey})})},a)}))})}),[n]);return Object(h.jsxs)(ae,{getFullpageApi:function(){return o.current},isMobile:n,active:c>0,bg:null===(e=ue[c])||void 0===e?void 0:e.bg,children:[Object(h.jsx)(F.a,{licenseKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FULLPAGE_KEY,scrollingSpeed:1e3,onLeave:function(e,t){i(t.index),window.gtag("event","page_view",{page_path:window.location.pathname+window.location.hash})},render:b,normalScrollElements:".leaderboard"}),Object(h.jsx)(P.a.FullAbs,{pointerEvents:"none",children:Object(h.jsx)(ie,{position:"relative",height:"100%",children:Object(h.jsx)(be,{currentPage:c,fullpageApi:o.current,isMobile:n})})}),(null===(t=ue[c])||void 0===t?void 0:t.next)&&Object(h.jsx)(le.b,{opacity:Number(n||c>0),onClick:function(){return o.current.moveSectionDown()},children:ue[c].next})]})};var je=function(){return Object(h.jsx)(se,{})};u.a.render(Object(h.jsx)(m,{children:Object(h.jsx)(v,{children:Object(h.jsx)(C,{children:Object(h.jsx)(je,{})})})}),document.getElementById("root"))}},[[595,4,5]]]);
//# sourceMappingURL=main.51e9f265.chunk.js.map