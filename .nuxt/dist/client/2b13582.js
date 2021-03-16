(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(18),c=r(65),o=function(t){var e=t.type,r=void 0===e?"POST":e,o=t.url,l=t.params,m=void 0===l?{}:l,data="get"===r.toLocaleLowerCase()?"params":"data";return Object(c.b)(Object(n.a)({method:r,url:o},data,m))}},195:function(t,e,r){"use strict";e.a={getLoginAPT:"/api/users/login",getRegisterAPI:"/api/users",getArticlesAPI:"/api/articles",getTagsAPI:"/api/tags",getYourFeedAPI:"/api/articles/feed"}},269:function(t,e,r){"use strict";r.r(e);r(39);var n=r(4),c=r(194),o=(r(195),r(213)),l=r.n(o),m={name:"ArticleMeta",props:{article:{type:Object,required:!0}}},d=r(31),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:"/profile/"+t.article.author.username}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.author.createdAt,"MMMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n     \n    Follow "+t._s(t.article.author.username)+" "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n     \n    Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],1)}),[],!1,null,null,null).exports,_={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.$store.state.user),e.next=3,Object(c.a)({type:"GET",url:"/api/articles/".concat(t.article.slug,"/comments")});case 3:r=e.sent,data=r.data,t.comments=data.comments;case 6:case"end":return e.stop()}}),e)})))()}},f={name:"ArticleIndex",components:{ArticleMeta:v,ArticleComments:Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("form",{staticClass:"card comment-form"},[t._m(0),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{attrs:{src:t.$store.state.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("Post Comment")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:"/profile/"+t.article.author.username}},[r("img",{attrs:{src:e.author.image}})]),t._v("\n             \n            "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.author.createdAt,"MMM DD,YYYY")))])],1)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-block"},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"}})])}],!1,null,null,null).exports},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.a)({type:"GET",url:"/api/articles/".concat(r.slug)});case 3:return n=e.sent,data=n.data,article=data.article,o=new l.a,article.body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},C=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("article-comments",{attrs:{article:t.article}})],1)])])}),[],!1,null,null,null);e.default=C.exports}}]);