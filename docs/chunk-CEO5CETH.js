import{$ as ke,A as l,B as Q,C as v,E as G,F as ee,H as Me,I as Ae,J as Ee,K as a,L as u,M as Fe,N as we,O as h,P as Ie,Q as f,R as Se,T as xe,U as te,V as ne,W as ie,X as S,Y as Ne,Z as Oe,_ as Pe,a as p,aa as Te,b as g,ba as je,c as ye,ca as re,d as ve,da as Ge,e as k,ea as Ue,f as _e,g as Ce,ga as Be,h as Z,i as T,j as F,ja as Re,k as Y,ka as oe,l as _,m as b,n as X,o as w,p as y,q as C,r as m,s as Ve,t as De,u as be,v as K,w as j,x as J,y as I,z as V}from"./chunk-KY3CMPWI.js";var He=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["app-tpn"]],decls:4,vars:0,template:function(r,o){r&1&&(a(0,"h1"),f(1,"TPN Characters"),u(),Fe(2,"hr")(3,"router-outlet"))},dependencies:[Re]});let t=e;return t})();var U,Vt=new Uint8Array(16);function se(){if(!U&&(U=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!U))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return U(Vt)}var d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function Le(t,e=0){return d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]}var Dt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ae={randomUUID:Dt};function bt(t,e,i){if(ae.randomUUID&&!e&&!t)return ae.randomUUID();t=t||{};let n=t.random||(t.rng||se)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){i=i||0;for(let r=0;r<16;++r)e[i+r]=n[r];return e}return Le(n)}var M=bt;var We=(()=>{let e=class e{constructor(){this.characters=[{id:M(),name:"Emma",grade:300},{id:M(),name:"Norman",grade:300},{id:M(),name:"Ray",grade:300}]}getCharacters(){return k(this.characters)}addCharacter(n){let r=g(p({},n),{id:M()});return this.characters.push(r),k(r)}deleteCharacter(n){let r=this.characters.findIndex(c=>c.id===n);if(r===-1)return ye;let[o]=this.characters.splice(r,1);return k(o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Mt=(t,e)=>({even:t,odd:e});function At(t,e){if(t&1){let i=we();a(0,"li",0)(1,"div")(2,"span"),f(3),u(),a(4,"strong"),f(5,"Grade: "),u(),a(6,"span"),f(7),u()(),a(8,"button",1),h("click",function(){let r=De(i).$implicit,o=Ie();return be(o.deleteCharacter(r.id))}),f(9,"Delete"),u()()}if(t&2){let i=e.$implicit,n=e.$index,r=e.$index;G("ngClass",Ne(4,Mt,r%2===0,r%2!==0)),V(3),xe("",n+1,". ",i.name," - "),V(4),Se(i.grade)}}var $e=(()=>{let e=class e{constructor(){this.onDeleteCharacter=j()}deleteCharacter(n){this.onDeleteCharacter.emit(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["tpn-list"]],inputs:{characters:"characters"},outputs:{onDeleteCharacter:"onDeleteCharacter"},decls:6,vars:2,consts:[[3,"ngClass"],[3,"click"]],template:function(r,o){r&1&&(a(0,"h4"),f(1,"Listing"),u(),a(2,"ul"),Ae(3,At,10,7,"li",0,Me),Oe(5,"async"),u()),r&2&&(V(3),Ee(Pe(5,0,o.characters)))},dependencies:[Ge,Ue],styles:[".even[_ngcontent-%COMP%]{background-color:#dbdbdb}.odd[_ngcontent-%COMP%]{background-color:#ebebeb}ul[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:stretch;flex-flow:column wrap}li[_ngcontent-%COMP%]{padding:10px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;flex-flow:row wrap}li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{outline:none;border:none;background-color:#f02b45;border-radius:10px;color:#fff;padding:1rem 1.5rem;cursor:pointer;transition:all .3s ease}li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{background-color:#d90f2a}"]});let t=e;return t})();var Qe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(l(Q),l(J))},e.\u0275dir=m({type:e});let t=e;return t})(),et=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=K(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[v]});let t=e;return t})(),ue=new b("");var Ft={provide:ue,useExisting:F(()=>q),multi:!0};function wt(){let t=re()?re().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var It=new b(""),q=(()=>{let e=class e extends Qe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!wt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(l(Q),l(J),l(It,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[S([Ft]),v]});let t=e;return t})();var tt=new b(""),nt=new b("");function it(t){return t!=null}function rt(t){return ke(t)?ve(t):t}function ot(t){let e={};return t.forEach(i=>{e=i!=null?p(p({},e),i):e}),Object.keys(e).length===0?null:e}function st(t,e){return e.map(i=>i(t))}function St(t){return!t.validate}function at(t){return t.map(e=>St(e)?e:i=>e.validate(i))}function xt(t){if(!t)return null;let e=t.filter(it);return e.length==0?null:function(i){return ot(st(i,e))}}function de(t){return t!=null?xt(at(t)):null}function Nt(t){if(!t)return null;let e=t.filter(it);return e.length==0?null:function(i){let n=st(i,e).map(rt);return Ce(n).pipe(_e(ot))}}function ce(t){return t!=null?Nt(at(t)):null}function qe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ot(t){return t._rawValidators}function Pt(t){return t._rawAsyncValidators}function le(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function ze(t,e){let i=le(e);return le(t).forEach(r=>{R(i,r)||i.push(r)}),i}function Ze(t,e){return le(e).filter(i=>!R(t,i))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=de(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},E=class extends H{get formDirective(){return null}get path(){return null}},P=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},kt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Hn=g(p({},kt),{"[class.ng-submitted]":"isSubmitted"}),lt=(()=>{let e=class e extends L{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(P,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})(),ut=(()=>{let e=class e extends L{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(E,10))},e.\u0275dir=m({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[v]});let t=e;return t})();var x="VALID",B="INVALID",A="PENDING",N="DISABLED";function dt(t){return(z(t)?t.validators:t)||null}function Tt(t){return Array.isArray(t)?de(t):t||null}function ct(t,e){return(z(e)?e.asyncValidators:t)||null}function jt(t){return Array.isArray(t)?ce(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Gt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new T(1e3,"");if(!n[i])throw new T(1001,"")}function Ut(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new T(1002,"")})}var W=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===B}get pending(){return this.status==A}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ze(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ze(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ze(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ze(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(n=>{n.disable(g(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(n=>{n.enable(g(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let i=rt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(B)?B:x}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=jt(this._rawAsyncValidators)}},$=class extends W{constructor(e,i,n){super(dt(i),ct(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Ut(this,!0,e),Object.keys(e).forEach(n=>{Gt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,o)=>{n=i(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=new b("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function Bt(t,e){return[...e.path,t]}function ht(t,e,i=fe){ft(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ht(t,e),Wt(t,e),Lt(t,e),Rt(t,e)}function Ye(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Rt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ft(t,e){let i=Ot(t);e.validator!==null?t.setValidators(qe(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Pt(t);e.asyncValidator!==null?t.setAsyncValidators(qe(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ye(e._rawValidators,r),Ye(e._rawAsyncValidators,r)}function Ht(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&pt(t,e)})}function Lt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&pt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function pt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Wt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function $t(t,e){t==null,ft(t,e)}function qt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function zt(t){return Object.getPrototypeOf(t.constructor)===et}function Zt(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Yt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===q?i=o:zt(o)?n=o:r=o}),r||n||i||null}var Xt={provide:E,useExisting:F(()=>pe)},O=Promise.resolve(),pe=(()=>{let e=class e extends E{constructor(n,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new I,this.form=new $({},de(n),ce(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){O.then(()=>{let r=this._findContainer(n.path);n.control=r.registerControl(n.name,n.control),ht(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){O.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){O.then(()=>{let r=this._findContainer(n.path),o=new $({});$t(o,n),r.registerControl(n.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){O.then(()=>{let r=this._findContainer(n.path);r&&r.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,r){O.then(()=>{this.form.get(n.path).setValue(r)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submitted=!0,Zt(this.form,this._directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}};e.\u0275fac=function(r){return new(r||e)(l(tt,10),l(nt,10),l(he,8))},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&h("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[w.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([Xt]),v]});let t=e;return t})();function Xe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ke(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Kt=class extends W{constructor(e=null,i,n){super(dt(i),ct(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ke(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Jt={provide:P,useExisting:F(()=>me)},Je=Promise.resolve(),me=(()=>{let e=class e extends P{constructor(n,r,o,c,s,Ct){super(),this._changeDetectorRef=s,this.callSetDisabledState=Ct,this.control=new Kt,this._registered=!1,this.name="",this.update=new I,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Yt(this,c)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),qt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ht(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Je.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&je(r);Je.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Bt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(l(E,9),l(tt,10),l(nt,10),l(ue,10),l(Te,8),l(he,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[w.None,"disabled","isDisabled"],model:[w.None,"ngModel","model"],options:[w.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([Jt]),v,Ve]});let t=e;return t})(),mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),Qt={provide:ue,useExisting:F(()=>ge),multi:!0},ge=(()=>{let e=class e extends et{writeValue(n){let r=n??"";this.setProperty("value",r)}registerOnChange(n){this.onChange=r=>{n(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=K(e)))(o||e)}})(),e.\u0275dir=m({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&h("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},features:[S([Qt]),v]});let t=e;return t})();var en=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=_({});let t=e;return t})();var gt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:he,useValue:n.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=_({imports:[en]});let t=e;return t})();var yt=(()=>{let e=class e{constructor(){this.onAddCharacter=j(),this.character={id:"",name:"",grade:0}}addCharacter(){this.onAddCharacter.emit(this.character),this.character={id:"",name:"",grade:0}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["tpn-add-character"]],outputs:{onAddCharacter:"onAddCharacter"},decls:7,vars:2,consts:[[3,"ngSubmit"],["type","text","placeholder","Name","name","name",3,"ngModelChange","ngModel"],["type","number","placeholder","Grade","name","grade",3,"ngModelChange","ngModel"],["type","submit"]],template:function(r,o){r&1&&(a(0,"h4"),f(1,"Add character"),u(),a(2,"form",0),h("ngSubmit",function(){return o.addCharacter()}),a(3,"input",1),ie("ngModelChange",function(s){return ne(o.character.name,s)||(o.character.name=s),s}),u(),a(4,"input",2),ie("ngModelChange",function(s){return ne(o.character.grade,s)||(o.character.grade=s),s}),u(),a(5,"button",3),f(6,"Add"),u()()),r&2&&(V(3),te("ngModel",o.character.name),V(),te("ngModel",o.character.grade))},dependencies:[mt,q,ge,lt,ut,me,pe]});let t=e;return t})();var vt=(()=>{let e=class e{constructor(){this.tpnService=X(We),this.characters$=this.tpnService.getCharacters()}addCharacter(n){this.tpnService.addCharacter(n).pipe(Z()).subscribe(()=>{})}deleteCharacter(n){this.tpnService.deleteCharacter(n).pipe(Z()).subscribe(()=>{})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["app-main"]],decls:2,vars:1,consts:[[3,"onDeleteCharacter","characters"],[3,"onAddCharacter"]],template:function(r,o){r&1&&(a(0,"tpn-list",0),h("onDeleteCharacter",function(s){return o.deleteCharacter(s)}),u(),a(1,"tpn-add-character",1),h("onAddCharacter",function(s){return o.addCharacter(s)}),u()),r&2&&G("characters",o.characters$)},dependencies:[$e,yt]});let t=e;return t})();var rn=[{path:"",component:He,title:"TPN",children:[{path:"",component:vt,title:"TPN - Main"}]}],_t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=_({imports:[oe.forChild(rn),oe]});let t=e;return t})();var fi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=C({type:e}),e.\u0275inj=_({imports:[Be,_t,gt]});let t=e;return t})();export{fi as TpnModule};