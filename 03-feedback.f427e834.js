!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))};var c,l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var s="Expected a function",d=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,m=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,O=g||y||Function("return this")(),j=Object.prototype.toString,w=Math.max,h=Math.min,_=function(){return O.Date.now()};function x(e,t,r){var n,o,i,u,a,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(s);function p(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function b(e){return c=e,a=setTimeout(g,t),l?p(e):u}function m(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-c>=i}function g(){var e=_();if(m(e))return y(e);a=setTimeout(g,function(e){var r=t-(e-f);return d?h(r,i-(e-c)):r}(e))}function y(e){return a=void 0,v&&n?p(e):(n=o=void 0,u)}function O(){var e=_(),r=m(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return b(f);if(d)return a=setTimeout(g,t),p(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=S(t)||0,T(r)&&(l=!!r.leading,i=(d="maxWait"in r)?w(S(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(_())},O}function T(t){var r=void 0===t?"undefined":e(l)(t);return!!t&&("object"==r||"function"==r)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=p.test(t);return n||b.test(t)?m(t.slice(2),n?2:8):v.test(t)?NaN:+t}function E(){var t=e(f)(["Все поля должны быть заполнены"]);return E=function(){return t},t}c=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),x(e,t,{leading:n,maxWait:t,trailing:o})};var M="feedback-form-state",P=JSON.parse(localStorage.getItem(M)),N=e(i)({},P),D={form:document.querySelector(".js-feedback-form")};!function(){var e=P;if(e){Object.entries(e).forEach((function(e){D.form.elements[e[0]].value=e[1]}))}}(),D.form.addEventListener("input",e(c)((function(e){N[e.target.name]=e.target.value,localStorage.setItem(M,JSON.stringify(N))}),500)),D.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.email.value,r=e.currentTarget.message.value;if(!t||!r)return void console.log(alert(E()));var n={email:t,message:r};console.log(n),localStorage.removeItem(M),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.f427e834.js.map