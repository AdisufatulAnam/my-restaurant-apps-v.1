!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function u(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],s=n.base?o[0]+n.base:o[0],l=t[s]||0,c="".concat(s," ").concat(l);t[s]=l+1;var d=u(c),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:g(p,n),references:1}),i.push(c)}return i}function l(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function p(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,h=0;function g(e,n){var t,i,r;if(n.singleton){var o=h++;t=f||(f=l(n)),i=p.bind(null,t,o,!1),r=p.bind(null,t,o,!0)}else t=l(n),i=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=u(t[i]);a[r].references--}for(var o=s(e,n),l=0;l<t.length;l++){var c=u(t[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=o}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var a,u,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e){e.exports=JSON.parse('{"restaurants":[{"id":"6c7bqjgi84kcowlqdz","name":"Bring Your Phone Cafe","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/41","city":"Medan","rating":4.6},{"id":"ljx8i0qu2uckcowlqdz","name":"Run The Gun","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/07","city":"Bali","rating":4.6},{"id":"fe8bbxoazddkcowlqdz","name":"Pangsit Express","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/29","city":"Ternate","rating":4.8},{"id":"ik1zljmlf68kcowlqdz","name":"Ducky Duck","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/38","city":"Malang","rating":4.7},{"id":"9jpuzkm6n6jkcowlqdz","name":"Kafein","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/40","city":"Bali","rating":3.8},{"id":"cpl5jpsnuqkkcowlqdz","name":"Makan mudah","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/08","city":"Malang","rating":4.6},{"id":"iqtf9hmdzvbkcowlqdz","name":"Saya Suka","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/32","city":"Surabaya","rating":3.6},{"id":"8i06gqcc2dpkcowlqdz","name":"Gigitan Cepat","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/45","city":"Aceh","rating":4},{"id":"wf5o19xhxxkcowlqdz","name":"Fairy Cafe","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://restaurant-api.dicoding.dev/images/medium/04","city":"Malang","rating":3.9}]}')},function(e,n,t){"use strict";t.r(n);t(4),t(6),t(8),t(10),t(12),t(14),t(16);var i,r=t(2);document.querySelector(".menu").addEventListener("click",(function(){document.querySelector(".nav-list").classList.toggle("nav-list-block")})),i="",r.restaurants.forEach((function(e,n){i+='\n      <div tabindex="0" class="card">\n        <div class="img-container">\n          <img tabindex="0" class="card-image" alt="'.concat(e.name,'" src="').concat(e.pictureId,'"/>\n          <span tabindex="0" class="card-kota">\n            <i title="kota"></i>\n            <span>').concat(e.city,'</span>\n          </span>\n        </div>\n\n        <div tabindex="0" class="card-content">\n          <p class="card-content-title">Retting ').concat(e.rating,'</p>\n          <p class="card-content-title">').concat(e.name,'</p>\n          <p class="truncate">').concat(e.description,"</p>\n        </div>\n      </div>\n      ")})),document.getElementById("explore-restaurant").innerHTML=i},function(e,n,t){(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=function(e){"use strict";var t=Object.prototype,i=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function s(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{s({},"")}catch(e){s=function(e,n,t){return e[n]=t}}function l(e,n,t,i){var r=n&&n.prototype instanceof p?n:p,o=Object.create(r.prototype),a=new j(i||[]);return o._invoke=function(e,n,t){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return A()}for(t.method=r,t.arg=o;;){var a=t.delegate;if(a){var u=w(a,t);if(u){if(u===d)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===i)throw i="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i="executing";var s=c(e,n,t);if("normal"===s.type){if(i=t.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(i="completed",t.method="throw",t.arg=s.arg)}}}(e,t,a),o}function c(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function p(){}function m(){}function f(){}var h={};h[o]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(L([])));v&&v!==t&&i.call(v,o)&&(h=v);var y=f.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(n){s(e,n,(function(e){return this._invoke(n,e)}))}))}function x(e,t){var r;this._invoke=function(o,a){function u(){return new t((function(r,u){!function r(o,a,u,s){var l=c(e[o],e,a);if("throw"!==l.type){var d=l.arg,p=d.value;return p&&"object"===n(p)&&i.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,u,s)}),(function(e){r("throw",e,u,s)})):t.resolve(p).then((function(e){d.value=e,u(d)}),(function(e){return r("throw",e,u,s)}))}s(l.arg)}(o,a,r,u)}))}return r=r?r.then(u,u):u()}}function w(e,n){var t=e.iterator[n.method];if(void 0===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,w(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=c(t,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var r=i.arg;return r?r.done?(n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function q(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function k(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function L(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,r=function n(){for(;++t<e.length;)if(i.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:A}}function A(){return{value:void 0,done:!0}}return m.prototype=y.constructor=f,f.constructor=m,m.displayName=s(f,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,u,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(x.prototype),x.prototype[a]=function(){return this},e.AsyncIterator=x,e.async=function(n,t,i,r,o){void 0===o&&(o=Promise);var a=new x(l(n,t,i,r),o);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(y),s(y,u,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,i){return a.type="throw",a.arg=e,n.next=t,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),d},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),k(t),d}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var i=t.completion;if("throw"===i.type){var r=i.arg;k(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:L(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},e}("object"===n(e)?e.exports:{});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}).call(this,t(5)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){var i=t(0),r=t(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Poppins';\n  color: #1b1a17;\n  font-size: 14px;\n}\nbody,\nhtml {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: #ffffff;\n  scroll-behavior: smooth;\n}\n.skip-link {\n  position: absolute;\n  top: -80px;\n  left: 0;\n  background-color: var(--btn);\n  color: white;\n  padding: 8px;\n  z-index: 10;\n}\n.skip-link:focus {\n  top: 0;\n}\n.btn {\n  background-color: #2c3e50;\n  font-size: large;\n  cursor: pointer;\n  margin: 2em;\n  padding: 0.5em 1em;\n  font-weight: 700;\n  text-decoration: none;\n  border-radius: 5px;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n}\n.btn:hover {\n  color: #2c3e50;\n  background-color: white;\n\n}",""]),e.exports=n},function(e,n,t){var i=t(0),r=t(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,".logo-font a{\n  font-size: x-large;\n  font-weight: bold;\n  color: #f5faff;\n  text-decoration: none;\n  padding: 0.4em 0;\n}\nnav {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  height: 75px;\n  background-color: #2c3e50;\n}\n.nav-item {\n  box-sizing: border-box;\n  line-height: 24px;\n}\n.nav-item a {\n  padding: 0.7rem;\n  display: inline-block;\n  font-size: 1.3em;\n  text-decoration: none;\n  color: #f5faff;\n}\n.nav-list {\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n  flex-wrap: wrap;\n  transition: ease;\n}\n.menu {\n  font-size: 25px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  color: #f5faff;\n}\n.menu:hover {\n  cursor: pointer;\n}\n\n\n\n\n",""]),e.exports=n},function(e,n,t){var i=t(0),r=t(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i," .hero {\n  background: url('./images/hero.jpg');\n  background-position: center;\n  object-fit: cover;\n  padding: 0 10%;\n  display: flex;\n  flex-direction: column;\n  min-height: 600px;\n  width: 100%;\n  text-align: center;\n \n}\n.hero-itle {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: xx-large;\n}\n.hero-text {\n  align-self: center;\n  max-width: 600px;\n  margin: auto 0;\n  padding-bottom: 3em;\n}\n\n\n\n",""]),e.exports=n},function(e,n,t){var i=t(0),r=t(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"/*main*/\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.main-content-container {\n  margin: 2em 10%;\n  padding: 1em;\n}\n\n.main-content-title {\n  text-align: center;\n  margin-bottom: 0.5em;\n}\n\n#explore-restaurant {\n  display: grid;\n  grid-row-gap: 1.5em;\n  padding-top: 1.5em;\n}\n\n.card {\n  width: 100%;\n  text-align: center;\n  transition: 0.3s;\n  cursor: pointer;\n  background-color:  #ffffff;\n}\n\n.card:hover {\n  box-shadow: 5px 5px 5px 0px #2c3e50;\n}\n.card-kota {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: white;\n  font-size: large;\n  background-color: #2c3e50;\n  padding: 0.4em 1.3em;\n  z-index: 1;\n}\n.card-image {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.card-content {\n  padding: 1.4em 2em;\n  font-size: small;\n  text-align: left;\n}\n.card-content-title {\n  font-weight: bold;\n  padding-bottom: 0.376em;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.img-container {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  transition: transform 0.5s ease;\n  max-height: 900px;\n}\n\n\n",""]),e.exports=n},function(e,n,t){var i=t(0),r=t(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"/* css untuk footer */\nfooter {\n  padding: 5px;\n  width: 100%;\n  text-align: center;\n  border-top:  #1b1a17;\n  background-color: #2c3e50;\n}\n\nfooter ul {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n}\n\nfooter li {\n  margin: 0.3em 0;\n  font-size: 14px;\n  color: #ffff;\n}\n",""]),e.exports=n},function(e,n,t){var i=t(0),r=t(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,"@media only screen and (max-width: 340px) {\n  nav {\n    display: flex;\n    flex-direction: row;\n  }\n  .nav-item a,\n  .hero-subtitle,\n  .btn {\n    font-size: 1em;\n  }\n  .logo-font,\n  .hero-title {\n    font-size: 1.5em;\n  }\n\n}\n\n/* untuk mobile */\n@media only screen and (max-width: 600px) {\n  nav {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    height: 120px;\n    flex-wrap: wrap;\n  }\n\n  .nav-list {\n    display: none;\n  }\n\n  .nav-list-block {\n    display: flex;\n  }\n  .menu {\n    display: block;\n    border: 1px solid transparent;\n    background-color: transparent;\n    text-align: center;\n  }\n\n  .menu-hp {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n  .menu span {\n    text-align: center;\n  }\n  .logo-font{\n    align-items: center;  \n  }\n\n  \n}\n@media only screen and (min-width: 600px) {\n  .main-content-title {\n    margin-bottom: 1em;\n  }\n  #explore-restaurant {\n    grid-column-gap: 1.545em;\n    grid-row-gap: 1.545em;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n   \n  }\n}\n@media only screen and (min-width: 992px) {\n  #explore-restaurant {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  main {\n    max-width: 1200px;\n  }\n}\n",""]),e.exports=n}]);