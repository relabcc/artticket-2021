(this["webpackJsonpstyled-cra"]=this["webpackJsonpstyled-cra"]||[]).push([[2],{638:function(e,t,n){"use strict";var a=n(6),r=n(68),i=(n(1),n(217)),c=n(26),o=n(12),l=n(5);t.a=function(e){var t=e.right,n=e.left,s=e.leftProps,d=e.rightMarginTop,u=Object(r.a)(e,["right","left","leftProps","rightMarginTop"]);return Object(l.jsxs)(i.a,Object(a.a)(Object(a.a)({flexDir:Object(o.f)("column","row"),justify:"center",align:"center"},u),{},{children:[Object(l.jsx)(c.a,Object(a.a)(Object(a.a)({textAlign:Object(o.f)("center","left")},s),{},{children:n})),Object(l.jsx)(c.a,{mt:Object(o.f)(d||"2em",0),flex:1,width:Object(o.f)("100%","50%"),children:t})]}))}},641:function(e,t,n){"use strict";var a=n(6),r=n(7),i=n(68),c=n(49),o=n(1),l=n(50),s=n(653),d=n.n(s),u=(n(655),n(656),n(26)),b=n(657),j=n(599),f=(n(12),n(5)),p=function(e){e.children,e.isMobile;var t=Object(i.a)(e,["children","isMobile"]);return Object(f.jsx)(j.b,Object(a.a)(Object(a.a)({},t),{},{children:Object(f.jsx)(b.a,{size:t.width})}))};p.Left=p,p.Right=function(e){e.children,e.isMobile;var t=Object(i.a)(e,["children","isMobile"]);return Object(f.jsx)(j.b,Object(a.a)(Object(a.a)({},t),{},{children:Object(f.jsx)(b.b,{size:t.width})}))};var O,g=p,m=n(212),h=Object(l.a)(u.a)(O||(O=Object(c.a)(["\n  img,\n  picture {\n    display: block;\n  }\n  .slick-track {\n    display: flex;\n    align-items: stretch;\n  }\n  .slick-arrow {\n    height: auto;\n    font-size: 0.75em;\n    z-index: 1;\n    color: black;\n    &::before {\n      content: none;\n    }\n  }\n  .slick-prev {\n    left: ",";\n    top: ",";\n    background: linear-gradient(90deg, rgba(192,192,192,0.3) 0%, #A2A2A2 50%);\n    cursor: ",";\n    opacity: ",";\n    width: ",";\n    :hover {\n      background: linear-gradient(90deg, rgba(192,192,192,0.3) 0%, #A2A2A2 50%);\n      color: black;\n    }\n  }\n  .slick-next {\n    right: ",";\n    top: ",";\n    background: linear-gradient(90deg, #A2A2A2 50%, rgba(192,192,192,0.3) 100%);\n    opacity: ",";\n    cursor: ",";\n    width: ",";\n    :hover {\n      background: linear-gradient(90deg, #A2A2A2 50%, rgba(192,192,192,0.3) 100%);\n      color: black;\n    }\n  }\n"])),(function(e){return e.isMobile?e.charts?0:"-2.75em":"-4.5em"}),(function(e){return e.isMobile&&e.charts&&"1em"}),(function(e){return!e.activeItemIndex&&"not-allowed"}),(function(e){return!e.activeItemIndex&&.5}),(function(e){return e.arrowWidth}),(function(e){return e.isMobile?e.charts?0:"-2.75em":"-4.5em"}),(function(e){return e.isMobile&&e.charts&&"1em"}),(function(e){return e.activeItemIndex==e.length-1&&.5}),(function(e){return e.activeItemIndex==e.length-1&&"not-allowed"}),(function(e){return e.arrowWidth})),y=Object(o.forwardRef)((function(e,t){var n=e.children,c=e.width,l=e.flex,s=e.autoplay,u=e.arrows,b=e.slidesToShow,j=e.silderProps,p=e.typeIndex,O=e.setType,y=e.charts,x=Object(i.a)(e,["children","width","flex","autoplay","arrows","slidesToShow","silderProps","typeIndex","setType","charts"]),k=Object(o.useState)(0),v=Object(r.a)(k,2),M=v[0],w=v[1],L=Object(o.useRef)(),C=t||L;Object(o.useEffect)((function(){C.current&&C.current.slickGoTo(p)}),[C,p]);var W=Object(m.a)().isMobile,A=W?y?"1.5rem":"2.25rem":"2.5rem",P=n.length;return Object(f.jsx)(h,Object(a.a)(Object(a.a)({position:"relative",charts:y,isMobile:W,width:c,flex:l,arrowWidth:A,activeItemIndex:M,length:P},x),{},{children:Object(f.jsx)(d.a,Object(a.a)(Object(a.a)({autoplay:s,prevArrow:Object(f.jsx)(g.Left,{isMobile:W,width:A}),nextArrow:Object(f.jsx)(g.Right,{isMobile:W,width:A}),arrows:u,dots:!1,ref:C,autoplaySpeed:3500,speed:750,beforeChange:function(e,t){w(t),"function"===typeof O&&O(t)},slidesToShow:b||1},j),{},{children:n}))}))}));y.defaultProps={arrows:!0,silderProps:{infinite:!1}};t.a=y},700:function(e,t,n){"use strict";var a=n(7),r=n(35),i=n(68),c=n(6),o=n(1),l=n(1034),s=n(209),d=n(303),u=n(599),b=n(1013),j=n(1024),f=n(1026),p=n(89),O=n(1035),g=n(1027),m=n(777),h=n.n(m),y=n(99),x=n(26),k=n(641),v=n(12),M=n(1029),w=n(1043),L=n(1033),C=n(1031),W=n(1038),A=n(1042),P=n(1040),S=n(1036),F=n(89).assign,T=["#E05B5A","#ECA687","#FAF599","#9DC29F","#39868C","#a7a7a7"],z="#FFF",I="rgba(255,255,255,0.3)",B="#455A64",E="#212121",U={width:400,height:250,padding:{top:20,bottom:32,left:48,right:20}},R={fontFamily:"'Noto Sans TC', sans-serif",fontSize:12,letterSpacing:"normal",padding:8,fill:z,stroke:"transparent",strokeWidth:0},V=F({fontSize:14},R),X=F({textAnchor:"middle"},R),N="round",q="round",D={area:F({style:{data:{fill:E},labels:V}},U),axis:F({style:{axis:{fill:"transparent",stroke:I,strokeWidth:2,strokeLinecap:N,strokeLinejoin:q},axisLabel:F({},X,{textAnchor:"end",padding:32,stroke:"transparent"}),grid:{fill:"none",stroke:I,strokeLinecap:N,strokeLinejoin:q,pointerEvents:"painted"},ticks:{fill:"transparent",stroke:"none"},tickLabels:F({},R,{fill:z})}},U),polarDependentAxis:F({style:{ticks:{fill:"transparent",size:1,stroke:"transparent"}}}),bar:F({style:{data:{fill:B,padding:8,strokeWidth:0},labels:V}},U),boxplot:F({style:{max:{padding:8,stroke:B,strokeWidth:1},maxLabels:F({},R,{padding:3}),median:{padding:8,stroke:B,strokeWidth:1},medianLabels:F({},R,{padding:3}),min:{padding:8,stroke:B,strokeWidth:1},minLabels:F({},R,{padding:3}),q1:{padding:8,fill:B},q1Labels:F({},R,{padding:3}),q3:{padding:8,fill:B},q3Labels:F({},R,{padding:3})},boxWidth:20},U),candlestick:F({style:{data:{stroke:B},labels:F({},R,{padding:5})},candleColors:{positive:"#ffffff",negative:B}},U),chart:U,errorbar:F({borderWidth:8,style:{data:{fill:"transparent",opacity:1,stroke:B,strokeWidth:2},labels:R}},U),group:F({colorScale:T},U),histogram:F({style:{data:{fill:B,stroke:E,strokeWidth:2},labels:R}},U),legend:{colorScale:T,gutter:10,orientation:"vertical",titleOrientation:"top",style:{data:{type:"circle"},labels:R,title:F({},R,{padding:5})}},line:F({style:{data:{fill:"transparent",opacity:1,stroke:B,strokeWidth:2,strokeLinecap:N,strokeLinejoin:q},labels:V}},U),pie:F({colorScale:T,style:{data:{padding:8,stroke:"#ECEFF1",strokeWidth:1},labels:F({},R,{padding:20})}},U),scatter:F({style:{data:{fill:B,opacity:1,stroke:"transparent",strokeWidth:0},labels:R}},U),stack:F({colorScale:T},U),tooltip:{style:F({},R,{padding:0,pointerEvents:"none"}),flyoutStyle:{stroke:E,strokeWidth:1,fill:"#000",pointerEvents:"none"},flyoutPadding:{left:24,right:24,top:8,bottom:8},cornerRadius:20,pointerLength:0},voronoi:F({style:{data:{fill:"transparent",stroke:"transparent",strokeWidth:0},labels:F({},R,{padding:8,pointerEvents:"none"}),flyout:{stroke:"white",strokeWidth:1,fill:"#000",pointerEvents:"none"}}},U)},J=n(5),G=function(e){var t=e.children,n=e.xUnit,a=e.unit,r=e.xPadding,i=e.yMax,l=e.tooltipLabels,s=e.domain,d=e.noXUnit,u=e.padding,b=void 0===u?{}:u,j=e.tickValues,f=e.tickFormat,p=e.keysColor,O=e.animate,g=Object(o.useMemo)((function(){return i<100?3.5:i<1e3?4:5}),[i]);return Object(J.jsxs)(C.a,{domainPadding:{x:r,y:20},theme:D,domain:s,animate:O&&{duration:500},padding:Object(c.a)(Object(c.a)(Object(c.a)({},D.chart.padding),b),{},{left:13*g}),containerComponent:l&&Object(J.jsx)(W.a,{labels:l,labelComponent:Object(J.jsx)(A.a,{constrainToVisibleArea:!0,style:{fill:function(e){var t=e.text;return(null===p||void 0===p?void 0:p[null===t||void 0===t?void 0:t[0]])||"white"}}}),voronoiBlacklist:["ghost"]}),children:[Object(J.jsx)(P.a,{style:{grid:{stroke:"none"},axisLabel:{padding:8}},label:!d&&"(".concat(n,")"),axisLabelComponent:Object(J.jsx)(S.a,{dx:160})}),Object(J.jsx)(P.a,{dependentAxis:!0,tickValues:j,tickFormat:f,label:a,style:{axis:{stroke:"none"},axisLabel:{writingMode:"vertical-rl",textOrientation:"mixed",transform:"rotate(180deg)",textAnchor:"start"}},axisLabelComponent:Object(J.jsx)(S.a,{x:8,y:28})}),t]})},H=Object(o.memo)((function(e){var t=e.data,n=e.total,a=e.keys,l=e.filtered,s=e.yMax,d=e.valueFormat,u=e.precision,b=Object(i.a)(e,["data","total","keys","filtered","yMax","valueFormat","precision"]),j=Object(o.useMemo)((function(){return a.reduce((function(e,t,n){return e[t]=D.group.colorScale[n],e}),{})}),[a]),f=Object(o.useMemo)((function(){return null===n||void 0===n?void 0:n.values.map((function(e){return d?d(e.y):e.y}))}),[n,d]),O=Object(o.useMemo)((function(){return"number"===typeof u?u:Object(p.size)(f?f[0].toString().split(".")[1]:0)}),[f,u]),g=Object(o.useMemo)((function(){return O>0?Object(M.a)(".".concat(O,"f")):Object(M.a)(",d")}),[O]),m=Object(o.useMemo)((function(){var e=Object(p.groupBy)(t.reduce((function(e,t){return[].concat(Object(r.a)(e),Object(r.a)(t.values))}),[]),"x");return Object.values(Object(p.mapValues)(e,(function(e){return d?d(Object(p.sumBy)(e,"y")):g(Object(p.sumBy)(e,"y"))})))}),[t,g,d]),h=l?m:null===f||void 0===f?void 0:f.map(g);return Object(J.jsx)(G,Object(c.a)(Object(c.a)({domain:{y:[0,s]},tooltipLabels:function(e){var t=e.datum;return t.y?"".concat(t.childName,"\n").concat(d?d(t.y):t.y):""},tickFormat:d,yMax:s,keysColor:j},b),{},{children:Object(J.jsx)(w.a,{labels:h,children:t.map((function(e,t){var n=e.key,a=e.values;return Object(J.jsx)(L.a,{name:n,data:a,style:{data:{fill:j[n]}},barRatio:.8},n+t)})).reverse()})}))}));H.Percent=function(e){return Object(J.jsx)(H,Object(c.a)(Object(c.a)({},e),{},{valueFormat:Object(M.a)(".0%")}))};var _=H,K=n(1044),Q=function(e){var t=e.data,n=e.keys,a=e.radioToggle,r=e.barWidth,l=e.precision,s=Object(i.a)(e,["data","keys","radioToggle","barWidth","precision"]),d=Object(o.useMemo)((function(){return"number"===typeof l?l:t[0].values[0].y.toString().split(".")[1]?1:0}),[t,l]),u=Object(o.useMemo)((function(){return d>0?Object(M.a)(".".concat(d,"f")):Object(M.a)(",d")}),[d]),b=Object(o.useMemo)((function(){return n.reduce((function(e,t,n){return e[t]=D.group.colorScale[n],e}),{})}),[n]);return Object(J.jsx)(G,Object(c.a)(Object(c.a)({},s),{},{children:Object(J.jsx)(K.a,{offset:r,children:t.map((function(e,t){var n=e.key,i=e.values;return Object(J.jsx)(L.a,{name:n,data:i,barWidth:r,style:{data:{fill:a?void 0:b[n]},labels:{fontSize:a?8:10}},labels:function(e){var t=e.datum;return u(t.y)}},n+t)}))})}))},Y=Object(o.memo)(Q),Z=n(1032),$=function(e){var t=e.data,n=e.keys,a=e.grouped,r=Object(i.a)(e,["data","keys","grouped"]),l=Object(o.useMemo)((function(){return n.reduce((function(e,t,n){return e[t]=D.group.colorScale[n],e}),{})}),[n]),s=Object(o.useMemo)((function(){return a?t.reduce((function(e,t,n){return"undefined"===typeof e[t.group]&&(e[t.group]=n),e}),{}):{}}),[a,t]);return Object(J.jsx)(G,Object(c.a)(Object(c.a)({},r),{},{tooltipLabels:function(e){var t=e.datum;return"".concat(t.childName,"\n").concat(t.x,"\u6708 - ").concat(t.y)},keysColor:l,children:t.map((function(e,t){var n=e.key,a=e.values,r=e.group,i=!s[r],c=Object(J.jsx)(Z.a,{name:n,data:a,style:{data:{stroke:l[n],strokeWidth:4}}},n+t);return i?[c,Object(J.jsx)(Z.a,{name:"ghost",data:a,style:{data:{stroke:"black"}}},"".concat(n,"-").concat(t,"-ghost"))]:c}))}))},ee=Object(o.memo)($),te=function(e){return e<15?16:12e3},ne=function(e){var t=e.data,n=e.data2,a=e.keys,r=(e.radioToggle,e.unit2),l=e.yMax,s=e.barWidth,d=(e.precision,Object(i.a)(e,["data","data2","keys","radioToggle","unit2","yMax","barWidth","precision"])),u=Object(o.useCallback)((function(e){return e>0?Object(M.a)(".".concat(e,"f")):Object(M.a)(",d")}),[]),b=Object(o.useMemo)((function(){return a.reduce((function(e,t,n){return e[t]=D.group.colorScale[n],e}),{})}),[a]),j=Object(o.useMemo)((function(){return l.map(te)}),[l]),f=Object(o.useMemo)((function(){return j[1].toLocaleString().length}),[j]),O=Object(p.range)(0,1.125,.125),g=Object(o.useCallback)((function(e){return function(t){return u(0)(t*j[e])}}),[u,j]);return Object(J.jsxs)(G,Object(c.a)(Object(c.a)({yMax:l[0],padding:{right:13*f},domain:{y:[0,1]},tickValues:O,tickFormat:g(0)},d),{},{children:[Object(J.jsx)(P.a,{dependentAxis:!0,tickValues:O,label:r,offsetX:-330,style:{axis:{stroke:"none"},axisLabel:{writingMode:"vertical-rl",textOrientation:"mixed",transform:"rotate(180deg)"}},tickFormat:g(1),axisLabelComponent:Object(J.jsx)(S.a,{dx:34})}),Object(J.jsx)(K.a,{offset:s,children:t.map((function(e,t){var n=e.key,a=e.values;return Object(J.jsx)(L.a,{name:n,barWidth:s,data:a.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{y:e.y/j[0]})})),style:{data:{fill:b[n]}},labels:function(e){var t=e.datum;return u(1)(t.y*j[0])}},n+t)}))}),n.map((function(e){var t=e.key,n=e.values;return Object(J.jsx)(Z.a,{name:t,data:n.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{y:e.y/j[1]})})),style:{data:{stroke:b[t]}},labels:function(e){var t=e.datum;return u(0)(t.y*j[1])},labelComponent:Object(J.jsx)(S.a,{verticalAnchor:"start",dy:6})},t)}))]}))},ae=Object(o.memo)(ne),re=n(212),ie=function(){return fetch.apply(void 0,arguments).then((function(e){return e.text()}))},ce={stacked:_,"stacked-percent":_.Percent,bar:Y,line:ee,"bar+line":ae},oe=function(e){return e<4?32:e<6?25:15},le=function(e){var t=e.input,n=e.checkbox,a=e.color,r=e.children;return Object(J.jsxs)(x.a,{as:"label",m:"0.25em",children:[Object(J.jsx)("input",Object(c.a)({},t)),Object(J.jsx)(x.a,Object(c.a)(Object(c.a)({},n),{},{cursor:"pointer",borderColor:"white",borderWidth:"1px",color:a,borderRadius:"full",_checked:{opacity:1},opacity:.5,px:2,py:0,fontSize:"0.875em",children:r}))]})},se=function(e){var t=e.children,n=e.categoryPerLine,a=Object(i.a)(e,["children","categoryPerLine"]),r=Object(re.a)().isMobile;return Object(J.jsxs)(l.a,Object(c.a)(Object(c.a)({justifyContent:"center"},a),{},{children:[Object(J.jsx)(y.a,{fontSize:"0.875em",display:Object(v.f)("none","inline"),children:"\u8acb\u4f9d\u985e\u5225\u7be9\u9078"}),Object(J.jsx)(x.a,{children:Object(o.useMemo)((function(){return Object(p.chunk)(t,n&&r?n:1/0).map((function(e,t){return Object(J.jsx)(s.a,{flexWrap:"wrap",mx:"-0.25em",children:e},t)}))}),[n,t,r])})]}))},de=function(e){var t=e.color,n=Object(i.a)(e,["color"]),a=Object(j.a)(n),r=a.getInputProps,o=a.getCheckboxProps,l=r(),s=o();return Object(J.jsx)(le,Object(c.a)({input:l,checkbox:s,color:t},n))},ue=function(e){var t=e.options,n=e.onChange,a=e.categoryPerLine,r=Object(f.a)({name:"categories",defaultValue:t,onChange:n}).getCheckboxProps;return Object(J.jsx)(se,{categoryPerLine:a,children:t.map((function(e,t){var n=r({value:e});return Object(J.jsx)(de,Object(c.a)(Object(c.a)({color:v.b[t]},n),{},{children:e}),e)}))})},be=function(e){var t=e.color,n=Object(i.a)(e,["color"]),a=Object(O.a)(n),r=a.getInputProps,o=a.getCheckboxProps,l=r(),s=o();return Object(J.jsx)(le,Object(c.a)({input:l,checkbox:s,color:t},n))},je=function(e){var t=e.options,n=e.onChange,a=Object(g.a)({name:"categories",defaultValue:t[0],onChange:function(e){return n([e])}}),r=a.getRootProps,i=a.getRadioProps,o=r();return Object(J.jsx)(se,Object(c.a)(Object(c.a)({},o),{},{children:t.map((function(e){var t=i({value:e});return Object(J.jsx)(be,Object(c.a)(Object(c.a)({color:v.b[2]},t),{},{children:e}),e)}))}))},fe=function(e){return function(t){var n=Object(p.groupBy)(t.reduce((function(e,t){return[].concat(Object(r.a)(e),Object(r.a)(t.values))}),[]),"x");return Math.max.apply(Math,Object(r.a)(Object.values(Object(p.mapValues)(n,(function(t){return e?Object(p.sumBy)(t,"y"):Object(p.maxBy)(t,"y").y})))))}},pe=Object(o.memo)((function(e){var t=e.togglable,n=e.radioToggle,r=e.type,i=e.file,s=e.notes,j=e.noXUnit,f=e.biaxial,O=e.categoryPerLine,g=e.legend,m=e.precision,h=Object(b.a)(i,ie).data,k=void 0===h?null:h,M=Object(o.useMemo)((function(){if(!k)return null;var e,t,a,i=k.split(/\r?\n/).map((function(e){return e.split(",")})),c=i.shift(),o=c[0],l=Object(p.last)(c)<13?"\u6708":"\u5e74",s=Number.isNaN(1*i[0][1]),d={},u=i.map((function(n){var a=n[0];if(f){var r=n.slice(1);if(r.length&&!r.some(Boolean))return e=a,null}var i=s?n[1]:null,o=s?2:1,l={values:n.slice(o).map((function(e,t){return{x:c[o+t],y:1*e}})),key:a,group:i,unit2:e};return a?"\u7e3d\u548c"===a?(t=l,null):(d[a]=1,l):null})).filter(Boolean),b=f?Object.values(Object(p.groupBy)(u,"unit2")):u;return{xUnit:l,unit:o,unit2:e,data:f?b[0]:u,data2:f&&b[1],grouped:s,total:t,xPadding:(a=u[0].values.length,a<3?100:a<4?60:40),barWidth:oe(u[0].values.length)*(n?.5:1),keys:"line"!==r&&!n&&g?g:Object.keys(d),yMax:f?b.map(fe("stacked"===r)):fe("stacked"===r)(u)}}),[k,f,g,r,n]),w=Object(o.useState)(),L=Object(a.a)(w,2),C=L[0],W=L[1];return M&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(d.a,{ratio:1.6,children:Object(J.jsx)(x.a,{border:"1px solid white",p:"0.5em",children:Object(o.createElement)(ce[r]||"div",Object(c.a)(Object(c.a)({},M),{},{animate:t,noXUnit:j,radioToggle:n,precision:m,data:M.data.map((function(e){var t=(n?!C&&e.key===M.keys[0]:!C)||(null===C||void 0===C?void 0:C.includes(e.key));return n&&!t?null:Object(c.a)(Object(c.a)({},e),{},{values:e.values.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{y:t?e.y:0})}))})})).filter(Boolean),filtered:C&&C.length!==M.keys.length}))})}),g&&Object(J.jsx)(l.a,{justifyContent:"center",spacing:n?Object(v.f)("0.25em","0.5em"):"1em",fontSize:n?Object(v.f)("0.625em","0.875em"):Object(v.f)("0.875em","1em"),children:g.map((function(e,t){return Object(J.jsxs)(l.a,{color:"line"===r?"white":v.b[t],spacing:n?"0.125em":"0.375em",children:["line"===r?Object(J.jsx)(x.a,{mt:"0.125em",width:"1.75em",height:"4px",rounded:"1em",bg:t?"black":"white",border:"1px solid",borderColor:t?"white":"black"}):Object(J.jsx)(u.b,{mt:"0.125em",size:"0.625em",bg:"current"}),Object(J.jsx)(y.a,{fontWeight:"500",children:e})]})}))}),t&&Object(J.jsx)(ue,{categoryPerLine:O,options:M.keys,onChange:W}),n&&Object(J.jsx)(je,{categoryPerLine:O,options:M.keys,onChange:W}),s&&Object(J.jsx)(x.a,{children:s.map((function(e,t){return Object(J.jsxs)(y.a.Note,{children:["\u8a3b",t+1,"\uff1a",e]},t)}))})]})})),Oe=function(e){var t=e.title,n=Object(i.a)(e,["title"]);return Object(J.jsxs)(l.b,{spacing:"1em",px:"0.25em",children:[Object(J.jsx)(y.a.H3,{textAlign:"center",fontSize:t.length>20&&Object(v.f)("0.875em","1.375em"),children:t}),Object(J.jsx)(pe,Object(c.a)({},n))]})};t.a=function(e){var t=e.data,n=Object(i.a)(e,["data"]),a=t.map((function(e){return Object(J.jsx)(Oe,Object(c.a)({},h.a[e]),e)}));return 1===a.length?Object(J.jsx)(x.a,Object(c.a)(Object(c.a)({},n),{},{children:a})):Object(J.jsx)(x.a,Object(c.a)(Object(c.a)({},n),{},{children:Object(J.jsx)(k.a,{width:"100%",silderProps:{infinite:!1,lazyLoad:!0},charts:!0,children:a})}))}},777:function(e,t,n){e.exports={"10-1":{precision:1,legend:["2018","2019","2020"],type:"bar",title:"2018-2020\u5e74\u6703\u54e1\u5e74\u8cfc\u7968\u6b21\u6578",file:n(778).default,notes:["\u6703\u54e1\u8cfc\u8cb7\u540c\u7bc0\u76ee\u540d\u7a31\u4e4b\u6240\u6709\u8cfc\u7968\u8996\u70ba\u8cfc\u8cb71\u6b21(1\u6a94\u7bc0\u76ee)\u3001\u8cfc\u8cb72\u6b21\u70ba2\u6a94\u7bc0\u76ee\uff0c\u4f9d\u6b64\u985e\u63a8\u3002","\u767e\u5206\u6bd4\u6578\u503c\u70ba\u8a72\u5e74\u5ea6\u6703\u54e1\u8cfc\u7968\u6b21\u65781\u6b21\u30012\u6b21\u30013\u6b21\u4ee5\u4e0a\u7684\u4eba\u6578\u6bd4\u4f8b\uff0c\u56db\u6368\u4e94\u5165\u53d6\u6574\u6578\u5448\u73fe\u3002"],noXUnit:!0},"10-2":{legend:["<20\u6b72","20~30\u6b72","31~40\u6b72","41~50\u6b72","51~60\u6b72",">60\u6b72"],type:"bar",title:"2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u6b21\u6578\u53ca\u5e74\u9f61\u5206\u4f48",file:n(779).default,notes:["\u6703\u54e1\u8cfc\u8cb7\u540c\u7bc0\u76ee\u540d\u7a31\u4e4b\u6240\u6709\u8cfc\u7968\u8996\u70ba\u8cfc\u8cb71\u6b21(1\u6a94\u7bc0\u76ee)\u3001\u8cfc\u8cb72\u6b21\u70ba2\u6a94\u7bc0\u76ee\uff0c\u4f9d\u6b64\u985e\u63a8\u3002","\u767e\u5206\u6bd4\u6578\u503c\u70ba\u8a72\u5e74\u5ea6\u6703\u54e1\u8cfc\u7968\u6b21\u65781\u6b21\u30012\u6b21\u30013\u6b21\u4ee5\u4e0a\u7684\u4eba\u6578\u6bd4\u4f8b\uff0c\u56db\u6368\u4e94\u5165\u53d6\u6574\u6578\u5448\u73fe\u3002"],radioToggle:!0},11:{type:"stacked-percent",categoryPerLine:2,title:"2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u65b9\u5f0f",file:n(780).default,notes:["\u5716\u793a\u70ba2018~2020\u5404\u5e74\u5167\u8cfc\u7968\u6703\u54e1\uff0c\u4f9d\u8a72\u5e74\u8cfc\u7968\u5f35\u6578\u7d71\u8a08\u8cfc\u7968\u65b9\u5f0f\u4f54\u6bd4\u3002","\u767e\u5206\u6bd4\u6578\u503c\u70ba\u8a72\u5e74\u6703\u54e1\u8cfc\u7968\u65b9\u5f0f\u4e4b\u5f35\u6578\u4f54\u6bd4\uff0c\u56db\u6368\u4e94\u5165\u53d6\u6574\u6578\u5448\u73fe\u3002"],togglable:!0},"3-1":{type:"stacked",title:"2018-2020\u5e74\u7bc0\u76ee\u7968\u623f",file:n(781).default,notes:["\u5176\u4ed6\u7bc0\u76ee\u985e\u5225\u70ba\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50\u7bc0\u76ee\uff0c\u5305\u542b\u8b1b\u5ea7\u3001\u5de5\u4f5c\u574a\u7b49\u6d3b\u52d5\u3002"],togglable:!0},"3-2":{type:"stacked",title:"2018-2020\u5e74\u7bc0\u76ee\u6a94\u6578",file:n(782).default,notes:["\u540c\u6a94\u7bc0\u76ee\u591a\u5834\u6b21\u5de1\u6f14\uff0c\u7686\u8a08\u70ba\u4e00\u6a94\u3002","\u5176\u4ed6\u7bc0\u76ee\u985e\u5225\u70ba\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50\u7bc0\u76ee\uff0c\u5305\u542b\u8b1b\u5ea7\u3001\u5de5\u4f5c\u574a\u7b49\u6d3b\u52d5\u3002"],togglable:!0},"3-3":{type:"stacked",title:"2018-2020\u5e74\u6f14\u51fa\u5834\u6b21",file:n(783).default,notes:["\u540c\u6a94\u7bc0\u76ee\u591a\u5834\u6b21\u5de1\u6f14\uff0c\u7686\u8a08\u70ba\u4e00\u6a94\u3002","\u5176\u4ed6\u7bc0\u76ee\u985e\u5225\u70ba\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50\u7bc0\u76ee\uff0c\u5305\u542b\u8b1b\u5ea7\u3001\u5de5\u4f5c\u574a\u7b49\u6d3b\u52d5\u3002"],togglable:!0},"3-4":{type:"stacked",title:"2018-2020\u5e74\u552e\u51fa\u7968\u6578",file:n(784).default,notes:["\u5176\u4ed6\u7bc0\u76ee\u985e\u5225\u70ba\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50\u7bc0\u76ee\uff0c\u5305\u542b\u8b1b\u5ea7\u3001\u5de5\u4f5c\u574a\u7b49\u6d3b\u52d5\u3002"],togglable:!0},"5-1":{legend:["2018","2019","2018\u82072019\u5e73\u5747","2020"],type:"bar",title:"2018-2020\u4e0a\u4e0b\u534a\u5e74\u7bc0\u76ee\u7968\u623f",file:n(785).default,noXUnit:!0},"5-2":{legend:["2018","2019","2018\u82072019\u5e73\u5747","2020"],type:"bar",title:"2018-2020\u4e0a\u4e0b\u534a\u5e74\u7bc0\u76ee\u6a94\u6578",file:n(786).default,noXUnit:!0},"5-3":{legend:["2018","2019","2018\u82072019\u5e73\u5747","2020"],type:"bar",title:"2018-2020\u4e0a\u4e0b\u534a\u5e74\u6f14\u51fa\u5834\u6b21",file:n(787).default,noXUnit:!0},"5-4":{legend:["2018","2019","2018\u82072019\u5e73\u5747","2020"],type:"bar",title:"2018-2020\u4e0a\u4e0b\u534a\u5e74\u552e\u51fa\u7968\u6578",file:n(788).default,noXUnit:!0},"6-1":{legend:["2020","2018\u82072019\u5e73\u5747"],type:"line",title:"2020\u6bcf\u6708\u7bc0\u76ee\u7968\u623f",file:n(789).default,notes:["\u5404\u985e\u5225\u7bc0\u76ee\u7522\u503c\u6bd4\u8f03\u4ee5\u56db\u5927\u985e\u7bc0\u76ee\u70ba\u4e3b\uff0c\u5176\u4ed6\u985e\u7bc0\u76ee(\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50)\u5728\u6b64\u672a\u5448\u73fe\u3002"],togglable:!0},"6-2":{legend:["2020","2018\u82072019\u5e73\u5747"],type:"line",title:"2020\u6bcf\u6708\u7bc0\u76ee\u6a94\u6578",file:n(790).default,notes:["\u540c\u6a94\u7bc0\u76ee\u591a\u5834\u6b21\u5de1\u6f14\uff0c\u7686\u8a08\u70ba\u4e00\u6a94\u3002","\u5404\u985e\u5225\u7bc0\u76ee\u7522\u503c\u6bd4\u8f03\u4ee5\u56db\u5927\u985e\u7bc0\u76ee\u70ba\u4e3b\uff0c\u5176\u4ed6\u985e\u7bc0\u76ee(\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50)\u5728\u6b64\u672a\u5448\u73fe\u3002"],togglable:!0},"6-3":{legend:["2020","2018\u82072019\u5e73\u5747"],type:"line",title:"2020\u6bcf\u6708\u6f14\u51fa\u5834\u6b21",file:n(791).default,notes:["\u5404\u985e\u5225\u7bc0\u76ee\u7522\u503c\u6bd4\u8f03\u4ee5\u56db\u5927\u985e\u7bc0\u76ee\u70ba\u4e3b\uff0c\u5176\u4ed6\u985e\u7bc0\u76ee(\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50)\u5728\u6b64\u672a\u5448\u73fe\u3002"],togglable:!0},"6-4":{legend:["2020","2018\u82072019\u5e73\u5747"],type:"line",title:"2020\u6bcf\u6708\u552e\u7968\u5f35\u6578",file:n(792).default,notes:["\u5404\u985e\u5225\u7bc0\u76ee\u7522\u503c\u6bd4\u8f03\u4ee5\u56db\u5927\u985e\u7bc0\u76ee\u70ba\u4e3b\uff0c\u5176\u4ed6\u985e\u7bc0\u76ee(\u975e\u6232\u5287\u3001\u97f3\u6a02\u3001\u821e\u8e48\u6216\u89aa\u5b50)\u5728\u6b64\u672a\u5448\u73fe\u3002"],togglable:!0},8:{legend:["\u65b0\u8a3b\u518a\u6703\u54e1","\u65e2\u6709\uff08\u820a\uff09\u6703\u54e1"],type:"stacked",title:"2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u4eba\u6578",file:n(793).default,notes:["\u6703\u54e1\u5728\u8a72\u5e74\u66fe\u8cfc\u79681\u5f35\u4ee5\u4e0a\uff0c\u5373\u8996\u70ba\u5728\u8a72\u5e74\u8cfc\u7968\u6703\u54e1\u3002","\u767e\u5206\u6bd4\u6578\u503c\u70ba\u8a72\u5e74\u5ea6\u65b0\u8a3b\u518a\u3001\u65e2\u6709(\u820a)\u6703\u54e1\u4f54\u6bd4\uff0c\u56db\u6368\u4e94\u5165\u53d6\u6574\u6578\u5448\u73fe\u3002"]},9:{legend:["\u65b0\u8a3b\u518a\u6703\u54e1","\u65e2\u6709\uff08\u820a\uff09\u6703\u54e1","\u6bcf\u4eba\u5747\u8cfc\u7968\u91d1\u984d"],type:"bar+line",title:"2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u91d1\u984d",file:n(794).default,notes:["\u6703\u54e1\u5728\u8a72\u5e74\u66fe\u8cfc\u79681\u5f35\u4ee5\u4e0a\uff0c\u5373\u8996\u70ba\u5728\u8a72\u5e74\u8cfc\u7968\u6703\u54e1\u3002","\u767e\u5206\u6bd4\u6578\u503c\u70ba\u8a72\u5e74\u5ea6\u65b0\u8a3b\u518a\u3001\u65e2\u6709(\u820a)\u6703\u54e1\u4f54\u6bd4\uff0c\u56db\u6368\u4e94\u5165\u53d6\u6574\u6578\u5448\u73fe\u3002"],biaxial:!0}}},778:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/10-1\uff1c2018-2020\u5e74\u6703\u54e1\u5e74\u8cfc\u7968\u6b21\u6578\uff1e.9870ed76.csv"},779:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/10-2\uff1c2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u6b21\u6578\u53ca\u5e74\u9f61\u5206\u4f48\uff1e.326e85bd.csv"},780:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/11\uff1c2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u65b9\u5f0f\uff1e.3cc3ea8c.csv"},781:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3-1\uff1c2018-2020\u5e74\u7bc0\u76ee\u7968\u623f\uff1e.cad4ee0b.csv"},782:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3-2\uff1c2018-2020\u5e74\u7bc0\u76ee\u6a94\u6578\uff1e.1e9db800.csv"},783:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3-3\uff1c2018-2020\u5e74\u6f14\u51fa\u5834\u6b21\uff1e.a5e0e242.csv"},784:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3-4\uff1c2018-2020\u5e74\u552e\u51fa\u7968\u6578\uff1e.506ee5eb.csv"},785:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5-1\uff1c2018-2020\u4e0a\u4e0b\u534a\u5e74\u7bc0\u76ee\u7968\u623f\uff1e.efe03c87.csv"},786:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5-2\uff1c2018-2020\u4e0a\u4e0b\u534a\u5e74\u7bc0\u76ee\u6a94\u6578\uff1e.b4fa6b14.csv"},787:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5-3\uff1c2018-2020\u4e0a\u4e0b\u534a\u5e74\u6f14\u51fa\u5834\u6b21\uff1e.7e709810.csv"},788:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/5-4\uff1c2018-2020\u4e0a\u4e0b\u534a\u5e74\u552e\u51fa\u7968\u6578\uff1e.3a8779ce.csv"},789:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6-1\uff1c2020\u6bcf\u6708\u7bc0\u76ee\u7968\u623f\uff1e.b7f93e79.csv"},790:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6-2\uff1c2020\u6bcf\u6708\u7bc0\u76ee\u6a94\u6578\uff1e.df6cc38a.csv"},791:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6-3\uff1c2020\u6bcf\u6708\u6f14\u51fa\u5834\u6b21\uff1e.5566f1d1.csv"},792:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/6-4\uff1c2020\u6bcf\u6708\u552e\u7968\u5f35\u6578\uff1e.30405e6a.csv"},793:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/8\uff1c2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u4eba\u6578\uff1e.888cde17.csv"},794:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/9\uff1c2018-2020\u5e74\u6703\u54e1\u8cfc\u7968\u91d1\u984d\uff1e.c077e61d.csv"}}]);
//# sourceMappingURL=2.10bc5adb.chunk.js.map