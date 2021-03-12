// Nuxtjs独有的方式：通过路由中间件，实现页面拦截处理
// 验证是否登录的中间件，在路由渲染之前自动调用
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user) {
      return redirect('/login')
    }
  }