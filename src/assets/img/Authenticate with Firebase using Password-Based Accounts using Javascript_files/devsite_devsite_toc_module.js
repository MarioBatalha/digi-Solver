(function(_ds){var window=this;var a2=function(a){const b=a.ws,c=a.jc,d=a.Ip;a=a.Gq;let e;e='<ul class="devsite-nav-list"><li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle" role="heading" aria-level="2"><span class="devsite-nav-title"><span class="devsite-nav-text">On this page</span></span>';c&&(e=e+'<button type="button" title="'+_ds.jA("Expand/collapse contents"),e+='" class="devsite-nav-show-all button-transparent material-icons"></button>');e+="</li>";const f=b.length;for(let h=0;h<f;h++){var g=b[h];e+='<li class="devsite-nav-item"'+
(c&&g.index<a?" visible":"")+'><a href="#'+_ds.W(g.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.W(h)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.W(h)+'" track-metadata-link-destination="#'+_ds.W(g.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.R(g.text)+"</span></a>";if(_ds.U(g.children).length){e+='<ul class="devsite-nav-list">';
g=g.children;const k=g.length;for(let l=0;l<k;l++){const m=g[l];e+='<li class="devsite-nav-item"'+(c&&m.index<a?" visible":"")+'><a href="#'+_ds.W(m.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.W(h)+"."+_ds.W(l)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.W(h)+"."+_ds.W(l)+'" track-metadata-link-destination="#'+
_ds.W(m.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.R(m.text)+"</span></a></li>"}e+="</ul>"}e+="</li>"}d&&(e=c?e+'<li class="devsite-nav-item devsite-apix-link"><a href="#try-it" class="devsite-nav-title"><span class="devsite-nav-text" tooltip>Try it</span></a></li>':e+'<button type="button" class="devsite-show-apix button-primary">Try it!</button>');c&&(e=e+'<li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" track-type="navigation" track-name="embeddedNavExpand" title="'+
_ds.jA("Expand/collapse contents"),e+='"></button></li>');return(0,_ds.Q)(e+"</ul>")};var c2=function(a){if(!a.hasAttribute("disabled")){var b=document.querySelector("devsite-content .devsite-article-body");b?(a.jc?a.classList.add("devsite-toc-embedded"):a.classList.add("devsite-toc"),b2(a,b),a.H=!0):a.Ya()}},e2=async function(a){await d2(a);if(a.h){var b=`#${a.h.id}`,c=encodeURI(b);b=a.F.get(b)||a.F.get(c);a.v!==b&&(a.v&&a.v.classList.remove("devsite-nav-active"),b&&(b.classList.add("devsite-nav-active"),a.v=b))}},f2=function(a){a.jc||a.eventHandler.listen(document.body,"devsite-content-updated devsite-element-hidden devsite-element-visible devsite-page-loaded devsite-sticky-resize devsite-sticky-scroll".split(" "),
()=>{a.M.Da()});a.eventHandler.listen(document.body,"devsite-content-updated",()=>{c2(a)})},g2=async function(a){if("IntersectionObserver"in _ds.ni()){a.C&&a.C.disconnect();var b=document.querySelector("devsite-header");let c=152;b&&(await window.customElements.whenDefined("devsite-header"),(b=Number(b.getAttribute("top-row--height"))+Number(b.getAttribute("bottom-row--height")))&&(c=b));a.C=new IntersectionObserver(d=>{for(const e of d)e.isIntersecting?a.D.add(e.target):a.D.delete(e.target);a.M.Da()},
{rootMargin:`${c}px 0px 0px 0px`,threshold:[0,1]})}a.J.h()},d2=async function(a){let b=0;var c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),b=c.C());c=a.j.findIndex(e=>a.D.has(e)&&e.getBoundingClientRect().top>=b);const d=a.j[c];if(d){const e=await h2();d.getBoundingClientRect().top-b>e&&0<c?a.h=a.j[c-1]:a.h=d}else a.h&&a.h.getBoundingClientRect().top>window.innerHeight&&(c=a.j.indexOf(a.h),0<c&&(a.h=a.j[c-1]))},b2=function(a,b){const c=[];
let d=!1,e="";switch(a.getAttribute("depth")){case "1":e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents)";break;default:e="h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)"}a.j=[...b.querySelectorAll(e)].filter(f=>f.id&&f.dataset.text).filter(f=>i2(f));for(const [f,g]of a.j.entries())b=g,b={id:b.id,level:b.tagName.toLowerCase(),text:b.dataset.text,children:[],index:f},"h2"===b.level?(c.push(b),d=!0):d?c[c.length-
1].children.push(b):c.push(b);_ds.db(a.G,c,a.K.bind(a))&&a.H||(c.length?(j2(a,c),a.show(),a.jc||k2(a)):a.Ya(),a.G=c)},i2=function(a){return _ds.ck.find(b=>!!_ds.Mi(a,null,b,6))||_ds.Mi(a,"devsite-selector",null,6)||_ds.Mi(a,null,"devsite-dialog",3)?!1:!0},j2=function(a,b){const c=_ds.M(a2,{ws:b,jc:a.jc,Ip:!!document.body.querySelector("devsite-apix, .devsite-apix"),Gq:8>b.length?8:5});b=c.querySelectorAll("a.devsite-nav-title");for(const d of b){b=d;const e=b.hash,f=encodeURI(b.hash);a.F.set(e,b);
a.F.set(f,b)}_ds.si(a);a.jc&&_ds.C(a,"hidden","",c);a.appendChild(c);if(a.jc){if(8<a.getElementsByClassName("devsite-nav-item").length){for(const d of a.querySelectorAll(".devsite-nav-show-all, .devsite-nav-more-items"))a.eventHandler.listen(d,"click",()=>{a.hasAttribute("expanded")?a.removeAttribute("expanded"):_ds.C(a,"expanded","")});_ds.C(a,"expandable","")}else a.removeAttribute("expandable");setTimeout(()=>{c.removeAttribute("hidden")},0)}},k2=async function(a){await a.J.promise;if(a.C){a.C.disconnect();
a.D.clear();a.v&&a.v.classList.remove("devsite-nav-active");a.v=null;for(const b of a.j)a.C.observe(b)}},h2=async function(){let a=0,b=0;const c=document.querySelector("devsite-header");c&&(await window.customElements.whenDefined("devsite-header"),a=c.C(),b=c.J());return Math.max(b-a,Math.floor((window.innerHeight-a)/5))},l2=class extends _ds.E{static get observedAttributes(){return["max-height","offset"]}constructor(){super();this.eventHandler=new _ds.G;this.J=new _ds.gl;this.D=new Set;this.F=new Map;
this.W=new _ds.al(()=>void c2(this),16);this.M=new _ds.al(()=>void e2(this),33);this.h=this.v=null;this.j=[];this.H=!1;this.C=null;this.jc=!1;this.G=[];_ds.th(this,(0,_ds.u)`disabled`,(0,_ds.u)`has-sidebar`,(0,_ds.u)`hidden`,(0,_ds.u)`expandable`,(0,_ds.u)`expanded`,(0,_ds.u)`visible`)}connectedCallback(){this.jc=this.hasAttribute("devsite-toc-embedded");c2(this);f2(this)}disconnectedCallback(){this.Ya();this.H=!1;_ds.I(this.eventHandler)}Xg(a){a=a&&"false"===a.toLowerCase();this.G=[];_ds.si(this);
a?(_ds.C(this,"disabled",""),this.Ya()):(this.removeAttribute("disabled"),this.show(),this.W.Da())}Ya(){_ds.si(this);this.dispatchEvent(new CustomEvent("devsite-element-hidden",{bubbles:!0}));this.removeAttribute("visible");_ds.C(this,"hidden","");if(!this.jc){const a=document.querySelector(".devsite-main-content");a&&a.removeAttribute("has-sidebar")}}show(){this.dispatchEvent(new CustomEvent("devsite-element-visible",{bubbles:!0}));this.removeAttribute("hidden");_ds.C(this,"visible","");if(!this.jc){const a=
document.querySelector(".devsite-main-content");a&&_ds.C(this,"has-sidebar","",a);g2(this)}}K(a,b){let c=!0;if(a.children.length||b.children.length)c=_ds.db(a.children,b.children,this.K.bind(this));return c&&a.id===b.id&&a.text===b.text}};l2.prototype.renderUpdatedContent=l2.prototype.Xg;l2.prototype.disconnectedCallback=l2.prototype.disconnectedCallback;l2.prototype.connectedCallback=l2.prototype.connectedCallback;try{window.customElements.define("devsite-toc",l2)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteToc",a)};})(_ds_www);
