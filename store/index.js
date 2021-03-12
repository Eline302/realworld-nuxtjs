const cookieparser = process.server ? require('cookieparser') : undefined
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义为一个函数，返回数据对象
export const state = () =>{
    return {
        // 当前登录用户的登录状态
        user:null
    }
}
// 更改state状态
export const mutations = {
    setUser(state,data){
        state.user = data
    }
}

export const actions = {
    // nuxtServerInit 是一个特殊的 action
    // 这个 action 会在服务端渲染期间自动调用
    // 作用：初始化容器数据，传递数据给客户端使用
    // commit：提交mutations的commit方法
    // req：服务器渲染的请求请求对象
    nuxtServerInit({ commit }, { req }) {
        console.log('nuxtServerInit');
        let user = null
        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // 使用 cookieparser 把 cookie 字符串转换为 JavaScript 对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        // 提交 mutation，修改 state 状态
        commit('setUser', user)
    }
}
