"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{3620:(w,u,r)=>{r.r(u),r.d(u,{startFocusVisible:()=>t});const g="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],t=n=>{let i=[],a=!0;const s=n?n.shadowRoot:document,c=n||document.body,l=m=>{i.forEach(h=>h.classList.remove(g)),m.forEach(h=>h.classList.add(g)),i=m},e=()=>{a=!1,l([])},p=m=>{a=o.includes(m.key),a||l([])},_=m=>{if(a&&m.composedPath){const h=m.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));l(h)}},v=()=>{s.activeElement===c&&l([])};return s.addEventListener("keydown",p),s.addEventListener("focusin",_),s.addEventListener("focusout",v),s.addEventListener("touchstart",e),s.addEventListener("mousedown",e),{destroy:()=>{s.removeEventListener("keydown",p),s.removeEventListener("focusin",_),s.removeEventListener("focusout",v),s.removeEventListener("touchstart",e),s.removeEventListener("mousedown",e)},setFocus:l}}},2352:(w,u,r)=>{r.d(u,{a:()=>o,b:()=>n,c:()=>i,d:()=>t,e:()=>a,f:()=>d,g:()=>g});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},972:(w,u,r)=>{r.d(u,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(o,t,n)=>{const i=o*t/n-o+"ms",a=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(o,t,n)=>{const i=t/n,a=o*i-o+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(o,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:8,fn:(o,t,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*t+(t<n/2?180:-180)}deg)`,"animation-delay":o*t/n-o+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(o,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*t+(t<n/2?180:-180)}deg)`,"animation-delay":o*t/n-o+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(o,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":o*t/n-o+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(o,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":o*t/n-o+"ms"}})}}},9570:(w,u,r)=>{r.d(u,{t:()=>s});var g=r(4762),d=r(7738),o=r(9619),t=r(5793),n=r(5924);function i(c,l){if(1&c){const e=o.EpF();o.TgZ(0,"ion-header",2),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-title"),o.TgZ(3,"h4"),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"ion-buttons",3),o.TgZ(6,"ion-icon",4),o.NdJ("click",function(){return o.CHM(e),o.oxw().closeModal()}),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&c){const e=l.$implicit;o.xp6(4),o.Oqu(e("about-title"))}}function a(c,l){if(1&c&&(o.TgZ(0,"ion-content",5),o.TgZ(1,"ion-grid",6),o.TgZ(2,"ion-row",7),o.TgZ(3,"ion-col",8),o._UZ(4,"img",9),o.qZA(),o.qZA(),o.TgZ(5,"ion-row"),o.TgZ(6,"ion-col",10),o.TgZ(7,"h1",11),o._uU(8),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"ion-row"),o.TgZ(10,"ion-col",10),o.TgZ(11,"h3",12),o._uU(12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"ion-row"),o.TgZ(14,"ion-col",10),o.TgZ(15,"h3",12),o._uU(16),o.qZA(),o.TgZ(17,"p"),o._uU(18),o.qZA(),o.qZA(),o.qZA(),o.TgZ(19,"ion-row",13),o.TgZ(20,"ion-col",14),o.TgZ(21,"h3",12),o._uU(22),o.qZA(),o.TgZ(23,"p",15),o._uU(24),o.TgZ(25,"a",16),o._uU(26),o.qZA(),o.qZA(),o.TgZ(27,"p",15),o._uU(28),o.TgZ(29,"a",17),o._uU(30,"VOID Open Data"),o.qZA(),o.qZA(),o.TgZ(31,"p",15),o._uU(32),o.TgZ(33,"a",18),o._uU(34,"VOID"),o.qZA(),o.qZA(),o.TgZ(35,"p",19),o.TgZ(36,"a",20),o._UZ(37,"ion-icon",21),o.qZA(),o.TgZ(38,"a",22),o._UZ(39,"ion-icon",23),o.qZA(),o.TgZ(40,"a",24),o._UZ(41,"ion-icon",25),o.qZA(),o.TgZ(42,"a",26),o._UZ(43,"ion-icon",27),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(44,"ion-row",28),o.TgZ(45,"ion-col",29),o.TgZ(46,"div",30),o._uU(47),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&c){const e=l.$implicit,p=o.oxw();o.Q6J("fullscreen",!0)("scrollY",!0),o.xp6(8),o.Oqu(e("about.titolo")),o.xp6(4),o.Oqu(e("about.sottotitolo")),o.xp6(4),o.Oqu(e("about.metodologia")),o.xp6(2),o.Oqu(e("about.htmlMetodologia")),o.xp6(4),o.Oqu(e("about.credits")),o.xp6(2),o.hij("",e("about.dataset")," : "),o.xp6(2),o.Oqu(e("about.dataseturl")),o.xp6(2),o.AsE("",e("about.design")," & ",e("about.development")," : "),o.xp6(4),o.hij(" ",e("about.projectManagement")," : "),o.xp6(15),o.hij("VOID strutture ricettive - v.",p.version,"")}}let s=(()=>{class c{constructor(e){this.modalController=e,this.version=d.N.version}ngOnInit(){}closeModal(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss("Modal Removed")})}}return c.\u0275fac=function(e){return new(e||c)(o.Y36(t.IN))},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-about"]],decls:2,vars:0,consts:[["class","about-header",4,"transloco"],["class","about-modal-content",3,"fullscreen","scrollY",4,"transloco"],[1,"about-header"],["slot","end"],["slot","icon-only","name","close-circle-outline",3,"click"],[1,"about-modal-content",3,"fullscreen","scrollY"],[1,"about-grid"],[1,"logo-row"],["size","10","sizeSm","10","sizeMd","10",1,"about-col","colophon-container"],["src","assets/icon/favicon.png",1,"about-logo"],["text-center","","size","10","sizeSm","10","sizeMd","10",1,"about-col"],[1,"about-titolo"],[1,"about-titolo-sezione"],[1,"credits-row"],["size","10","sizeSm","10","sizeMd","10",1,"about-col","credits-container"],[1,"about-credit"],["href","https://dati.veneto.it/opendata/elenco_strutture_ricettive_del_veneto","target","_blank"],["href","https://vo-id.it/index.php/progetto/open-data/","target","_blank"],["href","https://www.vo-id.it","target","_blank"],[1,"about-credit","about-social"],["href","https://github.com/crunchlab/void-turismo","target","_blank"],["name","logo-github"],["href","https://www.instagram.com/voidinnovationlab/","target","_blank"],["name","logo-instagram"],["href","https://www.linkedin.com/company/voidinnovationlab/","target","_blank"],["name","logo-linkedin"],["href","https://www.facebook.com/voidinnovationlab","target","_blank"],["name","logo-facebook"],[1,"colophon-row","app-info-row"],["size","10","sizeSm","10",1,"about-col","colophon-container","app-info-container"],[1,"about-version-number"]],template:function(e,p){1&e&&(o.YNc(0,i,7,1,"ion-header",0),o.YNc(1,a,48,13,"ion-content",1))},directives:[n.KI,t.Gu,t.sr,t.wd,t.Sm,t.gu,t.W2,t.jY,t.Nd,t.wI],styles:[".about-header[_ngcontent-%COMP%]{background-image:unset}.close-modal[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;width:28px;height:28px;cursor:pointer}.about-col[_ngcontent-%COMP%]{margin:auto}.about-modal-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.about-modal-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:0!important}.about-logo[_ngcontent-%COMP%]{max-width:64px}.colophon-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.colophon-row[_ngcontent-%COMP%]{margin-top:50px}.logo-row[_ngcontent-%COMP%]{margin-top:12px}.logo-row[_ngcontent-%COMP%]   .about-logo[_ngcontent-%COMP%]{width:58px;margin:auto}.about-eu-flag[_ngcontent-%COMP%]{width:auto;height:100%}.about-colophon[_ngcontent-%COMP%]{margin-top:0;padding-left:20px}.about-social[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:space-around}[name=logo-github][_ngcontent-%COMP%], [name=logo-instagram][_ngcontent-%COMP%], [name=logo-facebook][_ngcontent-%COMP%], [name=logo-linkedin][_ngcontent-%COMP%]{display:inline-flex;margin:auto;width:24px;height:24px}.about-version-number[_ngcontent-%COMP%]{width:100%;font-size:small;text-align:right}"]}),c})()}}]);