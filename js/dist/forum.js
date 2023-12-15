/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(e){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new N(n||[]);return s(i,"_invoke",{value:j(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var v="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function x(){}function _(){}var E={};p(E,c,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(D([])));k&&k!==i&&a.call(k,c)&&(E=k);var F=_.prototype=w.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,s,u){var c=d(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var o;s(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function j(t,r,n){var o=v;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var u=O(s,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=d(t,r,n);if("normal"===c.type){if(o=n.done?g:y,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=_,s(F,"constructor",{value:_,configurable:!0}),s(_,"constructor",{value:x,configurable:!0}),x.displayName=p(_,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,f,"GeneratorFunction")),t.prototype=Object.create(F),t},r.awrap=function(t){return{__await:t}},T(S.prototype),p(S.prototype,l,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(F),p(F,f,"Generator"),p(F,c,(function(){return this})),p(F,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["common/extend"],e=flarum.core.compat["forum/components/IndexPage"];var o=r.n(e);function i(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,u,"next",t)}function u(t){i(a,n,o,s,u,"throw",t)}s(void 0)}))}}function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(this,arguments)}var u=r(357),c=r.n(u),l=["doctype","html","head","title","base","link","meta","style","script","noscript","body","article","nav","aside","section","header","footer","h1-h6","hgroup","address","p","hr","pre","blockquote","ol","ul","li","dl","dt","dd","figure","figcaption","div","table","caption","thead","tbody","tfoot","tr","th","td","col","colgroup","form","fieldset","legend","label","input","button","select","datalist","optgroup","option","textarea","keygen","output","progress","meter","details","summary","command","menu","del","ins","img","iframe","embed","object","param","video","audio","source","canvas","track","map","area","a","em","strong","i","b","u","s","small","abbr","q","cite","dfn","sub","sup","time","code","kbd","samp","var","mark","bdi","bdo","ruby","rt","rp","span","br","wbr"],f=function(){function t(){this.topics={},this.hop=this.topics.hasOwnProperty}var e=t.prototype;return e.on=function(t,e){var r=this;this.hop.call(this.topics,t)||(this.topics[t]=[]);var n=this.topics[t].push(e)-1;return{remove:function(){r.topics[t].splice(n,1)}}},e.emit=function(t,e){return void 0===e&&(e={}),this.hop.call(this.topics,t)?this.topics[t].forEach((function(t){return t(e)})):this},t}();function p(t){var e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild}var h=function(){function t(t,e,r){void 0===r&&(r={}),this.version="1.4.0",this.target=t,this.urls=[].concat(e),this.html=[],this.options=s({ssl:!0,host:"www.feedrapp.info",support:!0,limit:null,key:null,layoutTemplate:"<ul>{entries}</ul>",entryTemplate:'<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>',tokens:{},outputMode:"json",dateFormat:"dddd MMM Do",dateLocale:"en",offsetStart:!1,offsetEnd:!1,fetchFeed:null,encoding:null},r),this.events=new f}var e=t.prototype;return e.on=function(t,e){return this.events.on("vanilla-rss/"+t,e),this},e.render=function(){var t=this;return new Promise(function(){var e=a(c().mark((function e(r,n){var o,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t._load();case 3:o=e.sent,t.feed=o.responseData.feed,t.entries=o.responseData.feed.entries,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),t.entries=[],t.feed=null,e.abrupt("return",n(e.t0));case 13:i=t._generateHTMLForEntries(),t.target.append(i.layout),0!==i.entries.length&&(t.events.emit("vanilla-rss/data",{rss:t,feed:t.feed,entries:t.entries}),s=i.layout,"entries",a=s.tagName.toLowerCase()==="entries".toLowerCase()?i.layout:i.layout.querySelector("entries"),t._appendEntries(a,i.entries)),r();case 17:case"end":return e.stop()}var s}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())},e._appendEntries=function(t,e){var r=this;e.forEach((function(e,n){var o=r._wrapContent(e);t.insertAdjacentHTML("beforebegin",o.outerHTML)})),t.remove()},e._wrapContent=function(t){return 0!==t.trim().indexOf("<")?p("<div>"+t+"</div>"):p(t)},e._load=function(){var t="http"+(this.options.ssl?"s":"")+"://"+this.options.host,e={support:this.options.support,version:this.version,q:this.urls.map((function(t){return encodeURIComponent(t)})).join(",")};this.options.offsetStart&&this.options.offsetEnd&&(this.options.limit=this.options.offsetEnd),null!==this.options.limit&&(e.num=this.options.limit),null!==this.options.key&&(e.key=this.options.key),null!==this.options.encoding&&(e.encoding=this.options.encoding),this.options.order&&(e.order=this.options.order);var r=t+"?"+Object.keys(e).map((function(t){return t+"="+e[t]})).join("&");return this._fetchFeed(r)},e._fetchFeed=function(){var t=a(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.fetchFeed){t.next=4;break}return t.next=3,this.options.fetchFeed(e);case 3:case 9:return t.abrupt("return",t.sent);case 4:return t.next=6,fetch(e,{headers:{"Content-Type":"application/json"}});case 6:return r=t.sent,t.next=9,r.json();case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e._generateHTMLForEntries=function(){var t=this,e={entries:[],layout:null};return this.entries.forEach((function(r,n){var o,i=t.options.offsetStart,a=t.options.offsetEnd;i&&a?n>=i&&n<=a&&t._isRelevant(r,e.entries)&&(o=t._evaluateStringForEntry(t.options.entryTemplate,r),e.entries.push(o)):t._isRelevant(r,e.entries)&&(o=t._evaluateStringForEntry(t.options.entryTemplate,r),e.entries.push(o))})),this.options.entryTemplate?e.layout=this._wrapContent(this.options.layoutTemplate.replace("{entries}","<entries></entries>")):e.layout=this._wrapContent("<div><entries></entries></div>"),e},e._isRelevant=function(t,e){var r=this._getTokenMap(t);return!this.options.filter||(!this.options.filterLimit||this.options.filterLimit!==e.length)&&this.options.filter(t,r)},e._evaluateStringForEntry=function(t,e){var r=this,n=t;return(t.match(/(\{.*?\})/g)||[]).forEach((function(t){n=n.replace(t,r._getValueForToken(t,e))})),n},e._getFormattedDate=function(t){if(this.options.dateFormatFunction)return this.options.dateFormatFunction(t);if("undefined"!=typeof moment){var e=moment(new Date(t));return(e=e.locale?e.locale(this.options.dateLocale):e.lang(this.options.dateLocale)).format(this.options.dateFormat)}return t},e._getTokenMap=function(t){if(!this.feedTokens){var e=JSON.parse(JSON.stringify(this.feed));delete e.entries,this.feedTokens=e}return s({feed:this.feedTokens,url:t.link,author:t.author,date:this._getFormattedDate(t.publishedDate),title:t.title,body:t.content,shortBody:t.contentSnippet,bodyPlain:function(t){for(var e=t.content.replace(/<script[\\r\\\s\S]*<\/script>/gim,"").replace(/<\/?[^>]+>/gi,""),r=0;r<l.length;r++)e=e.replace(new RegExp("<"+l[r],"gi"),"");return e}(t),shortBodyPlain:t.contentSnippet.replace(/<\/?[^>]+>/gi,""),index:this.entries.indexOf(t),totalEntries:this.entries.length,teaserImage:function(t){try{return t.content.match(/(<img.*?>)/gi)[0]}catch(t){return""}}(t),teaserImageUrl:function(t){try{return t.content.match(/(<img.*?>)/gi)[0].match(/src=["'](.*?)["']/)[1]}catch(t){return""}}(t)},this.options.tokens)},e._getValueForToken=function(t,e){var r=this._getTokenMap(e),n=r[t.replace(/[\{\}]/g,"")];if(void 0!==n)return"function"==typeof n?n(e,r):n;throw new Error("Unknown token: "+t+", url:"+this.url)},t}();const d=flarum.core.compat.app;var v=r.n(d);v().initializers.add("litalino/flarum-ext-news-feed",(function(){(0,t.extend)(o().prototype,"view",(function(t){if(t.children&&t.children.splice){var e=m("div",{class:"NewsFeed",id:"divRss"},[m("span",{class:"NewsFeed_ul"},[m("i",{class:"fas fa-dove"}),"News Feed"])]);t.children.splice(1,0,e)}}))})),(0,t.extend)(o().prototype,"oncreate",(function(){var t=v().forum.attribute("FeedUrl");new h(document.querySelector("#divRss"),t,{limit:4,offsetStart:!1,offsetEnd:!1,ssl:!0,support:!1,layoutTemplate:"<ul class='feed-container'>{entries}</ul>",entryTemplate:"<li class='licss'><a class='titleFeed' target='_blank' href=\"{url}\" rel=\"ugc noopener nofollow\">{title}</a> - <i>[@{author} - {date}]</i></li>",dateFormatFunction:function(t){return dayjs().format("YYYY-MMM-DD")},order:"-publishedDate",fetchFeed:function(t){return new Promise((function(e){$.getJSON(t,e)}))}}).render().then((function(){}),(function(t){console.log()}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map