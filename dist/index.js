"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=c(function(C,f){
var x=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-negative-zero/dist');function d(e,r,i,s){var u,t,v,a,n,o;if(u=r.data,t=r.accessors[0],e===1||i===0)return t(u,s);for(a=s,v=t(u,a),o=1;o<e;o++){if(a+=i,n=t(u,a),x(n))return n;(n<v||n===v&&b(n))&&(v=n)}return v}f.exports=d
});var q=c(function(D,y){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),k=require('@stdlib/array-base-arraylike2object/dist'),O=m();function P(e,r,i,s){var u,t,v,a,n;if(e<=0)return NaN;if(v=k(r),v.accessorProtocol)return O(e,v,i,s);if(e===1||i===0)return r[s];for(t=s,u=r[t],n=1;n<e;n++){if(t+=i,a=r[t],Z(a))return a;(a<u||a===u&&j(a))&&(u=a)}return u}y.exports=P
});var g=c(function(E,p){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(e,r,i){return h(e,r,i,R(e,i))}p.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),A=q();z(l,"ndarray",A);module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
