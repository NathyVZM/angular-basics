import{M as p,ga as a,ha as l,ia as u,ja as f,ka as s,l as r,p as c,q as i}from"./chunk-KY3CMPWI.js";var y=[{path:"",redirectTo:"the-promised-neverland",pathMatch:"full"},{path:"heroes",loadChildren:()=>import("./chunk-B2LLHY5Y.js").then(e=>e.HeroesModule)},{path:"the-promised-neverland",loadChildren:()=>import("./chunk-CEO5CETH.js").then(e=>e.TpnModule)}],d=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[s.forRoot(y),s]});let e=t;return e})();var h=(()=>{let t=class t{constructor(){this.title="Base app"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(o,g){o&1&&p(0,"router-outlet")},dependencies:[f]});let e=t;return e})();var C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a]});let e=t;return e})();var M=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=i({type:t,bootstrap:[h]}),t.\u0275inj=r({imports:[u,d,C]});let e=t;return e})();l().bootstrapModule(M).catch(e=>console.error(e));