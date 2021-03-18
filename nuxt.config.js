/**
 * Nuxt 配置文件
 */
export default {
    css: [
        '@/css/main.css',
    ],
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
                    name: 'editor',
                    path:'/editor/:slug',
                    component: resolve(__dirname, 'pages/editor')
                },{
                    name: 'article',
                    path:'/article/:slug',
                    component: resolve(__dirname, 'pages/article')
                }]
            }])
        }
    },
    // 设置成 0.0.0.0 监听所有的网卡地址
    server: {
        host: '0.0.0.0', // 访问地址 default localhost
        port: 3000 // 端口号 port
    },
    //注册插件
    plugins: [
        '~plugins/request.js',
        '~plugins/dayjs.js'
    ]
}