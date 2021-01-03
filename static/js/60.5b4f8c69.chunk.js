(this["webpackJsonpgdevelop-ide"]=this["webpackJsonpgdevelop-ide"]||[]).push([[60],{1970:function(t,r,n){"use strict";var e=n(1971);t.exports=e.PromisePool},1971:function(t,r,n){"use strict";var e=n(108),o=n(569),i=n(237),u=n(238);Object.defineProperty(r,"__esModule",{value:!0}),r.PromisePool=void 0;var s=n(897),c=n(1974),a=function(){function t(){i(this,t),this.items=[],this.concurrency=10,this.errorHandler=void 0}return u(t,[{key:"withConcurrency",value:function(t){var r=this;return s.tap(this,(function(){r.concurrency=t}))}},{key:"for",value:function(t){var r=this;return s.tap(this,(function(){r.items=t}))}},{key:"handleError",value:function(t){var r=this;return s.tap(this,(function(){r.errorHandler=t}))}},{key:"process",value:function(){var t=o(e.mark((function t(r){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(new c.PromisePoolExecutor).withConcurrency(this.concurrency).withHandler(r).handleError(this.errorHandler).for(this.items).start());case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}],[{key:"withConcurrency",value:function(t){var r=this;return s.tap(this,(function(){r.concurrency=t}))}},{key:"for",value:function(t){return(new this).for(t).withConcurrency(this.concurrency)}}]),t}();r.PromisePool=a},1972:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ifNullish=r.isAsyncFunction=r.isPromise=r.upon=r.tap=void 0;var e=n(1973);r.tap=function(t,r){return(new e.Goodies).tap(t,r)},r.upon=function(t,r){return(new e.Goodies).upon(t,r)},r.isPromise=function(t){return(new e.Goodies).isPromise(t)},r.isAsyncFunction=function(t){return(new e.Goodies).isAsyncFunction(t)},r.ifNullish=function(t,r){return(new e.Goodies).ifNullish(t,r)}},1973:function(t,r,n){"use strict";var e=n(108),o=n(569),i=n(237),u=n(238);Object.defineProperty(r,"__esModule",{value:!0}),r.Goodies=void 0;var s=function(){function t(){i(this,t)}return u(t,[{key:"tap",value:function(t,r){return this.isPromise(t)||this.isAsyncFunction(r)?this.tapAsync(t,r):this.tapSync(t,r)}},{key:"tapSync",value:function(t,r){return r?(this.isFunction(r)&&r(t),t):t}},{key:"tapAsync",value:function(){var t=o(e.mark((function t(r,n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",r);case 2:if(!this.isPromise(r)){t.next=6;break}return t.next=5,r;case 5:r=t.sent;case 6:if(!this.isFunction(n)){t.next=9;break}return t.next=9,n(r);case 9:return t.abrupt("return",r);case 10:case"end":return t.stop()}}),t,this)})));return function(r,n){return t.apply(this,arguments)}}()},{key:"upon",value:function(t,r){return this.isPromise(t)||this.isAsyncFunction(r)?this.uponAsync(t,r):this.uponSync(t,r)}},{key:"uponSync",value:function(t,r){return r&&this.isFunction(r)?r(t):t}},{key:"uponAsync",value:function(){var t=o(e.mark((function t(r,n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",r);case 2:if(!this.isPromise(r)){t.next=6;break}return t.next=5,r;case 5:r=t.sent;case 6:return t.abrupt("return",this.isFunction(n)?n(r):r);case 7:case"end":return t.stop()}}),t,this)})));return function(r,n){return t.apply(this,arguments)}}()},{key:"isPromise",value:function(t){return!!t&&this.isFunction(t.then)}},{key:"isFunction",value:function(t){return"function"===typeof t}},{key:"isAsyncFunction",value:function(t){return this.isFunction(t)&&"AsyncFunction"===t.constructor.name}},{key:"ifNullish",value:function(t,r){if(null===t||void 0===t)return r()}}]),t}();r.Goodies=s},1974:function(t,r,n){"use strict";var e=n(1975),o=n(108),i=n(569),u=n(237),s=n(238);Object.defineProperty(r,"__esModule",{value:!0}),r.PromisePoolExecutor=void 0;var c=n(897),a=n(1978),f=function(){function t(){u(this,t),this.tasks=[],this.items=[],this.errors=[],this.results=[],this.concurrency=10,this.handler=function(){},this.errorHandler=void 0}return s(t,[{key:"withConcurrency",value:function(t){var r=this;return c.tap(this,(function(){r.concurrency=t}))}},{key:"for",value:function(t){var r=this;return c.tap(this,(function(){r.items=t}))}},{key:"withHandler",value:function(t){var r=this;return c.tap(this,(function(){r.handler=t}))}},{key:"handleError",value:function(t){var r=this;return c.tap(this,(function(){r.errorHandler=t}))}},{key:"hasReachedConcurrencyLimit",value:function(){return this.activeCount()>=this.concurrency}},{key:"activeCount",value:function(){return this.tasks.length}},{key:"start",value:function(){var t=i(o.mark((function t(){var r=this;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.upon(this.validateInputs(),i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.process());case 1:case"end":return t.stop()}}),t)})))));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"validateInputs",value:function(){if("function"!==typeof this.handler)throw new Error("The first parameter for the .process(fn) method must be a function");if(!("number"===typeof this.concurrency&&this.concurrency>=1))throw new TypeError('"concurrency" must be a number, 1 or up. Received "'.concat(this.concurrency,'" (').concat(typeof this.concurrency,")"));if(!Array.isArray(this.items))throw new TypeError('"items" must be an array. Received '.concat(typeof this.items));if(this.errorHandler&&"function"!==typeof this.errorHandler)throw new Error("The error handler must be a function. Received ".concat(typeof this.errorHandler))}},{key:"process",value:function(){var t=i(o.mark((function t(){var r,n,i;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e(this.items),t.prev=1,r.s();case 3:if((n=r.n()).done){t.next=11;break}if(i=n.value,!this.hasReachedConcurrencyLimit()){t.next=8;break}return t.next=8,this.processingSlot();case 8:this.startProcessing(i);case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),r.e(t.t0);case 16:return t.prev=16,r.f(),t.finish(16);case 19:return t.abrupt("return",this.drained());case 20:case"end":return t.stop()}}),t,this,[[1,13,16,19]])})));return function(){return t.apply(this,arguments)}}()},{key:"processingSlot",value:function(){var t=i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.waitForTaskToFinish());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitForTaskToFinish",value:function(){var t=i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.race(this.tasks);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"startProcessing",value:function(t){var r=this,n=this.createTaskFor(t).then((function(t){r.results.push(t),r.tasks.splice(r.tasks.indexOf(n),1)})).catch((function(e){if(r.tasks.splice(r.tasks.indexOf(n),1),r.errorHandler)return r.errorHandler(e,t);r.errors.push(a.PromisePoolError.createFrom(e,t))}));this.tasks.push(n)}},{key:"createTaskFor",value:function(){var t=i(o.mark((function t(r){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.handler(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"drained",value:function(){var t=i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.drainActiveTasks();case 2:return t.abrupt("return",{results:this.results,errors:this.errors});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"drainActiveTasks",value:function(){var t=i(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.tasks);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}();r.PromisePoolExecutor=f},1975:function(t,r,n){var e=n(1976);t.exports=function(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,u=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){s=!0,i=t},f:function(){try{u||null==o.return||o.return()}finally{if(s)throw i}}}}},1976:function(t,r,n){var e=n(1977);t.exports=function(t,r){if(t){if("string"===typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}},1977:function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}},1978:function(t,r,n){"use strict";var e=n(237),o=n(238),i=n(898),u=n(1979),s=n(1980),c=n(1983);Object.defineProperty(r,"__esModule",{value:!0}),r.PromisePoolError=void 0;var a=function(t){u(n,t);var r=s(n);function n(t,o){var u;return e(this,n),(u=r.call(this)).item=o,u.name=u.constructor.name,u.message=u.messageFrom(t),Error.captureStackTrace(i(u),u.constructor),u}return o(n,[{key:"messageFrom",value:function(t){return t instanceof Error||"object"===typeof t?t.message:"string"===typeof t||"number"===typeof t?t.toString():""}}],[{key:"createFrom",value:function(t,r){return new this(t,r)}}]),n}(c(Error));r.PromisePoolError=a},1979:function(t,r,n){var e=n(570);t.exports=function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&e(t,r)}},1980:function(t,r,n){var e=n(899),o=n(900),i=n(1981);t.exports=function(t){return function(){var r,n=e(t);if(o()){var u=e(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return i(this,r)}}},1981:function(t,r,n){var e=n(1982),o=n(898);t.exports=function(t,r){return!r||"object"!==e(r)&&"function"!==typeof r?o(t):r}},1982:function(t,r){function n(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(r)}t.exports=n},1983:function(t,r,n){var e=n(899),o=n(570),i=n(1984),u=n(1985);function s(r){var n="function"===typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,e(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},s(r)}t.exports=s},1984:function(t,r){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},1985:function(t,r,n){var e=n(570),o=n(900);function i(r,n,u){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,r,n){var o=[null];o.push.apply(o,r);var i=new(Function.bind.apply(t,o));return n&&e(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},569:function(t,r){function n(t,r,n,e,o,i,u){try{var s=t[i](u),c=s.value}catch(a){return void n(a)}s.done?r(c):Promise.resolve(c).then(e,o)}t.exports=function(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var u=t.apply(r,e);function s(t){n(u,o,i,s,c,"next",t)}function c(t){n(u,o,i,s,c,"throw",t)}s(void 0)}))}}},570:function(t,r){function n(r,e){return t.exports=n=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},n(r,e)}t.exports=n},897:function(t,r,n){"use strict";t.exports=n(1972)},898:function(t,r){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},899:function(t,r){function n(r){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(r)}t.exports=n},900:function(t,r){t.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}}}]);
//# sourceMappingURL=60.5b4f8c69.chunk.js.map