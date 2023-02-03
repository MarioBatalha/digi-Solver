(function(_ds){var window=this;var w0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Loading</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},x0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Your signed in state has changed.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Reload</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">OK</button></div></div>')},
y0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">A new version is available</div><button class="devsite-snackbar-action">Refresh</button></div></div>')},z0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Something went wrong. Please try again.</div><button class="devsite-snackbar-action">Retry</button></div></div>')},
A0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copied to clipboard</div></div></div>')},B0=function(a){a=a||{};a=a.fl;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google uses cookies to deliver its services, to personalize ads, and to analyze traffic. You can adjust your privacy controls anytime in your <a href="//myaccount.google.com/intro/data-and-personalization">Google settings</a>.</div><a href="'+
((a?_ds.W(_ds.Y(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},C0=function(a){a=a||{};a=a.fl;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">This site uses cookies from Google to deliver its services and to analyze traffic.</div><a href="'+((a?_ds.W(_ds.Y(a)):
"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.Q)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},D0=function(){return(0,_ds.Q)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Unsupported file type.</div><button class="devsite-snackbar-action">OK</button></div></div>')},E0=function(a){const b=a.message,
c=a.link,d=a.Dq;a='<div class="devsite-snackbar-snack" type="'+_ds.W(a.Zr)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.R(b)+'</div><button class="devsite-snackbar-action">';a=a+'No, thanks</button><a href="'+(_ds.W(_ds.Y(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.R(d):a+"OK";return(0,_ds.Q)(a+"</a></div></div>")},F0=function(a){const b=a.Ol,c=a.link,d=a.wc,e=a.pe;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.R(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">OK</button>');a+=(_ds.aA(c)&&_ds.aA(b)?'<a href="'+_ds.W(_ds.Y(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.R(b)+"</a>":"")+"</div></div>";return(0,_ds.Q)(a)};var I0=function(a,b,c=null,d=!1){b&&(_ds.Vf(b,_ds.Ff,()=>{_ds.vi(b);a.j=null;if(c)G0(a,c,d);else{const e=a.h.length?a.h.shift():null;null!==e&&H0(a,e)}}),b.removeAttribute("show"))},J0=function(a,b,c=!1){a.appendChild(b);window.requestAnimationFrame(()=>{G0(a,b,c)})},K0=function(a){I0(a,a.querySelector('*[type^="cookie-notification"]'))},L0=function(a){I0(a,a.querySelector('*[type^="support-attachment-error"]'))},M0=function(a){I0(a,a.querySelector('*[type^="signin-state-changed"]'))},H0=function(a,
b){switch(b){case "loading":a.showLoading();break;case "refresh":N0(a);break;case "error":O0(a);break;case "copied-to-clipboard":var c=_ds.M(A0);J0(a,c,!0);break;case "cookie-notification":P0(a);break;case "support-attachment-error":Q0(a);break;case "signin-state-changed":R0(a)}if(null==b?0:b.startsWith("notification-")){c=a.getAttribute(`${b}-message`);const d=a.getAttribute(`${b}-link`),e=a.getAttribute(`${b}-link-txt`);S0(a,b,c,d,e,a.hasAttribute(`${b}-store-key`))}},N0=function(a){const b=_ds.M(y0);
_ds.Wf(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.ni().location.reload()});J0(a,b)},O0=function(a){const b=_ds.M(z0);_ds.Wf(b.querySelector(".devsite-snackbar-action"),"click",()=>{_ds.ni().location.reload()});J0(a,b)},P0=function(a){if(a.storage.isAvailable()&&!a.storage.get("devsite-eu-cookie")){var b=C0;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:b=B0;break;default:b=C0}if(a.hasAttribute("data-cookie-policy")){const c=a.getAttribute("data-cookie-policy");
b=_ds.M(b,{fl:c})}else b=_ds.M(b);_ds.Vf(b.querySelector(".devsite-snackbar-action"),"click",()=>{a.storage.isAvailable()&&a.storage.set("devsite-eu-cookie","1");K0(a)});J0(a,b)}else b=a.h.length?a.h.shift():null,null!==b&&H0(a,b)},Q0=function(a){const b=_ds.M(D0);J0(a,b);_ds.Vf(b.querySelector(".devsite-snackbar-action"),"click",()=>{L0(a)})},R0=function(a){M0(a);const b=_ds.M(x0);J0(a,b,!1);_ds.Wf(b.querySelector(".devsite-snackbar-action--reload"),"click",async()=>{await (await _ds.x()).reload();
M0(a)});_ds.Wf(b.querySelector(".devsite-snackbar-action--dismiss"),"click",async()=>{await (await _ds.x()).reload();M0(a)})},G0=function(a,b,c=!1){window.clearTimeout(a.C);a.j?I0(a,a.j,b,c):(a.j=b,window.requestAnimationFrame(()=>{b.setAttribute("show","")}),c&&(a.C=window.setTimeout(()=>{a.removeAttribute("type");I0(a,b)},5E3)))},S0=function(a,b,c,d,e,f){if(c&&d){const g="devsite-notification"+d;if(!f||a.storage.isAvailable()&&!a.storage.get(g)){b=_ds.M(E0,{Zr:b,message:c,link:d,Dq:e});J0(a,b);
const h=new _ds.G(b);h.listen(b,"click",k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||k.target.classList.contains("devsite-snackbar-action"))f&&a.storage.isAvailable()&&a.storage.set(g,"1"),a.v(),_ds.I(h)})}}},T0=class extends _ds.E{static get observedAttributes(){return["type"]}constructor(){super();this.h=[];this.C=-1;this.j=null;this.eventHandler=new _ds.G(this);this.storage=new _ds.Hm}connectedCallback(){this.eventHandler.listen(document.body,"devsite-show-custom-snackbar-msg",
this.D);this.eventHandler.listen(document.body,"devsite-show-notification-snackbar-msg",this.F);this.eventHandler.listen(document.body,"devsite-hide-notification-snackbar-msg",this.v)}disconnectedCallback(){_ds.I(this.eventHandler)}D(a){this.setAttribute("type","custom");var b;if(a=null==(b=a.Z)?void 0:b.detail){b=!!a.showClose;var c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.M(F0,{message:a.msg,Ol:a.linkText,link:a.href,wc:c,pe:b});b&&_ds.Vf(d.querySelector(".devsite-snackbar-action"),
"click",()=>{I0(this,d)});J0(this,d,!b)}}attributeChangedCallback(a,b,c){if("type"===a){switch(b){case "loading":this.hideLoading();break;case "refresh":I0(this,this.querySelector('*[type^="refresh"]'));break;case "error":I0(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":I0(this,this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":K0(this);break;case "support-attachment-error":L0(this);break;case "signin-state-changed":M0(this);break;
case "custom":I0(this,this.querySelector('*[type^="custom"]'))}null!=b&&b.startsWith("notification-")&&this.v();if(c){let d;if(null==(d=c)?0:d.includes(",")){let e;this.h=null==(e=c)?void 0:e.split(",");c=`${this.h.shift()}`}H0(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=_ds.M(w0);J0(this,a)}}hideLoading(){I0(this,this.querySelector('*[type^="loading"]'))}F(a){let b;(a=null==(b=a.Z)?void 0:b.detail)&&S0(this,"notification-custom",a.msg,a.href,a.Ol,!0)}v(){I0(this,this.querySelector('*[type^="notification"]'))}};
T0.prototype.attributeChangedCallback=T0.prototype.attributeChangedCallback;T0.prototype.disconnectedCallback=T0.prototype.disconnectedCallback;T0.prototype.connectedCallback=T0.prototype.connectedCallback;try{window.customElements.define("devsite-snackbar",T0)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);
