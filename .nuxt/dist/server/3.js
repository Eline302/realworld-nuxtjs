exports.ids = [3];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=d2caa918&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-d2caa918>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-d2caa918>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-d2caa918>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-d2caa918>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-d2caa918>","</p>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":_vm.isLogin?'/register':'/login'}},[_vm._v(_vm._s(_vm.isLogin ? 'need an account?' : 'Have an account?'))])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-d2caa918>"+(_vm._ssrList((_vm.errors),function(messages,fileds){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-d2caa918>"+_vm._ssrEscape(_vm._s(fileds)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-d2caa918>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-d2caa918><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-d2caa918></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-d2caa918><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-d2caa918></fieldset> <fieldset class=\"form-group\" data-v-d2caa918><input type=\"password\" placeholder=\"Password\" minlength=\"8\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-d2caa918></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-d2caa918>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n                    ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=d2caa918&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(27);

// EXTERNAL MODULE: ./constant/cgi.js
var cgi = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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

 // 仅在客户端使用js-cookie包

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'LoginIndex',
  middleware: 'notAuthenticated',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      // 错误提示信息
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        let pushPath = '';

        if (this.isLogin) {
          // 登录
          const {
            data
          } = await Object(user["a" /* http */])({
            url: cgi["a" /* default */].getLoginAPT,
            params: {
              user: this.user
            }
          }); // console.log(data);
          // 保存用户的登录状态

          this.$store.commit('setUser', data.user); // 为防止刷新页面数据丢失，需要把数据持久化

          Cookie.set('user', data.user);
          pushPath = '/';
        } else {
          // 注册
          const {
            data
          } = await Object(user["a" /* http */])({
            url: cgi["a" /* default */].getRegisterAPI,
            params: {
              user: this.user
            }
          });
          pushPath = '/login';
        } // 跳转到指定页面


        this.$router.push(pushPath);
      } catch (error) {
        //   console.dir(error);
        console.log('请求失败', error.message);
        this.errors = error.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d2caa918",
  "975f4706"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map