(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(18),o=r(65),c=function(t){var e=t.type,r=void 0===e?"POST":e,c=t.url,l=t.params,v=void 0===l?{}:l,data="get"===r.toLocaleLowerCase()?"params":"data";return Object(o.b)(Object(n.a)({method:r,url:c},data,v))}},195:function(t,e,r){"use strict";e.a={getLoginAPT:"/api/users/login",getRegisterAPI:"/api/users",getArticlesAPI:"/api/articles",getTagsAPI:"/api/tags",getYourFeedAPI:"/api/articles/feed"}},199:function(t,e,r){var n=r(3),o=r(33),c=r(9),l=r(200),v="["+l+"]",f=RegExp("^"+v+v+"*"),d=RegExp(v+v+"*$"),_=function(t,e,r){var o={},v=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=v?e(m):l[t];r&&(o[r]=f),n(n.P+n.F*v,"String",o)},m=_.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=_},200:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,e,r){"use strict";var n=r(5),o=r(26),c=r(27),l=r(130),v=r(63),f=r(9),d=r(53).f,_=r(64).f,m=r(12).f,h=r(199).trim,C="Number",y=n.Number,O=y,I=y.prototype,x=c(r(83)(I))==C,k="trim"in String.prototype,P=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(x?f((function(){I.valueOf.call(r)})):c(r)!=C)?l(new O(P(e)),r,y):P(e)};for(var w,E=r(7)?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;E.length>j;j++)o(O,w=E[j])&&!o(y,w)&&m(y,w,_(O,w));y.prototype=I,I.constructor=y,r(14)(n,C,y)}},210:function(t,e,r){var n=r(3),o=r(211);n(n.S+n.F*(Number.parseInt!=o),"Number",{parseInt:o})},211:function(t,e,r){var n=r(5).parseInt,o=r(199).trim,c=r(200),l=/^[-+]?0[xX]/;t.exports=8!==n(c+"08")||22!==n(c+"0x16")?function(t,e){var r=o(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},271:function(t,e,r){"use strict";r.r(e);r(52),r(25),r(23),r(40);var n=r(18),o=(r(24),r(11),r(41),r(10)),c=(r(209),r(210),r(39),r(4)),l=r(194),v=r(51),f=r(195);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"HomeIndex",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,v,d,_,m,h,C,y,O,I,x,k,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,c=Number.parseInt(r.page||1),v=r.tag,d=20,_=r.tab||"global_feed",m=n.state.user&&"your_feed"===_?f.a.getYourFeedAPI:f.a.getArticlesAPI,e.next=8,Promise.all([Object(l.a)({type:"GET",url:m,params:{limit:d,offset:(c-1)*d,tag:v}}),Object(l.a)({type:"GET",url:f.a.getTagsAPI})]);case 8:return h=e.sent,C=Object(o.a)(h,2),y=C[0],O=C[1],I=y.data,x=I.articles,k=I.articlesCount,x.forEach((function(t){t.favoriteDisable=!1})),P=O.data.tags,e.abrupt("return",{articles:x,articlesCount:k,page:c,limit:d,tags:P,tag:v,tab:r.tab||"global_feed"});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:_(_({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorited:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisable=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.a)({type:"DELETE",url:"/api/articles/".concat(article.slug,"/favorite")});case 4:article.favoritesCount+=-1,article.favorited=!1,t.next=12;break;case 8:return t.next=10,Object(l.a)({type:"POST",url:"/api/articles/".concat(article.slug,"/favorite")});case 10:article.favoritesCount+=1,article.favorited=!0;case 12:article.favoriteDisable=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(31),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"global_feed"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:"/profile/"+article.author.username}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:"/profile/"+article.author.username}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisable},on:{click:function(e){return t.onFavorited(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n                        ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:"article/"+article.slug}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link ng-binding",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e,n){return r("nuxt-link",{key:n,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,"3c66587a",null);e.default=component.exports}}]);