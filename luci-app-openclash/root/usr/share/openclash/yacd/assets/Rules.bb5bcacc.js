var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,o=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&s(e,r,t[r]);return e},l=(e,n)=>t(e,r(n));import{e as c,u as m,K as u,O as d,U as p,r as f,k as v,R as y}from"./vendor.3b6f54f7.js";import{a as g,V as _}from"./index.esm.023d01c8.js";import{t as E,E as h,B as x,c as b,C as w,g as C}from"./index.812b4086.js";import{R as j,T as N}from"./TextFitler.11aeeb98.js";import{f as O}from"./index.28cb98f3.js";import{F as P,p as R}from"./Fab.5de705c1.js";import{u as T}from"./useRemainingViewPortHeight.c7e29e4e.js";import"./debounce.cc85a806.js";async function k(e,t){const{url:r,init:n}=E(t);let a={providers:{}};try{const t=await fetch(r+e,n);t.ok&&(a=await t.json())}catch(i){console.log("failed to GET /providers/rules",i)}return function(e){const t=e.providers,r=Object.keys(t),n={};for(let a=0;a<r.length;a++){const e=r[a];n[e]=l(o({},t[e]),{idx:a})}return{byName:n,names:r}}(a)}async function F({name:e,apiConfig:t}){const{url:r,init:n}=E(t);try{return(await fetch(r+`/providers/rules/${e}`,o({method:"PUT"},n))).ok}catch(a){return console.log("failed to PUT /providers/rules/:name",a),!1}}async function D({names:e,apiConfig:t}){for(let r=0;r<e.length;r++)await F({name:e[r],apiConfig:t})}var I=function(e,t,r,n,a,i,s,o){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,a,i,s,o],m=0;(l=new Error(t.replace(/%s/g,(function(){return c[m++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};async function q(e,t){let r={rules:[]};try{const{url:n,init:a}=E(t),i=await fetch(n+e,a);i.ok&&(r=await i.json())}catch(n){console.log("failed to fetch rules",n)}return function(e){return I(e.rules&&e.rules.length>=0,"there is no valid rules list in the rules API response"),e.rules.map(((e,t)=>l(o({},e),{id:t})))}(r)}const L=c({key:"ruleFilterText",default:""});function $(e){return m(["/providers/rules",e],(()=>k("/providers/rules",e)))}var S="_RuleProviderItem_ly9yn_1",U="_left_ly9yn_7",A="_middle_ly9yn_14",B="_gray_ly9yn_20",V="_refreshButtonWrapper_ly9yn_24";function K({idx:e,name:t,vehicleType:r,behavior:n,updatedAt:a,ruleCount:i,apiConfig:s}){const[o,l]=function(e,t){const r=d(),{mutate:n,isLoading:a}=p(F,{onSuccess:()=>{r.invalidateQueries("/providers/rules")}});return[r=>{r.preventDefault(),n({name:e,apiConfig:t})},a]}(t,s),c=O(new Date(a),new Date);return f.exports.createElement("div",{className:S},f.exports.createElement("span",{className:U},e),f.exports.createElement("div",{className:A},f.exports.createElement(h,{name:t,type:`${r} / ${n}`}),f.exports.createElement("div",{className:B},i<2?`${i} rule`:`${i} rules`),f.exports.createElement("small",{className:B},"Updated ",c," ago")),f.exports.createElement("span",{className:V},f.exports.createElement(x,{onClick:o,disabled:l},f.exports.createElement(j,{isRotating:l}))))}function Q({apiConfig:e}){const[t,r]=function(e){const t=d(),{data:r}=$(e),{mutate:n,isLoading:a}=p(D,{onSuccess:()=>{t.invalidateQueries("/providers/rules")}});return[t=>{t.preventDefault(),n({names:r.names,apiConfig:e})},a]}(e),{t:n}=v();return f.exports.createElement(P,{icon:f.exports.createElement(j,{isRotating:r}),text:n("update_all_rule_provider"),style:R,onClick:t})}var W="_rule_1ymqx_1",z="_left_1ymqx_12",G="_a_1ymqx_19",H="_b_1ymqx_26",J="_type_1ymqx_37";const M={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function X({type:e,payload:t,proxy:r,id:n}){const a=function({proxy:e}){let t=M._default;return M[e]&&(t=M[e]),{color:t}}({proxy:r});return y.createElement("div",{className:W},y.createElement("div",{className:z},n),y.createElement("div",null,y.createElement("div",{className:H},t),y.createElement("div",{className:G},y.createElement("div",{className:J},e),y.createElement("div",{style:a},r))))}var Y="_header_1j1w3_1",Z="_RuleProviderItemWrapper_1j1w3_17";const{memo:ee}=y;function te(e,{rules:t,provider:r}){const n=r.names.length;if(e<n)return r.names[e];return t[e-n].id}const re=ee((({index:e,style:t,data:r})=>{const{rules:n,provider:a,apiConfig:i}=r,s=a.names.length;if(e<s){const r=a.names[e],n=a.byName[r];return y.createElement("div",{style:t,className:Z},y.createElement(K,o({apiConfig:i},n)))}const l=n[e-s];return y.createElement("div",{style:t},y.createElement(X,o({},l)))}),g);var ne=b((e=>({apiConfig:C(e)})))((function({apiConfig:e}){const[t,r]=T(),{rules:n,provider:a}=function(e){const{data:t,isFetching:r}=m(["/rules",e],(()=>q("/rules",e))),{data:n}=$(e),[a]=u(L);if(""===a)return{rules:t,provider:n,isFetching:r};{const e=a.toLowerCase();return{rules:t.filter((t=>t.payload.toLowerCase().indexOf(e)>=0)),isFetching:r,provider:{byName:n.byName,names:n.names.filter((t=>t.toLowerCase().indexOf(e)>=0))}}}}(e),i=function({provider:e}){return function(t){return t<e.names.length?90:80}}({provider:a}),{t:s}=v();return y.createElement("div",null,y.createElement("div",{className:Y},y.createElement(w,{title:s("Rules")}),y.createElement(N,{placeholder:"Filter",textAtom:L})),y.createElement("div",{ref:t,style:{paddingBottom:30}},y.createElement(_,{height:r-30,width:"100%",itemCount:n.length+a.names.length,itemSize:i,itemData:{rules:n,provider:a,apiConfig:e},itemKey:te},re)),a&&a.names&&a.names.length>0?y.createElement(Q,{apiConfig:e}):null)}));export default ne;
