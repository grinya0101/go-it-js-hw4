!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire87e9;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire87e9=r);var i=r("6JpON"),u=document.querySelector("form"),a=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]');function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var o=l.value,t=c.value,r=a.value,u=0;u<t;u+=1){d(u+1,r+o*u).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=033-promises.026013be.js.map
