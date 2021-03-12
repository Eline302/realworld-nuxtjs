/**
 * Nuxt 配置文件
 */
export default {
    router: {
        // 处理导航链接高亮
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            //  清除 Nuxt.js基于pages目录默认生成的路由表规则
            routes.splice(0)
            routes.push(...[{
                name: 'layout',
                path: '/',
                component: resolve(__dirname, 'pages/layout'),
                children: [{
                    path: '',
                    name: 'home',
                    component: resolve(__dirname, 'pages/home')
                },{
                    name: 'login',
                    path:'/login',
                    component: resolve(__dirname, 'pages/login')
                },{
                    name: 'register',
                    path:'/register',
                    component: resolve(__dirname, 'pages/login')
                },{
                    name: 'profile',
                    path:'/profile/:username',
                    component: resolve(__dirname, 'pages/profile')
                },{
                    name: 'settings',
                    path:'/settings',
                    component: resolve(__dirname, 'pages/settings')
                },{
                    name: 'editor',
                    path:'/editor',
                    component: resolve(__dirname, 'pages/editor')
                },{
                    name: 'article',
                    path:'/article/:sulg',
                    component: resolve(__dirname, 'pages/article')
                }]
            }])
        }
    }
}