/*! For license information please see 861.1661344439910.2cdba3d5500f9089b34c.js.LICENSE.txt */
"use strict";(self.webpackChunkconnect=self.webpackChunkconnect||[]).push([[861],{417:function(e,t,n){n.r(t);var o=n(3264),i=n.n(o),r=n(3644),s=n.n(r),a=n(6530),c=n(4890),u=n(9704),p=n(6324),f=n(5240),h=(n(3764),n(7311));const l=(0,c.MT)((e=>e),["Use Redux"]);h.E();const d=window.location.origin,m=-1!=d.indexOf("dev")||-1!=d.indexOf("localhost")?["dev.","-dev"]:-1!=d.indexOf("qa")?["qa.","-qa"]:-1!=d.indexOf("stage")?["stage.","-stage"]:["",""];window.runConfig={apiUrl:"https://access."+m[0]+"redhat.com/subscriptions/link/api/",hrefConfig:"https://access."+m[0]+"redhat.com/",hrefEnv:m[0]};var v=()=>i().createElement(u.zt,{store:l},i().createElement(a.BrowserRouter,{basename:(0,f.eb)(window.location.pathname)},i().createElement(p.Z,null))),g=n(6489);function y(e,t){void 0===t&&(t={});var n=function(e){return e&&"j"===e[0]&&":"===e[1]?e.substr(2):e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(e){}return e}var w,O=function(){return O=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},O.apply(this,arguments)},E=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?g.Q(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=g.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),y(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var o in this.cookies)n[o]=y(this.cookies[o],e);return n},e.prototype.set=function(e,t,n){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=O(O({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=g.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=O(O({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=O({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=g.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),k=E,C=o.createContext(new k),S=C.Provider,_=(C.Consumer,w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},w(e,t)},function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new E,n}return _(t,e),t.prototype.render=function(){return o.createElement(S,{value:this.cookies},this.props.children)},t}(o.Component);const x=document.getElementById("root");s().render(i().createElement(i().StrictMode,null,i().createElement(b,null,i().createElement(v,null))),x,(()=>x.setAttribute("data-ouia-safe",!0)))},6489:function(e,t){t.Q=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var o={},i=t||{},s=e.split(";"),a=i.decode||n,c=0;c<s.length;c++){var u=s[c],p=u.indexOf("=");if(!(p<0)){var f=u.substring(0,p).trim();if(null==o[f]){var h=u.substring(p+1,u.length).trim();'"'===h[0]&&(h=h.slice(1,-1)),o[f]=r(h,a)}}}return o},t.q=function(e,t,n){var r=n||{},s=r.encode||o;if("function"!=typeof s)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var a=s(t);if(a&&!i.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=r.maxAge){var u=r.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(r.domain){if(!i.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!i.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(c+="; HttpOnly"),r.secure&&(c+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return c};var n=decodeURIComponent,o=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function r(e,t){try{return t(e)}catch(t){return e}}}}]);
//# sourceMappingURL=../sourcemaps/861.b6c012c4f8bf652d0f13e86ff85b1ade.js.map