(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function kv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $g={exports:{}},_c={},Kg={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),Bv=Symbol.for("react.portal"),zv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),Yv=Symbol.for("react.memo"),$v=Symbol.for("react.lazy"),hp=Symbol.iterator;function Kv(n){return n===null||typeof n!="object"?null:(n=hp&&n[hp]||n["@@iterator"],typeof n=="function"?n:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,Qg={};function no(n,e,t){this.props=n,this.context=e,this.refs=Qg,this.updater=t||qg}no.prototype.isReactComponent={};no.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};no.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Jg(){}Jg.prototype=no.prototype;function zh(n,e,t){this.props=n,this.context=e,this.refs=Qg,this.updater=t||qg}var Hh=zh.prototype=new Jg;Hh.constructor=zh;Zg(Hh,no.prototype);Hh.isPureReactComponent=!0;var fp=Array.isArray,e0=Object.prototype.hasOwnProperty,Vh={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:n,key:s,ref:o,props:r,_owner:Vh.current}}function qv(n,e){return{$$typeof:ma,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ma}function Zv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var pp=/\/+/g;function Vc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Zv(""+n.key):e.toString(36)}function vl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ma:case Bv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Vc(o,0):i,fp(r)?(t="",n!=null&&(t=n.replace(pp,"$&/")+"/"),vl(r,e,t,"",function(c){return c})):r!=null&&(Gh(r)&&(r=qv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Vc(s,a);o+=vl(s,e,t,l,r)}else if(l=Kv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Vc(s,a++),o+=vl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(n,e,t){if(n==null)return n;var i=[],r=0;return vl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Qv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var rn={current:null},yl={transition:null},Jv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Vh};function i0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Aa,forEach:function(n,e,t){Aa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Aa(n,function(){e++}),e},toArray:function(n){return Aa(n,function(e){return e})||[]},only:function(n){if(!Gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=no;We.Fragment=zv;We.Profiler=Vv;We.PureComponent=zh;We.StrictMode=Hv;We.Suspense=Xv;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;We.act=i0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Zg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:n.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(n){return n={$$typeof:jv,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Gv,_context:n},n.Consumer=n};We.createElement=n0;We.createFactory=function(n){var e=n0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:Wv,render:n}};We.isValidElement=Gh;We.lazy=function(n){return{$$typeof:$v,_payload:{_status:-1,_result:n},_init:Qv}};We.memo=function(n,e){return{$$typeof:Yv,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=yl.transition;yl.transition={};try{n()}finally{yl.transition=e}};We.unstable_act=i0;We.useCallback=function(n,e){return rn.current.useCallback(n,e)};We.useContext=function(n){return rn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return rn.current.useDeferredValue(n)};We.useEffect=function(n,e){return rn.current.useEffect(n,e)};We.useId=function(){return rn.current.useId()};We.useImperativeHandle=function(n,e,t){return rn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return rn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return rn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return rn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return rn.current.useReducer(n,e,t)};We.useRef=function(n){return rn.current.useRef(n)};We.useState=function(n){return rn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return rn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return rn.current.useTransition()};We.version="18.3.1";Kg.exports=We;var be=Kg.exports;const ey=kv(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=be,ny=Symbol.for("react.element"),iy=Symbol.for("react.fragment"),ry=Object.prototype.hasOwnProperty,sy=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oy={key:!0,ref:!0,__self:!0,__source:!0};function r0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ry.call(e,i)&&!oy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ny,type:n,key:s,ref:o,props:r,_owner:sy.current}}_c.Fragment=iy;_c.jsx=r0;_c.jsxs=r0;$g.exports=_c;var _=$g.exports,ed={},s0={exports:{}},An={},o0={exports:{}},a0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,K){var W=P.length;P.push(K);e:for(;0<W;){var ie=W-1>>>1,xe=P[ie];if(0<r(xe,K))P[ie]=K,P[W]=xe,W=ie;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var K=P[0],W=P.pop();if(W!==K){P[0]=W;e:for(var ie=0,xe=P.length,Pe=xe>>>1;ie<Pe;){var Y=2*(ie+1)-1,ee=P[Y],le=Y+1,oe=P[le];if(0>r(ee,W))le<xe&&0>r(oe,ee)?(P[ie]=oe,P[le]=W,ie=le):(P[ie]=ee,P[Y]=W,ie=Y);else if(le<xe&&0>r(oe,W))P[ie]=oe,P[le]=W,ie=le;else break e}}return K}function r(P,K){var W=P.sortIndex-K.sortIndex;return W!==0?W:P.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var K=t(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=P)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(c)}}function E(P){if(y=!1,v(P),!g)if(t(l)!==null)g=!0,H(C);else{var K=t(c);K!==null&&$(E,K.startTime-P)}}function C(P,K){g=!1,y&&(y=!1,f(N),N=-1),p=!0;var W=d;try{for(v(K),h=t(l);h!==null&&(!(h.expirationTime>K)||P&&!M());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var xe=ie(h.expirationTime<=K);K=n.unstable_now(),typeof xe=="function"?h.callback=xe:h===t(l)&&i(l),v(K)}else i(l);h=t(l)}if(h!==null)var Pe=!0;else{var Y=t(c);Y!==null&&$(E,Y.startTime-K),Pe=!1}return Pe}finally{h=null,d=W,p=!1}}var R=!1,A=null,N=-1,V=5,S=-1;function M(){return!(n.unstable_now()-S<V)}function G(){if(A!==null){var P=n.unstable_now();S=P;var K=!0;try{K=A(!0,P)}finally{K?B():(R=!1,A=null)}}else R=!1}var B;if(typeof x=="function")B=function(){x(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,q=j.port2;j.port1.onmessage=G,B=function(){q.postMessage(null)}}else B=function(){m(G,0)};function H(P){A=P,R||(R=!0,B())}function $(P,K){N=m(function(){P(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,H(C))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var W=d;d=K;try{return P()}finally{d=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=d;d=P;try{return K()}finally{d=W}},n.unstable_scheduleCallback=function(P,K,W){var ie=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,P){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=W+xe,P={id:u++,callback:K,priorityLevel:P,startTime:W,expirationTime:xe,sortIndex:-1},W>ie?(P.sortIndex=W,e(c,P),t(l)===null&&P===t(c)&&(y?(f(N),N=-1):y=!0,$(E,W-ie))):(P.sortIndex=xe,e(l,P),g||p||(g=!0,H(C))),P},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(P){var K=d;return function(){var W=d;d=K;try{return P.apply(this,arguments)}finally{d=W}}}})(a0);o0.exports=a0;var ay=o0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=be,wn=ay;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Yo={};function Xr(n,e){ks(n,e),ks(n+"Capture",e)}function ks(n,e){for(Yo[n]=e,n=0;n<e.length;n++)l0.add(e[n])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function uy(n){return td.call(gp,n)?!0:td.call(mp,n)?!1:cy.test(n)?gp[n]=!0:(mp[n]=!0,!1)}function dy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hy(n,e,t,i){if(e===null||typeof e>"u"||dy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zt[n]=new sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zt[e]=new sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zt[n]=new sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zt[n]=new sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zt[n]=new sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zt[n]=new sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zt[n]=new sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zt[n]=new sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zt[n]=new sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Wh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jh,Wh);zt[e]=new sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jh,Wh);zt[e]=new sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jh,Wh);zt[e]=new sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zt[n]=new sn(n,1,!1,n.toLowerCase(),null,!1,!1)});zt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zt[n]=new sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xh(n,e,t,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hy(e,t,r,i)&&(t=null),i||r===null?uy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Oi=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),_p=Symbol.iterator;function co(n){return n===null||typeof n!="object"?null:(n=_p&&n[_p]||n["@@iterator"],typeof n=="function"?n:null)}var vt=Object.assign,Gc;function Ro(n){if(Gc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+n}var jc=!1;function Wc(n,e){if(!n||jc)return"";jc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{jc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ro(n):""}function fy(n){switch(n.tag){case 5:return Ro(n.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return n=Wc(n.type,!1),n;case 11:return n=Wc(n.type.render,!1),n;case 1:return n=Wc(n.type,!0),n;default:return""}}function sd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fs:return"Fragment";case hs:return"Portal";case nd:return"Profiler";case Yh:return"StrictMode";case id:return"Suspense";case rd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case u0:return(n.displayName||"Context")+".Consumer";case c0:return(n._context.displayName||"Context")+".Provider";case $h:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Kh:return e=n.displayName||null,e!==null?e:sd(n.type)||"Memo";case Xi:e=n._payload,n=n._init;try{return sd(n(e))}catch{}}return null}function py(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function h0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function my(n){var e=h0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ra(n){n._valueTracker||(n._valueTracker=my(n))}function f0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=h0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Bl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function od(n,e){var t=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function xp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=pr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(n,e){e=e.checked,e!=null&&Xh(n,"checked",e,!1)}function ad(n,e){p0(n,e);var t=pr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ld(n,e.type,t):e.hasOwnProperty("defaultValue")&&ld(n,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ld(n,e,t){(e!=="number"||Bl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Co=Array.isArray;function As(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+pr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function cd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function yp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Co(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:pr(t)}}function m0(n,e){var t=pr(e.value),i=pr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Sp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function g0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?g0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ca,_0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $o(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gy=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(n){gy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Uo[e]=Uo[n]})});function x0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Uo.hasOwnProperty(n)&&Uo[n]?(""+e).trim():e+"px"}function v0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=x0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var _y=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(n,e){if(e){if(_y[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function hd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function qh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pd=null,bs=null,Rs=null;function Ep(n){if(n=xa(n)){if(typeof pd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Ec(e),pd(n.stateNode,n.type,e))}}function y0(n){bs?Rs?Rs.push(n):Rs=[n]:bs=n}function S0(){if(bs){var n=bs,e=Rs;if(Rs=bs=null,Ep(n),e)for(n=0;n<e.length;n++)Ep(e[n])}}function E0(n,e){return n(e)}function M0(){}var Xc=!1;function T0(n,e,t){if(Xc)return n(e,t);Xc=!0;try{return E0(n,e,t)}finally{Xc=!1,(bs!==null||Rs!==null)&&(M0(),S0())}}function Ko(n,e){var t=n.stateNode;if(t===null)return null;var i=Ec(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var md=!1;if(Ni)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){md=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{md=!1}function xy(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Oo=!1,zl=null,Hl=!1,gd=null,vy={onError:function(n){Oo=!0,zl=n}};function yy(n,e,t,i,r,s,o,a,l){Oo=!1,zl=null,xy.apply(vy,arguments)}function Sy(n,e,t,i,r,s,o,a,l){if(yy.apply(this,arguments),Oo){if(Oo){var c=zl;Oo=!1,zl=null}else throw Error(ne(198));Hl||(Hl=!0,gd=c)}}function Yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function w0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Mp(n){if(Yr(n)!==n)throw Error(ne(188))}function Ey(n){var e=n.alternate;if(!e){if(e=Yr(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Mp(r),n;if(s===i)return Mp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function A0(n){return n=Ey(n),n!==null?b0(n):null}function b0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=b0(n);if(e!==null)return e;n=n.sibling}return null}var R0=wn.unstable_scheduleCallback,Tp=wn.unstable_cancelCallback,My=wn.unstable_shouldYield,Ty=wn.unstable_requestPaint,Mt=wn.unstable_now,wy=wn.unstable_getCurrentPriorityLevel,Zh=wn.unstable_ImmediatePriority,C0=wn.unstable_UserBlockingPriority,Vl=wn.unstable_NormalPriority,Ay=wn.unstable_LowPriority,N0=wn.unstable_IdlePriority,xc=null,oi=null;function by(n){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(xc,n,void 0,(n.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Ny,Ry=Math.log,Cy=Math.LN2;function Ny(n){return n>>>=0,n===0?32:31-(Ry(n)/Cy|0)|0}var Na=64,La=4194304;function No(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=t&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Kn(e),r=1<<t,i|=n[t],e&=~r;return i}function Ly(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Py(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Ly(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _d(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function L0(){var n=Na;return Na<<=1,!(Na&4194240)&&(Na=64),n}function Yc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ga(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Kn(e),n[e]=t}function Iy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Kn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Kn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ot=0;function P0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var I0,Jh,D0,U0,O0,xd=!1,Pa=[],rr=null,sr=null,or=null,qo=new Map,Zo=new Map,Ki=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(n,e){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function ho(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Jh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Uy(n,e,t,i,r){switch(e){case"focusin":return rr=ho(rr,n,e,t,i,r),!0;case"dragenter":return sr=ho(sr,n,e,t,i,r),!0;case"mouseover":return or=ho(or,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return qo.set(s,ho(qo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,ho(Zo.get(s)||null,n,e,t,i,r)),!0}return!1}function F0(n){var e=Dr(n.target);if(e!==null){var t=Yr(e);if(t!==null){if(e=t.tag,e===13){if(e=w0(t),e!==null){n.blockedOn=e,O0(n.priority,function(){D0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);fd=i,t.target.dispatchEvent(i),fd=null}else return e=xa(t),e!==null&&Jh(e),n.blockedOn=t,!1;e.shift()}return!0}function Ap(n,e,t){Sl(n)&&t.delete(e)}function Oy(){xd=!1,rr!==null&&Sl(rr)&&(rr=null),sr!==null&&Sl(sr)&&(sr=null),or!==null&&Sl(or)&&(or=null),qo.forEach(Ap),Zo.forEach(Ap)}function fo(n,e){n.blockedOn===e&&(n.blockedOn=null,xd||(xd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Oy)))}function Qo(n){function e(r){return fo(r,n)}if(0<Pa.length){fo(Pa[0],n);for(var t=1;t<Pa.length;t++){var i=Pa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(rr!==null&&fo(rr,n),sr!==null&&fo(sr,n),or!==null&&fo(or,n),qo.forEach(e),Zo.forEach(e),t=0;t<Ki.length;t++)i=Ki[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ki.length&&(t=Ki[0],t.blockedOn===null);)F0(t),t.blockedOn===null&&Ki.shift()}var Cs=Oi.ReactCurrentBatchConfig,jl=!0;function Fy(n,e,t,i){var r=ot,s=Cs.transition;Cs.transition=null;try{ot=1,ef(n,e,t,i)}finally{ot=r,Cs.transition=s}}function ky(n,e,t,i){var r=ot,s=Cs.transition;Cs.transition=null;try{ot=4,ef(n,e,t,i)}finally{ot=r,Cs.transition=s}}function ef(n,e,t,i){if(jl){var r=vd(n,e,t,i);if(r===null)iu(n,e,i,Wl,t),wp(n,i);else if(Uy(r,n,e,t,i))i.stopPropagation();else if(wp(n,i),e&4&&-1<Dy.indexOf(n)){for(;r!==null;){var s=xa(r);if(s!==null&&I0(s),s=vd(n,e,t,i),s===null&&iu(n,e,i,Wl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(n,e,i,null,t)}}var Wl=null;function vd(n,e,t,i){if(Wl=null,n=qh(i),n=Dr(n),n!==null)if(e=Yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=w0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Wl=n,null}function k0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wy()){case Zh:return 1;case C0:return 4;case Vl:case Ay:return 16;case N0:return 536870912;default:return 16}default:return 16}}var Qi=null,tf=null,El=null;function B0(){if(El)return El;var n,e=tf,t=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return El=r.slice(n,1<i?1-i:void 0)}function Ml(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function bp(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:bp,this.isPropagationStopped=bp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=bn(io),_a=vt({},io,{view:0,detail:0}),By=bn(_a),$c,Kc,po,vc=vt({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?($c=n.screenX-po.screenX,Kc=n.screenY-po.screenY):Kc=$c=0,po=n),$c)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),Rp=bn(vc),zy=vt({},vc,{dataTransfer:0}),Hy=bn(zy),Vy=vt({},_a,{relatedTarget:0}),qc=bn(Vy),Gy=vt({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=bn(Gy),Wy=vt({},io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xy=bn(Wy),Yy=vt({},io,{data:0}),Cp=bn(Yy),$y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qy[n])?!!e[n]:!1}function rf(){return Zy}var Qy=vt({},_a,{key:function(n){if(n.key){var e=$y[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ml(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ky[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(n){return n.type==="keypress"?Ml(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ml(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jy=bn(Qy),eS=vt({},vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=bn(eS),tS=vt({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),nS=bn(tS),iS=vt({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=bn(iS),sS=vt({},vc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=bn(sS),aS=[9,13,27,32],sf=Ni&&"CompositionEvent"in window,Fo=null;Ni&&"documentMode"in document&&(Fo=document.documentMode);var lS=Ni&&"TextEvent"in window&&!Fo,z0=Ni&&(!sf||Fo&&8<Fo&&11>=Fo),Lp=" ",Pp=!1;function H0(n,e){switch(n){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function cS(n,e){switch(n){case"compositionend":return V0(e);case"keypress":return e.which!==32?null:(Pp=!0,Lp);case"textInput":return n=e.data,n===Lp&&Pp?null:n;default:return null}}function uS(n,e){if(ps)return n==="compositionend"||!sf&&H0(n,e)?(n=B0(),El=tf=Qi=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dS[n.type]:e==="textarea"}function G0(n,e,t,i){y0(i),e=Xl(e,"onChange"),0<e.length&&(t=new nf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ko=null,Jo=null;function hS(n){e_(n,0)}function yc(n){var e=_s(n);if(f0(e))return n}function fS(n,e){if(n==="change")return e}var j0=!1;if(Ni){var Zc;if(Ni){var Qc="oninput"in document;if(!Qc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Qc=typeof Dp.oninput=="function"}Zc=Qc}else Zc=!1;j0=Zc&&(!document.documentMode||9<document.documentMode)}function Up(){ko&&(ko.detachEvent("onpropertychange",W0),Jo=ko=null)}function W0(n){if(n.propertyName==="value"&&yc(Jo)){var e=[];G0(e,Jo,n,qh(n)),T0(hS,e)}}function pS(n,e,t){n==="focusin"?(Up(),ko=e,Jo=t,ko.attachEvent("onpropertychange",W0)):n==="focusout"&&Up()}function mS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yc(Jo)}function gS(n,e){if(n==="click")return yc(e)}function _S(n,e){if(n==="input"||n==="change")return yc(e)}function xS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Jn=typeof Object.is=="function"?Object.is:xS;function ea(n,e){if(Jn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!td.call(e,r)||!Jn(n[r],e[r]))return!1}return!0}function Op(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fp(n,e){var t=Op(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Op(t)}}function X0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?X0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Y0(){for(var n=window,e=Bl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Bl(n.document)}return e}function of(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function vS(n){var e=Y0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&X0(t.ownerDocument.documentElement,t)){if(i!==null&&of(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Fp(t,s);var o=Fp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yS=Ni&&"documentMode"in document&&11>=document.documentMode,ms=null,yd=null,Bo=null,Sd=!1;function kp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sd||ms==null||ms!==Bl(i)||(i=ms,"selectionStart"in i&&of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ea(Bo,i)||(Bo=i,i=Xl(yd,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ms)))}function Da(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var gs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Jc={},$0={};Ni&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Sc(n){if(Jc[n])return Jc[n];if(!gs[n])return n;var e=gs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $0)return Jc[n]=e[t];return n}var K0=Sc("animationend"),q0=Sc("animationiteration"),Z0=Sc("animationstart"),Q0=Sc("transitionend"),J0=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(n,e){J0.set(n,e),Xr(e,[n])}for(var eu=0;eu<Bp.length;eu++){var tu=Bp[eu],SS=tu.toLowerCase(),ES=tu[0].toUpperCase()+tu.slice(1);_r(SS,"on"+ES)}_r(K0,"onAnimationEnd");_r(q0,"onAnimationIteration");_r(Z0,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Q0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function zp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Sy(i,e,void 0,n),n.currentTarget=null}function e_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}}}if(Hl)throw n=gd,Hl=!1,gd=null,n}function ht(n,e){var t=e[Ad];t===void 0&&(t=e[Ad]=new Set);var i=n+"__bubble";t.has(i)||(t_(e,n,2,!1),t.add(i))}function nu(n,e,t){var i=0;e&&(i|=4),t_(t,n,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function ta(n){if(!n[Ua]){n[Ua]=!0,l0.forEach(function(t){t!=="selectionchange"&&(MS.has(t)||nu(t,!1,n),nu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,nu("selectionchange",!1,e))}}function t_(n,e,t,i){switch(k0(e)){case 1:var r=Fy;break;case 4:r=ky;break;default:r=ef}t=r.bind(null,e,t,n),r=void 0,!md||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function iu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}T0(function(){var c=s,u=qh(t),h=[];e:{var d=J0.get(n);if(d!==void 0){var p=nf,g=n;switch(n){case"keypress":if(Ml(t)===0)break e;case"keydown":case"keyup":p=Jy;break;case"focusin":g="focus",p=qc;break;case"focusout":g="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nS;break;case K0:case q0:case Z0:p=jy;break;case Q0:p=rS;break;case"scroll":p=By;break;case"wheel":p=oS;break;case"copy":case"cut":case"paste":p=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np}var y=(e&4)!==0,m=!y&&n==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=Ko(x,f),E!=null&&y.push(na(x,E,v)))),m)break;x=x.return}0<y.length&&(d=new p(d,g,null,t,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==fd&&(g=t.relatedTarget||t.fromElement)&&(Dr(g)||g[Li]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Dr(g):null,g!==null&&(m=Yr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Rp,E="onMouseLeave",f="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(y=Np,E="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?d:_s(p),v=g==null?d:_s(g),d=new y(E,x+"leave",p,t,u),d.target=m,d.relatedTarget=v,E=null,Dr(u)===c&&(y=new y(f,x+"enter",g,t,u),y.target=v,y.relatedTarget=m,E=y),m=E,p&&g)t:{for(y=p,f=g,x=0,v=y;v;v=qr(v))x++;for(v=0,E=f;E;E=qr(E))v++;for(;0<x-v;)y=qr(y),x--;for(;0<v-x;)f=qr(f),v--;for(;x--;){if(y===f||f!==null&&y===f.alternate)break t;y=qr(y),f=qr(f)}y=null}else y=null;p!==null&&Hp(h,d,p,y,!1),g!==null&&m!==null&&Hp(h,m,g,y,!0)}}e:{if(d=c?_s(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=fS;else if(Ip(d))if(j0)C=_S;else{C=mS;var R=pS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=gS);if(C&&(C=C(n,c))){G0(h,C,t,u);break e}R&&R(n,d,c),n==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&ld(d,"number",d.value)}switch(R=c?_s(c):window,n){case"focusin":(Ip(R)||R.contentEditable==="true")&&(ms=R,yd=c,Bo=null);break;case"focusout":Bo=yd=ms=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,kp(h,t,u);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":kp(h,t,u)}var A;if(sf)e:{switch(n){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ps?H0(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(z0&&t.locale!=="ko"&&(ps||N!=="onCompositionStart"?N==="onCompositionEnd"&&ps&&(A=B0()):(Qi=u,tf="value"in Qi?Qi.value:Qi.textContent,ps=!0)),R=Xl(c,N),0<R.length&&(N=new Cp(N,n,null,t,u),h.push({event:N,listeners:R}),A?N.data=A:(A=V0(t),A!==null&&(N.data=A)))),(A=lS?cS(n,t):uS(n,t))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(u=new Cp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}e_(h,e)})}function na(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ko(n,t),s!=null&&i.unshift(na(n,s,r)),s=Ko(n,e),s!=null&&i.push(na(n,s,r))),n=n.return}return i}function qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ko(t,s),l!=null&&o.unshift(na(t,l,a))):r||(l=Ko(t,s),l!=null&&o.push(na(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var TS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function Vp(n){return(typeof n=="string"?n:""+n).replace(TS,`
`).replace(wS,"")}function Oa(n,e,t){if(e=Vp(e),Vp(n)!==e&&t)throw Error(ne(425))}function Yl(){}var Ed=null,Md=null;function Td(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(RS)}:wd;function RS(n){setTimeout(function(){throw n})}function ru(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Qo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Qo(e)}function ar(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ro=Math.random().toString(36).slice(2),ri="__reactFiber$"+ro,ia="__reactProps$"+ro,Li="__reactContainer$"+ro,Ad="__reactEvents$"+ro,CS="__reactListeners$"+ro,NS="__reactHandles$"+ro;function Dr(n){var e=n[ri];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Li]||t[ri]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=jp(n);n!==null;){if(t=n[ri])return t;n=jp(n)}return e}n=t,t=n.parentNode}return null}function xa(n){return n=n[ri]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Ec(n){return n[ia]||null}var bd=[],xs=-1;function xr(n){return{current:n}}function pt(n){0>xs||(n.current=bd[xs],bd[xs]=null,xs--)}function ut(n,e){xs++,bd[xs]=n.current,n.current=e}var mr={},$t=xr(mr),dn=xr(!1),Br=mr;function Bs(n,e){var t=n.type.contextTypes;if(!t)return mr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function hn(n){return n=n.childContextTypes,n!=null}function $l(){pt(dn),pt($t)}function Wp(n,e,t){if($t.current!==mr)throw Error(ne(168));ut($t,e),ut(dn,t)}function n_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,py(n)||"Unknown",r));return vt({},t,i)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Br=$t.current,ut($t,n),ut(dn,dn.current),!0}function Xp(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=n_(n,e,Br),i.__reactInternalMemoizedMergedChildContext=n,pt(dn),pt($t),ut($t,n)):pt(dn),ut(dn,t)}var Ti=null,Mc=!1,su=!1;function i_(n){Ti===null?Ti=[n]:Ti.push(n)}function LS(n){Mc=!0,i_(n)}function vr(){if(!su&&Ti!==null){su=!0;var n=0,e=ot;try{var t=Ti;for(ot=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,Mc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),R0(Zh,vr),r}finally{ot=e,su=!1}}return null}var vs=[],ys=0,ql=null,Zl=0,Ln=[],Pn=0,zr=null,wi=1,Ai="";function Cr(n,e){vs[ys++]=Zl,vs[ys++]=ql,ql=n,Zl=e}function r_(n,e,t){Ln[Pn++]=wi,Ln[Pn++]=Ai,Ln[Pn++]=zr,zr=n;var i=wi;n=Ai;var r=32-Kn(i)-1;i&=~(1<<r),t+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Kn(e)+r|t<<r|i,Ai=s+n}else wi=1<<s|t<<r|i,Ai=n}function af(n){n.return!==null&&(Cr(n,1),r_(n,1,0))}function lf(n){for(;n===ql;)ql=vs[--ys],vs[ys]=null,Zl=vs[--ys],vs[ys]=null;for(;n===zr;)zr=Ln[--Pn],Ln[Pn]=null,Ai=Ln[--Pn],Ln[Pn]=null,wi=Ln[--Pn],Ln[Pn]=null}var Tn=null,Sn=null,mt=!1,Wn=null;function s_(n,e){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,Sn=ar(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=zr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,Sn=null,!0):!1;default:return!1}}function Rd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cd(n){if(mt){var e=Sn;if(e){var t=e;if(!Yp(n,e)){if(Rd(n))throw Error(ne(418));e=ar(t.nextSibling);var i=Tn;e&&Yp(n,e)?s_(i,t):(n.flags=n.flags&-4097|2,mt=!1,Tn=n)}}else{if(Rd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,mt=!1,Tn=n}}}function $p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function Fa(n){if(n!==Tn)return!1;if(!mt)return $p(n),mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Td(n.type,n.memoizedProps)),e&&(e=Sn)){if(Rd(n))throw o_(),Error(ne(418));for(;e;)s_(n,e),e=ar(e.nextSibling)}if($p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Sn=ar(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Sn=null}}else Sn=Tn?ar(n.stateNode.nextSibling):null;return!0}function o_(){for(var n=Sn;n;)n=ar(n.nextSibling)}function zs(){Sn=Tn=null,mt=!1}function cf(n){Wn===null?Wn=[n]:Wn.push(n)}var PS=Oi.ReactCurrentBatchConfig;function mo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function ka(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Kp(n){var e=n._init;return e(n._payload)}function a_(n){function e(f,x){if(n){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function t(f,x){if(!n)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=dr(f,x),f.index=0,f.sibling=null,f}function s(f,x,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,x,v,E){return x===null||x.tag!==6?(x=hu(v,f.mode,E),x.return=f,x):(x=r(x,v),x.return=f,x)}function l(f,x,v,E){var C=v.type;return C===fs?u(f,x,v.props.children,E,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&Kp(C)===x.type)?(E=r(x,v.props),E.ref=mo(f,x,v),E.return=f,E):(E=Nl(v.type,v.key,v.props,null,f.mode,E),E.ref=mo(f,x,v),E.return=f,E)}function c(f,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=fu(v,f.mode,E),x.return=f,x):(x=r(x,v.children||[]),x.return=f,x)}function u(f,x,v,E,C){return x===null||x.tag!==7?(x=kr(v,f.mode,E,C),x.return=f,x):(x=r(x,v),x.return=f,x)}function h(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=hu(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ba:return v=Nl(x.type,x.key,x.props,null,f.mode,v),v.ref=mo(f,null,x),v.return=f,v;case hs:return x=fu(x,f.mode,v),x.return=f,x;case Xi:var E=x._init;return h(f,E(x._payload),v)}if(Co(x)||co(x))return x=kr(x,f.mode,v,null),x.return=f,x;ka(f,x)}return null}function d(f,x,v,E){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(f,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return v.key===C?l(f,x,v,E):null;case hs:return v.key===C?c(f,x,v,E):null;case Xi:return C=v._init,d(f,x,C(v._payload),E)}if(Co(v)||co(v))return C!==null?null:u(f,x,v,E,null);ka(f,v)}return null}function p(f,x,v,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,a(x,f,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ba:return f=f.get(E.key===null?v:E.key)||null,l(x,f,E,C);case hs:return f=f.get(E.key===null?v:E.key)||null,c(x,f,E,C);case Xi:var R=E._init;return p(f,x,v,R(E._payload),C)}if(Co(E)||co(E))return f=f.get(v)||null,u(x,f,E,C,null);ka(x,E)}return null}function g(f,x,v,E){for(var C=null,R=null,A=x,N=x=0,V=null;A!==null&&N<v.length;N++){A.index>N?(V=A,A=null):V=A.sibling;var S=d(f,A,v[N],E);if(S===null){A===null&&(A=V);break}n&&A&&S.alternate===null&&e(f,A),x=s(S,x,N),R===null?C=S:R.sibling=S,R=S,A=V}if(N===v.length)return t(f,A),mt&&Cr(f,N),C;if(A===null){for(;N<v.length;N++)A=h(f,v[N],E),A!==null&&(x=s(A,x,N),R===null?C=A:R.sibling=A,R=A);return mt&&Cr(f,N),C}for(A=i(f,A);N<v.length;N++)V=p(A,f,N,v[N],E),V!==null&&(n&&V.alternate!==null&&A.delete(V.key===null?N:V.key),x=s(V,x,N),R===null?C=V:R.sibling=V,R=V);return n&&A.forEach(function(M){return e(f,M)}),mt&&Cr(f,N),C}function y(f,x,v,E){var C=co(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var R=C=null,A=x,N=x=0,V=null,S=v.next();A!==null&&!S.done;N++,S=v.next()){A.index>N?(V=A,A=null):V=A.sibling;var M=d(f,A,S.value,E);if(M===null){A===null&&(A=V);break}n&&A&&M.alternate===null&&e(f,A),x=s(M,x,N),R===null?C=M:R.sibling=M,R=M,A=V}if(S.done)return t(f,A),mt&&Cr(f,N),C;if(A===null){for(;!S.done;N++,S=v.next())S=h(f,S.value,E),S!==null&&(x=s(S,x,N),R===null?C=S:R.sibling=S,R=S);return mt&&Cr(f,N),C}for(A=i(f,A);!S.done;N++,S=v.next())S=p(A,f,N,S.value,E),S!==null&&(n&&S.alternate!==null&&A.delete(S.key===null?N:S.key),x=s(S,x,N),R===null?C=S:R.sibling=S,R=S);return n&&A.forEach(function(G){return e(f,G)}),mt&&Cr(f,N),C}function m(f,x,v,E){if(typeof v=="object"&&v!==null&&v.type===fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:e:{for(var C=v.key,R=x;R!==null;){if(R.key===C){if(C=v.type,C===fs){if(R.tag===7){t(f,R.sibling),x=r(R,v.props.children),x.return=f,f=x;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&Kp(C)===R.type){t(f,R.sibling),x=r(R,v.props),x.ref=mo(f,R,v),x.return=f,f=x;break e}t(f,R);break}else e(f,R);R=R.sibling}v.type===fs?(x=kr(v.props.children,f.mode,E,v.key),x.return=f,f=x):(E=Nl(v.type,v.key,v.props,null,f.mode,E),E.ref=mo(f,x,v),E.return=f,f=E)}return o(f);case hs:e:{for(R=v.key;x!==null;){if(x.key===R)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(f,x.sibling),x=r(x,v.children||[]),x.return=f,f=x;break e}else{t(f,x);break}else e(f,x);x=x.sibling}x=fu(v,f.mode,E),x.return=f,f=x}return o(f);case Xi:return R=v._init,m(f,x,R(v._payload),E)}if(Co(v))return g(f,x,v,E);if(co(v))return y(f,x,v,E);ka(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(f,x.sibling),x=r(x,v),x.return=f,f=x):(t(f,x),x=hu(v,f.mode,E),x.return=f,f=x),o(f)):t(f,x)}return m}var Hs=a_(!0),l_=a_(!1),Ql=xr(null),Jl=null,Ss=null,uf=null;function df(){uf=Ss=Jl=null}function hf(n){var e=Ql.current;pt(Ql),n._currentValue=e}function Nd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ns(n,e){Jl=n,uf=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function On(n){var e=n._currentValue;if(uf!==n)if(n={context:n,memoizedValue:e,next:null},Ss===null){if(Jl===null)throw Error(ne(308));Ss=n,Jl.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return e}var Ur=null;function ff(n){Ur===null?Ur=[n]:Ur.push(n)}function c_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ff(e)):(t.next=r.next,r.next=t),e.interleaved=t,Pi(n,i)}function Pi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Yi=!1;function pf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(n,t)}return r=i.interleaved,r===null?(e.next=e,ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(n,t)}function Tl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qh(n,t)}}function qp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ec(n,e,t,i){var r=n.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(d=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=vt({},h,d);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,n.lanes=o,n.memoizedState=h}}function Zp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var va={},ai=xr(va),ra=xr(va),sa=xr(va);function Or(n){if(n===va)throw Error(ne(174));return n}function mf(n,e){switch(ut(sa,e),ut(ra,n),ut(ai,va),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ud(e,n)}pt(ai),ut(ai,e)}function Vs(){pt(ai),pt(ra),pt(sa)}function d_(n){Or(sa.current);var e=Or(ai.current),t=ud(e,n.type);e!==t&&(ut(ra,n),ut(ai,t))}function gf(n){ra.current===n&&(pt(ai),pt(ra))}var gt=xr(0);function tc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function _f(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var wl=Oi.ReactCurrentDispatcher,au=Oi.ReactCurrentBatchConfig,Hr=0,_t=null,Rt=null,It=null,nc=!1,zo=!1,oa=0,IS=0;function Gt(){throw Error(ne(321))}function xf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Jn(n[t],e[t]))return!1;return!0}function vf(n,e,t,i,r,s){if(Hr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=n===null||n.memoizedState===null?FS:kS,n=t(i,r),zo){s=0;do{if(zo=!1,oa=0,25<=s)throw Error(ne(301));s+=1,It=Rt=null,e.updateQueue=null,wl.current=BS,n=t(i,r)}while(zo)}if(wl.current=ic,e=Rt!==null&&Rt.next!==null,Hr=0,It=Rt=_t=null,nc=!1,e)throw Error(ne(300));return n}function yf(){var n=oa!==0;return oa=0,n}function ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=n:It=It.next=n,It}function Fn(){if(Rt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=It===null?_t.memoizedState:It.next;if(e!==null)It=e,Rt=n;else{if(n===null)throw Error(ne(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?_t.memoizedState=It=n:It=It.next=n}return It}function aa(n,e){return typeof e=="function"?e(n):e}function lu(n){var e=Fn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Hr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,_t.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,Vr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function cu(n){var e=Fn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function h_(){}function f_(n,e){var t=_t,i=Fn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Sf(g_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,la(9,m_.bind(null,t,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Hr&30||p_(t,e,r)}return r}function p_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function m_(n,e,t,i){e.value=t,e.getSnapshot=i,__(e)&&x_(n)}function g_(n,e,t){return t(function(){__(e)&&x_(n)})}function __(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Jn(n,t)}catch{return!0}}function x_(n){var e=Pi(n,1);e!==null&&qn(e,n,1,-1)}function Qp(n){var e=ni();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:n},e.queue=n,n=n.dispatch=OS.bind(null,_t,n),[e.memoizedState,n]}function la(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function v_(){return Fn().memoizedState}function Al(n,e,t,i){var r=ni();_t.flags|=n,r.memoizedState=la(1|e,t,void 0,i===void 0?null:i)}function Tc(n,e,t,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&xf(i,o.deps)){r.memoizedState=la(e,t,s,i);return}}_t.flags|=n,r.memoizedState=la(1|e,t,s,i)}function Jp(n,e){return Al(8390656,8,n,e)}function Sf(n,e){return Tc(2048,8,n,e)}function y_(n,e){return Tc(4,2,n,e)}function S_(n,e){return Tc(4,4,n,e)}function E_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function M_(n,e,t){return t=t!=null?t.concat([n]):null,Tc(4,4,E_.bind(null,e,n),t)}function Ef(){}function T_(n,e){var t=Fn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function w_(n,e){var t=Fn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function A_(n,e,t){return Hr&21?(Jn(t,e)||(t=L0(),_t.lanes|=t,Vr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function DS(n,e){var t=ot;ot=t!==0&&4>t?t:4,n(!0);var i=au.transition;au.transition={};try{n(!1),e()}finally{ot=t,au.transition=i}}function b_(){return Fn().memoizedState}function US(n,e,t){var i=ur(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},R_(n))C_(e,t);else if(t=c_(n,e,t,i),t!==null){var r=tn();qn(t,n,i,r),N_(t,e,i)}}function OS(n,e,t){var i=ur(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(R_(n))C_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=c_(n,e,r,i),t!==null&&(r=tn(),qn(t,n,i,r),N_(t,e,i))}}function R_(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function C_(n,e){zo=nc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function N_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qh(n,t)}}var ic={readContext:On,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},FS={readContext:On,useCallback:function(n,e){return ni().memoizedState=[n,e===void 0?null:e],n},useContext:On,useEffect:Jp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Al(4194308,4,E_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Al(4194308,4,n,e)},useInsertionEffect:function(n,e){return Al(4,2,n,e)},useMemo:function(n,e){var t=ni();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ni();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=US.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=ni();return n={current:n},e.memoizedState=n},useState:Qp,useDebugValue:Ef,useDeferredValue:function(n){return ni().memoizedState=n},useTransition:function(){var n=Qp(!1),e=n[0];return n=DS.bind(null,n[1]),ni().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=ni();if(mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Dt===null)throw Error(ne(349));Hr&30||p_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Jp(g_.bind(null,i,s,n),[n]),i.flags|=2048,la(9,m_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ni(),e=Dt.identifierPrefix;if(mt){var t=Ai,i=wi;t=(i&~(1<<32-Kn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=oa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=IS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:On,useCallback:T_,useContext:On,useEffect:Sf,useImperativeHandle:M_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:w_,useReducer:lu,useRef:v_,useState:function(){return lu(aa)},useDebugValue:Ef,useDeferredValue:function(n){var e=Fn();return A_(e,Rt.memoizedState,n)},useTransition:function(){var n=lu(aa)[0],e=Fn().memoizedState;return[n,e]},useMutableSource:h_,useSyncExternalStore:f_,useId:b_,unstable_isNewReconciler:!1},BS={readContext:On,useCallback:T_,useContext:On,useEffect:Sf,useImperativeHandle:M_,useInsertionEffect:y_,useLayoutEffect:S_,useMemo:w_,useReducer:cu,useRef:v_,useState:function(){return cu(aa)},useDebugValue:Ef,useDeferredValue:function(n){var e=Fn();return Rt===null?e.memoizedState=n:A_(e,Rt.memoizedState,n)},useTransition:function(){var n=cu(aa)[0],e=Fn().memoizedState;return[n,e]},useMutableSource:h_,useSyncExternalStore:f_,useId:b_,unstable_isNewReconciler:!1};function Gn(n,e){if(n&&n.defaultProps){e=vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ld(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wc={isMounted:function(n){return(n=n._reactInternals)?Yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=tn(),r=ur(n),s=Ci(i,r);s.payload=e,t!=null&&(s.callback=t),e=lr(n,s,r),e!==null&&(qn(e,n,r,i),Tl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=tn(),r=ur(n),s=Ci(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=lr(n,s,r),e!==null&&(qn(e,n,r,i),Tl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=tn(),i=ur(n),r=Ci(t,i);r.tag=2,e!=null&&(r.callback=e),e=lr(n,r,i),e!==null&&(qn(e,n,i,t),Tl(e,n,i))}};function em(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(t,i)||!ea(r,s):!0}function L_(n,e,t){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=hn(e)?Br:$t.current,i=e.contextTypes,s=(i=i!=null)?Bs(n,r):mr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function tm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wc.enqueueReplaceState(e,e.state,null)}function Pd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},pf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=hn(e)?Br:$t.current,r.context=Bs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),ec(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,e){try{var t="",i=e;do t+=fy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function uu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Id(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var zS=typeof WeakMap=="function"?WeakMap:Map;function P_(n,e,t){t=Ci(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sc||(sc=!0,Gd=i),Id(n,e)},t}function I_(n,e,t){t=Ci(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Id(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Id(n,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function nm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new zS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=eE.bind(null,n,e,t),e.then(n,n))}function im(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function rm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ci(-1,1),e.tag=2,lr(t,e,1))),t.lanes|=1),n)}var HS=Oi.ReactCurrentOwner,un=!1;function Zt(n,e,t,i){e.child=n===null?l_(e,null,t,i):Hs(e,n.child,t,i)}function sm(n,e,t,i,r){t=t.render;var s=e.ref;return Ns(e,r),i=vf(n,e,t,i,s,r),t=yf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(mt&&t&&af(e),e.flags|=1,Zt(n,e,i,r),e.child)}function om(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,D_(n,e,s,i,r)):(n=Nl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ea,t(o,i)&&n.ref===e.ref)return Ii(n,e,r)}return e.flags|=1,n=dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function D_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ea(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Ii(n,e,r)}return Dd(n,e,t,i,r)}function U_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ms,vn),vn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(Ms,vn),vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(Ms,vn),vn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(Ms,vn),vn|=i;return Zt(n,e,r,t),e.child}function O_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Dd(n,e,t,i,r){var s=hn(t)?Br:$t.current;return s=Bs(e,s),Ns(e,r),t=vf(n,e,t,i,s,r),i=yf(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ii(n,e,r)):(mt&&i&&af(e),e.flags|=1,Zt(n,e,t,r),e.child)}function am(n,e,t,i,r){if(hn(t)){var s=!0;Kl(e)}else s=!1;if(Ns(e,r),e.stateNode===null)bl(n,e),L_(e,t,i),Pd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=On(c):(c=hn(t)?Br:$t.current,c=Bs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&tm(e,o,i,c),Yi=!1;var d=e.memoizedState;o.state=d,ec(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||Yi?(typeof u=="function"&&(Ld(e,t,u,i),l=e.memoizedState),(a=Yi||em(e,t,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=On(l):(l=hn(t)?Br:$t.current,l=Bs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&tm(e,o,i,l),Yi=!1,d=e.memoizedState,o.state=d,ec(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||dn.current||Yi?(typeof p=="function"&&(Ld(e,t,p,i),g=e.memoizedState),(c=Yi||em(e,t,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Ud(n,e,t,i,s,r)}function Ud(n,e,t,i,r,s){O_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xp(e,t,!1),Ii(n,e,s);i=e.stateNode,HS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Hs(e,n.child,null,s),e.child=Hs(e,null,a,s)):Zt(n,e,a,s),e.memoizedState=i.state,r&&Xp(e,t,!0),e.child}function F_(n){var e=n.stateNode;e.pendingContext?Wp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(n,e.context,!1),mf(n,e.containerInfo)}function lm(n,e,t,i,r){return zs(),cf(r),e.flags|=256,Zt(n,e,t,i),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Fd(n){return{baseLanes:n,cachePool:null,transitions:null}}function k_(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(gt,r&1),n===null)return Cd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,i,0,null),n=kr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fd(t),e.memoizedState=Od,n):Mf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=kr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Od,i}return s=n.child,n=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mf(n,e){return e=Rc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ba(n,e,t,i){return i!==null&&cf(i),Hs(e,n.child,null,t),n=Mf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function VS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=uu(Error(ne(422))),Ba(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Rc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,n.child,null,o),e.child.memoizedState=Fd(o),e.memoizedState=Od,s);if(!(e.mode&1))return Ba(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=uu(s,i,void 0),Ba(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(n,r),qn(i,n,r,-1))}return Cf(),i=uu(Error(ne(421))),Ba(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=tE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Sn=ar(r.nextSibling),Tn=e,mt=!0,Wn=null,n!==null&&(Ln[Pn++]=wi,Ln[Pn++]=Ai,Ln[Pn++]=zr,wi=n.id,Ai=n.overflow,zr=e),e=Mf(e,i.children),e.flags|=4096,e)}function cm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Nd(n.return,e,t)}function du(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function B_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,t,e);else if(n.tag===19)cm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&tc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),du(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&tc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}du(e,!0,t,null,s);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Vr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function GS(n,e,t){switch(e.tag){case 3:F_(e),zs();break;case 5:d_(e);break;case 1:hn(e.type)&&Kl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?k_(n,e,t):(ut(gt,gt.current&1),n=Ii(n,e,t),n!==null?n.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return B_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,U_(n,e,t)}return Ii(n,e,t)}var z_,kd,H_,V_;z_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};kd=function(){};H_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Or(ai.current);var s=null;switch(t){case"input":r=od(n,r),i=od(n,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=cd(n,r),i=cd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yl)}dd(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};V_=function(n,e,t,i){t!==i&&(e.flags|=4)};function go(n,e){if(!mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function jS(n,e,t){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return hn(e.type)&&$l(),jt(e),null;case 3:return i=e.stateNode,Vs(),pt(dn),pt($t),_f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Fa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Xd(Wn),Wn=null))),kd(n,e),jt(e),null;case 5:gf(e);var r=Or(sa.current);if(t=e.type,n!==null&&e.stateNode!=null)H_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(n=Or(ai.current),Fa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[ia]=s,n=(e.mode&1)!==0,t){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)ht(Lo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":xp(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":yp(i,s),ht("invalid",i)}dd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,n),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(t){case"input":Ra(i),vp(i,s,!0);break;case"textarea":Ra(i),Sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=g0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ri]=e,n[ia]=i,z_(n,e,!1,!1),e.stateNode=n;e:{switch(o=hd(t,i),t){case"dialog":ht("cancel",n),ht("close",n),r=i;break;case"iframe":case"object":case"embed":ht("load",n),r=i;break;case"video":case"audio":for(r=0;r<Lo.length;r++)ht(Lo[r],n);r=i;break;case"source":ht("error",n),r=i;break;case"img":case"image":case"link":ht("error",n),ht("load",n),r=i;break;case"details":ht("toggle",n),r=i;break;case"input":xp(n,i),r=od(n,i),ht("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ht("invalid",n);break;case"textarea":yp(n,i),r=cd(n,i),ht("invalid",n);break;default:r=i}dd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&$o(n,l):typeof l=="number"&&$o(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",n):l!=null&&Xh(n,s,l,o))}switch(t){case"input":Ra(n),vp(n,i,!1);break;case"textarea":Ra(n),Sp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+pr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?As(n,!!i.multiple,s,!1):i.defaultValue!=null&&As(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(n&&e.stateNode!=null)V_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=Or(sa.current),Or(ai.current),Fa(e)){if(i=e.stateNode,t=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:Oa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return jt(e),null;case 13:if(pt(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&Sn!==null&&e.mode&1&&!(e.flags&128))o_(),zs(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ri]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Wn!==null&&(Xd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?Ct===0&&(Ct=3):Cf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Vs(),kd(n,e),n===null&&ta(e.stateNode.containerInfo),jt(e),null;case 10:return hf(e.type._context),jt(e),null;case 17:return hn(e.type)&&$l(),jt(e),null;case 19:if(pt(gt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Ct!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=tc(n),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Mt()>js&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(n=tc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return jt(e),null}else 2*Mt()-s.renderingStartTime>js&&t!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,t=gt.current,ut(gt,i?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Rf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function WS(n,e){switch(lf(e),e.tag){case 1:return hn(e.type)&&$l(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Vs(),pt(dn),pt($t),_f(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return gf(e),null;case 13:if(pt(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));zs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Vs(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var za=!1,Yt=!1,XS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Es(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function Bd(n,e,t){try{t()}catch(i){St(n,e,i)}}var um=!1;function YS(n,e){if(Ed=jl,n=Y0(),of(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Md={focusedElem:n,selectionRange:t},jl=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Gn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){St(e,e.return,E)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=um,um=!1,g}function Ho(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bd(e,t,s)}r=r.next}while(r!==i)}}function Ac(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function G_(n){var e=n.alternate;e!==null&&(n.alternate=null,G_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ri],delete e[ia],delete e[Ad],delete e[CS],delete e[NS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function j_(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||j_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(n=n.child,n!==null))for(Hd(n,e,t),n=n.sibling;n!==null;)Hd(n,e,t),n=n.sibling}function Vd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Vd(n,e,t),n=n.sibling;n!==null;)Vd(n,e,t),n=n.sibling}var Ft=null,jn=!1;function ki(n,e,t){for(t=t.child;t!==null;)W_(n,e,t),t=t.sibling}function W_(n,e,t){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(xc,t)}catch{}switch(t.tag){case 5:Yt||Es(t,e);case 6:var i=Ft,r=jn;Ft=null,ki(n,e,t),Ft=i,jn=r,Ft!==null&&(jn?(n=Ft,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ft.removeChild(t.stateNode));break;case 18:Ft!==null&&(jn?(n=Ft,t=t.stateNode,n.nodeType===8?ru(n.parentNode,t):n.nodeType===1&&ru(n,t),Qo(n)):ru(Ft,t.stateNode));break;case 4:i=Ft,r=jn,Ft=t.stateNode.containerInfo,jn=!0,ki(n,e,t),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bd(t,e,o),r=r.next}while(r!==i)}ki(n,e,t);break;case 1:if(!Yt&&(Es(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}ki(n,e,t);break;case 21:ki(n,e,t);break;case 22:t.mode&1?(Yt=(i=Yt)||t.memoizedState!==null,ki(n,e,t),Yt=i):ki(n,e,t);break;default:ki(n,e,t)}}function hm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new XS),e.forEach(function(i){var r=nE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Bn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,jn=!1;break e;case 3:Ft=a.stateNode.containerInfo,jn=!0;break e;case 4:Ft=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));W_(s,o,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X_(e,n),e=e.sibling}function X_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(e,n),ti(n),i&4){try{Ho(3,n,n.return),Ac(3,n)}catch(y){St(n,n.return,y)}try{Ho(5,n,n.return)}catch(y){St(n,n.return,y)}}break;case 1:Bn(e,n),ti(n),i&512&&t!==null&&Es(t,t.return);break;case 5:if(Bn(e,n),ti(n),i&512&&t!==null&&Es(t,t.return),n.flags&32){var r=n.stateNode;try{$o(r,"")}catch(y){St(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?v0(r,h):u==="dangerouslySetInnerHTML"?_0(r,h):u==="children"?$o(r,h):Xh(r,u,h,c)}switch(a){case"input":ad(r,s);break;case"textarea":m0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(y){St(n,n.return,y)}}break;case 6:if(Bn(e,n),ti(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){St(n,n.return,y)}}break;case 3:if(Bn(e,n),ti(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(y){St(n,n.return,y)}break;case 4:Bn(e,n),ti(n);break;case 13:Bn(e,n),ti(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=Mt())),i&4&&hm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Yt=(c=Yt)||u,Bn(e,n),Yt=c):Bn(e,n),ti(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(pe=n,u=n.child;u!==null;){for(h=pe=u;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ho(4,d,d.return);break;case 1:Es(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){St(i,t,y)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){pm(h);continue}}p!==null?(p.return=d,pe=p):pm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",o))}catch(y){St(n,n.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){St(n,n.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bn(e,n),ti(n),i&4&&hm(n);break;case 21:break;default:Bn(e,n),ti(n)}}function ti(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(j_(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=dm(n);Vd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dm(n);Hd(n,a,o);break;default:throw Error(ne(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $S(n,e,t){pe=n,Y_(n)}function Y_(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Yt;a=za;var c=Yt;if(za=o,(Yt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?mm(r):l!==null?(l.return=o,pe=l):mm(r);for(;s!==null;)pe=s,Y_(s),s=s.sibling;pe=r,za=a,Yt=c}fm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):fm(n)}}function fm(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Gn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Zp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Yt||e.flags&512&&zd(e)}catch(d){St(e,e.return,d)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function pm(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function mm(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ac(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{zd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{zd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var KS=Math.ceil,rc=Oi.ReactCurrentDispatcher,Tf=Oi.ReactCurrentOwner,Un=Oi.ReactCurrentBatchConfig,Ke=0,Dt=null,At=null,Bt=0,vn=0,Ms=xr(0),Ct=0,ca=null,Vr=0,bc=0,wf=0,Vo=null,cn=null,Af=0,js=1/0,Ei=null,sc=!1,Gd=null,cr=null,Ha=!1,Ji=null,oc=0,Go=0,jd=null,Rl=-1,Cl=0;function tn(){return Ke&6?Mt():Rl!==-1?Rl:Rl=Mt()}function ur(n){return n.mode&1?Ke&2&&Bt!==0?Bt&-Bt:PS.transition!==null?(Cl===0&&(Cl=L0()),Cl):(n=ot,n!==0||(n=window.event,n=n===void 0?16:k0(n.type)),n):1}function qn(n,e,t,i){if(50<Go)throw Go=0,jd=null,Error(ne(185));ga(n,t,i),(!(Ke&2)||n!==Dt)&&(n===Dt&&(!(Ke&2)&&(bc|=t),Ct===4&&qi(n,Bt)),fn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(js=Mt()+500,Mc&&vr()))}function fn(n,e){var t=n.callbackNode;Py(n,e);var i=Gl(n,n===Dt?Bt:0);if(i===0)t!==null&&Tp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Tp(t),e===1)n.tag===0?LS(gm.bind(null,n)):i_(gm.bind(null,n)),bS(function(){!(Ke&6)&&vr()}),t=null;else{switch(P0(i)){case 1:t=Zh;break;case 4:t=C0;break;case 16:t=Vl;break;case 536870912:t=N0;break;default:t=Vl}t=tx(t,$_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $_(n,e){if(Rl=-1,Cl=0,Ke&6)throw Error(ne(327));var t=n.callbackNode;if(Ls()&&n.callbackNode!==t)return null;var i=Gl(n,n===Dt?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ac(n,i);else{e=i;var r=Ke;Ke|=2;var s=q_();(Dt!==n||Bt!==e)&&(Ei=null,js=Mt()+500,Fr(n,e));do try{QS();break}catch(a){K_(n,a)}while(!0);df(),rc.current=s,Ke=r,At!==null?e=0:(Dt=null,Bt=0,e=Ct)}if(e!==0){if(e===2&&(r=_d(n),r!==0&&(i=r,e=Wd(n,r))),e===1)throw t=ca,Fr(n,0),qi(n,i),fn(n,Mt()),t;if(e===6)qi(n,i);else{if(r=n.current.alternate,!(i&30)&&!qS(r)&&(e=ac(n,i),e===2&&(s=_d(n),s!==0&&(i=s,e=Wd(n,s))),e===1))throw t=ca,Fr(n,0),qi(n,i),fn(n,Mt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Nr(n,cn,Ei);break;case 3:if(qi(n,i),(i&130023424)===i&&(e=Af+500-Mt(),10<e)){if(Gl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){tn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wd(Nr.bind(null,n,cn,Ei),e);break}Nr(n,cn,Ei);break;case 4:if(qi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KS(i/1960))-i,10<i){n.timeoutHandle=wd(Nr.bind(null,n,cn,Ei),i);break}Nr(n,cn,Ei);break;case 5:Nr(n,cn,Ei);break;default:throw Error(ne(329))}}}return fn(n,Mt()),n.callbackNode===t?$_.bind(null,n):null}function Wd(n,e){var t=Vo;return n.current.memoizedState.isDehydrated&&(Fr(n,e).flags|=256),n=ac(n,e),n!==2&&(e=cn,cn=t,e!==null&&Xd(e)),n}function Xd(n){cn===null?cn=n:cn.push.apply(cn,n)}function qS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(n,e){for(e&=~wf,e&=~bc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Kn(e),i=1<<t;n[t]=-1,e&=~i}}function gm(n){if(Ke&6)throw Error(ne(327));Ls();var e=Gl(n,0);if(!(e&1))return fn(n,Mt()),null;var t=ac(n,e);if(n.tag!==0&&t===2){var i=_d(n);i!==0&&(e=i,t=Wd(n,i))}if(t===1)throw t=ca,Fr(n,0),qi(n,e),fn(n,Mt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Nr(n,cn,Ei),fn(n,Mt()),null}function bf(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(js=Mt()+500,Mc&&vr())}}function Gr(n){Ji!==null&&Ji.tag===0&&!(Ke&6)&&Ls();var e=Ke;Ke|=1;var t=Un.transition,i=ot;try{if(Un.transition=null,ot=1,n)return n()}finally{ot=i,Un.transition=t,Ke=e,!(Ke&6)&&vr()}}function Rf(){vn=Ms.current,pt(Ms)}function Fr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,AS(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$l();break;case 3:Vs(),pt(dn),pt($t),_f();break;case 5:gf(i);break;case 4:Vs();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:hf(i.type._context);break;case 22:case 23:Rf()}t=t.return}if(Dt=n,At=n=dr(n.current,null),Bt=vn=e,Ct=0,ca=null,wf=bc=Vr=0,cn=Vo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(t=Ur[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ur=null}return n}function K_(n,e){do{var t=At;try{if(df(),wl.current=ic,nc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nc=!1}if(Hr=0,It=Rt=_t=null,zo=!1,oa=0,Tf.current=null,t===null||t.return===null){Ct=1,ca=e,At=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=im(o);if(p!==null){p.flags&=-257,rm(p,o,a,s,e),p.mode&1&&nm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){nm(s,c,e),Cf();break e}l=Error(ne(426))}}else if(mt&&a.mode&1){var m=im(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),rm(m,o,a,s,e),cf(Gs(l,a));break e}}s=l=Gs(l,a),Ct!==4&&(Ct=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=P_(s,l,e);qp(s,f);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=I_(s,a,e);qp(s,E);break e}}s=s.return}while(s!==null)}Q_(t)}catch(C){e=C,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function q_(){var n=rc.current;return rc.current=ic,n===null?ic:n}function Cf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Vr&268435455)&&!(bc&268435455)||qi(Dt,Bt)}function ac(n,e){var t=Ke;Ke|=2;var i=q_();(Dt!==n||Bt!==e)&&(Ei=null,Fr(n,e));do try{ZS();break}catch(r){K_(n,r)}while(!0);if(df(),Ke=t,rc.current=i,At!==null)throw Error(ne(261));return Dt=null,Bt=0,Ct}function ZS(){for(;At!==null;)Z_(At)}function QS(){for(;At!==null&&!My();)Z_(At)}function Z_(n){var e=ex(n.alternate,n,vn);n.memoizedProps=n.pendingProps,e===null?Q_(n):At=e,Tf.current=null}function Q_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=WS(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,At=null;return}}else if(t=jS(t,e,vn),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);Ct===0&&(Ct=5)}function Nr(n,e,t){var i=ot,r=Un.transition;try{Un.transition=null,ot=1,JS(n,e,t,i)}finally{Un.transition=r,ot=i}return null}function JS(n,e,t,i){do Ls();while(Ji!==null);if(Ke&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Iy(n,s),n===Dt&&(At=Dt=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ha||(Ha=!0,tx(Vl,function(){return Ls(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=ot;ot=1;var a=Ke;Ke|=4,Tf.current=null,YS(n,t),X_(t,n),vS(Md),jl=!!Ed,Md=Ed=null,n.current=t,$S(t),Ty(),Ke=a,ot=o,Un.transition=s}else n.current=t;if(Ha&&(Ha=!1,Ji=n,oc=r),s=n.pendingLanes,s===0&&(cr=null),by(t.stateNode),fn(n,Mt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sc)throw sc=!1,n=Gd,Gd=null,n;return oc&1&&n.tag!==0&&Ls(),s=n.pendingLanes,s&1?n===jd?Go++:(Go=0,jd=n):Go=0,vr(),null}function Ls(){if(Ji!==null){var n=P0(oc),e=Un.transition,t=ot;try{if(Un.transition=null,ot=16>n?16:n,Ji===null)var i=!1;else{if(n=Ji,Ji=null,oc=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Ho(8,u,s)}var h=u.child;if(h!==null)h.return=u,pe=h;else for(;pe!==null;){u=pe;var d=u.sibling,p=u.return;if(G_(u),u===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,pe=f;break e}pe=s.return}}var x=n.current;for(pe=x;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=x;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ac(9,a)}}catch(C){St(a,a.return,C)}if(a===o){pe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,pe=E;break e}pe=a.return}}if(Ke=r,vr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(xc,n)}catch{}i=!0}return i}finally{ot=t,Un.transition=e}}return!1}function _m(n,e,t){e=Gs(t,e),e=P_(n,e,1),n=lr(n,e,1),e=tn(),n!==null&&(ga(n,1,e),fn(n,e))}function St(n,e,t){if(n.tag===3)_m(n,n,t);else for(;e!==null;){if(e.tag===3){_m(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){n=Gs(t,n),n=I_(e,n,1),e=lr(e,n,1),n=tn(),e!==null&&(ga(e,1,n),fn(e,n));break}}e=e.return}}function eE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=tn(),n.pingedLanes|=n.suspendedLanes&t,Dt===n&&(Bt&t)===t&&(Ct===4||Ct===3&&(Bt&130023424)===Bt&&500>Mt()-Af?Fr(n,0):wf|=t),fn(n,e)}function J_(n,e){e===0&&(n.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var t=tn();n=Pi(n,e),n!==null&&(ga(n,e,t),fn(n,t))}function tE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),J_(n,t)}function nE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),J_(n,t)}var ex;ex=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,GS(n,e,t);un=!!(n.flags&131072)}else un=!1,mt&&e.flags&1048576&&r_(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(n,e),n=e.pendingProps;var r=Bs(e,$t.current);Ns(e,t),r=vf(null,e,i,n,r,t);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,Pd(e,i,n,t),e=Ud(null,e,i,!0,s,t)):(e.tag=0,mt&&s&&af(e),Zt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rE(i),n=Gn(i,n),r){case 0:e=Dd(null,e,i,n,t);break e;case 1:e=am(null,e,i,n,t);break e;case 11:e=sm(null,e,i,n,t);break e;case 14:e=om(null,e,i,Gn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Dd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),am(n,e,i,r,t);case 3:e:{if(F_(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u_(n,e),ec(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(ne(423)),e),e=lm(n,e,i,t,r);break e}else if(i!==r){r=Gs(Error(ne(424)),e),e=lm(n,e,i,t,r);break e}else for(Sn=ar(e.stateNode.containerInfo.firstChild),Tn=e,mt=!0,Wn=null,t=l_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zs(),i===r){e=Ii(n,e,t);break e}Zt(n,e,i,t)}e=e.child}return e;case 5:return d_(e),n===null&&Cd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Td(i,r)?o=null:s!==null&&Td(i,s)&&(e.flags|=32),O_(n,e),Zt(n,e,o,t),e.child;case 6:return n===null&&Cd(e),null;case 13:return k_(n,e,t);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Hs(e,null,i,t):Zt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),sm(n,e,i,r,t);case 7:return Zt(n,e,e.pendingProps,t),e.child;case 8:return Zt(n,e,e.pendingProps.children,t),e.child;case 12:return Zt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Ql,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ii(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Nd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Nd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,t),r=On(r),i=i(r),e.flags|=1,Zt(n,e,i,t),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),om(n,e,i,r,t);case 15:return D_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),bl(n,e),e.tag=1,hn(i)?(n=!0,Kl(e)):n=!1,Ns(e,t),L_(e,i,r),Pd(e,i,r,t),Ud(null,e,i,!0,n,t);case 19:return B_(n,e,t);case 22:return U_(n,e,t)}throw Error(ne(156,e.tag))};function tx(n,e){return R0(n,e)}function iE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,e,t,i){return new iE(n,e,t,i)}function Nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rE(n){if(typeof n=="function")return Nf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$h)return 11;if(n===Kh)return 14}return 2}function dr(n,e){var t=n.alternate;return t===null?(t=In(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Nl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Nf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fs:return kr(t.children,r,s,e);case Yh:o=8,r|=8;break;case nd:return n=In(12,t,e,r|2),n.elementType=nd,n.lanes=s,n;case id:return n=In(13,t,e,r),n.elementType=id,n.lanes=s,n;case rd:return n=In(19,t,e,r),n.elementType=rd,n.lanes=s,n;case d0:return Rc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case c0:o=10;break e;case u0:o=9;break e;case $h:o=11;break e;case Kh:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=In(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function kr(n,e,t,i){return n=In(7,n,i,e),n.lanes=t,n}function Rc(n,e,t,i){return n=In(22,n,i,e),n.elementType=d0,n.lanes=t,n.stateNode={isHidden:!1},n}function hu(n,e,t){return n=In(6,n,null,e),n.lanes=t,n}function fu(n,e,t){return e=In(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function sE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yc(0),this.expirationTimes=Yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(n,e,t,i,r,s,o,a,l){return n=new sE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),n}function oE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function nx(n){if(!n)return mr;n=n._reactInternals;e:{if(Yr(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(hn(t))return n_(n,t,e)}return e}function ix(n,e,t,i,r,s,o,a,l){return n=Lf(t,i,!0,n,r,s,o,a,l),n.context=nx(null),t=n.current,i=tn(),r=ur(t),s=Ci(i,r),s.callback=e??null,lr(t,s,r),n.current.lanes=r,ga(n,r,i),fn(n,i),n}function Cc(n,e,t,i){var r=e.current,s=tn(),o=ur(r);return t=nx(t),e.context===null?e.context=t:e.pendingContext=t,e=Ci(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=lr(r,e,o),n!==null&&(qn(n,r,o,s),Tl(n,r,o)),o}function lc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Pf(n,e){xm(n,e),(n=n.alternate)&&xm(n,e)}function aE(){return null}var rx=typeof reportError=="function"?reportError:function(n){console.error(n)};function If(n){this._internalRoot=n}Nc.prototype.render=If.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Cc(n,e,null,null)};Nc.prototype.unmount=If.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gr(function(){Cc(null,n,null,null)}),e[Li]=null}};function Nc(n){this._internalRoot=n}Nc.prototype.unstable_scheduleHydration=function(n){if(n){var e=U0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ki.length&&e!==0&&e<Ki[t].priority;t++);Ki.splice(t,0,n),t===0&&F0(n)}};function Df(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vm(){}function lE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=lc(o);s.call(c)}}var o=ix(e,i,n,0,null,!1,!1,"",vm);return n._reactRootContainer=o,n[Li]=o.current,ta(n.nodeType===8?n.parentNode:n),Gr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=lc(l);a.call(c)}}var l=Lf(n,0,!1,null,null,!1,!1,"",vm);return n._reactRootContainer=l,n[Li]=l.current,ta(n.nodeType===8?n.parentNode:n),Gr(function(){Cc(e,l,t,i)}),l}function Pc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=lc(o);a.call(l)}}Cc(e,o,n,r)}else o=lE(t,e,n,r,i);return lc(o)}I0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=No(e.pendingLanes);t!==0&&(Qh(e,t|1),fn(e,Mt()),!(Ke&6)&&(js=Mt()+500,vr()))}break;case 13:Gr(function(){var i=Pi(n,1);if(i!==null){var r=tn();qn(i,n,1,r)}}),Pf(n,1)}};Jh=function(n){if(n.tag===13){var e=Pi(n,134217728);if(e!==null){var t=tn();qn(e,n,134217728,t)}Pf(n,134217728)}};D0=function(n){if(n.tag===13){var e=ur(n),t=Pi(n,e);if(t!==null){var i=tn();qn(t,n,e,i)}Pf(n,e)}};U0=function(){return ot};O0=function(n,e){var t=ot;try{return ot=n,e()}finally{ot=t}};pd=function(n,e,t){switch(e){case"input":if(ad(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ec(i);if(!r)throw Error(ne(90));f0(i),ad(i,r)}}}break;case"textarea":m0(n,t);break;case"select":e=t.value,e!=null&&As(n,!!t.multiple,e,!1)}};E0=bf;M0=Gr;var cE={usingClientEntryPoint:!1,Events:[xa,_s,Ec,y0,S0,bf]},_o={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uE={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=A0(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{xc=Va.inject(uE),oi=Va}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;An.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(ne(200));return oE(n,e,null,t)};An.createRoot=function(n,e){if(!Df(n))throw Error(ne(299));var t=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(n,1,!1,null,null,t,!1,i,r),n[Li]=e.current,ta(n.nodeType===8?n.parentNode:n),new If(e)};An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=A0(e),n=n===null?null:n.stateNode,n};An.flushSync=function(n){return Gr(n)};An.hydrate=function(n,e,t){if(!Lc(e))throw Error(ne(200));return Pc(null,n,e,!0,t)};An.hydrateRoot=function(n,e,t){if(!Df(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=rx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ix(e,null,n,1,t??null,r,!1,s,o),n[Li]=e.current,ta(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nc(e)};An.render=function(n,e,t){if(!Lc(e))throw Error(ne(200));return Pc(null,n,e,!1,t)};An.unmountComponentAtNode=function(n){if(!Lc(n))throw Error(ne(40));return n._reactRootContainer?(Gr(function(){Pc(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1};An.unstable_batchedUpdates=bf;An.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Lc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Pc(n,e,t,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(n){console.error(n)}}sx(),s0.exports=An;var dE=s0.exports,ym=dE;ed.createRoot=ym.createRoot,ed.hydrateRoot=ym.hydrateRoot;/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=n=>n==null?void 0:n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function fE(n,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:hE(n),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=n=>{let e="",t=!1;for(const i of n){if(i==="-"||i==="_"||i<=" "){t=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=t?i.toUpperCase():i,t=!1}return e};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=n=>{const e=pE(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pu(n){return n!=null}function gE(n,e={}){var d,p;const t=e.attributeNames??{},i=g=>t[g]??g,r=n.size??n.width??Sr.width,s=n.size??n.height??Sr.height,o=((d=n.aliases)==null?void 0:d.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],a=[...n.name?[`lucide-${n.name}`]:[],...o],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Yd(...l):Yd("lucide",...a,...l),u=e.absoluteStrokeWidth?Number(e.strokeWidth??Sr["stroke-width"])*Number(n.size??n.width??Sr.width)/Number(e.size??e.width??Sr.width):e.strokeWidth??Sr["stroke-width"];return["svg",{...Object.entries(Sr).reduce((g,[y,m])=>(g[i(y)]=m,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&pu(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&pu(e.width)&&{[i("width")]:e.width},..."height"in e&&pu(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:u,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(g=>{const[y,m,f]=g,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return f?[y,x,f]:[y,x]})]}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _E(n,e={}){return gE(n,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},vE=be.createContext({}),yE=()=>be.useContext(vE),SE=be.forwardRef(({color:n,size:e,width:t,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:l,iconNode:c=[],icon:u={node:c,aliases:[],size:24},...h},d)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:f="currentColor",className:x=""}=yE()??{},v=!!l||xE(h),[E,C,R=[]]=_E(u,{color:n??f,width:t??e??p,height:i??e??p,strokeWidth:r??g,absoluteStrokeWidth:s??y,nonScalingStroke:o??m,className:Yd(x,a),hasA11yProp:v,attributes:h});return be.createElement(E,{ref:d,...C},[...R.map(([A,N])=>be.createElement(A,N)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qe(n,e=[],t=[]){const i=typeof n=="string"?fE(n,e,t):n,r=be.forwardRef(({className:s,...o},a)=>be.createElement(SE,{ref:a,icon:i,className:s,...o}));return i.name&&(r.displayName=mE(i.name)),r}/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};ox.node;const ax=Qe(ox);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"arrow-down-right",size:24,node:[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]};lx.node;const EE=Qe(lx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};cx.node;const ME=Qe(cx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ux.node;const TE=Qe(ux);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};dx.node;const wE=Qe(dx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};hx.node;const AE=Qe(hx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};fx.node;const px=Qe(fx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};mx.node;const bE=Qe(mx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};gx.node;const Uf=Qe(gx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};_x.node;const RE=Qe(_x);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};xx.node;const Sm=Qe(xx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};vx.node;const CE=Qe(vx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};yx.node;const NE=Qe(yx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Sx.node;const LE=Qe(Sx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Ex.node;const PE=Qe(Ex);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};Mx.node;const Tx=Qe(Mx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};wx.node;const IE=Qe(wx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Ax.node;const DE=Qe(Ax);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"octagon-alert",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon"]};bx.node;const Em=Qe(bx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Rx.node;const Cx=Qe(Rx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Nx.node;const UE=Qe(Nx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};Lx.node;const ua=Qe(Lx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Px.node;const Of=Qe(Px);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Ix.node;const Dx=Qe(Ix);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};Ux.node;const OE=Qe(Ux);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"thermometer",size:24,node:[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]};Ox.node;const Ga=Qe(Ox);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"trending-down",size:24,node:[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]};Fx.node;const FE=Qe(Fx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};kx.node;const $d=Qe(kx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Bx.node;const Kd=Qe(Bx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};zx.node;const kE=Qe(zx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"zap-off",size:24,node:[["path",{d:"M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625",key:"l6h226"}],["path",{d:"m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844",key:"1717b9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5",key:"1bjzrh"}]]};Hx.node;const BE=Qe(Hx);/**
 * @license lucide-react v1.51.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Vx.node;const cc=Qe(Vx),zE="ws://localhost:8000/ws/telemetry",mu="http://localhost:8000",Mm=60,HE=()=>({timestamp:Date.now()/1e3,telemetry:{rpm:5210,cht:142.4,cht_cylinders:[141.2,143.5,140.8,144.1],egt:765.2,egt_cylinders:[761.5,769.1,763.4,766.8],oil_pressure:54.8,oil_temperature:92.5,throttle:.75,altitude:1850,manifold_pressure:24.6,vibration:1.15,fuel_flow:18.2},physics_expected:{rpm:5200,cht:140,egt:760,manifold_pressure:24.5,oil_pressure:55,oil_temperature:91,power_kw:58.4,fuel_flow_lph:18},residuals:{delta_rpm:10,delta_cht:2.4,delta_egt:5.2,delta_oil_pressure:-.2,delta_oil_temperature:1.5,delta_manifold_pressure:.1,delta_fuel_flow:.2,residual_vector:[10,2.4,5.2,-.2,1.5,.1,.2]},ai_anomaly:{anomaly_score:.08,is_anomaly:!1,reconstruction_error:.038,threshold:.35,root_cause_feature:"delta_cht",feature_attributions:{delta_rpm:.12,delta_cht:.28,delta_egt:.22,delta_oil_pressure:.14,delta_oil_temperature:.1,delta_manifold_pressure:.08,delta_fuel_flow:.06}},prognostics:{health_index:94.6,rul_hours:1702.8,nominal_tbo_hours:1800,stress_components:{mechanical_stress:1.04,thermal_stress:.98,lubrication_stress:1.01,anomaly_stress:1,total_stress_index:1.03}},dynamic_stress_budget:{current_rpm:5210,budgeted_rpm:4428,current_altitude_m:1850,budgeted_altitude_m:1250,current_stress_index:1.03,budgeted_stress_index:.61,stress_reduction_percentage:40.8,baseline_rul_hours:1702.8,extended_rul_hours:2418,rul_extension_delta_hours:715.2,life_extension_multiplier:1.42,tactical_advisory:"CRUISE PROFILE NOMINAL - STRESS BUDGET READY"},fault_status:{active_fault:"none",severity:0}});function VE(){const[n,e]=be.useState(HE),[t,i]=be.useState([]),[r,s]=be.useState([]),[o,a]=be.useState("CONNECTING"),[l,c]=be.useState(12),[u,h]=be.useState(!1),[d,p]=be.useState("SYSTEM INITIALIZED"),g=be.useRef(null),y=be.useRef(null),m=be.useRef(null),f=be.useRef({type:"none",severity:0}),x=be.useCallback(N=>{e(N),i(V=>{const S=[...V,N];return S.length>Mm?S.slice(S.length-Mm):S}),N.ai_anomaly&&(N.ai_anomaly.is_anomaly||N.ai_anomaly.anomaly_score>.25)&&s(V=>{var G;const S=N.ai_anomaly.anomaly_score>.55?"CRITICAL":N.ai_anomaly.anomaly_score>.35?"ELEVATED":"NOMINAL";return[{id:`AE-${Date.now()}-${Math.floor(Math.random()*1e3)}`,timestamp:N.timestamp?N.timestamp*1e3:Date.now(),score:N.ai_anomaly.anomaly_score,reconstruction_error:N.ai_anomaly.reconstruction_error,root_cause:N.ai_anomaly.root_cause_feature||"Thermodynamic Residual Divergence",severity:S,details:`Recon Err: ${N.ai_anomaly.reconstruction_error.toFixed(4)} | Cause: ${N.ai_anomaly.root_cause_feature} | Fault: ${((G=N.fault_status)==null?void 0:G.active_fault)||"none"}`},...V.slice(0,39)]})},[]),v=be.useCallback(()=>{if(!(g.current&&(g.current.readyState===WebSocket.OPEN||g.current.readyState===WebSocket.CONNECTING))){a("CONNECTING");try{const N=new WebSocket(zE);g.current=N;const V=performance.now();N.onopen=()=>{a("CONNECTED"),c(Math.round(performance.now()-V)),p("WS LINK ESTABLISHED (1Hz STREAM)"),m.current&&(clearInterval(m.current),m.current=null)},N.onmessage=S=>{try{const M=JSON.parse(S.data);M.type==="command_ack"?p(`ACK: ${M.status} [${M.fault_type||""}]`):M.telemetry&&x(M)}catch(M){console.error("Error parsing telemetry frame:",M)}},N.onerror=()=>{},N.onclose=()=>{a("STANDALONE"),g.current=null,y.current||(y.current=setTimeout(()=>{y.current=null,v()},3e3)),E()}}catch{a("STANDALONE"),E()}}},[x]),E=be.useCallback(()=>{m.current||(m.current=setInterval(()=>{e(N=>{const V=Date.now()/1e3,S=f.current,M=u;let G=M?4420:5200,B=142,j=765,q=55,H=92,$=1.15,P=.08,K="nominal";S.type==="cylinder_misfire"?(G-=750*S.severity,j-=180*S.severity,$+=2.8*S.severity,P=.78*S.severity,K="delta_egt"):S.type==="oil_leak"?(q=Math.max(12,55-40*S.severity),H+=28*S.severity,P=.85*S.severity,K="delta_oil_pressure"):S.type==="cooling_blockage"?(B+=48*S.severity,P=.82*S.severity,K="delta_cht"):S.type==="lean_mixture"&&(j+=75*S.severity,B+=25*S.severity,P=.69*S.severity,K="delta_egt");const W=L=>(Math.random()-.5)*L,ie=Math.round(G+W(15)),xe=parseFloat((B+W(.8)).toFixed(1)),Pe=parseFloat((j+W(2.5)).toFixed(1)),Y=parseFloat((q+W(.4)).toFixed(1)),ee=parseFloat((H+W(.5)).toFixed(1)),le=parseFloat(($+W(.08)).toFixed(2)),oe=parseFloat(Math.min(.99,Math.max(.04,P+W(.03))).toFixed(2)),Ee=parseFloat((oe*.45).toFixed(4)),ve=oe>.35,Ie=S.type!=="none"?Math.max(12,1700-800*S.severity):1702.8,Ve=M?Ie*1.45:Ie*1.42,ke={timestamp:V,telemetry:{rpm:ie,cht:xe,cht_cylinders:[parseFloat((xe+(S.type==="cylinder_misfire"?-40:W(1.5))).toFixed(1)),parseFloat((xe+W(1.2)).toFixed(1)),parseFloat((xe+W(1.8)).toFixed(1)),parseFloat((xe+W(1.1)).toFixed(1))],egt:Pe,egt_cylinders:[parseFloat((Pe+(S.type==="cylinder_misfire"?-180:W(3.5))).toFixed(1)),parseFloat((Pe+W(4)).toFixed(1)),parseFloat((Pe+W(3)).toFixed(1)),parseFloat((Pe+W(4.5)).toFixed(1))],oil_pressure:Y,oil_temperature:ee,throttle:M?.64:.75,altitude:M?1200:1850,manifold_pressure:parseFloat((24.6+(M?-3.5:0)+W(.2)).toFixed(1)),vibration:le,fuel_flow:parseFloat((18.2+(M?-3.2:0)+W(.3)).toFixed(1))},physics_expected:{rpm:M?4430:5200,cht:140,egt:760,manifold_pressure:M?21.2:24.5,oil_pressure:55,oil_temperature:91,power_kw:M?46.2:58.4,fuel_flow_lph:M?15:18},residuals:{delta_rpm:ie-(M?4430:5200),delta_cht:parseFloat((xe-140).toFixed(1)),delta_egt:parseFloat((Pe-760).toFixed(1)),delta_oil_pressure:parseFloat((Y-55).toFixed(1)),delta_oil_temperature:parseFloat((ee-91).toFixed(1)),delta_manifold_pressure:parseFloat((24.6-24.5).toFixed(1)),delta_fuel_flow:parseFloat((18.2-18).toFixed(1)),residual_vector:[ie-5200,xe-140,Pe-760,Y-55,ee-91,.1,.2]},ai_anomaly:{anomaly_score:oe,is_anomaly:ve,reconstruction_error:Ee,threshold:.35,root_cause_feature:K==="nominal"?"delta_cht":K,feature_attributions:{delta_rpm:S.type==="cylinder_misfire"?.38:.12,delta_cht:S.type==="cooling_blockage"?.52:.22,delta_egt:S.type==="cylinder_misfire"||S.type==="lean_mixture"?.55:.2,delta_oil_pressure:S.type==="oil_leak"?.58:.14,delta_oil_temperature:S.type==="oil_leak"?.24:.1,delta_manifold_pressure:.08,delta_fuel_flow:.06}},prognostics:{health_index:parseFloat(Math.max(10,94.6-(S.type!=="none"?25*S.severity:0)).toFixed(1)),rul_hours:parseFloat(Ie.toFixed(1)),nominal_tbo_hours:1800,stress_components:{mechanical_stress:parseFloat((M?.72:S.type==="cylinder_misfire"?1.6:1.04).toFixed(2)),thermal_stress:parseFloat((S.type==="cooling_blockage"?2.1:.98).toFixed(2)),lubrication_stress:parseFloat((S.type==="oil_leak"?3.4:1.01).toFixed(2)),anomaly_stress:parseFloat((1+oe*1.5).toFixed(2)),total_stress_index:parseFloat((S.type!=="none"?2.4*S.severity:M?.61:1.03).toFixed(2))}},dynamic_stress_budget:{current_rpm:ie,budgeted_rpm:Math.round(ie*.85),current_altitude_m:M?1200:1850,budgeted_altitude_m:1200,current_stress_index:S.type!=="none"?2.4:1.03,budgeted_stress_index:S.type!=="none"?1.3:.61,stress_reduction_percentage:42.5,baseline_rul_hours:parseFloat(Ie.toFixed(1)),extended_rul_hours:parseFloat(Ve.toFixed(1)),rul_extension_delta_hours:parseFloat((Ve-Ie).toFixed(1)),life_extension_multiplier:parseFloat((Ve/Math.max(1,Ie)).toFixed(2)),tactical_advisory:M?"STRESS BUDGETING ENGAGED: -15% RPM (4420) & DESCENT (1200M) ACTIVE":"ADVISORY: ENGAGE DYNAMIC BUDGETING TO EXTEND RUL BY +42%"},fault_status:{active_fault:S.type,severity:S.severity}};return x(ke),ke})},1e3))},[u,x]),C=be.useCallback(async(N,V=.8)=>{f.current={type:N,severity:V},p(`TRANSMITTING FAULT_INJECT: ${N} (Sev: ${V})`),g.current&&g.current.readyState===WebSocket.OPEN&&g.current.send(JSON.stringify({command:"inject_fault",fault_type:N,severity:V}));try{await fetch(`${mu}/api/fault/inject`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fault_type:N,severity:V})})}catch{}},[]),R=be.useCallback(async()=>{f.current={type:"none",severity:0},p("TRANSMITTING FAULT_CLEAR: NORMAL RECOVERY"),g.current&&g.current.readyState===WebSocket.OPEN&&g.current.send(JSON.stringify({command:"clear_fault"}));try{await fetch(`${mu}/api/fault/clear`,{method:"POST",headers:{"Content-Type":"application/json"}})}catch{}},[]),A=be.useCallback(async()=>{const N=!u;h(N);const V=N?.6375:.75,S=N?1200:1850;p(`DYNAMIC STRESS BUDGET: ${N?"ENGAGED (-15% RPM / DESCENT)":"DISENGAGED (NOMINAL CRUISE)"}`),g.current&&g.current.readyState===WebSocket.OPEN&&g.current.send(JSON.stringify({command:"set_flight_condition",throttle:V,altitude:S}));try{await fetch(`${mu}/api/flight-condition`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({throttle:V,altitude:S,airspeed:48})})}catch{}},[u]);return be.useEffect(()=>(v(),()=>{y.current&&clearTimeout(y.current),m.current&&clearInterval(m.current),g.current&&g.current.close()}),[v]),{frame:n,history:t,anomalyLogs:r,connectionStatus:o,latencyMs:l,isStressBudgetActive:u,lastCommandAck:d,injectFault:C,clearFault:R,toggleDynamicStressBudgeting:A}}const GE=({frame:n,connectionStatus:e,latencyMs:t,lastCommandAck:i})=>{var l,c,u,h,d,p;const[r,s]=be.useState("");be.useEffect(()=>{const g=()=>{const m=new Date,f=m.getUTCFullYear(),x=String(m.getUTCMonth()+1).padStart(2,"0"),v=String(m.getUTCDate()).padStart(2,"0"),E=String(m.getUTCHours()).padStart(2,"0"),C=String(m.getUTCMinutes()).padStart(2,"0"),R=String(m.getUTCSeconds()).padStart(2,"0");s(`${f}-${x}-${v} ${E}:${C}:${R}Z`)};g();const y=setInterval(g,1e3);return()=>clearInterval(y)},[]);const o=(l=n.ai_anomaly)==null?void 0:l.is_anomaly,a=((c=n.fault_status)==null?void 0:c.active_fault)&&n.fault_status.active_fault!=="none";return _.jsxs("header",{className:"border-b border-gcs-border bg-carbon-900 select-none",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between px-4 py-2 border-b border-gcs-border/60 text-xs text-gcs-textMuted bg-carbon-950/70",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-cyan font-bold tracking-wider",children:[_.jsx(Cx,{className:"w-3.5 h-3.5 text-gcs-cyan animate-pulse"}),"DRDO-ADE // AERONAUTICAL DEV ESTABLISHMENT"]}),_.jsx("span",{className:"text-gcs-border",children:"|"}),_.jsxs("span",{className:"text-slate-300",children:["AIRFRAME: ",_.jsx("strong",{className:"text-white",children:"TAPAS-BH-201 (MALE UAV)"})]}),_.jsx("span",{className:"text-gcs-border",children:"|"}),_.jsxs("span",{className:"text-slate-300",children:["ENGINE: ",_.jsx("strong",{className:"text-white",children:"ROTAX 914-F TURBO (115 HP)"})]})]}),_.jsxs("div",{className:"flex items-center gap-4 font-mono",children:[_.jsxs("div",{className:"flex items-center gap-1.5 text-slate-300",children:[_.jsx(px,{className:"w-3.5 h-3.5 text-gcs-cyan"}),_.jsx("span",{children:"UTC ZULU:"}),_.jsx("span",{className:"text-gcs-cyan font-semibold tracking-wider",children:r||"SYNCING..."})]}),_.jsx("span",{className:"text-gcs-border",children:"|"}),_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("span",{className:"text-slate-400",children:"LATENCY:"}),_.jsxs("span",{className:"text-gcs-cyan font-bold",children:[t,"ms"]})]})]})]}),_.jsxs("div",{className:"flex flex-wrap items-center justify-between px-4 py-3 gap-4",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsxs("div",{className:"w-10 h-10 border border-gcs-cyan bg-gunmetal-800 flex items-center justify-center relative overflow-hidden shadow-inner",children:[_.jsx("div",{className:"absolute inset-0 bg-gcs-cyan/10"}),_.jsx(cc,{className:"w-6 h-6 text-gcs-cyan"})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsxs("h1",{className:"text-lg md:text-xl font-extrabold tracking-widest text-white glow-cyan font-mono",children:["AEROTWIN ",_.jsx("span",{className:"text-gcs-cyan",children:"//"})," DRDO TACTICAL GCS"]}),_.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold tracking-wider bg-gunmetal-700 border border-gcs-border text-gcs-cyan",children:"REV 2.4.0"})]}),_.jsxs("div",{className:"flex items-center gap-3 text-xs mt-0.5",children:[_.jsxs("span",{className:"text-slate-400",children:["MISSION ID: ",_.jsx("span",{className:"text-gcs-amber font-bold tracking-wider font-mono",children:"PS-26054"})]}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsxs("span",{className:"text-slate-400",children:["CALLSIGN: ",_.jsx("span",{className:"text-white font-semibold",children:"VARUNA-ALPHA-01"})]}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsxs("span",{className:"text-slate-400",children:["GROUND NODE: ",_.jsx("span",{className:"text-gcs-green font-semibold",children:"CHITRADURGA ATR"})]})]})]})]}),_.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[_.jsxs("div",{className:"flex items-center gap-2.5 px-3 py-1.5 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"relative flex items-center justify-center",children:[_.jsx("span",{className:`w-2.5 h-2.5 ${e==="CONNECTED"?"bg-gcs-green animate-ping":e==="STANDALONE"?"bg-gcs-cyan":"bg-gcs-amber animate-pulse"}`}),_.jsx("span",{className:`absolute w-2.5 h-2.5 ${e==="CONNECTED"?"bg-gcs-green":e==="STANDALONE"?"bg-gcs-cyan":"bg-gcs-amber"}`})]}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] text-slate-400 leading-tight",children:"UPLINK STREAM"}),_.jsx("span",{className:"text-xs font-bold tracking-wider text-white",children:e==="CONNECTED"?"1Hz LIVE DUPLEX":e==="STANDALONE"?"LOCAL TWIN RUNNER":"ACQUIRING LINK..."})]})]}),_.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 border transition-all ${o?"bg-red-950/40 border-gcs-red text-gcs-red animate-pulse":"bg-gunmetal-800 border-gcs-border text-gcs-green"}`,children:[o?_.jsx(ua,{className:"w-4 h-4 text-gcs-red"}):_.jsx(Of,{className:"w-4 h-4 text-gcs-green"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] text-slate-400 leading-tight",children:"AI SENTINEL"}),_.jsx("span",{className:"text-xs font-bold tracking-wider",children:o?`ANOMALY: ${(u=n.ai_anomaly.root_cause_feature)==null?void 0:u.toUpperCase()}`:"RESIDUALS NOMINAL"})]})]}),a&&_.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-amber-950/40 border border-gcs-amber text-gcs-amber animate-pulse",children:[_.jsx(ax,{className:"w-4 h-4 text-gcs-amber"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] text-slate-400 leading-tight",children:"ACTIVE INJECTION"}),_.jsxs("span",{className:"text-xs font-bold tracking-wider",children:[n.fault_status.active_fault.toUpperCase()," (",(n.fault_status.severity*100).toFixed(0),"%)"]})]})]}),_.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-gunmetal-800 border border-gcs-border",children:[_.jsx(Uf,{className:"w-4 h-4 text-gcs-cyan"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] text-slate-400 leading-tight",children:"HEALTH INDEX"}),_.jsxs("span",{className:`text-xs font-bold tracking-wider ${(((h=n.prognostics)==null?void 0:h.health_index)??100)>85?"text-gcs-green":(((d=n.prognostics)==null?void 0:d.health_index)??100)>60?"text-gcs-amber":"text-gcs-red"}`,children:[(((p=n.prognostics)==null?void 0:p.health_index)??94.5).toFixed(1),"%"]})]})]})]})]}),_.jsxs("div",{className:"px-4 py-1 bg-carbon-950 border-t border-gcs-border/40 text-[11px] flex items-center justify-between text-slate-400",children:[_.jsxs("div",{className:"flex items-center gap-2 overflow-hidden whitespace-nowrap",children:[_.jsx("span",{className:"text-gcs-cyan font-semibold",children:"STATUS ACK >"}),_.jsx("span",{className:"text-slate-300 font-mono",children:i})]}),_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsxs("span",{className:"text-slate-400",children:["PYTORCH AE: ",_.jsx("span",{className:"text-gcs-cyan",children:"ONLINE (DIM: 7)"})]}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsxs("span",{className:"text-slate-400",children:["RUL MODEL: ",_.jsx("span",{className:"text-gcs-cyan",children:"BASQUIN-MANSON HYBRID"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="169",Ps={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jE=0,Tm=1,WE=2,Gx=1,jx=2,Si=3,Di=0,pn=1,si=2,hr=0,Is=1,wm=2,Am=3,bm=4,XE=5,Pr=100,YE=101,$E=102,KE=103,qE=104,ZE=200,QE=201,JE=202,eM=203,qd=204,Zd=205,tM=206,nM=207,iM=208,rM=209,sM=210,oM=211,aM=212,lM=213,cM=214,Qd=0,Jd=1,eh=2,Ws=3,th=4,nh=5,ih=6,rh=7,Wx=0,uM=1,dM=2,fr=0,hM=1,fM=2,pM=3,Xx=4,mM=5,gM=6,_M=7,Rm="attached",xM="detached",Yx=300,Xs=301,Ys=302,sh=303,oh=304,Ic=306,$s=1e3,er=1001,uc=1002,en=1003,$x=1004,Po=1005,yn=1006,Ll=1007,bi=1008,Ui=1009,Kx=1010,qx=1011,da=1012,kf=1013,jr=1014,$n=1015,ya=1016,Bf=1017,zf=1018,Ks=1020,Zx=35902,Qx=1021,Jx=1022,Dn=1023,ev=1024,tv=1025,Ds=1026,qs=1027,Hf=1028,Vf=1029,nv=1030,Gf=1031,jf=1033,Pl=33776,Il=33777,Dl=33778,Ul=33779,ah=35840,lh=35841,ch=35842,uh=35843,dh=36196,hh=37492,fh=37496,ph=37808,mh=37809,gh=37810,_h=37811,xh=37812,vh=37813,yh=37814,Sh=37815,Eh=37816,Mh=37817,Th=37818,wh=37819,Ah=37820,bh=37821,Ol=36492,Rh=36494,Ch=36495,iv=36283,Nh=36284,Lh=36285,Ph=36286,ha=2300,fa=2301,gu=2302,Cm=2400,Nm=2401,Lm=2402,vM=2500,yM=0,rv=1,Ih=2,SM=3200,EM=3201,sv=0,MM=1,Zi="",Qt="srgb",Ht="srgb-linear",Wf="display-p3",Dc="display-p3-linear",dc="linear",ft="srgb",hc="rec709",fc="p3",Zr=7680,Pm=519,TM=512,wM=513,AM=514,ov=515,bM=516,RM=517,CM=518,NM=519,Dh=35044,Im="300 es",Ri=2e3,pc=2001;class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dm=1234567;const jo=Math.PI/180,Zs=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n,e){return(n%e+e)%e}function LM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function PM(n,e,t){return n!==e?(t-n)/(e-n):0}function Wo(n,e,t){return(1-t)*n+t*e}function IM(n,e,t,i){return Wo(n,e,1-Math.exp(-t*i))}function DM(n,e=1){return e-Math.abs(Xf(n,e*2)-e)}function UM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function OM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function FM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kM(n,e){return n+Math.random()*(e-n)}function BM(n){return n*(.5-Math.random())}function zM(n){n!==void 0&&(Dm=n);let e=Dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function HM(n){return n*jo}function VM(n){return n*Zs}function GM(n){return(n&n-1)===0&&n!==0}function jM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function WM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function XM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const av={DEG2RAD:jo,RAD2DEG:Zs,generateUUID:Zn,clamp:kt,euclideanModulo:Xf,mapLinear:LM,inverseLerp:PM,lerp:Wo,damp:IM,pingpong:DM,smoothstep:UM,smootherstep:OM,randInt:FM,randFloat:kM,randFloatSpread:BM,seededRandom:zM,degToRad:HM,radToDeg:VM,isPowerOfTwo:GM,ceilPowerOfTwo:jM,floorPowerOfTwo:WM,setQuaternionFromProperEuler:XM,normalize:rt,denormalize:Xn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],x=r[1],v=r[4],E=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*y+a*x+l*C,s[3]=o*m+a*v+l*R,s[6]=o*f+a*E+l*A,s[1]=c*y+u*x+h*C,s[4]=c*m+u*v+h*R,s[7]=c*f+u*E+h*A,s[2]=d*y+p*x+g*C,s[5]=d*m+p*v+g*R,s[8]=d*f+p*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_u.makeScale(e,t)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,t){return this.premultiply(_u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new He;function lv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function YM(){const n=pa("canvas");return n.style.display="block",n}const Um={};function Fl(n){n in Um||(Um[n]=!0,console.warn(n))}function $M(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function KM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Om=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fm=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[Ht]:{transfer:dc,primaries:hc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Qt]:{transfer:ft,primaries:hc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dc]:{transfer:dc,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Om)},[Wf]:{transfer:ft,primaries:fc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fm),fromReference:n=>n.applyMatrix3(Om).convertLinearToSRGB()}},ZM=new Set([Ht,Dc]),Ze={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ZM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xo[e].toReference,r=xo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xo[n].primaries},getTransfer:function(n){return n===Zi?dc:xo[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(xo[e].luminanceCoefficients)}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qr;class QM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=pa("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Us(t[i]/255)*255):t[i]=Us(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vu(r[o].image)):s.push(vu(r[o]))}else s=vu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?QM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e1=0;class Ut extends $r{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=er,r=er,s=yn,o=bi,a=Dn,l=Ui,c=Ut.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Zn(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Yx;Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(p+1)/2,C=(f+1)/2,R=(u+d)/4,A=(h+y)/4,N=(g+m)/4;return v>E&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=N/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t1 extends $r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends t1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uv extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*y,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,f*x);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const E=a*x;if(l=l*m+d*E,c=c*m+p*E,u=u*m+g*E,h=h*m+y*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new I,km=new ci;class En{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Wa.subVectors(this.max,vo),Jr.subVectors(e.a,vo),es.subVectors(e.b,vo),ts.subVectors(e.c,vo),Bi.subVectors(es,Jr),zi.subVectors(ts,es),Er.subVectors(Jr,ts);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-Er.z,Er.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,Er.z,0,-Er.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-Er.y,Er.x,0];return!Su(t,Jr,es,ts,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Su(t,Jr,es,ts,Wa))?!1:(Xa.crossVectors(Bi,zi),t=[Xa.x,Xa.y,Xa.z],Su(t,Jr,es,ts,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new I,new I,new I,new I,new I,new I,new I,new I],zn=new I,ja=new En,Jr=new I,es=new I,ts=new I,Bi=new I,zi=new I,Er=new I,vo=new I,Wa=new I,Xa=new I,Mr=new I;function Su(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const i1=new En,yo=new I,Eu=new I;class di{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):i1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Eu)),this.expandByPoint(yo.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new I,Mu=new I,Ya=new I,Hi=new I,Tu=new I,$a=new I,wu=new I;class Sa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mu.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Mu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=Hi.dot(this.direction),l=-Hi.dot(Ya),c=Hi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Mu).addScaledVector(Ya,d),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){Tu.subVectors(t,e),$a.subVectors(i,e),wu.crossVectors(Tu,$a);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(Hi,$a));if(l<0)return null;const c=a*this.direction.dot(Tu.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(wu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,g,y,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,y,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r1,e,s1)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(i,_n),Vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(i,_n)),Vi.normalize(),Ka.crossVectors(_n,Vi),r[0]=Vi.x,r[4]=Ka.x,r[8]=_n.x,r[1]=Vi.y,r[5]=Ka.y,r[9]=_n.y,r[2]=Vi.z,r[6]=Ka.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],x=i[3],v=i[7],E=i[11],C=i[15],R=r[0],A=r[4],N=r[8],V=r[12],S=r[1],M=r[5],G=r[9],B=r[13],j=r[2],q=r[6],H=r[10],$=r[14],P=r[3],K=r[7],W=r[11],ie=r[15];return s[0]=o*R+a*S+l*j+c*P,s[4]=o*A+a*M+l*q+c*K,s[8]=o*N+a*G+l*H+c*W,s[12]=o*V+a*B+l*$+c*ie,s[1]=u*R+h*S+d*j+p*P,s[5]=u*A+h*M+d*q+p*K,s[9]=u*N+h*G+d*H+p*W,s[13]=u*V+h*B+d*$+p*ie,s[2]=g*R+y*S+m*j+f*P,s[6]=g*A+y*M+m*q+f*K,s[10]=g*N+y*G+m*H+f*W,s[14]=g*V+y*B+m*$+f*ie,s[3]=x*R+v*S+E*j+C*P,s[7]=x*A+v*M+E*q+C*K,s[11]=x*N+v*G+E*H+C*W,s[15]=x*V+v*B+E*$+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],x=h*m*c-y*d*c+y*l*p-a*m*p-h*l*f+a*d*f,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,E=u*y*c-g*h*c+g*a*p-o*y*p-u*a*f+o*h*f,C=g*h*l-u*y*l-g*a*d+o*y*d+u*a*m-o*h*m,R=t*x+i*v+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=x*A,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*A,e[8]=E*A,e[9]=(g*h*s-u*y*s-g*i*p+t*y*p+u*i*f-t*h*f)*A,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(u*y*r-g*h*r+g*i*d-t*y*d-u*i*m+t*h*m)*A,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,y=o*u,m=o*h,f=a*h,x=l*c,v=l*u,E=l*h,C=i.x,R=i.y,A=i.z;return r[0]=(1-(y+f))*C,r[1]=(p+E)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(d+f))*R,r[6]=(m+x)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(m-x)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ns.set(r[0],r[1],r[2]).length();const o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,u=1/o,h=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Ri)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ri){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let g,y;if(a===Ri)g=(o+s)*h,y=-2*h;else if(a===pc)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new I,Hn=new Be,r1=new I(0,0,0),s1=new I(1,1,1),Vi=new I,Ka=new I,_n=new I,Bm=new Be,zm=new ci;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o1=0;const Hm=new I,is=new ci,_i=new Be,qa=new I,So=new I,a1=new I,l1=new ci,Vm=new I(1,0,0),Gm=new I(0,1,0),jm=new I(0,0,1),Wm={type:"added"},c1={type:"removed"},rs={type:"childadded",child:null},Au={type:"childremoved",child:null};class xt extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new I,t=new ui,i=new ci,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Be},normalMatrix:{value:new He}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,t){return Hm.copy(e).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qa.copy(e):qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(So,qa,this.up):_i.lookAt(qa,So,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),is.setFromRotationMatrix(_i),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c1),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,a1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,l1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new I,xi=new I,bu=new I,vi=new I,ss=new I,os=new I,Xm=new I,Ru=new I,Cu=new I,Nu=new I,Lu=new et,Pu=new et,Iu=new et;class Yn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),xi.subVectors(i,t),bu.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(bu),c=xi.dot(xi),u=xi.dot(bu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Lu.setScalar(0),Pu.setScalar(0),Iu.setScalar(0),Lu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Lu,s.x),o.addScaledVector(Pu,s.y),o.addScaledVector(Iu,s.z),o}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),xi.subVectors(e,t),Vn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),Ru.subVectors(e,i);const l=ss.dot(Ru),c=os.dot(Ru);if(l<=0&&c<=0)return t.copy(i);Cu.subVectors(e,r);const u=ss.dot(Cu),h=os.dot(Cu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ss,o);Nu.subVectors(e,s);const p=ss.dot(Nu),g=os.dot(Nu);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(os,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Xm,a);const f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Xf(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=hv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ze.fromWorkingColorSpace(Xt.copy(this),e),Math.round(kt(Xt.r*255,0,255))*65536+Math.round(kt(Xt.g*255,0,255))*256+Math.round(kt(Xt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Qt){Ze.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,r=Xt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Za);const i=Wo(Gi.h,Za.h,t),r=Wo(Gi.s,Za.s,t),s=Wo(Gi.l,Za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Le;Le.NAMES=hv;let u1=0;class li extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Is,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Zd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Zd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tr extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new I,Qa=new Oe;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dh&&(e.usage=this.usage),e}}class fv extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pv extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let d1=0;const Cn=new Be,Uu=new xt,as=new I,xn=new En,Eo=new En,Pt=new I;class ei extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?pv:fv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(xn.min,Eo.min),xn.expandByPoint(Pt),Pt.addVectors(xn.max,Eo.max),xn.expandByPoint(Pt)):(xn.expandByPoint(Eo.min),xn.expandByPoint(Eo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Pt.add(as)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new I,l[N]=new I;const c=new I,u=new I,h=new I,d=new Oe,p=new Oe,g=new Oe,y=new I,m=new I;function f(N,V,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,V),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),a[N].add(y),a[V].add(y),a[S].add(y),l[N].add(m),l[V].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,V=x.length;N<V;++N){const S=x[N],M=S.start,G=S.count;for(let B=M,j=M+G;B<j;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new I,E=new I,C=new I,R=new I;function A(N){C.fromBufferAttribute(r,N),R.copy(C);const V=a[N];v.copy(V),v.sub(C.multiplyScalar(C.dot(V))).normalize(),E.crossVectors(R,V);const M=E.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,M)}for(let N=0,V=x.length;N<V;++N){const S=x[N],M=S.start,G=S.count;for(let B=M,j=M+G;B<j;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new Be,Tr=new Sa,Ja=new di,$m=new I,el=new I,tl=new I,nl=new I,Ou=new I,il=new I,Km=new I,rl=new I;class Mn extends xt{constructor(e=new ei,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ou.fromBufferAttribute(h,e),o?il.addScaledVector(Ou,u):il.addScaledVector(Ou.sub(t),u))}t.add(il)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ja,$m)===null||Tr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Ym),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,C=v;E<C;E+=3){const R=a.getX(E),A=a.getX(E+1),N=a.getX(E+2);r=sl(this,f,e,i,c,u,h,R,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=sl(this,o,e,i,c,u,h,x,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,C=v;E<C;E+=3){const R=E,A=E+1,N=E+2;r=sl(this,f,e,i,c,u,h,R,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const x=m,v=m+1,E=m+2;r=sl(this,o,e,i,c,u,h,x,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function h1(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Di,a),l===null)return null;rl.copy(a),rl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:n}}function sl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,el),n.getVertexPosition(l,tl),n.getVertexPosition(c,nl);const u=h1(n,e,t,i,el,tl,nl,Km);if(u){const h=new I;Yn.getBarycoord(Km,el,tl,nl,h),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,l,c,h,new Oe)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,l,c,h,new Oe)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(el,tl,nl,d.normal),u.face=d,u.barycoord=h}return u}class Ea extends ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(h,2));function g(y,m,f,x,v,E,C,R,A,N,V){const S=E/A,M=C/N,G=E/2,B=C/2,j=R/2,q=A+1,H=N+1;let $=0,P=0;const K=new I;for(let W=0;W<H;W++){const ie=W*M-B;for(let xe=0;xe<q;xe++){const Pe=xe*S-G;K[y]=Pe*x,K[m]=ie*v,K[f]=j,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[f]=R>0?1:-1,u.push(K.x,K.y,K.z),h.push(xe/A),h.push(1-W/N),$+=1}}for(let W=0;W<N;W++)for(let ie=0;ie<A;ie++){const xe=d+ie+q*W,Pe=d+ie+q*(W+1),Y=d+(ie+1)+q*(W+1),ee=d+(ie+1)+q*W;l.push(xe,Pe,ee),l.push(Pe,Y,ee),P+=6}a.addGroup(p,P,V),p+=P,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const r in i)e[r]=i[r]}return e}function f1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const p1={clone:Qs,merge:qt};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gv extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new I,qm=new Oe,Zm=new Oe;class Jt extends gv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Zm),t.subVectors(Zm,qm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class _1 extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(ls,cs,e,t);r.layers=this.layers,this.add(r);const s=new Jt(ls,cs,e,t);s.layers=this.layers,this.add(s);const o=new Jt(ls,cs,e,t);o.layers=this.layers,this.add(o);const a=new Jt(ls,cs,e,t);a.layers=this.layers,this.add(a);const l=new Jt(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new Jt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _v extends Ut{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x1 extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _v(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ea(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:hr});s.uniforms.tEquirect.value=t;const o=new Mn(r,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=yn),new _1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Fu=new I,v1=new I,y1=new He;class $i{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fu.subVectors(i,t).cross(v1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y1.getNormalMatrix(e),r=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new di,ol=new I;class Yf{constructor(e=new $i,t=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],x=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,m-p,E-f).normalize(),i[1].setComponents(l+s,d+c,m+p,E+f).normalize(),i[2].setComponents(l+o,d+u,m+g,E+x).normalize(),i[3].setComponents(l-o,d-u,m-g,E-x).normalize(),i[4].setComponents(l-a,d-h,m-y,E-v).normalize(),t===Ri)i[5].setComponents(l+a,d+h,m+y,E+v).normalize();else if(t===pc)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function S1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Uc extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const x=f*d-o;for(let v=0;v<c;v++){const E=v*h-s;g.push(E,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,E=x+c*(f+1),C=x+1+c*(f+1),R=x+1+c*f;p.push(v,E,R),p.push(E,C,R)}this.setIndex(p),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(y,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var E1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ST=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:E1,alphahash_pars_fragment:M1,alphamap_fragment:T1,alphamap_pars_fragment:w1,alphatest_fragment:A1,alphatest_pars_fragment:b1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:N1,batching_vertex:L1,begin_vertex:P1,beginnormal_vertex:I1,bsdfs:D1,iridescence_fragment:U1,bumpmap_pars_fragment:O1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:B1,clipping_planes_vertex:z1,color_fragment:H1,color_pars_fragment:V1,color_pars_vertex:G1,color_vertex:j1,common:W1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:$1,displacementmap_vertex:K1,emissivemap_fragment:q1,emissivemap_pars_fragment:Z1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:eT,envmap_common_pars_fragment:tT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:rT,fog_vertex:sT,fog_pars_vertex:oT,fog_fragment:aT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:hT,lights_pars_begin:fT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:xT,lights_physical_fragment:vT,lights_physical_pars_fragment:yT,lights_fragment_begin:ST,lights_fragment_maps:ET,lights_fragment_end:MT,logdepthbuf_fragment:TT,logdepthbuf_pars_fragment:wT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:bT,map_fragment:RT,map_pars_fragment:CT,map_particle_fragment:NT,map_particle_pars_fragment:LT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:IT,morphinstance_vertex:DT,morphcolor_vertex:UT,morphnormal_vertex:OT,morphtarget_pars_vertex:FT,morphtarget_vertex:kT,normal_fragment_begin:BT,normal_fragment_maps:zT,normal_pars_fragment:HT,normal_pars_vertex:VT,normal_vertex:GT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:WT,clearcoat_normal_fragment_maps:XT,clearcoat_pars_fragment:YT,iridescence_pars_fragment:$T,opaque_fragment:KT,packing:qT,premultiplied_alpha_fragment:ZT,project_vertex:QT,dithering_fragment:JT,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:ow,skinbase_vertex:aw,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:hw,tonemapping_fragment:fw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:_w,uv_pars_vertex:xw,uv_vertex:vw,worldpos_vertex:yw,background_vert:Sw,background_frag:Ew,backgroundCube_vert:Mw,backgroundCube_frag:Tw,cube_vert:ww,cube_frag:Aw,depth_vert:bw,depth_frag:Rw,distanceRGBA_vert:Cw,distanceRGBA_frag:Nw,equirect_vert:Lw,equirect_frag:Pw,linedashed_vert:Iw,linedashed_frag:Dw,meshbasic_vert:Uw,meshbasic_frag:Ow,meshlambert_vert:Fw,meshlambert_frag:kw,meshmatcap_vert:Bw,meshmatcap_frag:zw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:jw,meshphysical_vert:Ww,meshphysical_frag:Xw,meshtoon_vert:Yw,meshtoon_frag:$w,points_vert:Kw,points_frag:qw,shadow_vert:Zw,shadow_frag:Qw,sprite_vert:Jw,sprite_frag:eA},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ii={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ii.physical={uniforms:qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const al={r:0,b:0,g:0},Ar=new ui,tA=new Be;function nA(n,e,t,i,r,s,o){const a=new Le(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function y(x){let v=!1;const E=g(x);E===null?f(a,l):E&&E.isColor&&(f(E,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===Ic)?(u===void 0&&(u=new Mn(new Ea(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Qs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(v.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Ar)),u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ft,(h!==E||d!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Mn(new Uc(2,2),new gr({name:"BackgroundMaterial",uniforms:Qs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(al,mv(n)),i.buffers.color.setClear(al.r,al.g,al.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:y,addToRenderList:m}}function iA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,M,G,B,j){let q=!1;const H=h(B,G,M);s!==H&&(s=H,c(s.object)),q=p(S,B,G,j),q&&g(S,B,G,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(S,M,G,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,M,G){const B=G.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let q=j[M.id];q===void 0&&(q={},j[M.id]=q);let H=q[B];return H===void 0&&(H=d(l()),q[B]=H),H}function d(S){const M=[],G=[],B=[];for(let j=0;j<t;j++)M[j]=0,G[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,M,G,B){const j=s.attributes,q=M.attributes;let H=0;const $=G.getAttributes();for(const P in $)if($[P].location>=0){const W=j[P];let ie=q[P];if(ie===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(S,M,G,B){const j={},q=M.attributes;let H=0;const $=G.getAttributes();for(const P in $)if($[P].location>=0){let W=q[P];W===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),j[P]=ie,H++}s.attributes=j,s.attributesNum=H,s.index=B}function y(){const S=s.newAttributes;for(let M=0,G=S.length;M<G;M++)S[M]=0}function m(S){f(S,0)}function f(S,M){const G=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;G[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),j[S]!==M&&(n.vertexAttribDivisor(S,M),j[S]=M)}function x(){const S=s.newAttributes,M=s.enabledAttributes;for(let G=0,B=M.length;G<B;G++)M[G]!==S[G]&&(n.disableVertexAttribArray(G),M[G]=0)}function v(S,M,G,B,j,q,H){H===!0?n.vertexAttribIPointer(S,M,G,j,q):n.vertexAttribPointer(S,M,G,B,j,q)}function E(S,M,G,B){y();const j=B.attributes,q=G.getAttributes(),H=M.defaultAttributeValues;for(const $ in q){const P=q[$];if(P.location>=0){let K=j[$];if(K===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const W=K.normalized,ie=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const Pe=xe.buffer,Y=xe.type,ee=xe.bytesPerElement,le=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===kf;if(K.isInterleavedBufferAttribute){const oe=K.data,Ee=oe.stride,ve=K.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<P.locationSize;Ie++)f(P.location+Ie,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<P.locationSize;Ie++)m(P.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Ie=0;Ie<P.locationSize;Ie++)v(P.location+Ie,ie/P.locationSize,Y,W,Ee*ee,(ve+ie/P.locationSize*Ie)*ee,le)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<P.locationSize;oe++)f(P.location+oe,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<P.locationSize;oe++)m(P.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let oe=0;oe<P.locationSize;oe++)v(P.location+oe,ie/P.locationSize,Y,W,ie*ee,ie/P.locationSize*oe*ee,le)}}else if(H!==void 0){const W=H[$];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(P.location,W);break;case 3:n.vertexAttrib3fv(P.location,W);break;case 4:n.vertexAttrib4fv(P.location,W);break;default:n.vertexAttrib1fv(P.location,W)}}}}x()}function C(){N();for(const S in i){const M=i[S];for(const G in M){const B=M[G];for(const j in B)u(B[j].object),delete B[j];delete M[G]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const M=i[S.id];for(const G in M){const B=M[G];for(const j in B)u(B[j].object),delete B[j];delete M[G]}delete i[S.id]}function A(S){for(const M in i){const G=i[M];if(G[S.id]===void 0)continue;const B=G[S.id];for(const j in B)u(B[j].object),delete B[j];delete G[S.id]}}function N(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function rA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];for(let y=0;y<d.length;y++)t.update(g,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ui&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function oA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $i,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let E=f.clippingState||null;l.value=E,E=u(g,d,v,p);for(let C=0;C!==v;++C)E[C]=t[C];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,E=p;v!==y;++v,E+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function aA(n){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=Xs:a===oh&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sh||a===oh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new x1(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $f extends gv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,Qm=[.125,.215,.35,.446,.526,.582],Ir=20,ku=new $f,Jm=new Le;let Bu=null,zu=0,Hu=0,Vu=!1;const Lr=(1+Math.sqrt(5))/2,us=1/Lr,eg=[new I(-Lr,us,0),new I(Lr,us,0),new I(-us,0,Lr),new I(us,0,Lr),new I(0,Lr,-us),new I(0,Lr,us),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,zu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ya,format:Dn,colorSpace:Ht,depthBuffer:!1},r=ng(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lA(s)),this._blurMaterial=cA(s,e,t)}return r}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,ku)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jm),u.toneMapping=fr,u.autoClear=!1;const p=new tr({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Mn(new Ea,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Jm),y=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ll(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xs||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ku)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eg[(r-s-1)%eg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const f=[];let x=0;for(let A=0;A<Ir;++A){const N=A/y,V=Math.exp(-N*N/2);f.push(V),A===0?x+=V:A<m&&(x+=2*V)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const E=this._sizeLods[r],C=3*E*(r>v-ws?r-v+ws:0),R=4*(this._cubeSize-E);ll(t,C,R,3*E,2*E),l.setRenderTarget(t),l.render(h,ku)}}function lA(n){const e=[],t=[],i=[];let r=n;const s=n-ws+1+Qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ws?l=Qm[o-n+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,x=new Float32Array(y*g*p),v=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,N=R>2?0:-1,V=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(V,y*g*R),v.set(d,m*g*R);const S=[R,R,R,R,R,R];E.set(S,f*g*R)}const C=new ei;C.setAttribute("position",new nn(x,y)),C.setAttribute("uv",new nn(v,m)),C.setAttribute("faceIndex",new nn(E,f)),e.push(C),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ng(n,e,t){const i=new Wr(n,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cA(n,e,t){const i=new Float32Array(Ir),r=new I(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ig(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function rg(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sh||l===oh,u=l===Xs||l===Ys;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new tg(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new tg(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hA(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,E=x.length;v<E;v+=3){const C=x[v+0],R=x[v+1],A=x[v+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){const x=g.array;y=g.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const C=v+0,R=v+1,A=v+2;d.push(C,R,R,A,A,C)}}else return;const m=new(lv(d)?pv:fv)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fA(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<y.length;x++)t.update(f,i,y[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function pA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mA(n,e,t){const i=new WeakMap,r=new et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*R*4*h),N=new uv(A,C,R,h);N.type=$n,N.needsUpdate=!0;const V=E*4;for(let M=0;M<h;M++){const G=f[M],B=x[M],j=v[M],q=C*R*4*M;for(let H=0;H<G.count;H++){const $=H*V;g===!0&&(r.fromBufferAttribute(G,H),A[q+$+0]=r.x,A[q+$+1]=r.y,A[q+$+2]=r.z,A[q+$+3]=0),y===!0&&(r.fromBufferAttribute(B,H),A[q+$+4]=r.x,A[q+$+5]=r.y,A[q+$+6]=r.z,A[q+$+7]=0),m===!0&&(r.fromBufferAttribute(j,H),A[q+$+8]=r.x,A[q+$+9]=r.y,A[q+$+10]=r.z,A[q+$+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new Oe(C,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function gA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vv extends Ut{constructor(e,t,i,r,s,o,a,l,c,u=Ds){if(u!==Ds&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ds&&(i=jr),i===void 0&&u===qs&&(i=Ks),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yv=new Ut,sg=new vv(1,1),Sv=new uv,Ev=new n1,Mv=new _v,og=[],ag=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function so(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=og[r];if(s===void 0&&(s=new Float32Array(r),og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oc(n,e){let t=ag[e];t===void 0&&(t=new Int32Array(e),ag[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function yA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function SA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,i))return;ug.set(i),n.uniformMatrix2fv(this.addr,!1,ug),Lt(t,i)}}function EA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,i))return;cg.set(i),n.uniformMatrix3fv(this.addr,!1,cg),Lt(t,i)}}function MA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Nt(t,i))return;lg.set(i),n.uniformMatrix4fv(this.addr,!1,lg),Lt(t,i)}}function TA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function RA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function LA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function PA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sg.compareFunction=ov,s=sg):s=yv,t.setTexture2D(e||s,r)}function IA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ev,r)}function DA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mv,r)}function UA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sv,r)}function OA(n){switch(n){case 5126:return _A;case 35664:return xA;case 35665:return vA;case 35666:return yA;case 35674:return SA;case 35675:return EA;case 35676:return MA;case 5124:case 35670:return TA;case 35667:case 35671:return wA;case 35668:case 35672:return AA;case 35669:case 35673:return bA;case 5125:return RA;case 36294:return CA;case 36295:return NA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return PA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}function FA(n,e){n.uniform1fv(this.addr,e)}function kA(n,e){const t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function BA(n,e){const t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function zA(n,e){const t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function HA(n,e){const t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VA(n,e){const t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GA(n,e){const t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jA(n,e){n.uniform1iv(this.addr,e)}function WA(n,e){n.uniform2iv(this.addr,e)}function XA(n,e){n.uniform3iv(this.addr,e)}function YA(n,e){n.uniform4iv(this.addr,e)}function $A(n,e){n.uniform1uiv(this.addr,e)}function KA(n,e){n.uniform2uiv(this.addr,e)}function qA(n,e){n.uniform3uiv(this.addr,e)}function ZA(n,e){n.uniform4uiv(this.addr,e)}function QA(n,e,t){const i=this.cache,r=e.length,s=Oc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yv,s[o])}function JA(n,e,t){const i=this.cache,r=e.length,s=Oc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ev,s[o])}function eb(n,e,t){const i=this.cache,r=e.length,s=Oc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Mv,s[o])}function tb(n,e,t){const i=this.cache,r=e.length,s=Oc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sv,s[o])}function nb(n){switch(n){case 5126:return FA;case 35664:return kA;case 35665:return BA;case 35666:return zA;case 35674:return HA;case 35675:return VA;case 35676:return GA;case 5124:case 35670:return jA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return YA;case 5125:return $A;case 36294:return KA;case 36295:return qA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}class ib{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OA(t.type)}}class rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nb(t.type)}}class sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function dg(n,e){n.seq.push(e),n.map[e.id]=e}function ob(n,e,t){const i=n.name,r=i.length;for(Gu.lastIndex=0;;){const s=Gu.exec(i),o=Gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dg(t,c===void 0?new ib(a,n,e):new rb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new sb(a),dg(t,h)),t=h}}}class kl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ob(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function hg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ab=37297;let lb=0;function cb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ub(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===fc&&t===hc?i="LinearDisplayP3ToLinearSRGB":e===hc&&t===fc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ht:case Dc:return[i,"LinearTransferOETF"];case Qt:case Wf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function fg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cb(n.getShaderSource(e),o)}else return r}function db(n,e){const t=ub(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hb(n,e){let t;switch(e){case hM:t="Linear";break;case fM:t="Reinhard";break;case pM:t="Cineon";break;case Xx:t="ACESFilmic";break;case gM:t="AgX";break;case _M:t="Neutral";break;case mM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cl=new I;function fb(){Ze.getLuminanceCoefficients(cl);const n=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function mb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Io(n){return n!==""}function pg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(_b,vb)}const xb=new Map;function vb(n,e){let t=ze[e];if(t===void 0){const i=xb.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uh(t)}const yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(n){return n.replace(yb,Sb)}function Sb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _g(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Mb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wx:e="ENVMAP_BLENDING_MULTIPLY";break;case uM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function Ab(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Eb(t),c=Mb(t),u=Tb(t),h=wb(t),d=Ab(t),p=pb(t),g=mb(s),y=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),f.length>0&&(f+=`
`)):(m=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),f=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?ze.tonemapping_pars_fragment:"",t.toneMapping!==fr?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),o=Uh(o),o=pg(o,t),o=mg(o,t),a=Uh(a),a=pg(a,t),a=mg(a,t),o=gg(o),a=gg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,E=x+f+a,C=hg(r,r.VERTEX_SHADER,v),R=hg(r,r.FRAGMENT_SHADER,E);r.attachShader(y,C),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(M){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(R).trim();let q=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,R);else{const $=fg(r,C,"vertex"),P=fg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+$+`
`+P)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||j==="")&&(H=!1);H&&(M.diagnostics={runnable:q,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:f}})}r.deleteShader(C),r.deleteShader(R),N=new kl(r,y),V=gb(r,y)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,ab)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=R,this}let Rb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nb(e),t.set(e,i)),i}}class Nb{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Lb(n,e,t,i,r,s,o){const a=new dv,l=new Cb,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,G,B,j){const q=B.fog,H=j.geometry,$=S.isMeshStandardMaterial?B.environment:null,P=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),K=P&&P.mapping===Ic?P.image.height:null,W=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const ie=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=ie!==void 0?ie.length:0;let Pe=0;H.morphAttributes.position!==void 0&&(Pe=1),H.morphAttributes.normal!==void 0&&(Pe=2),H.morphAttributes.color!==void 0&&(Pe=3);let Y,ee,le,oe;if(W){const an=ii[W];Y=an.vertexShader,ee=an.fragmentShader}else Y=S.vertexShader,ee=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const Ee=n.getRenderTarget(),ve=j.isInstancedMesh===!0,Ie=j.isBatchedMesh===!0,Ve=!!S.map,ke=!!S.matcap,L=!!P,Vt=!!S.aoMap,Ge=!!S.lightMap,Xe=!!S.bumpMap,Re=!!S.normalMap,at=!!S.displacementMap,Ae=!!S.emissiveMap,b=!!S.metalnessMap,T=!!S.roughnessMap,F=S.anisotropy>0,Q=S.clearcoat>0,te=S.dispersion>0,Z=S.iridescence>0,Me=S.sheen>0,ce=S.transmission>0,me=F&&!!S.anisotropyMap,qe=Q&&!!S.clearcoatMap,re=Q&&!!S.clearcoatNormalMap,ge=Q&&!!S.clearcoatRoughnessMap,De=Z&&!!S.iridescenceMap,Ue=Z&&!!S.iridescenceThicknessMap,_e=Me&&!!S.sheenColorMap,Ye=Me&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,ct=!!S.specularColorMap,D=!!S.specularIntensityMap,he=ce&&!!S.transmissionMap,X=ce&&!!S.thicknessMap,J=!!S.gradientMap,ue=!!S.alphaMap,fe=S.alphaTest>0,$e=!!S.alphaHash,Tt=!!S.extensions;let on=fr;S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(on=n.toneMapping);const Je={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:ee,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&j._colorsTexture!==null,instancing:ve,instancingColor:ve&&j.instanceColor!==null,instancingMorph:ve&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ht,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:ke,envMap:L,envMapMode:L&&P.mapping,envMapCubeUVHeight:K,aoMap:Vt,lightMap:Ge,bumpMap:Xe,normalMap:Re,displacementMap:p&&at,emissiveMap:Ae,normalMapObjectSpace:Re&&S.normalMapType===MM,normalMapTangentSpace:Re&&S.normalMapType===sv,metalnessMap:b,roughnessMap:T,anisotropy:F,anisotropyMap:me,clearcoat:Q,clearcoatMap:qe,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:te,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:Ue,sheen:Me,sheenColorMap:_e,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:ct,specularIntensityMap:D,transmission:ce,transmissionMap:he,thicknessMap:X,gradientMap:J,opaque:S.transparent===!1&&S.blending===Is&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:$e,combine:S.combine,mapUv:Ve&&m(S.map.channel),aoMapUv:Vt&&m(S.aoMap.channel),lightMapUv:Ge&&m(S.lightMap.channel),bumpMapUv:Xe&&m(S.bumpMap.channel),normalMapUv:Re&&m(S.normalMap.channel),displacementMapUv:at&&m(S.displacementMap.channel),emissiveMapUv:Ae&&m(S.emissiveMap.channel),metalnessMapUv:b&&m(S.metalnessMap.channel),roughnessMapUv:T&&m(S.roughnessMap.channel),anisotropyMapUv:me&&m(S.anisotropyMap.channel),clearcoatMapUv:qe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(S.sheenRoughnessMap.channel),specularMapUv:Fe&&m(S.specularMap.channel),specularColorMapUv:ct&&m(S.specularColorMap.channel),specularIntensityMapUv:D&&m(S.specularIntensityMap.channel),transmissionMapUv:he&&m(S.transmissionMap.channel),thicknessMapUv:X&&m(S.thicknessMap.channel),alphaMapUv:ue&&m(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Re||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(Ve||ue),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:on,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Tt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&S.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function x(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)M.push(G),M.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(v(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function C(S){const M=y[S.type];let G;if(M){const B=ii[M];G=p1.clone(B.uniforms)}else G=S.uniforms;return G}function R(S,M){let G;for(let B=0,j=u.length;B<j;B++){const q=u[B];if(q.cacheKey===M){G=q,++G.usedTimes;break}}return G===void 0&&(G=new bb(n,M,S,s),u.push(G)),G}function A(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function N(S){l.remove(S)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:C,acquireProgram:R,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:V}}function Pb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ib(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Ib),i.length>1&&i.sort(d||xg),r.length>1&&r.sort(d||xg)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Db(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new vg,n.set(i,[o])):r>=s.length?(o=new vg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fb=0;function kb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bb(n){const e=new Ub,t=Ob(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new Be,o=new Be;function a(c){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,x=0,v=0,E=0,C=0,R=0,A=0;c.sort(kb);for(let V=0,S=c.length;V<S;V++){const M=c[V],G=M.color,B=M.intensity,j=M.distance,q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=G.r*B,h+=G.g*B,d+=G.b*B;else if(M.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(M.sh.coefficients[H],B);A++}else if(M.isDirectionalLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const $=M.shadow,P=t.get(M);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=M.shadow.matrix,x++}i.directional[p]=H,p++}else if(M.isSpotLight){const H=e.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(G).multiplyScalar(B),H.distance=j,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,i.spot[y]=H;const $=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,$.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[y]=$.matrix,M.castShadow){const P=t.get(M);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=q,E++}y++}else if(M.isRectAreaLight){const H=e.get(M);H.color.copy(G).multiplyScalar(B),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=H,m++}else if(M.isPointLight){const H=e.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const $=M.shadow,P=t.get(M);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=H,g++}else if(M.isHemisphereLight){const H=e.get(M);H.skyColor.copy(M.color).multiplyScalar(B),H.groundColor.copy(M.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==x||N.numPointShadows!==v||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=x,N.numPointShadows=v,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=A,i.version=Fb++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const v=c[f];if(v.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function yg(n){const e=new Bb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new yg(n),e.set(r,[a])):s>=o.length?(a=new yg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Hb extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vb extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wb(n,e,t){let i=new Yf;const r=new Oe,s=new Oe,o=new et,a=new Hb({depthPacking:EM}),l=new Vb,c={},u=t.maxTextureSize,h={[Di]:pn,[pn]:Di,[si]:si},d=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Gb,fragmentShader:jb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx;let f=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),G=n.state;G.setBlending(hr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=f!==Si&&this.type===Si,j=f===Si&&this.type!==Si;for(let q=0,H=R.length;q<H;q++){const $=R[q],P=$.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const K=P.getFrameExtents();if(r.multiply(K),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,P.mapSize.y=s.y)),P.map===null||B===!0||j===!0){const ie=this.type!==Si?{minFilter:en,magFilter:en}:{};P.map!==null&&P.map.dispose(),P.map=new Wr(r.x,r.y,ie),P.map.texture.name=$.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const W=P.getViewportCount();for(let ie=0;ie<W;ie++){const xe=P.getViewport(ie);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),G.viewport(o),P.updateMatrices($,ie),i=P.getFrustum(),E(A,N,P.camera,$,this.type)}P.isPointLightShadow!==!0&&this.type===Si&&x(P,N),P.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(V,S,M)};function x(R,A){const N=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wr(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,N,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,N,p,y,null)}function v(R,A,N,V){let S=null;const M=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)S=M;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,B=A.uuid;let j=c[G];j===void 0&&(j={},c[G]=j);let q=j[B];q===void 0&&(q=S.clone(),j[B]=q,A.addEventListener("dispose",C)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,V===Si?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=N}return S}function E(R,A,N,V,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const B=e.update(R),j=R.material;if(Array.isArray(j)){const q=B.groups;for(let H=0,$=q.length;H<$;H++){const P=q[H],K=j[P.materialIndex];if(K&&K.visible){const W=v(R,K,V,S);R.onBeforeShadow(n,R,A,N,B,W,P),n.renderBufferDirect(N,null,B,W,R,P),R.onAfterShadow(n,R,A,N,B,W,P)}}}else if(j.visible){const q=v(R,j,V,S);R.onBeforeShadow(n,R,A,N,B,q,null),n.renderBufferDirect(N,null,B,q,R,null),R.onAfterShadow(n,R,A,N,B,q,null)}}const G=R.children;for(let B=0,j=G.length;B<j;B++)E(G[B],A,N,V,S)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const V=c[N],S=R.target.uuid;S in V&&(V[S].dispose(),delete V[S])}}}const Xb={[Qd]:Jd,[eh]:ih,[th]:rh,[Ws]:nh,[Jd]:Qd,[ih]:eh,[rh]:th,[nh]:Ws};function Yb(n){function e(){let D=!1;const he=new et;let X=null;const J=new et(0,0,0,0);return{setMask:function(ue){X!==ue&&!D&&(n.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){D=ue},setClear:function(ue,fe,$e,Tt,on){on===!0&&(ue*=Tt,fe*=Tt,$e*=Tt),he.set(ue,fe,$e,Tt),J.equals(he)===!1&&(n.clearColor(ue,fe,$e,Tt),J.copy(he))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function t(){let D=!1,he=!1,X=null,J=null,ue=null;return{setReversed:function(fe){he=fe},setTest:function(fe){fe?le(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(fe){X!==fe&&!D&&(n.depthMask(fe),X=fe)},setFunc:function(fe){if(he&&(fe=Xb[fe]),J!==fe){switch(fe){case Qd:n.depthFunc(n.NEVER);break;case Jd:n.depthFunc(n.ALWAYS);break;case eh:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case th:n.depthFunc(n.EQUAL);break;case nh:n.depthFunc(n.GEQUAL);break;case ih:n.depthFunc(n.GREATER);break;case rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ue!==fe&&(n.clearDepth(fe),ue=fe)},reset:function(){D=!1,X=null,J=null,ue=null}}}function i(){let D=!1,he=null,X=null,J=null,ue=null,fe=null,$e=null,Tt=null,on=null;return{setTest:function(Je){D||(Je?le(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Je){he!==Je&&!D&&(n.stencilMask(Je),he=Je)},setFunc:function(Je,an,pi){(X!==Je||J!==an||ue!==pi)&&(n.stencilFunc(Je,an,pi),X=Je,J=an,ue=pi)},setOp:function(Je,an,pi){(fe!==Je||$e!==an||Tt!==pi)&&(n.stencilOp(Je,an,pi),fe=Je,$e=an,Tt=pi)},setLocked:function(Je){D=Je},setClear:function(Je){on!==Je&&(n.clearStencil(Je),on=Je)},reset:function(){D=!1,he=null,X=null,J=null,ue=null,fe=null,$e=null,Tt=null,on=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,x=null,v=null,E=null,C=null,R=new Le(0,0,0),A=0,N=!1,V=null,S=null,M=null,G=null,B=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),q=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=H>=2);let P=null,K={};const W=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),xe=new et().fromArray(W),Pe=new et().fromArray(ie);function Y(D,he,X,J){const ue=new Uint8Array(4),fe=n.createTexture();n.bindTexture(D,fe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<X;$e++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(he+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return fe}const ee={};ee[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Ws),Ge(!1),Xe(Tm),le(n.CULL_FACE),L(hr);function le(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function oe(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Ee(D,he){return u[D]!==he?(n.bindFramebuffer(D,he),u[D]=he,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(D,he){let X=d,J=!1;if(D){X=h.get(he),X===void 0&&(X=[],h.set(he,X));const ue=D.textures;if(X.length!==ue.length||X[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,$e=ue.length;fe<$e;fe++)X[fe]=n.COLOR_ATTACHMENT0+fe;X.length=ue.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function Ie(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Ve={[Pr]:n.FUNC_ADD,[YE]:n.FUNC_SUBTRACT,[$E]:n.FUNC_REVERSE_SUBTRACT};Ve[KE]=n.MIN,Ve[qE]=n.MAX;const ke={[ZE]:n.ZERO,[QE]:n.ONE,[JE]:n.SRC_COLOR,[qd]:n.SRC_ALPHA,[sM]:n.SRC_ALPHA_SATURATE,[iM]:n.DST_COLOR,[tM]:n.DST_ALPHA,[eM]:n.ONE_MINUS_SRC_COLOR,[Zd]:n.ONE_MINUS_SRC_ALPHA,[rM]:n.ONE_MINUS_DST_COLOR,[nM]:n.ONE_MINUS_DST_ALPHA,[oM]:n.CONSTANT_COLOR,[aM]:n.ONE_MINUS_CONSTANT_COLOR,[lM]:n.CONSTANT_ALPHA,[cM]:n.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,X,J,ue,fe,$e,Tt,on,Je){if(D===hr){g===!0&&(oe(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),D!==XE){if(D!==y||Je!==N){if((m!==Pr||v!==Pr)&&(n.blendEquation(n.FUNC_ADD),m=Pr,v=Pr),Je)switch(D){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFunc(n.ONE,n.ONE);break;case Am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Am:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,x=null,E=null,C=null,R.set(0,0,0),A=0,y=D,N=Je}return}ue=ue||he,fe=fe||X,$e=$e||J,(he!==m||ue!==v)&&(n.blendEquationSeparate(Ve[he],Ve[ue]),m=he,v=ue),(X!==f||J!==x||fe!==E||$e!==C)&&(n.blendFuncSeparate(ke[X],ke[J],ke[fe],ke[$e]),f=X,x=J,E=fe,C=$e),(Tt.equals(R)===!1||on!==A)&&(n.blendColor(Tt.r,Tt.g,Tt.b,on),R.copy(Tt),A=on),y=D,N=!1}function Vt(D,he){D.side===si?oe(n.CULL_FACE):le(n.CULL_FACE);let X=D.side===pn;he&&(X=!X),Ge(X),D.blending===Is&&D.transparent===!1?L(hr):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){V!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),V=D)}function Xe(D){D!==jE?(le(n.CULL_FACE),D!==S&&(D===Tm?n.cullFace(n.BACK):D===WE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),S=D}function Re(D){D!==M&&(q&&n.lineWidth(D),M=D)}function at(D,he,X){D?(le(n.POLYGON_OFFSET_FILL),(G!==he||B!==X)&&(n.polygonOffset(he,X),G=he,B=X)):oe(n.POLYGON_OFFSET_FILL)}function Ae(D){D?le(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function b(D){D===void 0&&(D=n.TEXTURE0+j-1),P!==D&&(n.activeTexture(D),P=D)}function T(D,he,X){X===void 0&&(P===null?X=n.TEXTURE0+j-1:X=P);let J=K[X];J===void 0&&(J={type:void 0,texture:void 0},K[X]=J),(J.type!==D||J.texture!==he)&&(P!==X&&(n.activeTexture(X),P=X),n.bindTexture(D,he||ee[D]),J.type=D,J.texture=he)}function F(){const D=K[P];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function _e(D){Pe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Ye(D,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let J=X.get(D);J===void 0&&(J=n.getUniformBlockIndex(he,D.name),X.set(D,J))}function Fe(D,he){const J=l.get(he).get(D);a.get(he)!==J&&(n.uniformBlockBinding(he,J,D.__bindingPointIndex),a.set(he,J))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},P=null,K={},u={},h=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,x=null,v=null,E=null,C=null,R=new Le(0,0,0),A=0,N=!1,V=null,S=null,M=null,G=null,B=null,xe.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:oe,bindFramebuffer:Ee,drawBuffers:ve,useProgram:Ie,setBlending:L,setMaterial:Vt,setFlipSided:Ge,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:at,setScissorTest:Ae,activeTexture:b,bindTexture:T,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ge,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:qe,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ue,viewport:_e,reset:ct}}function Sg(n,e,t,i){const r=$b(i);switch(t){case Qx:return n*e;case ev:return n*e;case tv:return n*e*2;case Hf:return n*e/r.components*r.byteLength;case Vf:return n*e/r.components*r.byteLength;case nv:return n*e*2/r.components*r.byteLength;case Gf:return n*e*2/r.components*r.byteLength;case Jx:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case jf:return n*e*4/r.components*r.byteLength;case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(n,16)*Math.max(e,8)/4;case ah:case ch:return Math.max(n,8)*Math.max(e,8)/2;case dh:case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Rh:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*16;case iv:case Nh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lh:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $b(n){switch(n){case Ui:case Kx:return{byteLength:1,components:1};case da:case qx:case ya:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case jr:case kf:case $n:return{byteLength:4,components:1};case Zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Kb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,T){return p?new OffscreenCanvas(b,T):pa("canvas")}function y(b,T,F){let Q=1;const te=Ae(b);if((te.width>F||te.height>F)&&(Q=F/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(Q*te.width),Me=Math.floor(Q*te.height);h===void 0&&(h=g(Z,Me));const ce=T?g(Z,Me):h;return ce.width=Z,ce.height=Me,ce.getContext("2d").drawImage(b,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Me+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==en&&b.minFilter!==yn}function f(b){n.generateMipmap(b)}function x(b,T,F,Q,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=T;if(T===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),T===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),T===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),T===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),T===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),T===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),T===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),T===n.RGBA){const Me=te?dc:Ze.getTransfer(Q);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Me===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(b,T){let F;return b?T===null||T===jr||T===Ks?F=n.DEPTH24_STENCIL8:T===$n?F=n.DEPTH32F_STENCIL8:T===da&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Ks?F=n.DEPTH_COMPONENT24:T===$n?F=n.DEPTH_COMPONENT32F:T===da&&(F=n.DEPTH_COMPONENT16),F}function E(b,T){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function C(b){const T=b.target;T.removeEventListener("dispose",C),A(T),T.isVideoTexture&&u.delete(T)}function R(b){const T=b.target;T.removeEventListener("dispose",R),V(T)}function A(b){const T=i.get(b);if(T.__webglInit===void 0)return;const F=b.source,Q=d.get(F);if(Q){const te=Q[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(b),Object.keys(Q).length===0&&d.delete(F)}i.remove(b)}function N(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const F=b.source,Q=d.get(F);delete Q[T.__cacheKey],o.memory.textures--}function V(b){const T=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let te=0;te<T.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(T.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const F=b.textures;for(let Q=0,te=F.length;Q<te;Q++){const Z=i.get(F[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(F[Q])}i.remove(b)}let S=0;function M(){S=0}function G(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function B(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function j(b,T){const F=i.get(b);if(b.isVideoTexture&&Re(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(F,b,T);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+T)}function q(b,T){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Pe(F,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+T)}function H(b,T){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Pe(F,b,T);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+T)}function $(b,T){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Y(F,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+T)}const P={[$s]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},K={[en]:n.NEAREST,[$x]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Ll]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},W={[TM]:n.NEVER,[NM]:n.ALWAYS,[wM]:n.LESS,[ov]:n.LEQUAL,[AM]:n.EQUAL,[CM]:n.GEQUAL,[bM]:n.GREATER,[RM]:n.NOTEQUAL};function ie(b,T){if(T.type===$n&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yn||T.magFilter===Ll||T.magFilter===Po||T.magFilter===bi||T.minFilter===yn||T.minFilter===Ll||T.minFilter===Po||T.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,P[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,P[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,P[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,W[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==Po&&T.minFilter!==bi||T.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function xe(b,T){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",C));const Q=T.source;let te=d.get(Q);te===void 0&&(te={},d.set(Q,te));const Z=B(T);if(Z!==b.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[Z].usedTimes++;const Me=te[b.__cacheKey];Me!==void 0&&(te[b.__cacheKey].usedTimes--,Me.usedTimes===0&&N(T)),b.__cacheKey=Z,b.__webglTexture=te[Z].texture}return F}function Pe(b,T,F){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const te=xe(b,T),Z=T.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+F);const Me=i.get(Z);if(Z.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+F);const ce=Ze.getPrimaries(Ze.workingColorSpace),me=T.colorSpace===Zi?null:Ze.getPrimaries(T.colorSpace),qe=T.colorSpace===Zi||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let re=y(T.image,!1,r.maxTextureSize);re=at(T,re);const ge=s.convert(T.format,T.colorSpace),De=s.convert(T.type);let Ue=x(T.internalFormat,ge,De,T.colorSpace,T.isVideoTexture);ie(Q,T);let _e;const Ye=T.mipmaps,Fe=T.isVideoTexture!==!0,ct=Me.__version===void 0||te===!0,D=Z.dataReady,he=E(T,re);if(T.isDepthTexture)Ue=v(T.format===qs,T.type),ct&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,ge,De,null));else if(T.isDataTexture)if(Ye.length>0){Fe&&ct&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Ye[0].width,Ye[0].height);for(let X=0,J=Ye.length;X<J;X++)_e=Ye[X],Fe?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,De,_e.data):t.texImage2D(n.TEXTURE_2D,X,Ue,_e.width,_e.height,0,ge,De,_e.data);T.generateMipmaps=!1}else Fe?(ct&&t.texStorage2D(n.TEXTURE_2D,he,Ue,re.width,re.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ge,De,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,ge,De,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,Ye[0].width,Ye[0].height,re.depth);for(let X=0,J=Ye.length;X<J;X++)if(_e=Ye[X],T.format!==Dn)if(ge!==null)if(Fe){if(D)if(T.layerUpdates.size>0){const ue=Sg(_e.width,_e.height,T.format,T.type);for(const fe of T.layerUpdates){const $e=_e.data.subarray(fe*ue/_e.data.BYTES_PER_ELEMENT,(fe+1)*ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,fe,_e.width,_e.height,1,ge,$e,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,ge,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ue,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,ge,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ue,_e.width,_e.height,re.depth,0,ge,De,_e.data)}else{Fe&&ct&&t.texStorage2D(n.TEXTURE_2D,he,Ue,Ye[0].width,Ye[0].height);for(let X=0,J=Ye.length;X<J;X++)_e=Ye[X],T.format!==Dn?ge!==null?Fe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,De,_e.data):t.texImage2D(n.TEXTURE_2D,X,Ue,_e.width,_e.height,0,ge,De,_e.data)}else if(T.isDataArrayTexture)if(Fe){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ue,re.width,re.height,re.depth),D)if(T.layerUpdates.size>0){const X=Sg(re.width,re.height,T.format,T.type);for(const J of T.layerUpdates){const ue=re.data.subarray(J*X/re.data.BYTES_PER_ELEMENT,(J+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,ge,De,ue)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,De,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,ge,De,re.data);else if(T.isData3DTexture)Fe?(ct&&t.texStorage3D(n.TEXTURE_3D,he,Ue,re.width,re.height,re.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,De,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,ge,De,re.data);else if(T.isFramebufferTexture){if(ct)if(Fe)t.texStorage2D(n.TEXTURE_2D,he,Ue,re.width,re.height);else{let X=re.width,J=re.height;for(let ue=0;ue<he;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ue,X,J,0,ge,De,null),X>>=1,J>>=1}}else if(Ye.length>0){if(Fe&&ct){const X=Ae(Ye[0]);t.texStorage2D(n.TEXTURE_2D,he,Ue,X.width,X.height)}for(let X=0,J=Ye.length;X<J;X++)_e=Ye[X],Fe?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge,De,_e):t.texImage2D(n.TEXTURE_2D,X,Ue,ge,De,_e);T.generateMipmaps=!1}else if(Fe){if(ct){const X=Ae(re);t.texStorage2D(n.TEXTURE_2D,he,Ue,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,De,re)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ge,De,re);m(T)&&f(Q),Me.__version=Z.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Y(b,T,F){if(T.image.length!==6)return;const Q=xe(b,T),te=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+F);const Me=Ze.getPrimaries(Ze.workingColorSpace),ce=T.colorSpace===Zi?null:Ze.getPrimaries(T.colorSpace),me=T.colorSpace===Zi||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!qe&&!re?ge[J]=y(T.image[J],!0,r.maxCubemapSize):ge[J]=re?T.image[J].image:T.image[J],ge[J]=at(T,ge[J]);const De=ge[0],Ue=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ye=x(T.internalFormat,Ue,_e,T.colorSpace),Fe=T.isVideoTexture!==!0,ct=Z.__version===void 0||Q===!0,D=te.dataReady;let he=E(T,De);ie(n.TEXTURE_CUBE_MAP,T);let X;if(qe){Fe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,De.width,De.height);for(let J=0;J<6;J++){X=ge[J].mipmaps;for(let ue=0;ue<X.length;ue++){const fe=X[ue];T.format!==Dn?Ue!==null?Fe?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,fe.width,fe.height,Ue,_e,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ye,fe.width,fe.height,0,Ue,_e,fe.data)}}}else{if(X=T.mipmaps,Fe&&ct){X.length>0&&he++;const J=Ae(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(re){Fe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ue,_e,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ge[J].width,ge[J].height,0,Ue,_e,ge[J].data);for(let ue=0;ue<X.length;ue++){const $e=X[ue].image[J].image;Fe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,$e.width,$e.height,Ue,_e,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ye,$e.width,$e.height,0,Ue,_e,$e.data)}}else{Fe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,_e,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ue,_e,ge[J]);for(let ue=0;ue<X.length;ue++){const fe=X[ue];Fe?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ue,_e,fe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ye,Ue,_e,fe.image[J])}}}m(T)&&f(n.TEXTURE_CUBE_MAP),Z.__version=te.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ee(b,T,F,Q,te,Z){const Me=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),me=x(F.internalFormat,Me,ce,F.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>Z),ge=Math.max(1,T.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,me,re,ge,T.depth,0,Me,ce,null):t.texImage2D(te,Z,me,re,ge,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,i.get(F).__webglTexture,0,Ge(T)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,i.get(F).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(b,T,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer){const Q=T.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=v(T.stencilBuffer,te),Me=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ge(T);Xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Z,T.width,T.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Z,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Z,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,b)}else{const Q=T.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Me=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),me=x(Z.internalFormat,Me,ce,Z.colorSpace),qe=Ge(T);F&&Xe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,me,T.width,T.height):Xe(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,me,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,te=Ge(T);if(T.depthTexture.format===Ds)Xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(T.depthTexture.format===qs)Xe(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(b){const T=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const Q=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=Q}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,b)}else if(F){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),le(T.__webglDepthbuffer[Q],b,!1);else{const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),le(T.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(b,T,F){const Q=i.get(b);T!==void 0&&ee(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ee(b)}function Ie(b){const T=b.texture,F=i.get(b),Q=i.get(T);b.addEventListener("dispose",R);const te=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let me=0;me<T.mipmaps.length;me++)F.__webglFramebuffer[ce][me]=n.createFramebuffer()}else F.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)F.__webglFramebuffer[ce]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,me=te.length;ce<me;ce++){const qe=i.get(te[ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const me=te[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const qe=s.convert(me.format,me.colorSpace),re=s.convert(me.type),ge=x(me.internalFormat,qe,re,me.colorSpace,b.isXRRenderTarget===!0),De=Ge(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),le(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)ee(F.__webglFramebuffer[ce][me],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ee(F.__webglFramebuffer[ce],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(T)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,me=te.length;ce<me;ce++){const qe=te[ce],re=i.get(qe);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),ie(n.TEXTURE_2D,qe),ee(F.__webglFramebuffer,b,qe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(qe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ie(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)ee(F.__webglFramebuffer[me],b,T,n.COLOR_ATTACHMENT0,ce,me);else ee(F.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,ce,0);m(T)&&f(ce),t.unbindTexture()}b.depthBuffer&&Ee(b)}function Ve(b){const T=b.textures;for(let F=0,Q=T.length;F<Q;F++){const te=T[F];if(m(te)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(te).__webglTexture;t.bindTexture(Z,Me),f(Z),t.unbindTexture()}}}const ke=[],L=[];function Vt(b){if(b.samples>0){if(Xe(b)===!1){const T=b.textures,F=b.width,Q=b.height;let te=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(b),ce=T.length>1;if(ce)for(let me=0;me<T.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<T.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const qe=i.get(T[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,F,Q,0,0,F,Q,te,n.NEAREST),l===!0&&(ke.length=0,L.length=0,ke.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ke.push(Z),L.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<T.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const qe=i.get(T[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const T=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ge(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){const T=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(b){const T=o.render.frame;u.get(b)!==T&&(u.set(b,T),b.update())}function at(b,T){const F=b.colorSpace,Q=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ht&&F!==Zi&&(Ze.getTransfer(F)===ft?(Q!==Dn||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=ve,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Xe}function qb(n,e){function t(i,r=Zi){let s;const o=Ze.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Bf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kx)return n.BYTE;if(i===qx)return n.SHORT;if(i===da)return n.UNSIGNED_SHORT;if(i===kf)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===ya)return n.HALF_FLOAT;if(i===Qx)return n.ALPHA;if(i===Jx)return n.RGB;if(i===Dn)return n.RGBA;if(i===ev)return n.LUMINANCE;if(i===tv)return n.LUMINANCE_ALPHA;if(i===Ds)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Hf)return n.RED;if(i===Vf)return n.RED_INTEGER;if(i===nv)return n.RG;if(i===Gf)return n.RG_INTEGER;if(i===jf)return n.RGBA_INTEGER;if(i===Pl||i===Il||i===Dl||i===Ul)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ah||i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===hh||i===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dh||i===hh)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ph||i===mh||i===gh||i===_h||i===xh||i===vh||i===yh||i===Sh||i===Eh||i===Mh||i===Th||i===wh||i===Ah||i===bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ph)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ah)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===Rh||i===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ol)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iv||i===Nh||i===Lh||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Zb extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nr extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gr({vertexShader:Jb,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Uc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nR extends $r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const y=new tR,m=t.getContextAttributes();let f=null,x=null;const v=[],E=[],C=new Oe;let R=null;const A=new Jt;A.layers.enable(1),A.viewport=new et;const N=new Jt;N.layers.enable(2),N.viewport=new et;const V=[A,N],S=new Zb;S.layers.enable(1),S.layers.enable(2);let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=v[Y];return ee===void 0&&(ee=new ju,v[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=v[Y];return ee===void 0&&(ee=new ju,v[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=v[Y];return ee===void 0&&(ee=new ju,v[Y]=ee),ee.getHandSpace()};function B(Y){const ee=E.indexOf(Y.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){const ee=E[Y];ee!==null&&(E[Y]=null,v[Y].disconnect(ee))}M=null,G=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,x=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Wr(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?qs:Ds,le=m.stencil?Ks:jr);const Ee={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Wr(d.textureWidth,d.textureHeight,{format:Dn,type:Ui,depthTexture:new vv(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(Y){for(let ee=0;ee<Y.removed.length;ee++){const le=Y.removed[ee],oe=E.indexOf(le);oe>=0&&(E[oe]=null,v[oe].disconnect(le))}for(let ee=0;ee<Y.added.length;ee++){const le=Y.added[ee];let oe=E.indexOf(le);if(oe===-1){for(let ve=0;ve<v.length;ve++)if(ve>=E.length){E.push(le),oe=ve;break}else if(E[ve]===null){E[ve]=le,oe=ve;break}if(oe===-1)break}const Ee=v[oe];Ee&&Ee.connect(le)}}const H=new I,$=new I;function P(Y,ee,le){H.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const oe=H.distanceTo($),Ee=ee.projectionMatrix.elements,ve=le.projectionMatrix.elements,Ie=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),ke=(Ee[9]+1)/Ee[5],L=(Ee[9]-1)/Ee[5],Vt=(Ee[8]-1)/Ee[0],Ge=(ve[8]+1)/ve[0],Xe=Ie*Vt,Re=Ie*Ge,at=oe/(-Vt+Ge),Ae=at*-Vt;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const b=Ie+at,T=Ve+at,F=Xe-Ae,Q=Re+(oe-Ae),te=ke*Ve/T*b,Z=L*Ve/T*b;Y.projectionMatrix.makePerspective(F,Q,te,Z,b,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,le=Y.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(le=y.depthFar)),S.near=N.near=A.near=ee,S.far=N.far=A.far=le,(M!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,G=S.far);const oe=Y.parent,Ee=S.cameras;K(S,oe);for(let ve=0;ve<Ee.length;ve++)K(Ee[ve],oe);Ee.length===2?P(S,A,N):S.projectionMatrix.copy(A.projectionMatrix),W(Y,S,oe)};function W(Y,ee,le){le===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ie=null;function xe(Y,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let oe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let ve=0;ve<le.length;ve++){const Ie=le[ve];let Ve=null;if(p!==null)Ve=p.getViewport(Ie);else{const L=h.getViewSubImage(d,Ie);Ve=L.viewport,ve===0&&(e.setRenderTargetTextures(x,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let ke=V[ve];ke===void 0&&(ke=new Jt,ke.layers.enable(ve),ke.viewport=new et,V[ve]=ke),ke.matrix.fromArray(Ie.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ie.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ve===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(ke)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const ve=h.getDepthInformation(le[0]);ve&&ve.isValid&&ve.texture&&y.init(e,ve,r.renderState)}}for(let le=0;le<v.length;le++){const oe=E[le],Ee=v[le];oe!==null&&Ee!==void 0&&Ee.update(oe,ee,c||o)}ie&&ie(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Pe=new xv;Pe.setAnimationLoop(xe),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const br=new ui,iR=new Be;function rR(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mv(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,E=x.envMapRotation;v&&(m.envMap.value=v,br.copy(E),br.x*=-1,br.y*=-1,br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(iR.makeRotationFromEuler(br)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(g(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const R=e.render.frame;s[x.id]!==R&&(d(x),s[x.id]=R)}function u(x){const v=h();x.__bindingPointIndex=v;const E=n.createBuffer(),C=x.__size,R=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],E=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=E.length;R<A;R++){const N=Array.isArray(E[R])?E[R]:[E[R]];for(let V=0,S=N.length;V<S;V++){const M=N[V];if(p(M,R,V,C)===!0){const G=M.__offset,B=Array.isArray(M.value)?M.value:[M.value];let j=0;for(let q=0;q<B.length;q++){const H=B[q],$=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+j,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,j),j+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,E,C){const R=x.value,A=v+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const N=C[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(x){const v=x.uniforms;let E=0;const C=16;for(let A=0,N=v.length;A<N;A++){const V=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,M=V.length;S<M;S++){const G=V[S],B=Array.isArray(G.value)?G.value:[G.value];for(let j=0,q=B.length;j<q;j++){const H=B[j],$=y(H),P=E%C,K=P%$.boundary,W=P+K;E+=K,W!==0&&C-W<$.storage&&(E+=C-W),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=$.storage}}}const R=E%C;return R>0&&(E+=C-R),x.__size=E,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class oR{constructor(e={}){const{canvas:t=YM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let E=!1,C=0,R=0,A=null,N=-1,V=null;const S=new et,M=new et;let G=null;const B=new Le(0);let j=0,q=t.width,H=t.height,$=1,P=null,K=null;const W=new et(0,0,q,H),ie=new et(0,0,q,H);let xe=!1;const Pe=new Yf;let Y=!1,ee=!1;const le=new Be,oe=new Be,Ee=new I,ve=new et,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ke(){return A===null?$:1}let L=i;function Vt(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ff}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const U="webgl2";if(L=Vt(U,w),L===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,Xe,Re,at,Ae,b,T,F,Q,te,Z,Me,ce,me,qe,re,ge,De,Ue,_e,Ye,Fe,ct,D;function he(){Ge=new dA(L),Ge.init(),Fe=new qb(L,Ge),Xe=new sA(L,Ge,e,Fe),Re=new Yb(L),Xe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),at=new pA(L),Ae=new Pb,b=new Kb(L,Ge,Re,Ae,Xe,Fe,at),T=new aA(v),F=new uA(v),Q=new S1(L),ct=new iA(L,Q),te=new hA(L,Q,at,ct),Z=new gA(L,te,Q,at),Ue=new mA(L,Xe,b),re=new oA(Ae),Me=new Lb(v,T,F,Ge,Xe,ct,re),ce=new rR(v,Ae),me=new Db,qe=new zb(Ge),De=new nA(v,T,F,Re,Z,d,l),ge=new Wb(v,Z,Xe),D=new sR(L,at,Xe,Re),_e=new rA(L,Ge,at),Ye=new fA(L,Ge,at),at.programs=Me.programs,v.capabilities=Xe,v.extensions=Ge,v.properties=Ae,v.renderLists=me,v.shadowMap=ge,v.state=Re,v.info=at}he();const X=new nR(v,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(q,H,!1))},this.getSize=function(w){return w.set(q,H)},this.setSize=function(w,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,H=U,t.width=Math.floor(w*$),t.height=Math.floor(U*$),k===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*$,H*$).floor()},this.setDrawingBufferSize=function(w,U,k){q=w,H=U,$=k,t.width=Math.floor(w*k),t.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,U,k,z){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,U,k,z),Re.viewport(S.copy(W).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,U,k,z){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,k,z),Re.scissor(M.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){Re.setScissorTest(xe=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,U=!0,k=!0){let z=0;if(w){let O=!1;if(A!==null){const se=A.texture.format;O=se===jf||se===Gf||se===Vf}if(O){const se=A.texture.type,de=se===Ui||se===jr||se===da||se===Ks||se===Bf||se===zf,ye=De.getClearColor(),Se=De.getClearAlpha(),Ce=ye.r,Ne=ye.g,Te=ye.b;de?(p[0]=Ce,p[1]=Ne,p[2]=Te,p[3]=Se,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Ce,g[1]=Ne,g[2]=Te,g[3]=Se,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),qe.dispose(),Ae.dispose(),T.dispose(),F.dispose(),Z.dispose(),ct.dispose(),D.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",rp),X.removeEventListener("sessionend",sp),yr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=at.autoReset,U=ge.enabled,k=ge.autoUpdate,z=ge.needsUpdate,O=ge.type;he(),at.autoReset=w,ge.enabled=U,ge.autoUpdate=k,ge.needsUpdate=z,ge.type=O}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const U=w.target;U.removeEventListener("dispose",$e),Tt(U)}function Tt(w){on(w),Ae.remove(w)}function on(w){const U=Ae.get(w).programs;U!==void 0&&(U.forEach(function(k){Me.releaseProgram(k)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,z,O,se){U===null&&(U=Ie);const de=O.isMesh&&O.matrixWorld.determinant()<0,ye=Dv(w,U,k,z,O);Re.setMaterial(z,de);let Se=k.index,Ce=1;if(z.wireframe===!0){if(Se=te.getWireframeAttribute(k),Se===void 0)return;Ce=2}const Ne=k.drawRange,Te=k.attributes.position;let it=Ne.start*Ce,dt=(Ne.start+Ne.count)*Ce;se!==null&&(it=Math.max(it,se.start*Ce),dt=Math.min(dt,(se.start+se.count)*Ce)),Se!==null?(it=Math.max(it,0),dt=Math.min(dt,Se.count)):Te!=null&&(it=Math.max(it,0),dt=Math.min(dt,Te.count));const yt=dt-it;if(yt<0||yt===1/0)return;ct.setup(O,z,ye,k,Se);let mn,tt=_e;if(Se!==null&&(mn=Q.get(Se),tt=Ye,tt.setIndex(mn)),O.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*ke()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(O.isLine){let we=z.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*ke()),O.isLineSegments?tt.setMode(L.LINES):O.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else O.isPoints?tt.setMode(L.POINTS):O.isSprite&&tt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,Ot=O._multiDrawCounts,nt=O._multiDrawCount,kn=Se?Q.get(Se).bytesPerElement:1,Kr=Ae.get(z).currentProgram.getUniforms();for(let gn=0;gn<nt;gn++)Kr.setValue(L,"_gl_DrawID",gn),tt.render(we[gn]/kn,Ot[gn])}else if(O.isInstancedMesh)tt.renderInstances(it,yt,O.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ot=Math.min(k.instanceCount,we);tt.renderInstances(it,yt,Ot)}else tt.render(it,yt)};function Je(w,U,k){w.transparent===!0&&w.side===si&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,wa(w,U,k),w.side=Di,w.needsUpdate=!0,wa(w,U,k),w.side=si):wa(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),m=qe.get(k),m.init(U),x.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const z=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ye=se[de];Je(ye,k,O),z.add(ye)}else Je(se,k,O),z.add(se)}),x.pop(),m=null,z},this.compileAsync=function(w,U,k=null){const z=this.compile(w,U,k);return new Promise(O=>{function se(){if(z.forEach(function(de){Ae.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(w);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let an=null;function pi(w){an&&an(w)}function rp(){yr.stop()}function sp(){yr.start()}const yr=new xv;yr.setAnimationLoop(pi),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(w){an=w,X.setAnimationLoop(w),w===null?yr.stop():yr.start()},X.addEventListener("sessionstart",rp),X.addEventListener("sessionend",sp),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),m=qe.get(w,x.length),m.init(U),x.push(m),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(oe),ee=this.localClippingEnabled,Y=re.init(this.clippingPlanes,ee),y=me.get(w,f.length),y.init(),f.push(y),X.enabled===!0&&X.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&kc(se,U,-1/0,v.sortObjects)}kc(w,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(P,K),Ve=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ve&&De.addToRenderList(y,w),this.info.render.frame++,Y===!0&&re.beginShadows();const k=m.state.shadowsArray;ge.render(k,w,U),Y===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,O=y.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let de=0,ye=se.length;de<ye;de++){const Se=se[de];ap(z,O,w,Se)}Ve&&De.render(w);for(let de=0,ye=se.length;de<ye;de++){const Se=se[de];op(y,w,Se,Se.viewport)}}else O.length>0&&ap(z,O,w,U),Ve&&De.render(w),op(y,w,U);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),ct.resetDefaultState(),N=-1,V=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function kc(w,U,k,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pe.intersectsSprite(w)){z&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const de=Z.update(w),ye=w.material;ye.visible&&y.push(w,de,ye,k,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pe.intersectsObject(w))){const de=Z.update(w),ye=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ve.copy(de.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(ye)){const Se=de.groups;for(let Ce=0,Ne=Se.length;Ce<Ne;Ce++){const Te=Se[Ce],it=ye[Te.materialIndex];it&&it.visible&&y.push(w,de,it,k,ve.z,Te)}}else ye.visible&&y.push(w,de,ye,k,ve.z,null)}}const se=w.children;for(let de=0,ye=se.length;de<ye;de++)kc(se[de],U,k,z)}function op(w,U,k,z){const O=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(k),Y===!0&&re.setGlobalState(v.clippingPlanes,k),z&&Re.viewport(S.copy(z)),O.length>0&&Ta(O,U,k),se.length>0&&Ta(se,U,k),de.length>0&&Ta(de,U,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ap(w,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Wr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ya:Ui,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[z.id],de=z.viewport||S;se.setSize(de.z,de.w);const ye=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(B),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&De.render(k);const Se=v.toneMapping;v.toneMapping=fr;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),Y===!0&&re.setGlobalState(v.clippingPlanes,z),Ta(w,k,z),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,it=U.length;Te<it;Te++){const dt=U[Te],yt=dt.object,mn=dt.geometry,tt=dt.material,we=dt.group;if(tt.side===si&&yt.layers.test(z.layers)){const Ot=tt.side;tt.side=pn,tt.needsUpdate=!0,lp(yt,k,z,mn,tt,we),tt.side=Ot,tt.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se))}v.setRenderTarget(ye),v.setClearColor(B,j),Ce!==void 0&&(z.viewport=Ce),v.toneMapping=Se}function Ta(w,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=w.length;O<se;O++){const de=w[O],ye=de.object,Se=de.geometry,Ce=z===null?de.material:z,Ne=de.group;ye.layers.test(k.layers)&&lp(ye,U,k,Se,Ce,Ne)}}function lp(w,U,k,z,O,se){w.onBeforeRender(v,U,k,z,O,se),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,U,k,z,w,se),O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,v.renderBufferDirect(k,U,z,O,w,se),O.side=Di,O.needsUpdate=!0,v.renderBufferDirect(k,U,z,O,w,se),O.side=si):v.renderBufferDirect(k,U,z,O,w,se),w.onAfterRender(v,U,k,z,O,se)}function wa(w,U,k){U.isScene!==!0&&(U=Ie);const z=Ae.get(w),O=m.state.lights,se=m.state.shadowsArray,de=O.state.version,ye=Me.getParameters(w,O.state,se,U,k),Se=Me.getProgramCacheKey(ye);let Ce=z.programs;z.environment=w.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(w.isMeshStandardMaterial?F:T).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",$e),Ce=new Map,z.programs=Ce);let Ne=Ce.get(Se);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===de)return up(w,ye),Ne}else ye.uniforms=Me.getUniforms(w),w.onBeforeCompile(ye,v),Ne=Me.acquireProgram(ye,Se),Ce.set(Se,Ne),z.uniforms=ye.uniforms;const Te=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=re.uniform),up(w,ye),z.needsLights=Ov(w),z.lightsStateVersion=de,z.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function cp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=kl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function up(w,U){const k=Ae.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Dv(w,U,k,z,O){U.isScene!==!0&&(U=Ie),b.resetTextureUnits();const se=U.fog,de=z.isMeshStandardMaterial?U.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ht,Se=(z.isMeshStandardMaterial?F:T).get(z.envMap||de),Ce=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color;let yt=fr;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=v.toneMapping);const mn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=mn!==void 0?mn.length:0,we=Ae.get(z),Ot=m.state.lights;if(Y===!0&&(ee===!0||w!==V)){const Rn=w===V&&z.id===N;re.setState(z,w,Rn)}let nt=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ot.state.version||we.outputColorSpace!==ye||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==Se||z.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Ne||we.morphTargets!==Te||we.morphNormals!==it||we.morphColors!==dt||we.toneMapping!==yt||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=z.version);let kn=we.currentProgram;nt===!0&&(kn=wa(z,U,O));let Kr=!1,gn=!1,Bc=!1;const Et=kn.getUniforms(),Fi=we.uniforms;if(Re.useProgram(kn.program)&&(Kr=!0,gn=!0,Bc=!0),z.id!==N&&(N=z.id,gn=!0),Kr||V!==w){Xe.reverseDepthBuffer?(le.copy(w.projectionMatrix),KM(le),qM(le),Et.setValue(L,"projectionMatrix",le)):Et.setValue(L,"projectionMatrix",w.projectionMatrix),Et.setValue(L,"viewMatrix",w.matrixWorldInverse);const Rn=Et.map.cameraPosition;Rn!==void 0&&Rn.setValue(L,Ee.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Et.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,gn=!0,Bc=!0)}if(O.isSkinnedMesh){Et.setOptional(L,O,"bindMatrix"),Et.setOptional(L,O,"bindMatrixInverse");const Rn=O.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Et.setValue(L,"boneTexture",Rn.boneTexture,b))}O.isBatchedMesh&&(Et.setOptional(L,O,"batchingTexture"),Et.setValue(L,"batchingTexture",O._matricesTexture,b),Et.setOptional(L,O,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",O._indirectTexture,b),Et.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",O._colorsTexture,b));const zc=k.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0)&&Ue.update(O,k,kn),(gn||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,Et.setValue(L,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Fi.envMap.value=Se,Fi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Fi.envMapIntensity.value=U.environmentIntensity),gn&&(Et.setValue(L,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Uv(Fi,Bc),se&&z.fog===!0&&ce.refreshFogUniforms(Fi,se),ce.refreshMaterialUniforms(Fi,z,$,H,m.state.transmissionRenderTarget[w.id]),kl.upload(L,cp(we),Fi,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kl.upload(L,cp(we),Fi,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Et.setValue(L,"center",O.center),Et.setValue(L,"modelViewMatrix",O.modelViewMatrix),Et.setValue(L,"normalMatrix",O.normalMatrix),Et.setValue(L,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rn=z.uniformsGroups;for(let Hc=0,Fv=Rn.length;Hc<Fv;Hc++){const dp=Rn[Hc];D.update(dp,kn),D.bind(dp,kn)}}return kn}function Uv(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ov(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,k){Ae.get(w.texture).__webglTexture=U,Ae.get(w.depthTexture).__webglTexture=k;const z=Ae.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const k=Ae.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){A=w,C=U,R=k;let z=!0,O=null,se=!1,de=!1;if(w){const Se=Ae.get(w);if(Se.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Se.__hasExternalTextures)b.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Ae.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Ne=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?O=Ne[U][k]:O=Ne[U],se=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?O=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[k]:O=Ne,S.copy(w.viewport),M.copy(w.scissor),G=w.scissorTest}else S.copy(W).multiplyScalar($).floor(),M.copy(ie).multiplyScalar($).floor(),G=xe;if(Re.bindFramebuffer(L.FRAMEBUFFER,O)&&z&&Re.drawBuffers(w,O),Re.viewport(S),Re.scissor(M),Re.setScissorTest(G),se){const Se=Ae.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,k)}else if(de){const Se=Ae.get(w.texture),Ce=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Ce)}N=-1},this.readRenderTargetPixels=function(w,U,k,z,O,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Re.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Se=w.texture,Ce=Se.format,Ne=Se.type;if(!Xe.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&k>=0&&k<=w.height-O&&L.readPixels(U,k,z,O,Fe.convert(Ce),Fe.convert(Ne),se)}finally{const Se=A!==null?Ae.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,z,O,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Se=w.texture,Ce=Se.format,Ne=Se.type;if(!Xe.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-z&&k>=0&&k<=w.height-O){Re.bindFramebuffer(L.FRAMEBUFFER,ye);const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(U,k,z,O,Fe.convert(Ce),Fe.convert(Ne),0);const it=A!==null?Ae.get(A).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,it);const dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $M(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Te),L.deleteSync(dt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(Fl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-k),O=Math.floor(w.image.width*z),se=Math.floor(w.image.height*z),de=U!==null?U.x:0,ye=U!==null?U.y:0;b.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,de,ye,O,se),Re.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,z=null,O=0){w.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let se,de,ye,Se,Ce,Ne;k!==null?(se=k.max.x-k.min.x,de=k.max.y-k.min.y,ye=k.min.x,Se=k.min.y):(se=w.image.width,de=w.image.height,ye=0,Se=0),z!==null?(Ce=z.x,Ne=z.y):(Ce=0,Ne=0);const Te=Fe.convert(U.format),it=Fe.convert(U.type);b.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const dt=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),tt=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),Ot=w.isCompressedTexture?w.mipmaps[O]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ce,Ne,se,de,Te,it,Ot.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ce,Ne,Ot.width,Ot.height,Te,Ot.data):L.texSubImage2D(L.TEXTURE_2D,O,Ce,Ne,se,de,Te,it,Ot),L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,tt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),O===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,z=null,O=0){w.isTexture!==!0&&(Fl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0);let se,de,ye,Se,Ce,Ne,Te,it,dt;const yt=w.isCompressedTexture?w.mipmaps[O]:w.image;k!==null?(se=k.max.x-k.min.x,de=k.max.y-k.min.y,ye=k.max.z-k.min.z,Se=k.min.x,Ce=k.min.y,Ne=k.min.z):(se=yt.width,de=yt.height,ye=yt.depth,Se=0,Ce=0,Ne=0),z!==null?(Te=z.x,it=z.y,dt=z.z):(Te=0,it=0,dt=0);const mn=Fe.convert(U.format),tt=Fe.convert(U.type);let we;if(U.isData3DTexture)b.setTexture3D(U,0),we=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ot=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Kr=L.getParameter(L.UNPACK_SKIP_ROWS),gn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(we,O,Te,it,dt,se,de,ye,mn,tt,yt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(we,O,Te,it,dt,se,de,ye,mn,yt.data):L.texSubImage3D(we,O,Te,it,dt,se,de,ye,mn,tt,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),O===0&&U.generateMipmaps&&L.generateMipmap(we),Re.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Re.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wf?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Dc?"display-p3":"srgb"}}class aR extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new I;class qf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Eg=new I,Mg=new et,Tg=new et,cR=new I,wg=new Be,ul=new I,Wu=new di,Ag=new Be,Xu=new Sa;class uR extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rm,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wu.copy(this.boundingSphere),Wu.applyMatrix4(r),e.ray.intersectsSphere(Wu)!==!1&&(Ag.copy(r).invert(),Xu.copy(e.ray).applyMatrix4(Ag),!(this.boundingBox!==null&&Xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Mg.fromBufferAttribute(r.attributes.skinIndex,e),Tg.fromBufferAttribute(r.attributes.skinWeight,e),Eg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Tg.getComponent(s);if(o!==0){const a=Mg.getComponent(s);wg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(cR.copy(Eg).applyMatrix4(wg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tv extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wv extends Ut{constructor(e=null,t=1,i=1,r,s,o,a,l,c=en,u=en,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bg=new Be,dR=new Be;class Zf{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:dR;bg.multiplyMatrices(a,t[s]),bg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Zf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new wv(t,e,e,Dn,$n);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Tv),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Oh extends nn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Be,Rg=new Be,dl=[],Cg=new En,hR=new Be,Mo=new Mn,To=new di;class fR extends Mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,hR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Cg.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Cg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),To.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(To)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),Rg.multiplyMatrices(i,ds),Mo.matrixWorld=Rg,Mo.raycast(e,dl);for(let o=0,a=dl.length;o<a;o++){const l=dl[o];l.instanceId=s,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wv(new Float32Array(r*this.count),r,this.count,Hf,$n));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qf extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new I,gc=new I,Ng=new Be,wo=new Sa,hl=new di,Yu=new I,Lg=new I;class Jf extends xt{constructor(e=new ei,t=new Qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)mc.fromBufferAttribute(t,r-1),gc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Ng.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const f=u.getX(y),x=u.getX(y+1),v=fl(this,e,wo,l,f,x);v&&t.push(v)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(p),f=fl(this,e,wo,l,y,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const f=fl(this,e,wo,l,y,y+1);f&&t.push(f)}if(this.isLineLoop){const y=fl(this,e,wo,l,g-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fl(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(mc.fromBufferAttribute(o,r),gc.fromBufferAttribute(o,s),t.distanceSqToSegment(mc,gc,Yu,Lg)>i)return;Yu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Yu);if(!(l<e.near||l>e.far))return{distance:l,point:Lg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Pg=new I,Ig=new I;class Av extends Jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Pg.fromBufferAttribute(t,r),Ig.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pg.distanceTo(Ig);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pR extends Jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bv extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dg=new Be,Fh=new Sa,pl=new di,ml=new I;class mR extends xt{constructor(e=new ei,t=new bv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Dg.copy(r).invert(),Fh.copy(e.ray).applyMatrix4(Dg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);ml.fromBufferAttribute(h,m),Ug(ml,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,y=p;g<y;g++)ml.fromBufferAttribute(h,g),Ug(ml,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ug(n,e,t,i,r,s,o){const a=Fh.distanceSqToPoint(n);if(a<t){const l=new I;Fh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Os extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _R(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Og(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Rv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Ma{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xR extends Ma{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cm,endingEnd:Cm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nm:s=e,a=2*t-i;break;case Lm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nm:o=e,l=2*i-t;break;case Lm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,E=p*m-p*y;for(let C=0;C!==a;++C)s[C]=f*o[u+C]+x*o[c+C]+v*o[l+C]+E*o[h+C];return s}}class vR extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class yR extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case gu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&gR(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===gu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){const y=t[h+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=fa;class oo extends fi{constructor(e,t,i){super(e,t,i)}}oo.prototype.ValueTypeName="bool";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=ha;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class Cv extends fi{}Cv.prototype.ValueTypeName="color";class Js extends fi{}Js.prototype.ValueTypeName="number";class SR extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ci.slerpFlat(s,0,o,c-a,o,c,l);return s}}class eo extends fi{InterpolantFactoryMethodLinear(e){return new SR(this.times,this.values,this.getValueSize(),e)}}eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends fi{constructor(e,t,i){super(e,t,i)}}ao.prototype.ValueTypeName="string";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=ha;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class to extends fi{}to.prototype.ValueTypeName="vector";class ER{constructor(e="",t=-1,i=[],r=vM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(TR(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(fi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=_R(l);l=Og(l,1,u),c=Og(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,p,g,y){if(p.length!==0){const m=[],f=[];Rv(p,m,f,g),m.length!==0&&y.push(new h(d,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)p[d[g].morphTargets[y]]=-1;for(const y in p){const m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),f.push(v.morphTarget===y?1:0)}r.push(new Js(".morphTargetInfluence["+y+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(to,p+".position",d,"pos",r),i(eo,p+".quaternion",d,"rot",r),i(to,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function MR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return to;case"color":return Cv;case"quaternion":return eo;case"bool":case"boolean":return oo;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function TR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=MR(n.type);if(n.times===void 0){const t=[],i=[];Rv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ir={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const AR=new wR;class lo{constructor(e){this.manager=e!==void 0?e:AR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class bR extends Error{constructor(e,t){super(e),this.response=t}}class Nv extends lo{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let y=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:v,value:E})=>{if(v)f.close();else{y+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let R=0,A=u.length;R<A;R++){const N=u[R];N.onProgress&&N.onProgress(C)}f.enqueue(E),x()}},v=>{f.error(v)})}}});return new Response(m)}else throw new bR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ir.add(e,c);const u=yi[e];delete yi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class RR extends lo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ir.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=pa("img");function l(){u(),ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class CR extends lo{constructor(e){super(e)}load(e,t,i,r){const s=new Ut,o=new RR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Fc extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $u=new Be,Fg=new I,kg=new I;class ep{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fg),kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kg),t.updateMatrixWorld(),$u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NR extends ep{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LR extends Fc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new NR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bg=new Be,Ao=new I,Ku=new I;class PR extends ep{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),Ku.copy(i.position),Ku.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ku),i.updateMatrixWorld(),r.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Bg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bg)}}class IR extends Fc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class DR extends ep{constructor(){super(new $f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Do extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new DR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UR extends Fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class OR extends lo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ir.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ir.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ir.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ir.add(e,l),s.manager.itemStart(e)}}const tp="\\[\\]\\.:\\/",FR=new RegExp("["+tp+"]","g"),np="[^"+tp+"]",kR="[^"+tp.replace("\\.","")+"]",BR=/((?:WC+[\/:])*)/.source.replace("WC",np),zR=/(WCOD+)?/.source.replace("WCOD",kR),HR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",np),VR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",np),GR=new RegExp("^"+BR+zR+HR+VR+"$"),jR=["material","materials","bones","map"];class WR{constructor(e,t,i){const r=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FR,"")}static parseTrackName(e){const t=GR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);jR.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=WR;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XR extends Av{constructor(e=10,t=10,i=4473924,r=8947848){i=new Le(i),r=new Le(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=d===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const u=new ei;u.setAttribute("position",new Qn(l,3)),u.setAttribute("color",new Qn(c,3));const h=new Qf({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class YR extends $r{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);const Hg={type:"change"},ip={type:"start"},Lv={type:"end"},_l=new Sa,Vg=new $i,$R=Math.cos(70*av.DEG2RAD),bt=new I,ln=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6;class KR extends YR{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ci,this._lastTargetPosition=new I,this._quat=new ci().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zg,this._sphericalDelta=new zg,this._scale=1,this._panOffset=new I,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new I,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZR.bind(this),this._onPointerDown=qR.bind(this),this._onPointerUp=QR.bind(this),this._onContextMenu=sC.bind(this),this._onMouseWheel=tC.bind(this),this._onKeyDown=nC.bind(this),this._onTouchStart=iC.bind(this),this._onTouchMove=rC.bind(this),this._onMouseDown=JR.bind(this),this._onMouseMove=eC.bind(this),this._interceptControlDown=oC.bind(this),this._interceptControlUp=aC.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hg),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<$R?this.object.lookAt(this.target):(Vg.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(Vg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(Hg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ZR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function QR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lv),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function JR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Ps.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Ps.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ip)}function eC(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tC(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lv))}function nC(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function iC(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(ip)}function rC(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function sC(n){this.enabled!==!1&&n.preventDefault()}function oC(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aC(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gg(n,e){if(e===yM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ih||e===rv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Ih)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class lC extends lo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new TC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new gC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new mC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new AC(t)}),this.register(function(t){return new bC(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xo.extractUrlBase(e);o=Xo.resolveURL(c,this.path)}else o=Xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Nv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pv){try{o[je.KHR_BINARY_GLTF]=new RC(e)}catch(h){r&&r(h);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new HC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:o[h]=new dC;break;case je.KHR_DRACO_MESH_COMPRESSION:o[h]=new CC(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[h]=new NC;break;case je.KHR_MESH_QUANTIZATION:o[h]=new LC;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function cC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uC{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Do(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new IR(u),c.distance=h;break;case"spot":c=new LR(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class dC{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return tr}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Qt))}return Promise.all(r)}}class hC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class fC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class pC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class mC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class gC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Qt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _C{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class xC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Ht),Promise.all(s)}}class vC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class yC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Qt)),Promise.all(s)}}class SC{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class EC{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class MC{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class TC{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wC{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AC{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class bC{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const y=new Be,m=new I,f=new ci,x=new I(1,1,1),v=new fR(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&x.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,y.compose(m,f,x));for(const E in l)if(E==="_COLOR_0"){const C=l[E];v.instanceColor=new Oh(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);xt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Pv="glTF",bo=12,jg={JSON:1313821514,BIN:5130562};class RC{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-bo,s=new DataView(e,bo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===jg.JSON){const c=new Uint8Array(e,bo+o,a);this.content=i.decode(c)}else if(l===jg.BIN){const c=bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=kh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=kh[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=Fs[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const y=p.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(p)},a,c,Ht,d)})})}}class NC{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LC{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Iv extends Ma{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,d=h*h,p=d*h,g=e*c,y=g-c,m=-2*p+3*d,f=p-d,x=1-m,v=f-d+h;for(let E=0;E!==a;E++){const C=o[y+E+a],R=o[y+E+l]*u,A=o[g+E+a],N=o[g+E]*u;s[E]=x*C+v*R+m*A+f*N}return s}}const PC=new ci;class IC extends Iv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return PC.fromArray(s).normalize().toArray(s),s}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wg={9728:en,9729:yn,9984:$x,9985:Ll,9986:Po,9987:bi},Xg={33071:er,33648:uc,10497:$s},Zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DC={CUBICSPLINE:void 0,LINEAR:fa,STEP:ha},Qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Os({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),n.DefaultMaterial}function Rr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function FC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kC(n){let e;const t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ju(t.attributes):e=n.indices+":"+Ju(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ju(n.targets[i]);return e}function Ju(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Bh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zC=new Be;class HC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new CR(this.options.manager):this.textureLoader=new OR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Rr(s,a,r),Mi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Xo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Zu[r.type],a=Fs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new nn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Zu[r.type],c=Fs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let y,m;if(p&&p!==h){const f=Math.floor(d/p),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let v=t.cache.get(x);v||(y=new c(a,f*p,r.count*p/u),v=new lR(y,p/u),t.cache.add(x,v)),m=new qf(v,l,d%p/u,g)}else a===null?y=new c(r.count*l):y=new c(a,d,r.count*l),m=new nn(y,l,g);if(r.sparse!==void 0){const f=Zu.SCALAR,x=Fs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,C=new x(o[1],v,r.sparse.count*f),R=new c(o[2],E,r.sparse.count*l);a!==null&&(m=new nn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,N=C.length;A<N;A++){const V=C[A];if(m.setX(V,R[A*l]),l>=2&&m.setY(V,R[A*l+1]),l>=3&&m.setZ(V,R[A*l+2]),l>=4&&m.setW(V,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Wg[d.magFilter]||yn,u.minFilter=Wg[d.minFilter]||bi,u.wrapS=Xg[d.wrapS]||$s,u.wrapT=Xg[d.wrapT]||$s,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Ut(y);m.needsUpdate=!0,d(m)}),t.load(Xo.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Mi(h,o),h.userData.mimeType=o.mimeType||BC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bv,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qf,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Os}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=r[je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Qt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=si);const u=s.alphaMode||Qu.OPAQUE;if(u===Qu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==tr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==tr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==tr){const h=s.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],Ht)}return s.emissiveTexture!==void 0&&o!==tr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Qt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Mi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Rr(r,h,s),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=kC(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Yg(new ei,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?UC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const y=u[p],m=o[p];let f;const x=c[p];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new uR(y,x):new Mn(y,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?f.geometry=Gg(f.geometry,rv):m.mode===Nn.TRIANGLE_FAN&&(f.geometry=Gg(f.geometry,Ih));else if(m.mode===Nn.LINES)f=new Av(y,x);else if(m.mode===Nn.LINE_STRIP)f=new Jf(y,x);else if(m.mode===Nn.LINE_LOOP)f=new pR(y,x);else if(m.mode===Nn.POINTS)f=new mR(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&FC(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Mi(f,s),m.extensions&&Rr(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Rr(r,h[0],s),h[0];const d=new nr;s.extensions&&Rr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(av.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new $f(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Be;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zf(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const p=r.channels[h],g=r.samplers[p.sampler],y=p.target,m=y.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],y=h[3],m=h[4],f=[];for(let x=0,v=d.length;x<v;x++){const E=d[x],C=p[x],R=g[x],A=y[x],N=m[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const V=i._createAnimationTracks(E,C,R,A,N);if(V)for(let S=0;S<V.length;S++)f.push(V[S])}return new ER(s,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,zC)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Tv:c.length>1?u=new nr:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Mi(u,s),s.extensions&&Rr(i,u,s),s.matrix!==void 0){const h=new Be;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new nr;i.name&&(s.name=r.createUniqueName(i.name)),Mi(s,i),i.extensions&&Rr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof li||d instanceof Ut)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Wi[s.path]===Wi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Wi[s.path]){case Wi.weights:c=Js;break;case Wi.rotation:c=eo;break;case Wi.position:case Wi.scale:c=to;break;default:switch(i.itemSize){case 1:c=Js;break;case 2:case 3:default:c=to;break}break}const u=r.interpolation!==void 0?DC[r.interpolation]:fa,h=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Wi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Bh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof eo?IC:Iv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VC(n,e,t){const i=e.attributes,r=new En;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Bh(Fs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const y=Bh(Fs[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new di;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Yg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=kh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==Ht&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Mi(n,e),VC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?OC(n,e.targets,t):n})}const GC=({frame:n})=>{var V,S;const e=be.useRef(null),t=be.useRef(null),i=be.useRef([]),r=be.useRef(null),s=be.useRef(null),o=be.useRef(null),a=be.useRef(null),l=be.useRef([]),[c,u]=be.useState(!1),[h,d]=be.useState(0),[p,g]=be.useState(!0),[y,m]=be.useState(null),{telemetry:f}=n,x=(f==null?void 0:f.cht)??142,v=(f==null?void 0:f.egt)??765;f==null||f.rpm;const E=((V=n.fault_status)==null?void 0:V.active_fault)??"none",C=x>=175||v>=820||E==="cooling_blockage"||E==="oil_leak",R=!C&&(x>=155||v>=790||E==="lean_mixture"||E==="cylinder_misfire");be.useEffect(()=>{const M=e.current;if(!M)return;const G=M.clientWidth,B=M.clientHeight,j=new aR;o.current=j,j.background=new Le(16777215);const q=new Jt(45,G/B,.1,1e3);q.position.set(6.5,4.2,7.5),s.current=q;const H=new oR({antialias:!0,alpha:!1,powerPreference:"high-performance"});H.setSize(G,B),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.shadowMap.enabled=!0,H.shadowMap.type=jx,H.toneMapping=Xx,H.toneMappingExposure=1,M.replaceChildren(H.domElement);const $=new KR(q,H.domElement);r.current=$,$.enableDamping=!0,$.dampingFactor=.05,$.enableZoom=!0,$.enableRotate=!0,$.enablePan=!0,$.minDistance=1.5,$.maxDistance=50,$.target.set(0,.5,0);const P=new XR(10,10,14870768,14870768);P.position.y=0,j.add(P),a.current=P;const K=new UR(16777215,1.8);j.add(K);const W=new Do(16777215,2);W.position.set(10,15,10),W.castShadow=!0,W.shadow.mapSize.width=2048,W.shadow.mapSize.height=2048,W.shadow.bias=-1e-4,j.add(W);const ie=new Do(16777215,1.2);ie.position.set(-10,10,-10),j.add(ie);const xe=new Do(16777215,.8);xe.position.set(0,12,-15),j.add(xe);const Pe=new Do(16777215,.6);Pe.position.set(0,-10,0),j.add(Pe);const Y=new lC;l.current=[],i.current=[],Y.load("/rustom.glb",Ee=>{const ve=Ee.scene,Ie=new En().setFromObject(ve),Ve=new I;Ie.getSize(Ve);const ke=new I;Ie.getCenter(ke),ve.position.x-=ke.x,ve.position.y-=ke.y,ve.position.z-=ke.z;const L=new nr;L.add(ve);const Vt=Math.max(Ve.x,Ve.y,Ve.z);if(Vt>0){const Ae=5.5/Vt;L.scale.setScalar(Ae)}const Ge=new En().setFromObject(L),Xe=new I;Ge.getCenter(Xe),L.position.x-=Xe.x,L.position.z-=Xe.z,L.position.y-=Ge.min.y,L.traverse(Ae=>{if(Ae.isMesh){const b=Ae;b.castShadow=!0,b.receiveShadow=!0,b.material&&(Array.isArray(b.material)?(l.current.push(...b.material),b.material.forEach(T=>{/engine|missile/i.test(T.name)&&T instanceof Os&&i.current.push(T)})):(l.current.push(b.material),/engine|missile/i.test(b.material.name)&&b.material instanceof Os&&i.current.push(b.material)))}}),j.add(L),t.current=L;const Re=new En().setFromObject(L),at=new I;Re.getCenter(at),$.target.copy(at),$.update(),g(!1)},Ee=>{if(Ee.total>0){const ve=Math.min(100,Math.round(Ee.loaded/Ee.total*100));d(ve)}else{const ve=Ee.loaded/1048576,Ie=Math.min(99,Math.round(ve/140*100));d(Ie)}},Ee=>{console.error("Failed to load /rustom.glb model:",Ee),m("Failed to load 3D CAD model (/rustom.glb). Please verify file availability."),g(!1)});let ee;const le=()=>{ee=requestAnimationFrame(le),$.update(),H.render(j,q)};le();const oe=()=>{if(!M)return;const Ee=M.clientWidth,ve=M.clientHeight;q.aspect=Ee/ve,q.updateProjectionMatrix(),H.setSize(Ee,ve)};return window.addEventListener("resize",oe),()=>{window.removeEventListener("resize",oe),cancelAnimationFrame(ee),H.dispose(),M.replaceChildren()}},[]),be.useEffect(()=>{l.current.forEach(M=>{(M instanceof Os||M instanceof tr)&&(M.wireframe=c)})},[c]),be.useEffect(()=>{i.current.forEach(M=>{C?(M.color.setHex(15680580),M.emissive.setHex(15680580),M.emissiveIntensity=.85):R?(M.color.setHex(16096779),M.emissive.setHex(16096779),M.emissiveIntensity=.5):(M.color.setHex(16777215),M.emissive.setHex(0),M.emissiveIntensity=0)})},[C,R,x,v,E]);const A=M=>{if(!s.current||!r.current)return;const G=s.current,B=r.current;let j=.8;if(t.current){const q=new En().setFromObject(t.current);j=(q.min.y+q.max.y)/2}switch(M){case"ISOMETRIC":G.position.set(6.5,4.2,7.5),B.target.set(0,j,0);break;case"TOP":G.position.set(0,11,.01),B.target.set(0,j,0);break;case"SIDE":G.position.set(9,j,0),B.target.set(0,j,0);break;case"FRONT":G.position.set(0,j,9),B.target.set(0,j,0);break}B.update()},N=()=>A("ISOMETRIC");return _.jsxs("div",{className:"relative w-full h-full min-h-[500px] bg-white border border-slate-300 shadow-sm overflow-hidden select-none flex flex-col font-sans",children:[_.jsxs("div",{className:"absolute top-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between p-3 bg-white/90 backdrop-blur-md border-b border-slate-200",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold tracking-widest text-slate-800",children:[_.jsx(bE,{className:"w-4 h-4 text-blue-600 animate-spin-slow"}),"3D DIGITAL TWIN // DRDO RUSTOM-II (TAPAS) CAD"]}),_.jsx("span",{className:"text-slate-300",children:"|"}),_.jsxs("span",{className:"text-[11px] text-slate-600",children:["ENGINE BAY: ",C?_.jsx("span",{className:"text-red-600 font-bold animate-pulse",children:"ALARM OVERHEAT"}):R?_.jsx("span",{className:"text-amber-600 font-bold",children:"CAUTION THERMAL ELEVATION"}):_.jsx("span",{className:"text-emerald-600 font-semibold",children:"NOMINAL CRUISE"})]})]}),_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("button",{onClick:()=>A("ISOMETRIC"),className:"px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition",title:"Isometric Perspective",children:"ISO"}),_.jsx("button",{onClick:()=>A("TOP"),className:"px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition",title:"Planform View",children:"TOP"}),_.jsx("button",{onClick:()=>A("SIDE"),className:"px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition",title:"Lateral Profile",children:"SIDE"}),_.jsx("button",{onClick:()=>A("FRONT"),className:"px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition",title:"Frontal Profile",children:"FRONT"}),_.jsxs("button",{onClick:()=>u(!c),className:`px-2.5 py-1 text-[11px] font-mono font-semibold rounded border transition flex items-center gap-1 ${c?"bg-blue-50 border-blue-500 text-blue-700":"bg-slate-100 border-slate-300 text-slate-700 hover:border-blue-500"}`,title:"Toggle CAD Structural Wireframe",children:[_.jsx(IE,{className:"w-3 h-3"}),"WIRE"]}),_.jsx("button",{onClick:N,className:"p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition",title:"Reset Camera Center",children:_.jsx(UE,{className:"w-3.5 h-3.5"})})]})]}),p&&_.jsx("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/85 backdrop-blur-sm select-none",children:_.jsxs("div",{className:"w-72 p-5 bg-white border border-slate-200 shadow-xl rounded-lg space-y-3 font-mono",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-slate-800",children:[_.jsxs("span",{className:"flex items-center gap-2",children:[_.jsx(DE,{className:"w-4 h-4 text-blue-600 animate-spin"}),"LOADING /rustom.glb"]}),_.jsxs("span",{className:"text-blue-600",children:[h,"%"]})]}),_.jsx("div",{className:"w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200",children:_.jsx("div",{className:"h-full bg-blue-600 transition-all duration-200 ease-out",style:{width:`${h}%`}})}),_.jsx("div",{className:"text-[11px] text-slate-500 text-center",children:"Centering & Scaling CAD Model to Viewport..."})]})}),y&&_.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-white/95 p-6 text-center font-mono",children:_.jsxs("div",{className:"p-4 border border-red-300 bg-red-50 text-red-700 rounded-lg text-xs space-y-2 max-w-md shadow-sm",children:[_.jsxs("div",{className:"font-bold flex items-center justify-center gap-1.5",children:[_.jsx(ua,{className:"w-4 h-4 text-red-600"}),"CAD MODEL LOAD ERROR"]}),_.jsx("div",{children:y})]})}),_.jsx("div",{ref:e,className:"w-full h-full flex-1 cursor-grab active:cursor-grabbing"}),_.jsxs("div",{className:"absolute bottom-3 left-3 z-10 p-2.5 bg-white/90 backdrop-blur border border-slate-200 rounded shadow-sm text-xs space-y-1 font-mono text-slate-700 pointer-events-none",children:[_.jsx("div",{className:"text-[10px] text-blue-700 font-bold tracking-wider border-b border-slate-200 pb-1",children:"TACTICAL FLIGHT ENVELOPE"}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"ALTITUDE:"}),_.jsxs("span",{className:"text-slate-900 font-bold",children:[((S=f==null?void 0:f.altitude)==null?void 0:S.toFixed(0))??1850," m ASL"]})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"THROTTLE:"}),_.jsxs("span",{className:"text-blue-600 font-bold",children:[(((f==null?void 0:f.throttle)??.75)*100).toFixed(0),"%"]})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"SHAFT SPEED:"}),_.jsxs("span",{className:"text-slate-900 font-bold",children:[(f==null?void 0:f.rpm)??5200," RPM"]})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"PROP THRUST:"}),_.jsx("span",{className:"text-emerald-600 font-bold",children:"1.82 kN"})]})]}),_.jsxs("div",{className:"absolute bottom-3 right-3 z-10 p-2.5 bg-white/90 backdrop-blur border border-slate-200 rounded shadow-sm text-xs space-y-1 font-mono text-slate-700",children:[_.jsxs("div",{className:"text-[10px] text-amber-700 font-bold tracking-wider border-b border-slate-200 pb-1 flex items-center justify-between",children:[_.jsx("span",{children:"ENGINE COMPARTMENT THERMAL"}),C&&_.jsx(ua,{className:"w-3.5 h-3.5 text-red-600 animate-pulse"})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"AVG CHT:"}),_.jsxs("span",{className:`font-bold ${x>170?"text-red-600 animate-pulse":x>150?"text-amber-600":"text-emerald-600"}`,children:[x.toFixed(1)," °C"]})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"AVG EGT:"}),_.jsxs("span",{className:`font-bold ${v>815?"text-red-600 animate-pulse":v>780?"text-amber-600":"text-emerald-600"}`,children:[v.toFixed(1)," °C"]})]}),_.jsxs("div",{className:"flex justify-between gap-6",children:[_.jsx("span",{className:"text-slate-500",children:"VIBRATION:"}),_.jsxs("span",{className:`font-bold ${((f==null?void 0:f.vibration)??1.1)>2?"text-red-600":"text-slate-900"}`,children:[((f==null?void 0:f.vibration)??1.15).toFixed(2)," g RMS"]})]})]}),_.jsxs("div",{className:"absolute top-14 right-3 z-10 px-2 py-1 bg-white/80 backdrop-blur border border-slate-200 rounded text-[10px] text-slate-500 pointer-events-none flex items-center gap-1.5 shadow-sm",children:[_.jsx(NE,{className:"w-3 h-3 text-blue-600"}),_.jsx("span",{children:"360° DRAG TO ROTATE • SCROLL TO ZOOM • RIGHT-DRAG TO PAN"})]})]})},jC=({frame:n,history:e})=>{const{telemetry:t,physics_expected:i}=n,r=[{key:"rpm",label:"ENGINE SPEED (RPM)",unit:"RPM",value:(t==null?void 0:t.rpm)??0,expected:(i==null?void 0:i.rpm)??5200,min:0,max:6200,nominalLow:4200,nominalHigh:5500,cautionHigh:5800,decimals:0,icon:_.jsx(Tx,{className:"w-4 h-4 text-gcs-cyan"})},{key:"cht",label:"CYLINDER HEAD TEMP",unit:"°C",value:(t==null?void 0:t.cht)??0,expected:(i==null?void 0:i.cht)??140,min:50,max:220,nominalLow:110,nominalHigh:155,cautionHigh:175,decimals:1,icon:_.jsx(Ga,{className:"w-4 h-4 text-gcs-amber"})},{key:"egt",label:"EXHAUST GAS TEMP",unit:"°C",value:(t==null?void 0:t.egt)??0,expected:(i==null?void 0:i.egt)??760,min:400,max:950,nominalLow:680,nominalHigh:800,cautionHigh:840,decimals:1,icon:_.jsx(Ga,{className:"w-4 h-4 text-gcs-red"})},{key:"oil_press",label:"LUBRICATION OIL PRESS",unit:"PSI",value:(t==null?void 0:t.oil_pressure)??0,expected:(i==null?void 0:i.oil_pressure)??55,min:0,max:100,cautionLow:35,nominalLow:45,nominalHigh:75,cautionHigh:85,decimals:1,icon:_.jsx(Sm,{className:"w-4 h-4 text-gcs-cyan"})},{key:"oil_temp",label:"LUBRICATION OIL TEMP",unit:"°C",value:(t==null?void 0:t.oil_temperature)??0,expected:(i==null?void 0:i.oil_temperature)??91,min:40,max:150,nominalLow:75,nominalHigh:110,cautionHigh:125,decimals:1,icon:_.jsx(Sm,{className:"w-4 h-4 text-gcs-amber"})},{key:"map",label:"MANIFOLD ABS PRESS (MAP)",unit:"inHg",value:(t==null?void 0:t.manifold_pressure)??0,expected:(i==null?void 0:i.manifold_pressure)??24.5,min:10,max:40,nominalLow:18,nominalHigh:28.5,cautionHigh:34,decimals:1,icon:_.jsx(kE,{className:"w-4 h-4 text-gcs-cyan"})},{key:"fuel_flow",label:"AVGAS FUEL CONSUMPTION",unit:"L/h",value:(t==null?void 0:t.fuel_flow)??0,expected:(i==null?void 0:i.fuel_flow_lph)??18,min:0,max:45,nominalLow:10,nominalHigh:26,cautionHigh:32,decimals:1,icon:_.jsx(cc,{className:"w-4 h-4 text-gcs-green"})},{key:"vibration",label:"ENGINE BLOCK VIBRATION",unit:"g RMS",value:(t==null?void 0:t.vibration)??1.15,expected:1.1,min:0,max:6,nominalLow:.5,nominalHigh:2,cautionHigh:3.2,decimals:2,icon:_.jsx($d,{className:"w-4 h-4 text-gcs-amber"})}],s=a=>{const l=a.value;return a.cautionLow!==void 0&&l<a.cautionLow||l>a.cautionHigh?"CRITICAL":l<a.nominalLow||l>a.nominalHigh?"CAUTION":"NOMINAL"},o=a=>!e||e.length===0?[0]:e.map(l=>{switch(a){case"rpm":return l.telemetry.rpm;case"cht":return l.telemetry.cht;case"egt":return l.telemetry.egt;case"oil_press":return l.telemetry.oil_pressure;case"oil_temp":return l.telemetry.oil_temperature;case"map":return l.telemetry.manifold_pressure;case"fuel_flow":return l.telemetry.fuel_flow;case"vibration":return l.telemetry.vibration;default:return 0}});return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between p-3 bg-carbon-900 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"w-2.5 h-2.5 bg-gcs-cyan"}),_.jsx("h2",{className:"text-sm font-bold tracking-widest text-white uppercase font-mono",children:"AERO-PISTON TELEMETRY MATRIX & DIVERGENCE RESIDUALS"})]}),_.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-green",children:[_.jsx("span",{className:"w-2 h-2 bg-gcs-green"})," NOMINAL ZONE"]}),_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-amber",children:[_.jsx("span",{className:"w-2 h-2 bg-gcs-amber"})," CAUTION BAND"]}),_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-red",children:[_.jsx("span",{className:"w-2 h-2 bg-gcs-red"})," REDLINE LIMIT"]})]})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:r.map(a=>{const l=s(a),c=a.value-a.expected,u=o(a.key),h=Math.min(100,Math.max(0,(a.value-a.min)/(a.max-a.min)*100)),d=140,p=28;let g="";if(u.length>1){const y=Math.min(...u,a.min),f=Math.max(...u,a.max)-y||1;g=u.reduce((x,v,E)=>{const C=E/(u.length-1)*d,R=p-(v-y)/f*(p-4)-2;return`${x} ${E===0?"M":"L"} ${C.toFixed(1)},${R.toFixed(1)}`},"")}return _.jsxs("div",{className:`p-3 bg-gunmetal-800 border transition-all ${l==="CRITICAL"?"border-gcs-red bg-red-950/20":l==="CAUTION"?"border-gcs-amber bg-amber-950/15":"border-gcs-border hover:border-gcs-borderBright"}`,children:[_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[a.icon,_.jsx("span",{className:"text-[11px] font-bold text-slate-300 tracking-wider font-mono",children:a.label})]}),l==="CRITICAL"?_.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-bold text-gcs-red animate-pulse",children:[_.jsx(Kd,{className:"w-3.5 h-3.5"})," ALARM"]}):l==="CAUTION"?_.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-bold text-gcs-amber",children:[_.jsx(Kd,{className:"w-3.5 h-3.5"})," CAUTION"]}):_.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-semibold text-gcs-green",children:[_.jsx(wE,{className:"w-3 h-3"})," OK"]})]}),_.jsxs("div",{className:"mt-2 flex items-baseline justify-between",children:[_.jsxs("div",{className:"flex items-baseline gap-1.5",children:[_.jsx("span",{className:`text-2xl font-extrabold font-mono tracking-tight ${l==="CRITICAL"?"text-gcs-red glow-red":l==="CAUTION"?"text-gcs-amber glow-amber":"text-gcs-cyan glow-cyan"}`,children:a.value.toFixed(a.decimals??1)}),_.jsx("span",{className:"text-xs text-slate-400 font-mono",children:a.unit})]}),g&&_.jsxs("div",{className:"flex flex-col items-end",children:[_.jsx("svg",{width:d,height:p,className:"overflow-visible",children:_.jsx("path",{d:g,fill:"none",stroke:l==="CRITICAL"?"#EF4444":l==="CAUTION"?"#F59E0B":"#38BDF8",strokeWidth:"1.75",strokeLinecap:"square"})}),_.jsx("span",{className:"text-[9px] text-slate-400 font-mono -mt-1",children:"60s TREND"})]})]}),_.jsxs("div",{className:"mt-3",children:[_.jsxs("div",{className:"relative w-full h-2 bg-carbon-950 border border-gcs-border overflow-hidden",children:[_.jsx("div",{className:`h-full transition-all duration-300 ${l==="CRITICAL"?"bg-gcs-red":l==="CAUTION"?"bg-gcs-amber":"bg-gcs-cyan"}`,style:{width:`${h}%`}}),_.jsx("div",{className:"absolute top-0 bottom-0 border-l border-r border-gcs-green/50 pointer-events-none",style:{left:`${(a.nominalLow-a.min)/(a.max-a.min)*100}%`,width:`${(a.nominalHigh-a.nominalLow)/(a.max-a.min)*100}%`}})]}),_.jsxs("div",{className:"flex justify-between text-[9px] text-slate-400 mt-1 font-mono",children:[_.jsx("span",{children:a.min}),_.jsxs("span",{className:"text-slate-300",children:["NOMINAL: ",a.nominalLow,"-",a.nominalHigh]}),_.jsx("span",{children:a.max})]})]}),_.jsxs("div",{className:"mt-2 pt-2 border-t border-gcs-border/60 flex items-center justify-between text-[11px] font-mono",children:[_.jsxs("div",{className:"text-slate-400",children:["PHYSICS EXP: ",_.jsx("strong",{className:"text-slate-200",children:a.expected.toFixed(a.decimals??1)})]}),_.jsxs("div",{className:`flex items-center gap-0.5 font-bold ${Math.abs(c)>(a.nominalHigh-a.nominalLow)*.25?"text-gcs-amber":"text-slate-400"}`,children:[c>=0?_.jsx($d,{className:"w-3 h-3 text-gcs-amber"}):_.jsx(FE,{className:"w-3 h-3 text-gcs-cyan"}),_.jsx("span",{children:c>=0?`+${c.toFixed(1)}`:c.toFixed(1)})]})]})]},a.key)})}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-4",children:[_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border font-mono",children:[_.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gcs-border text-xs",children:[_.jsxs("span",{className:"text-gcs-amber font-bold flex items-center gap-2",children:[_.jsx(Ga,{className:"w-4 h-4 text-gcs-amber"}),"CYLINDER HEAD TEMPERATURE (CHT) // 4-CYLINDER SPREAD"]}),_.jsx("span",{className:"text-slate-400 text-[11px]",children:"LIMIT: 175°C"})]}),_.jsx("div",{className:"grid grid-cols-4 gap-2 mt-3",children:((t==null?void 0:t.cht_cylinders)??[141,143,140,144]).map((a,l)=>{const c=a>170,u=a>155,h=Math.min(100,Math.max(0,(a-80)/120*100));return _.jsxs("div",{className:"p-2 bg-carbon-950 border border-gcs-border text-center",children:[_.jsxs("div",{className:"text-[10px] text-slate-400",children:["CYLINDER #",l+1]}),_.jsxs("div",{className:`text-base font-bold my-1 ${c?"text-gcs-red animate-pulse":u?"text-gcs-amber":"text-white"}`,children:[a.toFixed(1),"°C"]}),_.jsx("div",{className:"w-full h-1.5 bg-gunmetal-700 overflow-hidden",children:_.jsx("div",{className:`h-full ${c?"bg-gcs-red":u?"bg-gcs-amber":"bg-gcs-green"}`,style:{width:`${h}%`}})})]},l)})})]}),_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border font-mono",children:[_.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gcs-border text-xs",children:[_.jsxs("span",{className:"text-gcs-red font-bold flex items-center gap-2",children:[_.jsx(Ga,{className:"w-4 h-4 text-gcs-red"}),"EXHAUST GAS TEMPERATURE (EGT) // 4-CYLINDER SPREAD"]}),_.jsx("span",{className:"text-slate-400 text-[11px]",children:"LIMIT: 840°C"})]}),_.jsx("div",{className:"grid grid-cols-4 gap-2 mt-3",children:((t==null?void 0:t.egt_cylinders)??[761,769,763,766]).map((a,l)=>{const c=a>820,u=a<620,h=a>800,d=Math.min(100,Math.max(0,(a-500)/450*100));return _.jsxs("div",{className:"p-2 bg-carbon-950 border border-gcs-border text-center",children:[_.jsxs("div",{className:"text-[10px] text-slate-400",children:["CYLINDER #",l+1]}),_.jsxs("div",{className:`text-base font-bold my-1 ${c?"text-gcs-red animate-pulse":u?"text-gcs-cyan":h?"text-gcs-amber":"text-white"}`,children:[a.toFixed(1),"°C"]}),_.jsx("div",{className:"w-full h-1.5 bg-gunmetal-700 overflow-hidden",children:_.jsx("div",{className:`h-full ${c?"bg-gcs-red":u?"bg-gcs-cyan":h?"bg-gcs-amber":"bg-gcs-green"}`,style:{width:`${d}%`}})})]},l)})})]})]})]})},WC=({frame:n,anomalyLogs:e})=>{var m;const[t,i]=be.useState("ALL"),[r,s]=be.useState(null),{ai_anomaly:o,residuals:a}=n,l=(o==null?void 0:o.anomaly_score)??.08,c=(o==null?void 0:o.threshold)??.35,u=(o==null?void 0:o.is_anomaly)??!1,h=(o==null?void 0:o.reconstruction_error)??.038,d=(o==null?void 0:o.root_cause_feature)??"delta_cht",p=(o==null?void 0:o.feature_attributions)??{delta_rpm:.12,delta_cht:.28,delta_egt:.22,delta_oil_pressure:.14,delta_oil_temperature:.1,delta_manifold_pressure:.08,delta_fuel_flow:.06},g=e.filter(f=>t==="ALL"?!0:f.severity===t),y=()=>{const f="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),x=document.createElement("a");x.setAttribute("href",f),x.setAttribute("download",`aerotwin_anomaly_audit_${Date.now()}.json`),document.body.appendChild(x),x.click(),x.remove(),s("AUDIT LOG EXPORTED TO JSON"),setTimeout(()=>s(null),3e3)};return _.jsxs("div",{className:"space-y-4 select-none font-mono",children:[_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[_.jsxs("div",{className:`p-4 bg-gunmetal-800 border transition-all ${u?"border-gcs-red bg-red-950/20":"border-gcs-border"}`,children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("span",{className:"text-xs text-slate-400 font-bold",children:"PYTORCH AUTOENCODER SCORE"}),u?_.jsxs("span",{className:"flex items-center gap-1 text-xs font-bold text-gcs-red animate-pulse",children:[_.jsx(ua,{className:"w-4 h-4"})," THRESHOLD BREACHED"]}):_.jsxs("span",{className:"flex items-center gap-1 text-xs font-semibold text-gcs-green",children:[_.jsx(Of,{className:"w-4 h-4"})," LATENT NOMINAL"]})]}),_.jsxs("div",{className:"mt-3 flex items-baseline gap-3",children:[_.jsxs("span",{className:`text-3xl font-extrabold ${u?"text-gcs-red glow-red":"text-gcs-cyan glow-cyan"}`,children:[(l*100).toFixed(1),"%"]}),_.jsxs("span",{className:"text-xs text-slate-400",children:["BOUNDARY: ",_.jsxs("strong",{className:"text-gcs-amber",children:[(c*100).toFixed(0),"%"]})]})]}),_.jsxs("div",{className:"mt-3 relative w-full h-2 bg-carbon-950 border border-gcs-border overflow-hidden",children:[_.jsx("div",{className:`h-full transition-all duration-300 ${u?"bg-gcs-red":l>.25?"bg-gcs-amber":"bg-gcs-cyan"}`,style:{width:`${Math.min(100,l*100)}%`}}),_.jsx("div",{className:"absolute top-0 bottom-0 w-0.5 bg-gcs-amber z-10",style:{left:`${c*100}%`}})]}),_.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 mt-1",children:[_.jsx("span",{children:"0.0 (HEALTHY)"}),_.jsx("span",{className:"text-gcs-amber",children:"DECISION THRESHOLD (0.35)"}),_.jsx("span",{children:"1.0 (CRITICAL)"})]})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-bold",children:[_.jsx("span",{children:"RESIDUAL RECONSTRUCTION MSE"}),_.jsx(Uf,{className:"w-4 h-4 text-gcs-cyan"})]}),_.jsxs("div",{className:"mt-3 flex items-baseline gap-2",children:[_.jsx("span",{className:"text-3xl font-extrabold text-white",children:h.toFixed(4)}),_.jsx("span",{className:"text-xs text-slate-400",children:"MSE LOSS"})]}),_.jsxs("div",{className:"mt-3 text-xs space-y-1 text-slate-300",children:[_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{children:"LATENT BOTTLENECK:"}),_.jsx("strong",{className:"text-gcs-cyan",children:"7 > 3 > 7 DENSE"})]}),_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{children:"INFERENCE CYCLE:"}),_.jsx("strong",{className:"text-white",children:"1000 ms (SYNCED 1Hz)"})]}),_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{children:"PRIMARY FAULT CORRELATION:"}),_.jsx("strong",{className:"text-gcs-amber uppercase",children:((m=n.fault_status)==null?void 0:m.active_fault)||"NONE"})]})]})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 font-bold",children:[_.jsx("span",{children:"EXPLAINABLE AI ROOT CAUSE"}),_.jsx(TE,{className:"w-4 h-4 text-gcs-amber"})]}),_.jsxs("div",{className:"mt-3",children:[_.jsx("div",{className:"text-xs text-slate-400",children:"HIGHEST CONTRIBUTOR:"}),_.jsx("div",{className:"text-lg font-bold text-gcs-amber tracking-wide uppercase mt-0.5",children:d.replace("delta_","Δ ")})]}),_.jsxs("div",{className:"mt-2 text-xs text-slate-300",children:["CONTRIBUTION SHARE: ",_.jsxs("strong",{className:"text-white",children:[((p[d]??.3)*100).toFixed(1),"%"]})]}),_.jsx("div",{className:"mt-1 text-[11px] text-slate-400",children:"Residual divergence observed between first-principles SciPy thermodynamics and telemetry sensors."})]})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gcs-border text-xs",children:[_.jsxs("span",{className:"text-slate-200 font-bold flex items-center gap-2",children:[_.jsx(OE,{className:"w-4 h-4 text-gcs-cyan"}),"RESIDUAL FEATURE ATTRIBUTION MATRIX (RECONSTRUCTION ERROR SHARE)"]}),_.jsx("span",{className:"text-slate-400 text-[11px]",children:"NORMALIZED [0% - 100%]"})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3",children:Object.entries(p).map(([f,x])=>{const v=Math.min(100,Math.max(0,x*100)),E=f===d,C=a?a[f]:void 0;return _.jsxs("div",{className:`p-2.5 bg-carbon-950 border ${E&&u?"border-gcs-amber bg-amber-950/20":"border-gcs-border"}`,children:[_.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[_.jsx("span",{className:`font-bold ${E?"text-gcs-amber":"text-slate-300"}`,children:f.replace("delta_","Δ ").toUpperCase()}),_.jsxs("span",{className:"text-white font-bold",children:[v.toFixed(1),"%"]})]}),_.jsx("div",{className:"w-full h-2 bg-gunmetal-800 border border-gcs-border/80 mt-1.5 overflow-hidden",children:_.jsx("div",{className:`h-full ${E&&u?"bg-gcs-red":E?"bg-gcs-amber":"bg-gcs-cyan"}`,style:{width:`${v}%`}})}),_.jsxs("div",{className:"mt-1 text-[10px] text-slate-400 flex justify-between",children:[_.jsx("span",{children:"RESIDUAL:"}),_.jsx("span",{className:"text-slate-200 font-bold",children:C!==void 0?typeof C=="number"?C.toFixed(1):C:"0.0"})]})]},f)})})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border gap-3 text-xs",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(PE,{className:"w-3.5 h-3.5 text-gcs-cyan"}),_.jsx("span",{className:"text-slate-300 font-bold",children:"SEVERITY FILTER:"}),["ALL","CRITICAL","ELEVATED","NOMINAL"].map(f=>_.jsx("button",{onClick:()=>i(f),className:`px-2 py-0.5 text-[11px] font-mono font-semibold border transition ${t===f?"bg-gcs-cyan text-black border-gcs-cyan":"bg-carbon-950 text-slate-400 border-gcs-border hover:border-slate-500"}`,children:f},f))]}),_.jsxs("div",{className:"flex items-center gap-2",children:[r&&_.jsx("span",{className:"text-gcs-green text-xs font-bold animate-pulse",children:r}),_.jsxs("button",{onClick:y,className:"px-2.5 py-1 text-[11px] font-mono font-semibold bg-carbon-950 hover:bg-gunmetal-700 text-slate-200 border border-gcs-border hover:border-gcs-cyan transition flex items-center gap-1.5",children:[_.jsx(RE,{className:"w-3 h-3 text-gcs-cyan"}),"EXPORT JSON"]})]})]}),_.jsx("div",{className:"mt-3 max-h-72 overflow-y-auto overflow-x-auto",children:g.length===0?_.jsxs("div",{className:"py-8 text-center text-xs text-slate-500 font-mono",children:["NO ANOMALY ALERTS RECORDED UNDER FILTER [",t,"]. AUTOENCODER RESIDUALS NOMINAL."]}):_.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{className:"border-b border-gcs-border text-slate-400 text-[10px] uppercase bg-carbon-950",children:[_.jsx("th",{className:"p-2",children:"TIMESTAMP (MS PRECISION)"}),_.jsx("th",{className:"p-2",children:"SEVERITY"}),_.jsx("th",{className:"p-2",children:"ANOMALY SCORE"}),_.jsx("th",{className:"p-2",children:"RECON ERROR"}),_.jsx("th",{className:"p-2",children:"ROOT CAUSE"}),_.jsx("th",{className:"p-2",children:"AUDIT DETAILS"})]})}),_.jsx("tbody",{className:"divide-y divide-gcs-border/60",children:g.map(f=>{const x=new Date(f.timestamp),v=String(x.getUTCMilliseconds()).padStart(3,"0"),E=`${x.toISOString().slice(11,19)}.${v}Z`;return _.jsxs("tr",{className:`hover:bg-gunmetal-700/50 transition-colors ${f.severity==="CRITICAL"?"bg-red-950/20 text-red-200":f.severity==="ELEVATED"?"bg-amber-950/15 text-amber-200":"text-slate-300"}`,children:[_.jsx("td",{className:"p-2 whitespace-nowrap text-gcs-cyan font-semibold",children:E}),_.jsx("td",{className:"p-2 whitespace-nowrap",children:_.jsx("span",{className:`px-1.5 py-0.5 text-[9px] font-bold border ${f.severity==="CRITICAL"?"bg-red-900/60 border-gcs-red text-gcs-red":f.severity==="ELEVATED"?"bg-amber-900/60 border-gcs-amber text-gcs-amber":"bg-green-900/60 border-gcs-green text-gcs-green"}`,children:f.severity})}),_.jsxs("td",{className:"p-2 whitespace-nowrap font-bold",children:[(f.score*100).toFixed(1),"%"]}),_.jsx("td",{className:"p-2 whitespace-nowrap text-slate-300",children:f.reconstruction_error.toFixed(4)}),_.jsx("td",{className:"p-2 whitespace-nowrap font-semibold text-gcs-amber uppercase",children:f.root_cause}),_.jsx("td",{className:"p-2 text-slate-400 text-[11px] truncate max-w-xs",children:f.details})]},f.id)})})]})})]})]})},XC=({frame:n,isStressBudgetActive:e,onToggleBudget:t})=>{const{prognostics:i,dynamic_stress_budget:r}=n,s=(i==null?void 0:i.health_index)??94.5,o=(i==null?void 0:i.rul_hours)??1702.8,a=(i==null?void 0:i.nominal_tbo_hours)??1800,l=(i==null?void 0:i.stress_components)??{mechanical_stress:1.04,thermal_stress:.98,lubrication_stress:1.01,anomaly_stress:1,total_stress_index:1.03},c=r??{budgeted_rpm:4428,budgeted_altitude_m:1250,budgeted_stress_index:.61,stress_reduction_percentage:40.8,baseline_rul_hours:1702.8,extended_rul_hours:2418,rul_extension_delta_hours:715.2,life_extension_multiplier:1.42,tactical_advisory:"CRUISE PROFILE NOMINAL - STRESS BUDGET READY"},u=600,h=220,d={top:20,right:30,bottom:35,left:50},p=u-d.left-d.right,g=h-d.top-d.bottom,y=Math.min(2500,Math.max(100,c.baseline_rul_hours)),m=Math.min(2500,Math.max(100,c.extended_rul_hours)),f=d.left,x=d.top+(1-s/100)*g,v=d.left+y/2500*p,E=d.top+g,C=d.left+m/2500*p,R=d.top+g,A=`M ${f},${x} Q ${(f+v)/2},${(x+E)/2+15} ${v},${E}`,N=`M ${f},${x} Q ${(f+C)/2},${(x+R)/2-15} ${C},${R}`;return _.jsxs("div",{className:"space-y-4 select-none font-mono",children:[_.jsxs("div",{className:`p-4 border transition-all ${e?"bg-gunmetal-800 border-gcs-cyan":"bg-gunmetal-800 border-gcs-border"}`,children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:`w-10 h-10 border flex items-center justify-center ${e?"border-gcs-cyan bg-gcs-cyan/20 text-gcs-cyan":"border-gcs-border bg-carbon-950 text-slate-400"}`,children:_.jsx(Dx,{className:"w-5 h-5"})}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase",children:"DYNAMIC STRESS BUDGETING (TACTICAL RUL PRESERVATION)"}),_.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold border ${e?"bg-gcs-cyan text-black border-gcs-cyan animate-pulse":"bg-carbon-950 text-slate-400 border-gcs-border"}`,children:e?"PROFILE ENGAGED":"STANDBY (NOMINAL)"})]}),_.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Reduces shaft RPM by 15% and commands altitude descent into cooler, denser air to slash Arrhenius thermal strain and Basquin fatigue damage."})]})]}),_.jsxs("button",{onClick:t,className:`px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border transition-all flex items-center gap-2 shadow-lg active:scale-95 ${e?"bg-gcs-cyan hover:bg-sky-300 text-black border-gcs-cyan":"bg-carbon-950 hover:bg-gunmetal-700 text-gcs-cyan border-gcs-cyan hover:shadow-cyan-500/20"}`,children:[_.jsx(cc,{className:`w-4 h-4 ${e?"text-black":"text-gcs-cyan animate-pulse"}`}),e?"DISENGAGE STRESS BUDGET":"ENGAGE DYNAMIC STRESS BUDGET (-15% RPM)"]})]}),_.jsxs("div",{className:"mt-3 pt-3 border-t border-gcs-border/60 flex flex-wrap items-center justify-between text-xs",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-gcs-amber font-bold",children:"DRDO ADVISORY >"}),_.jsx("span",{className:"text-white font-semibold",children:c.tactical_advisory})]}),_.jsxs("div",{className:"flex items-center gap-3 text-slate-400",children:[_.jsxs("span",{children:["TARGET RPM: ",_.jsxs("strong",{className:"text-gcs-cyan",children:[c.budgeted_rpm," RPM"]})]}),_.jsx("span",{children:"•"}),_.jsxs("span",{children:["TARGET ALT: ",_.jsxs("strong",{className:"text-gcs-cyan",children:[c.budgeted_altitude_m," m"]})]})]})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",children:[_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[_.jsx("span",{children:"HEALTH INDEX"}),_.jsx(ax,{className:"w-4 h-4 text-gcs-cyan"})]}),_.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[_.jsxs("span",{className:`text-3xl font-extrabold ${s>80?"text-gcs-green glow-green":s>50?"text-gcs-amber":"text-gcs-red"}`,children:[s.toFixed(1),"%"]}),_.jsx("span",{className:"text-xs text-slate-400",children:"OF FACTORY SPEC"})]}),_.jsx("div",{className:"mt-2 w-full h-1.5 bg-carbon-950 border border-gcs-border overflow-hidden",children:_.jsx("div",{className:`h-full ${s>80?"bg-gcs-green":s>50?"bg-gcs-amber":"bg-gcs-red"}`,style:{width:`${s}%`}})})]}),_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[_.jsx("span",{children:"REMAINING USEFUL LIFE (RUL)"}),_.jsx(px,{className:"w-4 h-4 text-gcs-amber"})]}),_.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[_.jsx("span",{className:"text-3xl font-extrabold text-white",children:e?c.extended_rul_hours.toFixed(1):o.toFixed(1)}),_.jsx("span",{className:"text-xs text-slate-400",children:"FLIGHT HRS"})]}),_.jsxs("div",{className:"mt-1 text-[11px] text-slate-400 flex justify-between",children:[_.jsxs("span",{children:["FACTORY TBO: ",a,"h"]}),_.jsx("span",{className:"text-gcs-cyan font-semibold",children:e?`EXTENDED (${c.life_extension_multiplier.toFixed(2)}x)`:"BASELINE"})]})]}),_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[_.jsx("span",{children:"RUL EXTENSION DELTA"}),_.jsx($d,{className:"w-4 h-4 text-gcs-green"})]}),_.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[_.jsxs("span",{className:"text-3xl font-extrabold text-gcs-green glow-green",children:["+",c.rul_extension_delta_hours.toFixed(1)]}),_.jsx("span",{className:"text-xs text-slate-400",children:"HOURS GAINED"})]}),_.jsxs("div",{className:"mt-1 text-[11px] text-slate-300",children:["LIFE MULTIPLIER: ",_.jsxs("strong",{className:"text-white font-bold",children:[c.life_extension_multiplier.toFixed(2),"x EXTENSION"]})]})]}),_.jsxs("div",{className:"p-3 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[_.jsx("span",{children:"STRESS ACCELERATION INDEX"}),_.jsx(EE,{className:"w-4 h-4 text-gcs-cyan"})]}),_.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[_.jsxs("span",{className:`text-3xl font-extrabold ${l.total_stress_index>1.8?"text-gcs-red":l.total_stress_index>1.2?"text-gcs-amber":"text-gcs-cyan"}`,children:[e?c.budgeted_stress_index.toFixed(2):l.total_stress_index.toFixed(2),"x"]}),_.jsx("span",{className:"text-xs text-slate-400",children:"WEAR MULTIPLIER"})]}),_.jsxs("div",{className:"mt-1 text-[11px] text-gcs-green font-semibold",children:["DAMAGE RATE: -",c.stress_reduction_percentage.toFixed(1),"% MITIGATION"]})]})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border text-xs gap-3",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"w-2.5 h-2.5 bg-gcs-cyan"}),_.jsx("span",{className:"text-white font-bold",children:"RUL WEAR DEGRADATION CURVES // BASELINE VS BUDGETED PROFILE"})]}),_.jsxs("div",{className:"flex items-center gap-4 text-[11px]",children:[_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-red font-semibold",children:[_.jsx("span",{className:"w-3 h-0.5 bg-gcs-red inline-block"}),"BASELINE HIGH-STRESS (",c.baseline_rul_hours.toFixed(0)," hrs)"]}),_.jsxs("span",{className:"flex items-center gap-1.5 text-gcs-green font-semibold",children:[_.jsx("span",{className:"w-3 h-0.5 bg-gcs-green inline-block"}),"BUDGETED EXTENDED PROFILE (",c.extended_rul_hours.toFixed(0)," hrs)"]})]})]}),_.jsx("div",{className:"mt-3 relative w-full overflow-x-auto",children:_.jsxs("svg",{viewBox:`0 0 ${u} ${h}`,className:"w-full h-56 bg-carbon-950 border border-gcs-border font-mono",children:[[.25,.5,.75].map(V=>_.jsx("line",{x1:d.left,y1:d.top+g*V,x2:d.left+p,y2:d.top+g*V,stroke:"#1f242c",strokeWidth:"1",strokeDasharray:"4 4"},V)),[.25,.5,.75].map(V=>_.jsx("line",{x1:d.left+p*V,y1:d.top,x2:d.left+p*V,y2:d.top+g,stroke:"#1f242c",strokeWidth:"1",strokeDasharray:"4 4"},V)),_.jsx("line",{x1:d.left,y1:d.top+g,x2:d.left+p,y2:d.top+g,stroke:"#262C36",strokeWidth:"1.5"}),_.jsx("line",{x1:d.left,y1:d.top,x2:d.left,y2:d.top+g,stroke:"#262C36",strokeWidth:"1.5"}),_.jsx("text",{x:d.left-8,y:d.top+4,fill:"#64748B",fontSize:"9",textAnchor:"end",children:"100%"}),_.jsx("text",{x:d.left-8,y:d.top+g*.5+3,fill:"#64748B",fontSize:"9",textAnchor:"end",children:"50%"}),_.jsx("text",{x:d.left-8,y:d.top+g+3,fill:"#64748B",fontSize:"9",textAnchor:"end",children:"0% (EOL)"}),_.jsx("text",{x:d.left,y:h-10,fill:"#64748B",fontSize:"9",textAnchor:"middle",children:"0h"}),_.jsx("text",{x:d.left+p*.5,y:h-10,fill:"#64748B",fontSize:"9",textAnchor:"middle",children:"1250h"}),_.jsx("text",{x:d.left+p,y:h-10,fill:"#64748B",fontSize:"9",textAnchor:"middle",children:"2500h"}),_.jsx("path",{d:`${A} L ${C},${R} Q ${(f+C)/2},${(x+R)/2-15} ${f},${x} Z`,fill:"rgba(16, 185, 129, 0.08)"}),_.jsx("path",{d:A,fill:"none",stroke:"#EF4444",strokeWidth:"2.5",strokeDasharray:e?"5 5":"none"}),_.jsx("path",{d:N,fill:"none",stroke:"#10B981",strokeWidth:"2.5",strokeDasharray:e?"none":"5 5"}),_.jsx("circle",{cx:f,cy:x,r:"5",fill:"#38BDF8",stroke:"#FFFFFF",strokeWidth:"2"}),_.jsxs("text",{x:f+8,y:x-6,fill:"#38BDF8",fontSize:"10",fontWeight:"bold",children:["CURRENT (",s.toFixed(0),"%)"]}),_.jsx("circle",{cx:v,cy:E,r:"4",fill:"#EF4444"}),_.jsxs("text",{x:v,y:E-8,fill:"#EF4444",fontSize:"9",textAnchor:"middle",children:[c.baseline_rul_hours.toFixed(0),"h"]}),_.jsx("circle",{cx:C,cy:R,r:"4",fill:"#10B981"}),_.jsxs("text",{x:C,y:R-8,fill:"#10B981",fontSize:"9",textAnchor:"middle",children:[c.extended_rul_hours.toFixed(0),"h (+",c.rul_extension_delta_hours.toFixed(0),"h)"]})]})})]}),_.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border",children:[_.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-gcs-border text-xs",children:[_.jsxs("span",{className:"text-slate-200 font-bold flex items-center gap-2",children:[_.jsx(cc,{className:"w-4 h-4 text-gcs-amber"}),"FATIGUE & WEAR FACTOR DECOMPOSITION (FIRST-PRINCIPLES COEFFICIENTS)"]}),_.jsx("span",{className:"text-slate-400 text-[11px]",children:"1.00 = NOMINAL STEADY-STATE WEAR"})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 mt-3",children:[_.jsxs("div",{className:"p-3 bg-carbon-950 border border-gcs-border",children:[_.jsx("div",{className:"text-[10px] text-slate-400",children:"MECHANICAL STRESS (BASQUIN α=3.2)"}),_.jsxs("div",{className:"text-xl font-bold text-white mt-1",children:[l.mechanical_stress.toFixed(2),"x"]}),_.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:"RPM inertia on crankshaft & piston pins"})]}),_.jsxs("div",{className:"p-3 bg-carbon-950 border border-gcs-border",children:[_.jsx("div",{className:"text-[10px] text-slate-400",children:"THERMAL STRESS (ARRHENIUS β=0.038)"}),_.jsxs("div",{className:"text-xl font-bold text-white mt-1",children:[l.thermal_stress.toFixed(2),"x"]}),_.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:"CHT thermal fatigue & cylinder head creep"})]}),_.jsxs("div",{className:"p-3 bg-carbon-950 border border-gcs-border",children:[_.jsx("div",{className:"text-[10px] text-slate-400",children:"LUBRICATION STRESS (BOUNDARY)"}),_.jsxs("div",{className:"text-xl font-bold text-white mt-1",children:[l.lubrication_stress.toFixed(2),"x"]}),_.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:"Oil film shear and bearing pressure"})]}),_.jsxs("div",{className:"p-3 bg-carbon-950 border border-gcs-border",children:[_.jsx("div",{className:"text-[10px] text-slate-400",children:"AI ANOMALY WEAR PENALTY"}),_.jsxs("div",{className:"text-xl font-bold text-white mt-1",children:[l.anomaly_stress.toFixed(2),"x"]}),_.jsx("div",{className:"text-[10px] text-slate-400 mt-1",children:"Autoencoder residual divergence scaling"})]})]})]})]})},xl=({frame:n,onInjectFault:e,onClearFault:t})=>{var l,c;const[i,r]=be.useState(.8),s=((l=n.fault_status)==null?void 0:l.active_fault)??"none",o=((c=n.fault_status)==null?void 0:c.severity)??0,a=[{id:"cylinder_misfire",label:"CYLINDER MISFIRE",desc:"Loss of combustion in Cyl #1. Drops EGT & RPM, spikes block vibration.",icon:_.jsx(BE,{className:"w-4 h-4 text-gcs-red"}),colorClass:"hover:border-gcs-red hover:bg-red-950/30 text-red-200"},{id:"oil_leak",label:"OIL PRESSURE LOSS",desc:"Critical lubricant pressure loss below 25 PSI. Escalates bearing friction.",icon:_.jsx(CE,{className:"w-4 h-4 text-gcs-amber"}),colorClass:"hover:border-gcs-amber hover:bg-amber-950/30 text-amber-200"},{id:"cooling_blockage",label:"COOLING BLOCKAGE",desc:"Air baffle / cowl intake restriction. Rapid CHT thermal runaway > 185°C.",icon:_.jsx(LE,{className:"w-4 h-4 text-gcs-red"}),colorClass:"hover:border-gcs-red hover:bg-red-950/30 text-red-200"},{id:"lean_mixture",label:"LEAN DETONATION",desc:"Sub-stoichiometric fuel/air ratio. Extreme EGT elevation > 830°C.",icon:_.jsx(Kd,{className:"w-4 h-4 text-gcs-amber"}),colorClass:"hover:border-gcs-amber hover:bg-amber-950/30 text-amber-200"}];return _.jsxs("div",{className:"p-4 bg-gunmetal-800 border border-gcs-border select-none font-mono",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between pb-3 border-b border-gcs-border gap-3 text-xs",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(Em,{className:"w-4 h-4 text-gcs-red"}),_.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase",children:"TACTICAL FAULT INJECTION & POWERPLANT INTEGRITY TESTING"})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-slate-400",children:"ACTIVE TEST:"}),s==="none"?_.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-green-950/40 text-gcs-green border border-gcs-green",children:[_.jsx(Of,{className:"w-3.5 h-3.5"})," NOMINAL RECOVERY (ALL SYSTEMS GREEN)"]}):_.jsxs("span",{className:"flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-red-950/50 text-gcs-red border border-gcs-red animate-pulse",children:[_.jsx(Em,{className:"w-3.5 h-3.5"})," ",s.toUpperCase()," (",(o*100).toFixed(0),"% SEV)"]})]})]}),_.jsxs("div",{className:"mt-4 p-3 bg-carbon-950 border border-gcs-border flex flex-wrap items-center justify-between gap-4",children:[_.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[_.jsx(Dx,{className:"w-4 h-4 text-gcs-cyan"}),_.jsx("span",{className:"text-slate-300 font-bold",children:"FAULT SEVERITY SCALING:"}),_.jsxs("span",{className:"text-gcs-cyan font-extrabold text-sm",children:[(i*100).toFixed(0),"%"]}),_.jsxs("span",{className:"text-slate-500 text-[11px]",children:["(",i<.4?"MILD":i<.75?"MODERATE":"CRITICAL REDLINE",")"]})]}),_.jsxs("div",{className:"flex items-center gap-3 flex-1 max-w-xs",children:[_.jsx("span",{className:"text-[10px] text-slate-500",children:"20%"}),_.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:i,onChange:u=>r(parseFloat(u.target.value)),className:"w-full accent-gcs-cyan cursor-pointer"}),_.jsx("span",{className:"text-[10px] text-slate-500",children:"100%"})]})]}),_.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4",children:a.map(u=>{const h=s===u.id;return _.jsxs("button",{onClick:()=>e(u.id,i),className:`p-3 text-left border transition-all flex flex-col justify-between active:scale-[0.98] ${h?"bg-red-950/50 border-gcs-red shadow-lg shadow-red-950/40 ring-1 ring-gcs-red":`bg-carbon-950 border-gcs-border ${u.colorClass}`}`,children:[_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("span",{className:"text-xs font-bold tracking-wider font-mono",children:u.label}),u.icon]}),_.jsx("p",{className:"text-[11px] text-slate-400 mt-2 leading-relaxed font-sans",children:u.desc})]}),_.jsxs("div",{className:"mt-4 pt-2 border-t border-gcs-border/60 flex items-center justify-between text-[10px]",children:[_.jsx("span",{className:"text-slate-500 font-mono",children:"COMMAND"}),_.jsx("span",{className:`font-bold font-mono tracking-wider ${h?"text-gcs-red animate-pulse":"text-gcs-cyan"}`,children:h?"● ACTIVE ENGAGED":"EXECUTE INJECT &gt;"})]})]},u.id)})}),_.jsx("div",{className:"mt-4",children:_.jsxs("button",{onClick:t,className:`w-full py-3 px-4 text-xs font-mono font-bold tracking-widest uppercase border transition-all flex items-center justify-center gap-2 active:scale-[0.99] ${s==="none"?"bg-carbon-950 border-gcs-green/50 text-gcs-green hover:bg-green-950/20":"bg-gcs-green hover:bg-emerald-400 text-black border-gcs-green shadow-lg animate-pulse"}`,children:[_.jsx(AE,{className:"w-4 h-4"}),"COMMAND NORMAL RECOVERY (RESET ENGINE & CLEAR ACTIVE INJECTIONS)"]})})]})};function YC(){var p,g;const[n,e]=be.useState("TELEMETRY"),{frame:t,history:i,anomalyLogs:r,connectionStatus:s,latencyMs:o,isStressBudgetActive:a,lastCommandAck:l,injectFault:c,clearFault:u,toggleDynamicStressBudgeting:h}=VE(),d=[{id:"TELEMETRY",label:"[TACTICAL TELEMETRY]",icon:_.jsx(Tx,{className:"w-4 h-4"})},{id:"DIGITAL_TWIN",label:"[3D DRONE DIGITAL TWIN]",icon:_.jsx(ME,{className:"w-4 h-4"}),badge:((p=t.fault_status)==null?void 0:p.active_fault)!=="none"?"HEAT":void 0},{id:"ANOMALIES",label:"[ANOMALY RESIDUALS]",icon:_.jsx(ua,{className:"w-4 h-4"}),badge:(g=t.ai_anomaly)!=null&&g.is_anomaly?"ALERT":void 0},{id:"PROGNOSTICS",label:"[PROGNOSTICS & STRESS BUDGETING]",icon:_.jsx(Uf,{className:"w-4 h-4"}),badge:a?"BUDGET ACTIVE":void 0}];return _.jsxs("div",{className:"min-h-screen bg-carbon-900 text-gcs-textBright font-mono flex flex-col selection:bg-gcs-cyan selection:text-black",children:[_.jsx(GE,{frame:t,connectionStatus:s,latencyMs:o,lastCommandAck:l}),_.jsxs("nav",{className:"border-b border-gcs-border bg-carbon-950 px-4 flex items-center justify-between select-none",children:[_.jsx("div",{className:"flex items-center gap-1 overflow-x-auto",children:d.map(y=>{const m=n===y.id;return _.jsxs("button",{onClick:()=>e(y.id),className:`py-3 px-4 text-xs font-bold font-mono tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap active:scale-[0.99] ${m?"border-gcs-cyan text-gcs-cyan bg-gunmetal-800":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-gunmetal-800/40"}`,children:[y.icon,_.jsx("span",{children:y.label}),y.badge&&_.jsx("span",{className:`ml-1 px-1.5 py-0.2 text-[9px] font-extrabold border ${y.badge==="ALERT"?"bg-red-950 border-gcs-red text-gcs-red animate-pulse":y.badge==="HEAT"?"bg-amber-950 border-gcs-amber text-gcs-amber animate-pulse":"bg-cyan-950 border-gcs-cyan text-gcs-cyan"}`,children:y.badge})]},y.id)})}),_.jsxs("div",{className:"hidden lg:flex items-center gap-3 text-xs text-slate-400",children:[_.jsxs("span",{className:"flex items-center gap-1.5",children:[_.jsx(Cx,{className:"w-3.5 h-3.5 text-gcs-green animate-pulse"}),"GROUND TELEMETRY LINK: ",_.jsx("strong",{className:"text-white",children:"ENCRYPTED L-BAND"})]}),_.jsx("span",{className:"text-gcs-border",children:"|"}),_.jsxs("span",{children:["LAT/LON: ",_.jsx("strong",{className:"text-slate-200",children:"14.2312° N, 76.5412° E"})]})]})]}),_.jsxs("main",{className:"flex-1 p-4 overflow-y-auto max-w-7xl w-full mx-auto space-y-4",children:[n==="TELEMETRY"&&_.jsxs("div",{className:"space-y-4",children:[_.jsx(jC,{frame:t,history:i}),_.jsx(xl,{frame:t,onInjectFault:c,onClearFault:u})]}),n==="DIGITAL_TWIN"&&_.jsxs("div",{className:"space-y-4",children:[_.jsx("div",{className:"h-[620px] w-full",children:_.jsx(GC,{frame:t})}),_.jsx(xl,{frame:t,onInjectFault:c,onClearFault:u})]}),n==="ANOMALIES"&&_.jsxs("div",{className:"space-y-4",children:[_.jsx(WC,{frame:t,anomalyLogs:r}),_.jsx(xl,{frame:t,onInjectFault:c,onClearFault:u})]}),n==="PROGNOSTICS"&&_.jsxs("div",{className:"space-y-4",children:[_.jsx(XC,{frame:t,isStressBudgetActive:a,onToggleBudget:h}),_.jsx(xl,{frame:t,onInjectFault:c,onClearFault:u})]})]}),_.jsxs("footer",{className:"border-t border-gcs-border bg-carbon-950 px-4 py-2 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3 select-none",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-gcs-cyan font-bold",children:"DRDO AEROTWIN"}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsx("span",{children:"DEFENCE RESEARCH & DEVELOPMENT ORGANISATION // GOVT OF INDIA"}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsx("span",{className:"text-slate-300",children:"PS-26054 GROUND CONTROL STATION"})]}),_.jsxs("div",{className:"flex items-center gap-4 font-mono",children:[_.jsxs("span",{className:"text-slate-400",children:["ENGINE TYPE: ",_.jsx("span",{className:"text-white",children:"ROTAX 914-F TURBOCHARGED"})]}),_.jsx("span",{className:"text-gcs-border",children:"•"}),_.jsx("span",{className:"text-gcs-green font-semibold",children:"100% OPERATIONAL // NO MOCKUPS"})]})]})]})}ed.createRoot(document.getElementById("root")).render(_.jsx(ey.StrictMode,{children:_.jsx(YC,{})}));
