(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(62)},62:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=n(9),u=n(2),l=n(1),s=n(33),f=n(30),h=n(31),d=new(s.a.plugin(f.a,h.a))({auth:"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",throttle:{onRateLimit:function(t,e){if(d.log.warn("Request quota exhausted for request ".concat(e.method," ").concat(e.url)),0===e.request.retryCount)return d.log.info("Retrying after ".concat(t," seconds!")),!0},onSecondaryRateLimit:function(t,e,n){n.log.warn("Secondary quota detected for request ".concat(e.method," ").concat(e.url))}}});var m=function(t){var e=t.components;return a.a.createElement("div",{id:"components",className:"components"},(e||[]).map(function(t){return a.a.createElement(c.b,{to:"?filter=".concat(t.name),className:"component",style:{backgroundColor:"#"+t.color},key:t.id},a.a.createElement("span",null,t.name))}))},p=n(32);function v(t,e){return t+" "+new Date(e).toLocaleDateString()+" "+new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function y(t){return{__html:Object(p.marked)(t).replace("<pre>","<pre class='prettyprint'>")}}var g=function(t){var e=t.comments;return a.a.createElement("div",{id:"updates",className:"updates"},(e||[]).map(function(t){var e=t.id,n=t.created_at,r=t.body;return a.a.createElement("div",{key:e,className:"update"},a.a.createElement("span",{className:"date"},v("",n)),a.a.createElement("div",{className:"body",dangerouslySetInnerHTML:y(r)}))}))},b=function(t){var e=t.incidents,n=t.incident_number,r=t.incident_filter,o=t.incident_comments;return a.a.createElement("div",{className:"incidents"},(e||[]).filter(function(t){var e=t.number;return null===n||Number(n)===e}).filter(function(t){var e=t.labels;return null===r||e.filter(function(t){return t.name===r}).length>0}).filter(function(t){return t.labels.filter(function(t){return t.name.startsWith("type/")}).length>0}).map(function(t){var e=t.number,r=t.title,i=t.labels,u=t.created_at,l=t.closed_at,s=t.comments,f=t.body,h=t.state,d=i.filter(function(t){return t.name.startsWith("type/")}),m=null;d.length>0&&(m=d[0].name.slice("type/".length));var p="maintenance"===m?"\u26a0":"closed"===h?"\u2705":"\u274c";return a.a.createElement("div",{className:"incident",id:e,key:e},a.a.createElement("h1",{className:"title"},a.a.createElement(c.b,{to:"?number=".concat(e)},p," ",r)),i.length>0&&a.a.createElement("div",{className:"affected"},"affected:",i.map(function(t){return t.name.startsWith("type/")?"":a.a.createElement(c.b,{to:"?filter=".concat(t.name),className:"component",style:{backgroundColor:"#"+t.color},key:t.id},a.a.createElement("span",null,t.name))})),a.a.createElement("span",{className:"date"},v("maintenance"===m?"announced":"reported",u),null!=l&&", "+v("resolved",l)),a.a.createElement("br",null),a.a.createElement("span",{className:"date"},a.a.createElement(c.b,{to:"?number=".concat(e)},s," ",1===s?"update":"updates")),a.a.createElement("div",{className:"body",dangerouslySetInnerHTML:y(f)}),null!=n&&Number(n)===e&&a.a.createElement(g,{comments:o}))}))};function w(){w=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:x(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function h(){}function d(){}function m(){}var p={};u(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&n.call(y,o)&&(p=y);var g=m.prototype=h.prototype=Object.create(p);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),u(g,c,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var E=function(t){var e=Object(r.useState)(),n=Object(l.a)(e,2),o=n[0],i=n[1],s=Object(r.useState)(),f=Object(l.a)(s,2),h=f[0],p=f[1],v=Object(r.useState)(new Map),y=Object(l.a)(v,2),g=y[0],E=y[1],x=Object(r.useState)(),L=Object(l.a)(x,2),_=L[0],N=L[1],O=Object(c.c)(),j=Object(l.a)(O,1)[0],k=j.get("number"),S=j.get("filter");return Object(r.useEffect)(function(){function t(){return(t=Object(u.a)(w().mark(function t(){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=3;break}return t.next=3,d.rest.issues.listForRepo({owner:"dombott",repo:"statuspage",state:"all",per_page:100}).then(function(t){i(t.data)}).catch(function(t){N(t)});case 3:if(h){t.next=6;break}return t.next=6,d.rest.issues.listLabelsForRepo({owner:"dombott",repo:"statuspage",per_page:100}).then(function(t){p(t.data)}).catch(function(t){N(t)});case 6:if(null===k||void 0!==g.get(k)){t.next=9;break}return t.next=9,(e=k,d.rest.issues.listComments({owner:"dombott",repo:"statuspage",issue_number:e})).then(function(t){E(new Map(g.set(k,t.data)))}).catch(function(t){N(t)});case 9:case"end":return t.stop()}var e},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),console.log(g)},[k]),null!=_?a.a.createElement("span",{class:"error"},"Failed to load data, an error occured: $",_):a.a.createElement("div",null,a.a.createElement(m,{key:"components",components:h}),a.a.createElement(b,{key:"incidents",incidents:o,incident_number:k,incident_filter:S,incident_comments:g.get(k)}))};function x(){return a.a.createElement("div",{className:"header"},a.a.createElement("h1",{className:"title"},a.a.createElement(c.b,{to:"/"},a.a.createElement("strong",null,"Statuspage"))),a.a.createElement("p",{className:"description"},"View incidents and status updates."))}var L=function(){return a.a.createElement("div",null,a.a.createElement(x,null),a.a.createElement(E,null))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(c.a,{basename:"/statuspage"},a.a.createElement(L,null)))}},[[34,2,1]]]);
//# sourceMappingURL=main.ab6d66e3.chunk.js.map