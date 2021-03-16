exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return http; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const http = ({
  type = "POST",
  url,
  params = {}
}) => {
  const data = type.toLocaleLowerCase() === 'get' ? 'params' : 'data';
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: type,
    url: url,
    [data]: params // headers: {
    //     // 注意数据格式：Token空格数据Token
    //     // 先手动写死，自动处理后续介绍(plugins/request.js)
    //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ4MjExLCJ1c2VybmFtZSI6ImVsaW5lIiwiZXhwIjoxNjIwOTU2NDI0fQ.YYTBIWBA8iyKBAz3wqJi9fF9vJPx_JFjhu3UvBkfBUo`
    //   },

  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apis = {
  // 登录
  getLoginAPT: '/api/users/login',
  // 注册
  getRegisterAPI: '/api/users',
  // 文章列表
  getArticlesAPI: '/api/articles',
  // 标签
  getTagsAPI: '/api/tags',
  // 关注
  getYourFeedAPI: '/api/articles/feed'
};
/* harmony default export */ __webpack_exports__["a"] = (apis);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=3c66587a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-3c66587a><div class=\"container\" data-v-3c66587a><h1 class=\"logo-font\" data-v-3c66587a>conduit</h1> <p data-v-3c66587a>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-3c66587a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3c66587a>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-3c66587a>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-3c66587a>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-3c66587a>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-3c66587a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.tab === 'your_feed'},attrs:{"to":{name:'home',query:{tab:'your_feed'}},"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-3c66587a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.tab === 'global_feed'},attrs:{"to":{name:'home',query:{tab:'global_feed'}},"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-3c66587a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.tab === 'tag'},attrs:{"to":{name:'home',query:{tab:'tag',tag:_vm.tag}}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-3c66587a>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-3c66587a>","</div>",[_c('nuxt-link',{attrs:{"to":("/profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-3c66587a>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (article.author.username))}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-3c66587a>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisable))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active:article.favorited}))+" data-v-3c66587a><i class=\"ion-heart\" data-v-3c66587a></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                        ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":("article/" + (article.slug))}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-3c66587a>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-3c66587a>","</ul>",_vm._l((_vm.totalPage),function(index){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active:index === _vm.page}))+" data-v-3c66587a>","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{name:'home',query:{page:index,tag:_vm.$route.query.tag,tab:_vm.tab}}}},[_vm._v(_vm._s(index))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-3c66587a>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-3c66587a>","</div>",[_vm._ssrNode("<p data-v-3c66587a>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-3c66587a>","</div>",_vm._l((_vm.tags),function(tag,index){return _c('nuxt-link',{key:index,staticClass:"tag-pill tag-default",attrs:{"to":{name:'home',query:{tag:tag,tab:'tag'}}}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=3c66587a&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./constant/cgi.js
var cgi = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomeIndex',

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const {
      tag
    } = query; // 文章分页数（默认20）

    const limit = 20; // 串行执行

    /*
    const { data } = await http({
        type:'GET', 
        url:CGI.getArticlesAPI, 
        params:{
            limit,
            // 文章偏移/跳跃数（默认0）
            offset: (page-1) * limit
            } 
        })
    // 重命名
    const { data: tagData } = await http({
            type:'GET',
            url: CGI.getTagsAPI
        })
    */
    // 优化：并发执行速度快

    const tab = query.tab || 'global_feed';
    const loadUrl = store.state.user && tab === 'your_feed' ? cgi["a" /* default */].getYourFeedAPI : cgi["a" /* default */].getArticlesAPI;
    const [articlesRes, tagsRes] = await Promise.all([Object(user["a" /* http */])({
      type: 'GET',
      url: loadUrl,
      params: {
        limit,
        // 文章偏移/跳跃数（默认0）
        offset: (page - 1) * limit,
        // 按照标签筛选
        tag: tag
      }
    }), Object(user["a" /* http */])({
      type: 'GET',
      url: cgi["a" /* default */].getTagsAPI
    })]);
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    articles.forEach(item => {
      item.favoriteDisable = false;
    });
    const {
      tags
    } = tagsRes.data;
    return {
      articles: articles,
      articlesCount: articlesCount,
      page,
      limit,
      tags: tags,
      tag,
      tab: query.tab || 'global_feed'
    };
  },

  // page改变，组件不会重新加载，asyncData也不会被调用
  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    // 总页码
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    // 点赞和取消点赞
    async onFavorited(article) {
      // 如果网络比较慢，用户频繁点击按钮，可能会导致期间来回处理导致出现错误。因此我们应该在请求期间禁用此按钮
      article.favoriteDisable = true;

      if (article.favorited) {
        // 取消点赞  getDeleteFavoritedAPI
        await Object(user["a" /* http */])({
          type: 'DELETE',
          url: `/api/articles/${article.slug}/favorite`
        });
        article.favoritesCount += -1;
        article.favorited = false;
      } else {
        // 添加点赞 
        await Object(user["a" /* http */])({
          type: 'POST',
          url: `/api/articles/${article.slug}/favorite`
        });
        article.favoritesCount += 1;
        article.favorited = true;
      } // 请求完成后允许可点击此按钮


      article.favoriteDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c66587a",
  "071ef027"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map