!function(e){function t(t){for(var i,a,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={0:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([141,2]),n()}({114:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);n(54),n(94),n(68),n(95),n(44),n(46),n(110),n(113),n(114);var i=n(52),o=n(53),r=[{name:"iPhone 5/SE",width:320,height:568},{name:"Galaxy S5",width:360,height:640},{name:"iPhone 6/7/8",width:375,height:667},{name:"iPhone X/XS",width:375,height:812},{name:"Pixel 2",width:411,height:731},{name:"Pixel 2 XL",width:411,height:823},{name:"iPhone 6/7/8 Plus",width:414,height:736},{name:"iPad",width:768,height:1024},{name:"iPad Pro",width:1024,height:1366}],a="skip",s="embed anyway",c="use proxy to embed URL",l="embed without proxy",d="Checking URL validity ...",u="URL is not valid.",f="Checking iframe compatibility ...",m="Localhost detected. Check your local server settings in case it does not work.",h="Iframe compatibility could not be determined, trying to embed the URL anyway.",g="Mixed content detected, make sure to use only either HTTP or HTTPS for diffsite and the URLs.",p="Iframe compatibility check was skipped.",v="URL does not allow iframe embedding. Using proxy to display page, visual and functional differences may occur.",y="URL does not allow iframe embedding.",w="URL can not be reached.",b=(n(116),n(79),n(120),n(121),n(125),n(29)),E=n.n(b);n(128);function L(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var I=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=window.localStorage}var t,n,i;return t=e,(n=[{key:"get",value:function(e){return this.storage.getItem(e)}},{key:"set",value:function(e,t){this.storage.setItem(e,t)}},{key:"getJSON",value:function(e){return JSON.parse(this.get(e))}},{key:"setJSON",value:function(e,t){this.set(e,JSON.stringify(t))}}])&&L(t.prototype,n),i&&L(t,i),e}());function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var x={fallbackLeftURL:"./demo_left.html",fallbackRightURL:"./demo_right.html",handleDrag:!1},P={showAboveTheFoldLine:!1,isIframeableAPI:"https://iframe-proxy.glitch.me/is-iframeable/%s",isIframeableAPIEnabled:!0,iframeProxyAPI:"https://iframe-proxy.glitch.me/proxy/%s"},S={},B=function(e,t){return void 0!==t&&(x[e]=t),x[e]},O=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=I.getJSON("settings");t&&(S=Object.assign({},P,t))}var t,n,i;return t=e,(n=[{key:"get",value:function(e){return S[e]}},{key:"set",value:function(e,t){S[e]=t,I.setJSON("settings",S)}}])&&k(t.prototype,n),i&&k(t,i),e}());function R(e,t,n,i,o,r,a){try{var s=e[r](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,o)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function a(e){R(r,i,o,a,s,"next",e)}function s(e){R(r,i,o,a,s,"throw",e)}a(void 0)}))}}var U=function(e,t){return"-"!=e[0]&&(e="--".concat(e)),void 0!==t&&document.documentElement.style.setProperty(e,t),getComputedStyle(document.documentElement).getPropertyValue(e)};function C(e){return-1!=e.indexOf("localhost")||0===e.indexOf("http://localhost")||E()(e)}function j(){return(j=T(regeneratorRuntime.mark((function e(t){var n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=O.get("isIframeableAPI").replace("%s",encodeURIComponent(t)),e.next=4,fetch(n);case 4:return i=e.sent,console.log("canEmbed response",i),e.next=8,i.json();case 8:return o=e.sent,e.abrupt("return",o&&void 0!==o.isIframeable?o:{status:0,isIframeable:null});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{status:0,isIframeable:null});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function A(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function q(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var M=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.classes={default:"notification",error:"notification notification--error",info:"notification notification--info",loading:"notification notification--info",warning:"notification notification--warning"},this.types={error:"error",info:"info",loading:"loading",warning:"warning"}}var t,n,i;return t=e,(n=[{key:"set",value:function(e,t,n,i,o){if(t in this.classes){e.className=this.classes[t];var r=null;switch(t){case"info":r="info";break;case"warning":case"error":r="warning"}var a=e.querySelector("i");if(a.innerText=r||"",e.querySelector(".loader").classList.toggle("hidden","loading"!==t),e.querySelector("span").innerText=n,i)e.querySelector("a").innerText=i,e.querySelector("a").addEventListener("click",o);else{var s=e.querySelector("a");s.innerText="";var c=s.cloneNode(!0);s.parentNode.replaceChild(c,s)}}}},{key:"hide",value:function(e){e.className=this.classes.default,e.querySelector(".loader").classList.add("hidden"),e.querySelector("i").innerText="",e.querySelector("span").innerText="",e.querySelector("a").innerText=""}}])&&q(t.prototype,n),i&&q(t,i),e}());n(130),n(133),n(134),n(84),n(138),n(139);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var J=function(e,t){if("string"!=typeof e&&"string"!=typeof t)throw new Error("We expected a string as HTMLasString and linkRelType we got HTMLasString : ".concat("undefined"==typeof sourceURL?"undefined":N(sourceURL)," linkRelType ").concat(N(t)));var n=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector('link[rel="'.concat(t,'"'));if(null===n)return!1;var i=n.getAttribute("href");return null!==i&&i},W=function(e,t){return new Promise((function(n,i){return"string"!=typeof e?i(Error("We expected a string as sourceURL we got ".concat(N(e)))):E()(e)?"string"!=typeof t?i(Error("We expected a string as linkRelType we got ".concat(N(t)))):void function(e){return new Promise((function(t,n){fetch("https://cors-anywhere.herokuapp.com/".concat(e),{mode:"cors"}).then((function(i){if(!i.ok)return n(new Error("We received an invalid response when trying to get a CORS free version of ".concat(e)));t(i.text())})).catch((function(e){return n(e)}))}))}(e).then((function(e){var o=J(e,t);if(!o)return i(new Error("We couldn't find a valid alternativeURL"));n(o)})):i(Error("We expected an URL we got ".concat(e)))}))},_=document.getElementById("diff-container"),D=document.getElementById("input-url-left"),X=document.getElementById("input-url-right"),F=document.getElementById("mode-amp-detect"),H=document.getElementById("select-device"),$=document.getElementById("notification-left"),G=document.getElementById("notification-right"),V=document.getElementById("frame-left"),z=document.getElementById("frame-right"),K=document.getElementById("content-left"),Q=document.getElementById("content-right"),Y=document.getElementById("shift-left"),Z=document.getElementById("shift-right"),ee=document.getElementById("compare-handle"),te=document.getElementById("group-overlay"),ne=document.getElementById("group-opacity"),ie=new i(".shift-section",{wrap:!0,marginTop:200}),oe=new i(".config-section",{wrap:!0,marginTop:0,stickyClass:"config-section--sticky"});function re(){B("handleDrag",!1),window.removeEventListener("mousemove",ae),window.removeEventListener("mouseup",re)}function ae(e){if(!B("handleDrag"))return!1;e=e||window.event;var t=V.getBoundingClientRect(),n=e.pageX-t.left-window.pageXOffset;n=Math.max(0,n),n=Math.min(U("diff-site-width"),n),U("swipe-handle-position",n)}ee.addEventListener("mousedown",(function(e){e.preventDefault(),B("handleDrag",!0),window.addEventListener("mousemove",ae),window.addEventListener("mouseup",re)}));var se=function(){var e=encodeURIComponent(D.value),t=encodeURIComponent(X.value),n=e.length>0&&t.length>0?"?url1=".concat(e,"&url2=").concat(t):"";window.history.pushState({},document.title,"".concat(location.protocol,"//").concat(location.host).concat(location.pathname).concat(n))},ce=function(e,t,n,i){var o=e.target.value.trim();if(0===o.length)return n.src=i,se(),void M.hide(t);if(M.set(t,M.types.loading,d),C(o=function(e){return e?(0!=e.indexOf("http")&&(e="https://"+e),e):e}(o))){e.target.value=o;var r=null;new Promise((function(e,n){r=e,-1!==o.indexOf("localhost")?(M.set(t,M.types.info,m),e({isIframeable:!0})):O.get("isIframeableAPIEnabled")?function(e){return j.apply(this,arguments)}(o).then(e):e({isIframeable:!0})})).then((function(e){var i=function(){n.src=o,se()},r=function(){n.src=function(e){return O.get("iframeProxyAPI").replace("%s",encodeURIComponent(e))}(o),se()};switch(e.isIframeable){case!1:M.set(t,M.types.error,y,c,(function(){M.set(t,M.types.warning,v,l,(function(){M.set(t,M.types.warning,p),i()})),r()}));break;case null:400===e.status?M.set(t,M.types.error,w,s,(function(){M.set(t,M.types.warning,p,c,(function(){M.set(t,M.types.warning,v),r()})),i()})):(999===e.status?M.set(t,M.types.warning,p,c,(function(){M.set(t,M.types.warning,v),r()})):M.set(t,M.types.info,h,c,(function(){M.set(t,M.types.warning,v),r()})),i());break;case!0:-1!==o.indexOf("localhost")||(1==(0===location.href.indexOf("https")^0===o.indexOf("https"))?M.set(t,M.types.warning,g):M.hide(t)),i()}})),M.set(t,M.types.loading,f,a,(function(){r({status:999,isIframeable:null})}))}else M.set(t,M.types.info,u)};D.addEventListener("input",Object(o.debounce)((function(e){ce(e,$,K,B("fallbackLeftURL"))}),700)),X.addEventListener("input",Object(o.debounce)((function(e){ce(e,G,Q,B("fallbackRightURL"))}),700)),F.addEventListener("click",(function(){var e=this;if(this.classList.toggle("mode-switch--amp")&&(C(D.value)||C(X.value))){var t=C(D.value)?D.value:X.value,n=C(D.value)?X:D;W(t,"amphtml").then((function(t){n.value=t,n.dispatchEvent(new Event("input")),e.classList.remove("mode-switch--amp")})).catch((function(e){return W(t,"canonical")})).then((function(t){n.value=t,n.dispatchEvent(new Event("input")),e.classList.remove("mode-switch--amp")})).catch((function(t){e.classList.remove("mode-switch--amp"),alert("AMP or canonical pendant was not found.")}))}})),document.getElementById("toggle-dark-mode").addEventListener("click",(function(){document.body.classList.toggle("theme-dark")}));var le=document.getElementById("settings-above-the-fold"),de=document.getElementById("settings-iframeability-check");for(document.getElementById("settings-toggle").addEventListener("click",(function(e){e.target.classList.toggle("link-button--shade"),document.getElementById("settings-container").classList.toggle("settings-container--active")})),le.addEventListener("change",(function(e){var t=e.target.checked;document.getElementsByClassName("device-height-line").forEach((function(e){return e.classList.toggle("hidden",!t)})),O.set("showAboveTheFoldLine",t)})),de.addEventListener("change",(function(e){var t=e.target.checked;O.set("isIframeableAPIEnabled",t)})),le.checked=!O.get("showAboveTheFoldLine"),le.click(),de.checked=O.get("isIframeableAPIEnabled"),document.getElementById("mode-side-by-side").addEventListener("click",(function(){_.classList.remove("diff-container--mode-overlay"),te.classList.add("disabled"),ne.classList.add("disabled"),oe.update()})),document.getElementById("mode-overlay").addEventListener("click",(function(){_.classList.add("diff-container--mode-overlay"),te.classList.remove("disabled"),_.classList.contains("diff-container--mode-swipe")||(ne.classList.remove("disabled"),oe.update())})),document.getElementById("mode-swipe").addEventListener("click",(function(){_.classList.add("diff-container--mode-swipe"),z.classList.remove("diff-frame--mode-blend"),ne.classList.add("disabled")})),document.getElementById("mode-blend").addEventListener("click",(function(){z.classList.add("diff-frame--mode-blend"),_.classList.remove("diff-container--mode-swipe"),ne.classList.remove("disabled")})),document.getElementById("mode-onion").addEventListener("click",(function(){z.classList.remove("diff-frame--mode-blend"),_.classList.remove("diff-container--mode-swipe"),ne.classList.remove("disabled")})),H.options.length=0;H.firstChild;)H.removeChild(H.firstChild);for(var ue=0;ue<r.length;ue++)H.options[H.options.length]=new Option(r[ue].name,ue,"iPhone 6/7/8"===r[ue].name,"iPhone 6/7/8"===r[ue].name);H.addEventListener("change",(function(e){var t=e.target.value;U("diff-site-width",r[t].width),U("diff-site-device-height",r[t].height),ie.update()})),document.getElementById("select-opacity").addEventListener("input",(function(e){U("diff-site-opacity-right",e.target.value)}));var fe=function(e,t){e.value=U(t)};document.getElementById("button-shift-up-left").addEventListener("click",(function(){U("diff-site-shift-left",parseInt(U("diff-site-shift-left"),10)-1),fe(Y,"diff-site-shift-left")})),document.getElementById("button-shift-down-left").addEventListener("click",(function(){U("diff-site-shift-left",parseInt(U("diff-site-shift-left"),10)+1),fe(Y,"diff-site-shift-left")})),Y.addEventListener("input",(function(){U("diff-site-shift-left",parseInt(Y.value)||0)})),document.getElementById("button-shift-up-right").addEventListener("click",(function(){U("diff-site-shift-right",parseInt(U("diff-site-shift-right"),10)-1),fe(Z,"diff-site-shift-right")})),document.getElementById("button-shift-down-right").addEventListener("click",(function(){U("diff-site-shift-right",parseInt(U("diff-site-shift-right"),10)+1),fe(Z,"diff-site-shift-right")})),Z.addEventListener("input",(function(){U("diff-site-shift-right",parseInt(Z.value)||0)})),window.addEventListener("load",(function(){var e=A("url1"),t=A("url2");e&&(D.value=e),t&&(X.value=t),A("getamp")&&F.click(),D.dispatchEvent(new Event("input")),X.dispatchEvent(new Event("input")),document.getElementById("version").innerText="1.7.2","serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js")}))}});
//# sourceMappingURL=app.c6be200a.js.map