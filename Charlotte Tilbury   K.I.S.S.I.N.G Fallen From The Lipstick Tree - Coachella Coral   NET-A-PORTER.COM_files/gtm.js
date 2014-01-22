// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 18
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var k=this,ca=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ea=function(a){if(null==a)return String(a);var b=da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ga=function(a){if(!a||"object"!=ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!fa(a,"constructor")&&!fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var c in a);return void 0===
c||fa(a,c)};var ha=function(){},r=function(a){return"function"==typeof a},v=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ia=function(a){return"number"==ea(a)&&!isNaN(a)},ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ka=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},z=function(a){return Math.round(Number(a))||0},la=function(a){var b=[];if(v(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));
return b},B=function(){this.prefix="gtm.";this.B={}};B.prototype.set=function(a,b){this.B[this.prefix+a]=b};B.prototype.get=function(a){return this.B[this.prefix+a]};B.prototype.contains=function(a){return void 0!==this.get(a)};
var ma=function(a,b,c){try{return a["4"](a,b||ha,c||ha)}catch(d){}return!1},na=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=ka(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},oa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},pa=function(a){for(var b=0;b<a.length;b++)a[b]()},qa=(new Date).getTime(),ra=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c};var C=window,G=document,sa=navigator,H=function(a,b){var c=C[a],d="var "+a+";";if(k.execScript)k.execScript(d,"JavaScript");else if(k.eval)if(null==ca&&(k.eval("var _et_ = 1;"),"undefined"!=typeof k._et_?(delete k._et_,ca=!0):ca=!1),ca)k.eval(d);else{var e=k.document,f=e.createElement("script");f.type="text/javascript";f.defer=!1;f.appendChild(e.createTextNode(d));e.body.appendChild(f);e.body.removeChild(f)}else throw Error("goog.globalEval not available");C[a]=void 0===c?b:c;return C[a]},I=function(a,
b,c){return("http:"==C.location.protocol?b:a)+c},ta=function(a){var b=G.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},ua=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},J=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ua(d,b);c&&(d.onerror=c);ta(d)},va=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display=
"none";c.style.visibility="hidden";ta(c);ua(c,b);void 0!==a&&(c.src=a);return c},L=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},M=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},N=function(a){C.setTimeout(a,0)},wa=!1,xa=[],ya=function(a){if(!(a&&"readystatechange"==a.type&&"interactive"!=G.readyState&&"complete"!=G.readyState||wa)){wa=!0;for(var b=0;b<xa.length;b++)xa[b]()}},
za=0,Aa=function(){if(!wa&&140>za){za++;try{G.documentElement.doScroll("left"),ya()}catch(a){C.setTimeout(Aa,50)}}},Ba=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},Ca=!1,Da=[],Ea=function(){if(!Ca){Ca=!0;for(var a=0;a<Da.length;a++)Da[a]()}};var Fa=new B,Ga=new B,Ha=ha,O=[],Ia=!1,Ka=!1,La="//www.googletagmanager.com/a?e=aocc&cb="+Math.round(2147483647*Math.random()),Ma=function(a){var b=!1;return function(){!b&&r(a)&&N(a);b=!0}},Oa=function(){for(var a=!1;!Ia&&0<O.length;){Ia=!0;var b;var c=O.shift(),d=void 0;for(d in c)if(c.hasOwnProperty(d)){var e=d,f=c[d];Fa.set(e,f);for(var g=Na,h=f,n={},m=n,l=e.split("."),q=0;q<l.length-1;q++)m=m[l[q]]={};m[l[l.length-1]]=h;g(n,Ga.B)}var p=c.event;if(p){var t=Ma(c.eventCallback),w=c.eventTimeout;
w&&C.setTimeout(t,Number(w));b=Ha(p,t)}else b=!1;a=b||a;Ia=!1}return!a},P=function(a,b){if(2==b){for(var c=Ga.B,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return Fa.get(a)},Na=function(a,b){for(var c in a)if(fa(a,c)){var d=a[c];v(d)?(v(b[c])||(b[c]=[]),Na(d,b[c])):ga(d)?(!Ka&&v(b[c])&&(L(La),Ka=!0),ga(b[c])||(b[c]={}),Na(d,b[c])):b[c]=d}};var Pa={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qa={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ra=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Sa=function(){var a=P("gtm.whitelist"),b=a&&Ra(la(a),Pa),c=P("gtm.blacklist")||P("tagTypeBlacklist"),d=c&&Ra(la(c),Qa),e={};return function(f){var g=f&&f["4"];if(!g)return!0;if(void 0!==e[g.b])return e[g.b];var h=!0;if(a)e:{if(0>ja(b,g.b))if(g.c&&0<g.c.length)for(var n=0;n<g.c.length;n++){if(0>
ja(b,g.c[n])){h=!1;break e}}else{h=!1;break e}h=!0}var m=!1;if(c){var l;if(!(l=0<=ja(d,g.b)))e:{for(var q=g.c||[],p=new B,t=0;t<d.length;t++)p.set(d[t],!0);for(t=0;t<q.length;t++)if(p.get(q[t])){l=!0;break e}l=!1}m=l}return e[g.b]=!h||m}};var Ta=null;var _e=function(){return Ta};_e.b="e";_e.c=["google"];var _f=function(){return String(P("gtm.referrer")||G.referrer)};_f.b="f";_f.c=["google"];
var Ua=G.createElement("a"),Va=function(a){var b=C.location,c=b.hash?b.href.replace(b.hash,""):b.href,d=P("gtm.url");d&&(Ua.href=c=String(d),b=Ua);var e=(b.protocol.replace(":","")||C.location.protocol.replace(":","")).toLowerCase();switch(a["2"]){case "protocol":c=e;break;case "host":c=(b.hostname||C.location.hostname).split(":")[0].toLowerCase();break;case "port":c=String(1*(b.hostname?b.port:C.location.port)||("http"==e?80:"https"==e?443:""));break;case "path":c="/"==b.pathname.substr(0,1)?b.pathname:"/"+b.pathname;
break;case "query":c=b.search.replace("?","");break;case "fragment":c=b.hash.replace("#","")}
return c},_u=Va;_u.b="u";_u.c=["google"];var _cn=function(a){return 0<=String(a["0"]).indexOf(String(a["1"]))};_cn.b="cn";_cn.c=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.b="eq";_eq.c=["google"];var _sw=function(a){return 0==String(a["0"]).indexOf(String(a["1"]))};_sw.b="sw";_sw.c=["google"];var $a=function(a,b){return a<b?-1:a>b?1:0};var Q,ab,bb,cb,db=function(){return k.navigator?k.navigator.userAgent:null};cb=bb=ab=Q=!1;var eb;if(eb=db()){var fb=k.navigator;Q=0==eb.lastIndexOf("Opera",0);ab=!Q&&(-1!=eb.indexOf("MSIE")||-1!=eb.indexOf("Trident"));bb=!Q&&-1!=eb.indexOf("WebKit");cb=!Q&&!bb&&!ab&&"Gecko"==fb.product}var R=ab,gb=cb,hb=bb,kb=function(){var a=k.document;return a?a.documentMode:void 0},lb;
e:{var mb="",nb;if(Q&&k.opera)var ob=k.opera.version,mb="function"==typeof ob?ob():ob;else if(gb?nb=/rv\:([^\);]+)(\)|;)/:R?nb=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:hb&&(nb=/WebKit\/(\S+)/),nb)var pb=nb.exec(db()),mb=pb?pb[1]:"";if(R){var qb=kb();if(qb>parseFloat(mb)){lb=String(qb);break e}}lb=mb}
var rb=lb,sb={},T=function(a){var b;if(!(b=sb[a])){for(var c=0,d=String(rb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",n=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var q=m.exec(h)||["","",""],p=l.exec(n)||["","",""];if(0==q[0].length&&0==p[0].length)break;c=$a(0==q[1].length?0:parseInt(q[1],10),0==p[1].length?0:parseInt(p[1],10))||$a(0==q[2].length,
0==p[2].length)||$a(q[2],p[2])}while(0==c)}b=sb[a]=0<=c}return b},tb=k.document,ub=tb&&R?kb()||("CSS1Compat"==tb.compatMode?parseInt(rb,10):5):void 0;if(gb||R){var vb;if(vb=R)vb=R&&9<=ub;vb||gb&&T("1.9.1")}R&&T("9");var Ab=function(a,b){var c="";R&&!wb(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(xb)a.srcdoc=d;else if(yb){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else zb(a,d)},xb=hb&&"srcdoc"in document.createElement("iframe"),yb=gb||hb,zb=function(a,b){R&&T(7)&&!T(10)&&Bb(b)&&(b=Cb(b));var c=function(){a.contentWindow.goog_content=
b;a.src="javascript:window.goog_content"};R&&!wb(a)?Db(a,c):c()},wb=function(a){try{return Boolean(a.contentWindow.document)}catch(b){return!1}},Eb=0,Db=function(a,b){var c="goog_rendering_callback"+Eb++;window[c]=b;R&&T(6)&&!T(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":
a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Bb=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Cb=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Mb=function(a,b,c,d){return function(e){e=e||C.event;var f=e.target||e.srcElement||{},g=!1;if("LINK_CLICK"==a){for(var h=f,n=0;h&&"a"!=String(h.tagName).toLowerCase()&&100>n;n++)h=h.parentElement;h&&"a"!=String(h.tagName).toLowerCase()&&(h=null);f=h;g=!f||!f.href||e.ctrlKey||e.shiftKey||null==e.which&&4==e.button||2===e.which||3===e.which||e.altKey||!0===e.metaKey}if(e.defaultPrevented||!1===e.returnValue||e.Ra&&e.Ra()){if(!c&&f){var m={simulateDefault:!1};U(a,f,m,d)}}else{var l=/(iPad|iPhone|iPod)/g.test(sa.userAgent);
if(f){var m={},q=U(a,f,m,d);m.simulateDefault=!q&&b&&!g;if(m.simulateDefault){var p=Lb(f).toLowerCase();switch(p){case "_blank":l?(m.simulateDefault=!1,g=!0):(m.targetWindowName="gtm_autoEvent_"+(new Date).getTime(),m.targetWindow=C.open("",m.targetWindowName));break;case "":m.targetWindow=C.frames.self;break;case "_self":case "_parent":case "_top":m.targetWindow=C.frames[p.substring(1)];break;default:l&&!C.frames[p]?(m.simulateDefault=!1,g=!0):(C.frames[p]||(m.targetWindowName=p),m.targetWindow=
C.frames[p]||C.open("",p))}!g&&e.preventDefault&&e.preventDefault()}e.returnValue=q||!b||g;return e.returnValue}return!0}}},U=function(a,b,c,d){var e=d||2E3,f={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ba(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":f.event="gtm.linkClick";f["gtm.elementUrl"]=b.href;f.eventTimeout=e;f.eventCallback=Nb(b,c);break;case "FORM_SUBMIT":f.event="gtm.formSubmit";f["gtm.elementUrl"]=b.action;c.jsFormSubmit?
c.waitForTags&&(f.eventTimeout=e,f.eventCallback=function(){G.gtmSubmitFormNow=!0;b.submit()}):(f.eventTimeout=e,f.eventCallback=Ob(b,c));break;case "CLICK":f.event="gtm.click";f["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return C["dataLayer"].push(f)},Lb=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "form":b="_self"}return b},Nb=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?
b.targetWindow.location.href=a.href:(c=c||(new Date).getTime(),500>(new Date).getTime()-c&&C.setTimeout(Nb(a,b,c),25)))}},Ob=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);G.gtmSubmitFormNow=!0;a.submit();b.targetWindowName&&(a.target=d)}else c=c||(new Date).getTime(),500>(new Date).getTime()-c&&C.setTimeout(Ob(a,b,c),25)}},Pb=function(a,b,c,d){var e,f;switch(a){case "CLICK":if(G.gtmHasClickListenerTag)return;
G.gtmHasClickListenerTag=!0;e="click";f=function(a){U("CLICK",a.target||a.srcElement||{},{},d);return!0};break;case "LINK_CLICK":if(G.gtmHasLinkClickListenerTag)return;G.gtmHasLinkClickListenerTag=!0;e="click";f=Mb(a,b||!1,c||!1,d);break;case "FORM_SUBMIT":if(G.gtmHasFormSubmitListenerTag)return;G.gtmHasFormSubmitListenerTag=!0;e="submit";f=Mb(a,b||!1,c||!1,d);break;default:return}M(G,e,f,!1)};var Sb,Tb;
var cc=function(a){return function(){}},dc=function(a){return function(){}};var lc=function(){var a=kc.Ma,b=window||k,c=b.onerror,d=!1;hb&&!T("535.3")&&(d=!d);b.onerror=function(b,f,g,h,n){c&&c(b,f,g,h,n);a({message:b,fileName:f,La:g,gb:h,error:n});return d}};var _sp=function(a,b,c){J("//www.googleadservices.com/pagead/conversion_async.js",function(){var d=C.google_trackConversion;r(d)?(d({google_conversion_id:a["5"],google_conversion_label:a["7"],google_custom_params:a["3"]||{},google_remarketing_only:!0}),b()):c()},c)};_sp.b="sp";_sp.c=["google"];var Jc=function(){this.g=[]};Jc.prototype.set=function(a,b){this.g.push([a,b]);return this};Jc.prototype.A=function(a,b){for(var c={},d=0;d<this.g.length;d++){var e=Y(this.g[d][0],a,b),f=Y(this.g[d][1],a,b);c[e]=f}return c};var Kc=function(a){this.index=a};Kc.prototype.A=function(a,b){var c=Lc[this.index];if(c&&!b(c)){var d=c["6"];if(a){if(a.get(d))return;a.set(d,!0)}c=Y(c,a,b);a&&a.set(d,!1);return ma(c)}};
for(var _M=function(a){return new Kc(a)},Nc=function(a){this.A=function(b,c){for(var d=[],e=0;e<a.length;e++)d.push(Y(Mc[a[e]],b,c));return d.join("")}},_T=function(a){return new Nc(arguments)},Oc=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.A=function(c,d){if(a[0]instanceof Kc&&b(8)&&b(16))return'google_tag_manager["GTM-KQKBZ4"].macro('+
a[0].index+")";for(var e=String(Y(a[0],c,d)),f=1;f<a.length;f++)e=W[a[f]](e);return e}},_E=function(a,b){return new Oc(arguments)},Y=function(a,b,c){var d=a;if(a instanceof Kc||a instanceof Jc||a instanceof Nc||a instanceof Oc)return a.A(b,c);if(v(a))for(var d=[],e=0;e<a.length;e++)d[e]=Y(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Y(a[f],b,c))}return d},Pc=function(a,b){var c=b[a],d=c;if(c instanceof Kc||c instanceof Oc||c instanceof Nc)d=c;else if(v(c))for(var d=
[],e=0;e<c.length;e++)d[e]=Pc(c[e],b);else if("object"==typeof c){var d=new Jc,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Pc(c[f],b))}return d},Sc=function(a,b){for(var c=b?b.split(","):[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=Mc[e[1]]);if(1==a)for(var f=Qc(e[0]),e=c[d]={},g=0;g<f.length;g++){var h=Rc[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=Qc(e[g])}return c},Qc=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<Tc;c+=6,d++){var e=a&&a.charCodeAt(d)||
65;if(65!=e){var f=0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Tc=54,Uc=[_cn,_u,'url',_M(0),'/orderconfirmation.nap',_eq,_e,'_event',_M(1),'gtm.js',_sp,'UK remarketing  - only fire on thank you','1072304369','7w80CNDU2wYQ8aGo_wM',14,_sw,'http://www.net-a-porter.com','Forward 3D - remarketing tag UK',1,'UK PLA remarketing','977813708',10,'US Beauty Remarketing','984023958',12,'RU Remarketing','971647032',13,'DE remarketing','1056675018',6,'FR remarketing','1056675138',7,'AU remarketing','998639340',8,'EU remarketing','1061223477',9,'Forward 3D - remarketing tag US Designers','993406325',3,'Forward 3D - remarketing tag US Brand','1067679835',4,'url hostname','host','url path','path',_f,'referrer','event'],Vc=[],Wc=0;Wc<Uc.length;Wc++)Vc[Wc]=Pc(Wc,Uc);var Mc=Vc,Rc=Sc(0,"4:0,4:1,6:2,0:3,1:4,4:5,4:6,6:7,0:8,1:9,4:10,6:11,5:12,3:3,7:13,8:14,4:15,1:16,6:17,8:18,6:19,5:20,8:21,6:22,5:23,8:24,6:25,5:26,8:27,6:28,5:29,8:30,6:31,5:32,8:33,6:34,5:35,8:36,6:37,5:38,8:39,6:40,5:41,8:42,6:43,5:44,8:45,6:46,2:47,6:48,2:49,4:50,6:51,6:52"),Lc=Sc(1,"G,AD,CAAAAAAgB,CAAAAAAAG,AAAAAAAAY,ABAAAAAAg"),Xc=Sc(1,"Z,gM,IAw"),Z=Sc(1,"AwP,AQDD,AQCc,AQCgD,AQCAc,AQCAgD,AQCAAc,AQCAAgD,AQCAAAc,AQCAAAgD,AQCAAAAc"),Yc=Sc(2,"D:B::,G:-f::");var fd=function(){var a=this;this.r=!1;this.t=[];this.L=[];this.Ea=function(){a.r||pa(a.t);a.r=!0};this.Da=function(){a.r||pa(a.L);a.r=!0};this.M=ha},gd=function(){this.i=[];this.Z={};this.N=[];this.o=0};gd.prototype.addListener=function(a){this.N.push(a)};var hd=function(a,b,c,d){if(!c.r){a.i[b]=c;void 0!==d&&(a.Z[b]=d);a.o++;var e=function(){0<a.o&&a.o--;0<a.o||pa(a.N)};c.t.push(e);c.L.push(e)}};var id=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Xc[b]&&Y(Xc[b],new B,c);a[b]=[d&&ma(d),d]}return a[b]}},jd=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.j(c[d],a.d)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.j(e[d],a.d)[0])return!1;return!0},kd=function(a,b){return function(){ma(a,b.Ea,b.Da)}},ld=Ha=function(a,b){Ta=a;P("tagTypeBlacklist");for(var c={name:a,Ca:b||ha,v:Qc(),w:Qc(),j:id(),d:Sa()},d=0;d<Yc.length;d++)if(jd(c,Yc[d])){for(var e=c,f=Yc[d],g=f[1],
h=0;h<g.length;h++)e.v[g[h]]=!0;for(var n=f[3],h=0;h<n.length;h++)e.w[n[h]]=!0}var m=[];for(var l=0;l<Tc;l++)if(c.v[l]&&!c.w[l])if(c.d(Z[l])){}else{m[l]=Y(Z[l],new B,c.d);}c.P=m;for(var q=new gd,p=0;p<Tc;p++)if(c.v[p]&&
!c.w[p]&&!c.d(Z[p])){var t=c.P[p],w=new fd;w.t.push(cc(t));w.L.push(dc(t));w.M=kd(t,w);hd(q,p,w,t[""])}q.addListener(c.Ca);for(var D=[],E=0;E<q.i.length;E++){var K=q.i[E];if(K){var x=q.Z[E];void 0!==x?x!=E&&q.i[x]&&q.i[x].t.push(K.M):D.push(E)}}for(E=0;E<D.length;E++)q.i[D[E]].M();0<q.o||pa(q.N);Ta=null;return 0<c.P.length};var $={set:function(a,b){var c={};c[a]=b;C["dataLayer"].push(c)},event:function(a){ld(a)},macro:function(a){var b;if(b=Lc[a]){var c=_M(a),d=Sa();b=Y(c,new B,d)}return b},T:{push:function(a){for(var b=arguments,c=0;c<b.length;c++)try{if(r(b[c][0]))b[c][0]();else $[b[c][0]].apply($,[].slice.call(b[c],1))}catch(d){}}},Pa:function(){var a=C["gtm"];if(a){var b=a.a;v(b)&&$.T.push.apply($.T,b);a.a=$.T;xa.push(function(){$.event("gtm.dom")});Da.push(function(){$.event("gtm.load")})}},Qa:function(){var a=
C.google_tag_manager;a||(a=C.google_tag_manager={});a["GTM-KQKBZ4"]||(a["GTM-KQKBZ4"]=$)}};$.Qa();$.Pa();(function(){var a=H("dataLayer",[]),b=C.google_tag_manager;xa.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Da.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(O.push.apply(O,b);300<this.length;)this.shift();return Oa()};O.push.apply(O,a.slice(0));N(Oa)})();
if("interactive"==G.readyState||"complete"==G.readyState)ya();else{M(G,"DOMContentLoaded",ya);M(G,"readystatechange",ya);if(G.createEventObject&&G.documentElement.doScroll){var md=!0;try{md=!C.frameElement}catch(nd){}md&&Aa()}M(C,"load",ya)}"complete"===G.readyState?Ea():M(C,"load",Ea);var _vs="res_ts:1382530097266000,srv_cl:59375147,ds:live,cv:18";
})()
