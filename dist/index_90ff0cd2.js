!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;a.push([14,1]),n()}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.getItem=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},e.prototype.setItem=function(e,t,n,r,o,a){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString();break;default:i=""}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+i+(o?"; domain="+o:"")+(r?"; path="+r:"")+(a?"; secure":""),!0},e.prototype.removeItem=function(e,t,n){return!(!e||!this.hasItem(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0)},e.prototype.hasItem=function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},e.prototype.keys=function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e},e}();t.default=r},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(l[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(){return"true"===(new r.default).getItem("login")}},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(16),a=n(21);o.render(r.createElement(a.default,null),document.getElementById("root"))},,,,function(e,t,n){"use strict";e.exports=n(19)},function(e,t,n){"use strict";(function(e){
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,o=3,a=-1,i=-1,u=!1,l=!1;function c(){if(!u){var e=n.expirationTime;l?E():l=!0,x(p,e)}}function s(){var e=n,t=n.next;if(n===t)n=null;else{var r=n.previous;n=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var a=o,u=i;o=e,i=t;try{var l=r()}finally{o=a,i=u}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=l.next=l.previous=l;else{r=null,e=n;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==n);null===r?r=n:r===n&&(n=l,c()),(t=r.previous).next=r.previous=l,l.next=r,l.previous=t}}function f(){if(-1===a&&null!==n&&1===n.priorityLevel){u=!0;try{do{s()}while(null!==n&&1===n.priorityLevel)}finally{u=!1,null!==n?c():l=!1}}}function p(e){u=!0;var o=r;r=e;try{if(e)for(;null!==n;){var a=t.unstable_now();if(!(n.expirationTime<=a))break;do{s()}while(null!==n&&n.expirationTime<=a)}else if(null!==n)do{s()}while(null!==n&&!O())}finally{u=!1,r=o,null!==n?c():l=!1,f()}}var h,d,m=Date,v="function"==typeof setTimeout?setTimeout:void 0,y="function"==typeof clearTimeout?clearTimeout:void 0,g="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,b="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){h=g(function(t){y(d),e(t)}),d=v(function(){b(h),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var _=performance;t.unstable_now=function(){return _.now()}}else t.unstable_now=function(){return m.now()};var x,E,O,C=null;if("undefined"!=typeof window?C=window:void 0!==e&&(C=e),C&&C._schedMock){var k=C._schedMock;x=k[0],E=k[1],O=k[2],t.unstable_now=k[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var P=null,j=function(e){if(null!==P)try{P(e)}finally{P=null}};x=function(e){null!==P?setTimeout(x,0,e):(P=e,setTimeout(j,0,!1))},E=function(){P=null},O=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof g&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof b&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var T=null,M=!1,L=-1,N=!1,S=!1,I=0,A=33,R=33;O=function(){return I<=t.unstable_now()};var U=new MessageChannel,D=U.port2;U.port1.onmessage=function(){M=!1;var e=T,n=L;T=null,L=-1;var r=t.unstable_now(),o=!1;if(0>=I-r){if(!(-1!==n&&n<=r))return N||(N=!0,w(F)),T=e,void(L=n);o=!0}if(null!==e){S=!0;try{e(o)}finally{S=!1}}};var F=function(e){if(null!==T){w(F);var t=e-I+R;t<R&&A<R?(8>t&&(t=8),R=t<A?A:t):A=t,I=e+R,M||(M=!0,D.postMessage(void 0))}else N=!1};x=function(e,t){T=e,L=t,S||0>t?D.postMessage(void 0):N||(N=!0,w(F))},E=function(){T=null,M=!1,L=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=o,i=a;o=e,a=t.unstable_now();try{return n()}finally{o=r,a=i,f()}},t.unstable_next=function(e){switch(o){case 1:case 2:case 3:var n=3;break;default:n=o}var r=o,i=a;o=n,a=t.unstable_now();try{return e()}finally{o=r,a=i,f()}},t.unstable_scheduleCallback=function(e,r){var i=-1!==a?a:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=i+r.timeout;else switch(o){case 1:r=i+-1;break;case 2:r=i+250;break;case 5:r=i+1073741823;break;case 4:r=i+1e4;break;default:r=i+5e3}if(e={callback:e,priorityLevel:o,expirationTime:r,next:null,previous:null},null===n)n=e.next=e.previous=e,c();else{i=null;var u=n;do{if(u.expirationTime>r){i=u;break}u=u.next}while(u!==n);null===i?i=n:i===n&&(n=e,c()),(r=i.previous).next=i.previous=e,e.next=i,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var r=e.previous;r.next=t,t.previous=r}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=o;return function(){var r=o,i=a;o=n,a=t.unstable_now();try{return e.apply(this,arguments)}finally{o=r,a=i,f()}}},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<i||O())},t.unstable_continueExecution=function(){null!==n&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n(20))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(22);n(25);var u=n(26),l=n(27),c=n(28),s=n(4),f=function(e){function t(t){var n=e.call(this,t)||this;return n.changePageStatus=function(e){n.setState({pageStatus:e})},n.state={pageStatus:s.default()?"index":"login",listData:[]},n.axios=new c.default("https://www.easy-mock.com/mock/5d4257ee7482bb7b59232d8f/shuyuanzz"),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;this.axios.get("/demolist").then(function(t){e.setState({listData:t.data.listData})}).catch(function(e){console.log(e)})},t.prototype.render=function(){var e=this.state,t=e.pageStatus,n=e.listData;if(!n.length)return null;switch(t){case"index":return a.createElement(i.default,{title:"DEMO",subTitleList:n,changePage:this.changePageStatus});case"login":return a.createElement(u.default,{axios:this.axios,changePageStatus:this.changePageStatus});case"regist":return a.createElement(l.default,{axios:this.axios,changePageStatus:this.changePageStatus})}},t}(a.Component);t.default=f},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(47),u=n(23),l=n(24),c=n(4),s=n(2),f=function(e){function t(t){var n=e.call(this,t)||this;return n.changeListState=function(){n.setState(function(e){return{showList:!e.showList}})},n.hashHander=function(){n.setState({hash:window.location.hash.substr(1)})},n.handleOnChange=function(){var e=n.props.subTitleList.filter(function(e){return-1!==e.name.indexOf(n.input.value)});n.setState({subTitle:e})},n.logout=function(){n.cookieManagement.removeItem("login",null,null),n.props.changePage("login")},n.state={subTitle:n.props.subTitleList,hash:"",showList:!1,currentPage:""},n.cookieManagement=new s.default,n}return o(t,e),t.prototype.componentDidMount=function(){window.addEventListener("hashchange",this.hashHander)},t.prototype.componentWillUnmount=function(){window.removeEventListener("hashchange",this.hashHander)},t.prototype.render=function(){var e=this,t=this.props,n=t.title,r=t.changePage,o=this.state,s=o.subTitle,f=o.showList,p=o.currentPage,h=u.default(this.state.hash);return a.createElement("div",{className:"main-container"},a.createElement("header",null,a.createElement(i.IoIosMenu,{className:"menu",onClick:this.changeListState}),a.createElement("a",{href:window.location.pathname},n),a.createElement("ul",{className:f?"show":""},s.map(function(t){return a.createElement("li",{key:t.hash},a.createElement("a",{href:"#"+t.hash,onClick:e.changeListState},t.name))}))),a.createElement("nav",{className:"nav-container"},a.createElement("a",{href:window.location.pathname,className:"nav-title"},n),a.createElement("div",{className:"input-wapper"},a.createElement(i.IoIosSearch,{className:"nav-search-icon"}),a.createElement("input",{ref:function(t){return e.input=t},type:"text",placeholder:"Type in search",className:"nav-input",onChange:this.handleOnChange})),a.createElement("ul",{className:"nav-list"},s.map(function(t){return a.createElement("li",{key:t.hash,className:"nav-list-cld"},a.createElement("a",{href:"#"+t.hash,onClick:function(){e.setState({currentPage:t.name})},className:p===t.name?"selected":""},t.name))}))),h,a.createElement(l.default,null),c.default()?a.createElement("div",{className:"login-regist"},a.createElement("span",{onClick:this.logout},"退出登陆")):a.createElement("div",{className:"login-regist"},a.createElement("a",{onClick:function(){r("login")}},"登陆"),a.createElement("a",{onClick:function(){r("regist")}},"注册")))},t}(a.Component);t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){switch(e){case"":return"index";case"test1":return"test1";case"test2":return"test2"}}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement("a",{href:"https://github.com/shuyuanzz/shuyuanzz.github.io",className:"github-corner","aria-label":"View source on Github"},a.createElement("svg",{viewBox:"0 0 250 250","aria-hidden":"true"},a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))},t}(a.Component);t.default=i},function(e,t,n){},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);n(5);var i=n(2),u=function(e){function t(t){var n=e.call(this,t)||this;return n.handleOnLogin=function(){n.props.axios.post("/login",{username:n.account.value,password:n.password.value}).then(function(e){"success"===e.data.data.message?(n.cookieManagement.setItem("login",!0,null,null,null,null),n.props.changePageStatus("index")):(n.setState({message:e.data.data.message}),n.password.value="",n.password.focus())}).catch(function(e){console.log(e)})},n.state={message:null},n.cookieManagement=new i.default,n}return o(t,e),t.prototype.render=function(){var e=this,t=this.state.message,n=this.props.changePageStatus;return a.createElement("div",{className:"login-container"},a.createElement("div",{className:"login-cart"},a.createElement("div",{className:"login-title"},"login"),a.createElement("div",{className:"login-label"},"用户名",a.createElement("input",{type:"text",placeholder:"    输入账号",ref:function(t){return e.account=t}})),a.createElement("div",{className:"login-label"},"密码",a.createElement("input",{type:"password",placeholder:"    输入密码",ref:function(t){return e.password=t}})),t&&a.createElement("span",{className:"login-message"}," ",this.state.message+" !"),a.createElement("div",{className:"button-container"},a.createElement("button",{onClick:this.handleOnLogin},"登陆"),a.createElement("button",{onClick:function(){return n("regist")}},"注册"))))},t}(a.Component);t.default=u},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);n(5);var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handeleOnRegist=function(){alert("暂不支持")},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.changePageStatus;return a.createElement("div",{className:"login-container"},a.createElement("div",{className:"login-cart"},a.createElement("div",{className:"login-title"},"regist"),a.createElement("div",{className:"login-label"},"用户名",a.createElement("input",{type:"text",placeholder:"    输入账号",ref:function(t){return e.account=t}})),a.createElement("div",{className:"login-label"},"密码",a.createElement("input",{type:"password",placeholder:"    输入密码",ref:function(t){return e.password=t}})),a.createElement("div",{className:"button-container"},a.createElement("button",{onClick:function(){return t("login")}},"登陆"),a.createElement("button",{onClick:this.handeleOnRegist},"注册"))))},t}(a.Component);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),o=function(){function e(e){r.default.defaults.baseURL=e}return e.prototype.get=function(e){return r.default.get(e)},e.prototype.post=function(e,t){return r.default.post(e,t)},e}();t.default=o},,,,,,,,function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,c=[],s=!1,f=-1;function p(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&h())}function h(){if(!s){var e=u(p);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||s||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);