(()=>{var t={402:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(645),a=n.n(r),o=n(667),i=n.n(o),s=n(934),c=n(570),d=a()((function(t){return t[1]})),l=i()(s.Z),u=i()(c.Z);d.push([t.id,"body {\n  width: 100vw;\n  height: 100vh;\n  padding: 1rem;\n  background-image: url("+l+');\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-family: "Roboto Condensed", sans-serif;\n}\n\n@media only screen and (max-width: 1200px) {\n  body {\n    background-image: url('+u+');\n  }\n}\n\n#reels {\n  display: flex;\n  width: 100vw;\n  height: calc((3 / 5) * 100vw);\n  max-height: calc(90vh - 50px - 40px);\n  max-width: calc((5 / 3) * (90vh - 50px - 40px));\n}\n\n.reel {\n  overflow: hidden;\n  width: 20%;\n  height: 100%;\n}\n\n.reel > .icons > img {\n  width: calc(100% + 6px);\n  margin: -3px 0 0 -3px;\n  height: auto;\n}\n\n#controls {\n  background-color: rgba(255, 255, 255, 0.9);\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 30px;\n}\n\n#controls label {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n#controls label input {\n  margin-right: 5px;\n}\n\ninput[type="checkbox"] {\n  width: 40px;\n  height: 40px;\n}\n\n#jackpot {\n  color: #d5ad6d;\n  font-size: 40px;\n  text-align: center;\n}\n\n#slot.inverted .reel {\n  transform: scaleY(-1);\n}\n\n#slot.inverted .reel > .icons > img {\n  transform: scaleY(-1);\n}\n',""]);const f=d},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},934:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n.p+"dbdfdc8f51630ddfbb3f6ddbe67668a8.jpg"},570:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=n.p+"01e008fb4d3f3df23e7d434bb9bd887e.jpg"},363:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"0379613a4269155f45b325b9c8ade309.svg"},106:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"92e4eecf1c83293e3395a3cd1b84693b.svg"},188:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"9ae79499243776a4de6e6a6c25ec9798.svg"},482:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"3392ebef20e51148368ecc5969498f64.svg"},431:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"b33cd68d7fb870c5930919ddfc0933b1.svg"},418:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"a97a2e9fa184dcab972b10738af89c32.svg"},996:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"61e5b40f641dff097d3fe85e9fa07beb.svg"},854:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"7d600c80a7f5f31bc33716b7d9b72515.svg"},277:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=n.p+"4c0ad8f5f10199effb77a3e746d0ff55.svg"},379:(t,e,n)=>{"use strict";var r,a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function i(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],a=0;a<t.length;a++){var s=t[a],c=e.base?s[0]+e.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=i(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:l,updater:m(f,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,p=0;function m(t,e){var n,r,a;if(e.singleton){var o=p++;n=h||(h=c(e)),r=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=c(e),r=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var c=s(t,e),d=0;d<n.length;d++){var l=i(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}},335:(t,e,n)=>{var r={"./at_at.svg":363,"./c3po.svg":106,"./darth_vader.svg":188,"./death_star.svg":482,"./falcon.svg":431,"./r2d2.svg":418,"./stormtrooper.svg":996,"./tie_ln.svg":854,"./yoda.svg":277};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=335}},e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r={},a=function(){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.random();t(this,a),this.name=e,r[e]?this.img=r[e].cloneNode():(this.img=new Image,this.img.src=n(335)("./".concat(e,".svg")).default,r[e]=this.img)}var o,i;return o=a,i=[{key:"preload",value:function(){a.symbols.forEach((function(t){return new a(t)}))}},{key:"random",value:function(){return this.symbols[Math.floor(Math.random()*this.symbols.length)]}},{key:"symbols",get:function(){return["at_at","c3po","darth_vader","death_star","falcon","r2d2","stormtrooper","tie_ln","yoda"]}}],null&&e(o.prototype,null),i&&e(o,i),a}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reelContainer=e,this.idx=n,this.symbolContainer=document.createElement("div"),this.symbolContainer.classList.add("icons"),this.reelContainer.appendChild(this.symbolContainer),this.animation=this.symbolContainer.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(2px)",offset:.5},{transform:"translateY(-".concat(10*Math.floor(this.factor)/(3+10*Math.floor(this.factor))*100,"%)"),filter:"blur(0)"}],{duration:1e3*this.factor,easing:"ease-in-out"}),this.animation.cancel(),r.forEach((function(t){return o.symbolContainer.appendChild(new a(t).img)}))}var e,n;return e=t,(n=[{key:"renderSymbols",value:function(t){for(var e=document.createDocumentFragment(),n=3;n<3+10*Math.floor(this.factor);n++){var r=new a(n>=10*Math.floor(this.factor)-2?t[n-10*Math.floor(this.factor)]:void 0);e.appendChild(r.img)}this.symbolContainer.appendChild(e)}},{key:"spin",value:function(){var t=this,e=new Promise((function(e){return t.animation.onfinish=e})),n=new Promise((function(e){return setTimeout(e,1e3*t.factor)}));return this.animation.play(),Promise.race([e,n]).then((function(){"finished"!==t.animation.playState&&t.animation.finish();for(var e=t.symbolContainer.children.length-3,n=0;n<e;n++)t.symbolContainer.firstChild.remove()}))}},{key:"factor",get:function(){return 1+Math.pow(this.idx/2,2)}}])&&o(e.prototype,n),t}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t),a.preload(),this.currentSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.nextSymbols=[["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"],["death_star","death_star","death_star"]],this.container=e,this.reels=Array.from(this.container.getElementsByClassName("reel")).map((function(t,e){return new i(t,e,n.currentSymbols[e])})),this.spinButton=document.getElementById("spin"),this.spinButton.addEventListener("click",(function(){return n.spin()})),this.autoPlayCheckbox=document.getElementById("autoplay"),r.inverted&&this.container.classList.add("inverted")}var e,n;return e=t,(n=[{key:"spin",value:function(){var t=this;return this.onSpinStart(),this.currentSymbols=this.nextSymbols,this.nextSymbols=[[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()],[a.random(),a.random(),a.random()]],Promise.all(this.reels.map((function(e){return e.renderSymbols(t.nextSymbols[e.idx]),e.spin()}))).then((function(){return t.onSpinEnd()}))}},{key:"onSpinStart",value:function(){this.spinButton.disabled=!0,console.log("SPIN START")}},{key:"onSpinEnd",value:function(){var t=this;if(this.spinButton.disabled=!1,console.log("SPIN END"),this.autoPlayCheckbox.checked)return window.setTimeout((function(){return t.spin()}),200)}}])&&c(e.prototype,n),t}())(document.getElementById("slot"),{inverted:!1})})(),(()=>{"use strict";var t=n(379),e=n.n(t),r=n(402);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals})()})();