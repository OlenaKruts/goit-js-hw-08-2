function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=g();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function j(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function T(){var e=g(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:j(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector("form"),S=(y.querySelector("button"),y.elements.email),O=y.elements.message;y.addEventListener("input",e(t)((function(e){const t={email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),0!==localStorage.length&&(S.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,O.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.2437aed3.js.map
