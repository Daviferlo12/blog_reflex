(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{4850:function(e,t,r){"use strict";r.d(t,{q:function(){return O}});var a=r(7294),n=r(3967),l=r.n(n),o=r(7462),u=r(5360),i=r(9698),s=r(9981),f=r(5320);let d="Avatar",[c,p]=(0,u.b)(d),[v,g]=c(d),m=(0,a.forwardRef)((e,t)=>{let{__scopeAvatar:r,...n}=e,[l,u]=(0,a.useState)("idle");return(0,a.createElement)(v,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:u},(0,a.createElement)(f.WV.span,(0,o.Z)({},n,{ref:t})))}),y=(0,a.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:n,onLoadingStatusChange:l=()=>{},...u}=e,d=g("AvatarImage",r),c=$cddcb0b647441e34$var$useImageLoadingStatus(n),p=(0,i.W)(e=>{l(e),d.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==c&&p(c)},[c,p]),"loaded"===c?(0,a.createElement)(f.WV.img,(0,o.Z)({},u,{ref:t,src:n})):null}),h=(0,a.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:n,...l}=e,u=g("AvatarFallback",r),[i,s]=(0,a.useState)(void 0===n);return(0,a.useEffect)(()=>{if(void 0!==n){let e=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(e)}},[n]),i&&"loaded"!==u.imageLoadingStatus?(0,a.createElement)(f.WV.span,(0,o.Z)({},l,{ref:t})):null});function $cddcb0b647441e34$var$useImageLoadingStatus(e){let[t,r]=(0,a.useState)("idle");return(0,s.b)(()=>{if(!e){r("error");return}let t=!0,a=new window.Image,updateStatus=e=>()=>{t&&r(e)};return r("loading"),a.onload=updateStatus("loaded"),a.onerror=updateStatus("error"),a.src=e,()=>{t=!1}},[e]),t}var b=r(8291),w=r(6679),_=r(8219);let C={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"3",responsive:!0},variant:{type:"enum",values:["solid","soft"],default:"soft"},color:{...b.m,default:void 0},highContrast:w.B,radius:_.C,fallback:{type:"ReactNode",default:void 0,required:!0}};var E=r(3843),x=r(6776);let O=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,E.FY)(e),{className:o,style:u,size:i=C.size.default,variant:s=C.variant.default,color:f=C.color.default,highContrast:d=C.highContrast.default,radius:c=C.radius.default,fallback:p,...v}=r,[g,b]=a.useState("idle");return a.createElement(m,{"data-accent-color":f,"data-radius":c,className:l()("rt-AvatarRoot",o,(0,x.g)(i,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":d},(0,E.we)(n)),style:u},"idle"===g||"loading"===g?a.createElement("span",{className:"rt-AvatarFallback"}):null,"error"===g?a.createElement(h,{className:l()("rt-AvatarFallback",{"rt-one-letter":"string"==typeof p&&1===p.length,"rt-two-letters":"string"==typeof p&&2===p.length}),delayMs:0},p):null,a.createElement(y,{ref:t,className:"rt-AvatarImage",...v,onLoadingStatusChange:e=>{var t;null===(t=v.onLoadingStatusChange)||void 0===t||t.call(v,e),b(e)}}))});O.displayName="Avatar"},3725:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var a=r(7294),n=r(3967),l=r.n(n),o=r(8426);let u={display:{type:"enum",values:["none","inline","inline-block","block"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),f=r(6776);let d=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,i.FY)(e),{rest:d,...c}=(0,s.F8)(r),{className:p,asChild:v,display:g=u.display.default,...m}=d,y=v?o.g7:"div";return a.createElement(y,{...m,ref:t,className:l()("rt-Box",p,(0,f.g)(g,"rt-r-display"),(0,s.yt)(c),(0,i.we)(n))})});d.displayName="Box"},4152:function(e,t,r){"use strict";r.d(t,{z:function(){return v}});var a=r(7294),n=r(3967),l=r.n(n),o=r(8426),u=r(8291),i=r(6679),s=r(8219);let f={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:u.m,highContrast:i.B,radius:s.C};var d=r(3843),c=r(6776);let p=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,d.FY)(e),{className:u,asChild:i=!1,size:s=f.size.default,variant:p=f.variant.default,color:v=f.color.default,highContrast:g=f.highContrast.default,radius:m=f.radius.default,...y}=r,h=i?o.g7:"button";return a.createElement(h,{"data-disabled":y.disabled||void 0,"data-accent-color":v,"data-radius":m,...y,ref:t,className:l()("rt-reset","rt-BaseButton",u,(0,c.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":g},(0,d.we)(n))})});p.displayName="BaseButton";let v=a.forwardRef((e,t)=>a.createElement(p,{...e,ref:t,className:l()("rt-Button",e.className)}));v.displayName="Button"},5877:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var a=r(7294),n=r(3967),l=r.n(n),o=r(8426);let u={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};var i=r(3843),s=r(134),f=r(6776);let d=a.forwardRef((e,t)=>{let{rest:r,...n}=(0,i.FY)(e),{rest:d,...c}=(0,s.F8)(r),{className:p,asChild:v,display:g=u.display.default,direction:m=u.direction.default,align:y=u.align.default,justify:h=u.justify.default,wrap:b=u.wrap.default,gap:w=u.gap.default,..._}=d,C=v?o.g7:"div";return a.createElement(C,{..._,ref:t,className:l()("rt-Flex",p,(0,f.g)(g,"rt-r-display"),(0,f.g)(m,"rt-r-fd"),(0,f.g)(y,"rt-r-ai"),(0,f.g)(h,"rt-r-jc",{between:"space-between"}),(0,f.g)(b,"rt-r-fw"),(0,f.g)(w,"rt-r-gap"),(0,s.yt)(c),(0,i.we)(n))})});d.displayName="Flex"},2627:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var a=r(7294),n=r(3967),l=r.n(n),o=r(6445),u=r(3356);let i={size:u.S.size,weight:u.S.weight,trim:u.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:u.S.color,highContrast:u.S.highContrast},s=a.forwardRef((e,t)=>{let{children:r,className:n,asChild:u=!1,underline:s=i.underline.default,...f}=e;return a.createElement(o.x,{...f,ref:t,asChild:!0,className:l()("rt-reset","rt-Link",n,`rt-underline-${s}`)},u?r:a.createElement("a",null,r))});s.displayName="Link"},134:function(e,t,r){"use strict";r.d(t,{F8:function(){return extractLayoutProps},yt:function(){return withLayoutProps}});var a=r(6776);let n=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=u.p.default,px:r=u.px.default,py:a=u.py.default,pt:n=u.pt.default,pr:l=u.pr.default,pb:o=u.pb.default,pl:i=u.pl.default,...s}=e;return{p:t,px:r,py:a,pt:n,pr:l,pb:o,pl:i,rest:s}}function withPaddingProps(e){return[(0,a.g)(e.p,"rt-r-p"),(0,a.g)(e.px,"rt-r-px"),(0,a.g)(e.py,"rt-r-py"),(0,a.g)(e.pt,"rt-r-pt"),(0,a.g)(e.pr,"rt-r-pr"),(0,a.g)(e.pb,"rt-r-pb"),(0,a.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let l=["auto","0","50%","100%"],o=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],u={p:{type:"enum",values:n,default:void 0,responsive:!0},px:{type:"enum",values:n,default:void 0,responsive:!0},py:{type:"enum",values:n,default:void 0,responsive:!0},pt:{type:"enum",values:n,default:void 0,responsive:!0},pr:{type:"enum",values:n,default:void 0,responsive:!0},pb:{type:"enum",values:n,default:void 0,responsive:!0},pl:{type:"enum",values:n,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:l,default:void 0,responsive:!0},top:{type:"enum",values:l,default:void 0,responsive:!0},right:{type:"enum",values:l,default:void 0,responsive:!0},bottom:{type:"enum",values:l,default:void 0,responsive:!0},left:{type:"enum",values:l,default:void 0,responsive:!0},width:{type:"enum",values:o,default:void 0,responsive:!0},height:{type:"enum",values:o,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:a=u.position.default,width:n=u.width.default,height:l=u.height.default,inset:o=u.inset.default,top:i=u.top.default,bottom:s=u.bottom.default,left:f=u.left.default,right:d=u.right.default,shrink:c=u.shrink.default,grow:p=u.grow.default,...v}=t;return{...r,position:a,width:n,height:l,inset:o,top:i,bottom:s,left:f,right:d,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,a.g)(e.position,"rt-r-position"),(0,a.g)(e.shrink,"rt-r-fs"),(0,a.g)(e.grow,"rt-r-fg"),(0,a.g)(e.width,"rt-r-w"),(0,a.g)(e.height,"rt-r-h"),(0,a.g)(e.inset,"rt-r-inset"),(0,a.g)(e.top,"rt-r-top"),(0,a.g)(e.bottom,"rt-r-bottom"),(0,a.g)(e.left,"rt-r-left"),(0,a.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},8219:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});var a=r(269);let n={type:"enum",values:a.yT.radius.values,default:void 0}},7498:function(e,t){"use strict";var r,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let n="refresh",l="navigate",o="restore",u="server-patch",i="prefetch",s="fast-refresh",f="server-action";(a=r||(r={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let a=r(8754),n=a._(r(7294)),l=r(4450),o=r(2227),u=r(4364),i=r(109),s=r(3607),f=r(1823),d=r(9031),c=r(920),p=r(30),v=r(7192),g=r(7498),m=new Set;function prefetch(e,t,r,a,n,l){if(!l&&!(0,o.isLocalURL)(t))return;if(!a.bypassPrefetchedCheck){let n=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(m.has(l))return;m.add(l)}let u=l?e.prefetch(t,n):e.prefetch(t,r,a);Promise.resolve(u).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,a,l,u,i,s,f,d){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,a,{shallow:u,locale:s,scroll:e}):t[l?"replace":"push"](a||r,{forceOptimisticNavigation:!d,scroll:e})};f?n.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=n.default.forwardRef(function(e,t){let r,a;let{href:o,as:u,children:m,prefetch:y=null,passHref:h,replace:b,shallow:w,scroll:_,locale:C,onClick:E,onMouseEnter:x,onTouchStart:O,legacyBehavior:P=!1,...S}=e;r=m,P&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let k=n.default.useContext(f.RouterContext),N=n.default.useContext(d.AppRouterContext),R=null!=k?k:N,L=!k,A=!1!==y,j=null===y?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:T,as:I}=n.default.useMemo(()=>{if(!k){let e=formatStringOrUrl(o);return{href:e,as:u?formatStringOrUrl(u):e}}let[e,t]=(0,l.resolveHref)(k,o,!0);return{href:e,as:u?(0,l.resolveHref)(k,u):t||e}},[k,o,u]),M=n.default.useRef(T),F=n.default.useRef(I);P&&(a=n.default.Children.only(r));let B=P?a&&"object"==typeof a&&a.ref:t,[U,z,$]=(0,c.useIntersection)({rootMargin:"200px"}),D=n.default.useCallback(e=>{(F.current!==I||M.current!==T)&&($(),F.current=I,M.current=T),U(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[I,B,T,$,U]);n.default.useEffect(()=>{R&&z&&A&&prefetch(R,T,I,{locale:C},{kind:j},L)},[I,T,z,C,A,null==k?void 0:k.locale,R,L,j]);let K={ref:D,onClick(e){P||"function"!=typeof E||E(e),P&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),R&&!e.defaultPrevented&&linkClicked(e,R,T,I,b,w,_,C,L,A)},onMouseEnter(e){P||"function"!=typeof x||x(e),P&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),R&&(A||!L)&&prefetch(R,T,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:j},L)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),R&&(A||!L)&&prefetch(R,T,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:j},L)}};if((0,i.isAbsoluteUrl)(I))K.href=I;else if(!P||h||"a"===a.type&&!("href"in a.props)){let e=void 0!==C?C:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);K.href=t||(0,v.addBasePath)((0,s.addLocale)(I,e,null==k?void 0:k.defaultLocale))}return P?n.default.cloneElement(a,K):n.default.createElement("a",{...S,...K},r)}),h=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let a=r(7294),n=r(3436),l="function"==typeof IntersectionObserver,o=new Map,u=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},a=u.find(e=>e.root===r.root&&e.margin===r.margin);if(a&&(t=o.get(a)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},u.push(r),o.set(r,t),t}function observe(e,t,r){let{id:a,observer:n,elements:l}=createObserver(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),o.delete(a);let e=u.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&u.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:o}=e,u=o||!l,[i,s]=(0,a.useState)(!1),f=(0,a.useRef)(null),d=(0,a.useCallback)(e=>{f.current=e},[]);(0,a.useEffect)(()=>{if(l){if(u||i)return;let e=f.current;if(e&&e.tagName){let a=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return a}}else if(!i){let e=(0,n.requestIdleCallback)(()=>s(!0));return()=>(0,n.cancelIdleCallback)(e)}},[u,r,t,i,f.current]);let c=(0,a.useCallback)(()=>{s(!1)},[]);return[d,i,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5170)},9564:function(e,t,r){"use strict";r.d(t,{x:function(){return s}});var a=r(5059),n=r(1628),l=r(3179),o=r(296),u=r(5432);function compact(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}var i=r(5893),s=(0,a.G)(function(e,t){let r=(0,n.mq)("Text",e),{className:a,align:s,decoration:f,casing:d,...c}=(0,l.Lr)(e),p=compact({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,i.jsx)(o.m.p,{ref:t,className:(0,u.cx)("chakra-text",e.className),...p,...c,__css:r})});s.displayName="Text"}}]);