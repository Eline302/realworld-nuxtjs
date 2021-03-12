// Nuxtjs独有的方式：通过路由中间件，实现页面拦截处理
// 登录状态不允许访问注册和登录中间件
export default function ({ store, redirect }) {
    // If the user is authenticated redirect to home page
    if (store.state.user) {
      return redirect('/')
    }
  }