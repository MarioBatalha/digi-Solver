(function(_ds){var window=this;var VN=function(a){const b=a.Wa;a=a.vb;return(0,_ds.Q)('<div class="devsite-badger-award-inner"><devsite-badge-awarded badge-name="'+_ds.W(b.title)+'" badge-icon-url="'+_ds.W(_ds.Y(b.imageUrl))+'" badge-url="'+_ds.W(_ds.Y(b.url))+'"'+(null!=b.currentTierCount?' badge-count="'+_ds.W(b.currentTierCount)+'"':"")+(null!=b.complete?' badge-complete="'+_ds.W(b.complete)+'"':"")+(null!=b.isNewTier?' is-new-tier="'+_ds.W(b.isNewTier)+'"':"")+(b.path?' badge-path="'+_ds.W(b.path)+'"':"")+(b.shareTitle?' badge-share-title="'+
_ds.W(b.shareTitle)+'"':"")+(b.shareDescription?' badge-share-description="'+_ds.W(b.shareDescription)+'"':"")+(b.nextPlaylistUrl?' next-playlist-url="'+_ds.W(_ds.Y(b.nextPlaylistUrl))+'"':"")+(b.redeemAnotherBtn?" redeem-another":"")+(b.hideButtons?" hide-buttons":"")+(b.redeemCode?' redeem-code="'+_ds.W(b.redeemCode)+'"':"")+(a?' return-uri="'+_ds.W(_ds.Y(a))+'"':"")+" dismiss></devsite-badge-awarded></div>")},WN=function(){return(0,_ds.Q)('<div class="devsite-badger-award"></div>')};var XN=/\/redeem.*|\/settings[\/]?.*?/,aO=function(a){a.eventHandler.listen(document.body,"devsite-before-page-change",()=>void YN(a));a.eventHandler.listen(document.body,"devsite-award-granted",b=>{(b=b.Z)&&b.detail&&ZN(a,b.detail.award)});a.eventHandler.listen(document.body,["devsite-page-loaded","devsite-page-changed"],()=>{a.ue();$N(a)})},YN=async function(a){if(a.h){var b=a.h.querySelectorAll(".devsite-badger-award-inner"),c=b[0];if(c){const d=c.querySelector("devsite-badge-awarded");if(null==
d?0:d.j)null==d||d.j();const e=null==d?void 0:d.getAttribute("badge-path");a.awards=a.awards.filter(f=>f.path!==e);c.removeAttribute("show");await _ds.Pj(200);_ds.vi(c);1===b.length&&(_ds.vi(a.h),a.h=null)}}},ZN=async function(a,b){if(b&&b.complete&&!a.awards.find(f=>f.path===b.path)&&"error"!==document.body.getAttribute("type")&&!XN.exec(document.location.pathname)){a.awards.push(b);if(!a.h){var c=document.querySelector(".static-badge-awarded-container");c?(a.h=c,a.j=!0):(a.h=_ds.M(WN),document.body.appendChild(a.h))}try{await window.customElements.whenDefined("devsite-badge-awarded")}catch(f){}var d;
c=null==(d=_ds.Kj())?void 0:d.href;var e=_ds.M(VN,{Wa:b,vb:c});e&&(a.eventHandler.listen(e,"devsite-badge-awarded-dismissed",()=>{YN(a)}),d=e.querySelector("devsite-badge-awarded"))&&(a.h.appendChild(e),_ds.el(a.eventHandler,d,"running",()=>{null==e||e.setAttribute("show","");var f;const g=null==(f=a.h)?void 0:f.querySelectorAll("devsite-badge-awarded");if(g&&!a.j)for(f=0;f<g.length;f++){let h;null==(h=g[f])||h.dispatchEvent(new CustomEvent("devsite-badge-awarded-stack-num-changed",{bubbles:!0,detail:{Jq:g.length-
1-f}}))}}))}},$N=function(a){if(a.storage.isAvailable()){var b=_ds.wF();if(b){b=b.filter(c=>3>c.displayCount);0<b.length?a.storage.set("temp_badges",JSON.stringify(b)):a.storage.remove("temp_badges");for(const c of b){b=new URL(c.awardedBy,document.location.origin);const d=_ds.F();(!c.awardedBy||b.origin===d.origin&&b.pathname===d.pathname)&&c.complete&&ZN(a,c)}}}},bO=class extends _ds.FF{constructor(){super(["devsite-badge-awarded"]);this.eventHandler=new _ds.G(this);this.storage=new _ds.Hm;this.h=
null;this.awards=[];this.j=!1}connectedCallback(){aO(this)}disconnectedCallback(){_ds.I(this.eventHandler);YN(this)}async ue(){await _ds.x();await window.customElements.whenDefined("devsite-user");var a=document.querySelector("devsite-user#devsite-user");if(a){var b=!1;try{b=await a.isSignedIn()}catch(c){}if(b&&await (new _ds.jD).Fc()){a=new _ds.WC;try{await a.qa()}catch(c){}}}}};try{window.customElements.define("devsite-badger",bO)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBadger",a)};})(_ds_www);
