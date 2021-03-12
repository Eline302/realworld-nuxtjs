<template>
    <div>
        <!-- 头部导航栏 -->
        <nav class="navbar navbar-light">
            <div class="container">
                <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
                <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <!-- <a class="nav-link active" href="">Home</a> -->
                        <!-- Home的链接是/，/editor，/settings...都包含/,会导致Home一直高亮，解决办法：添加exact属性:精确匹配 -->
                        <nuxt-link class="nav-link" exact :to="{name:'home'}">Home</nuxt-link>
                    </li>
                    <!-- 登录成功 -->
                    <template v-if="user">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">
                            <i class="ion-compose"></i>&nbsp;New Post
                            </a> -->
                            <nuxt-link class="nav-link" to="/editor"><i class="ion-compose"></i>&nbsp;New Post</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                            </a> -->
                            <nuxt-link class="nav-link" to="/settings"><i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" :to="`/profile/${user.username}`">
                                <img class="user-pic" :src="user.image">
                                {{user.username}}
                            </nuxt-link>
                        </li>
                    </template>

                    <!-- 未登录 -->
                    <template v-else>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">Sign in</a> -->
                            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="">Sign up</a> -->
                            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
        
        <!-- 子路由 -->
        <nuxt-child/>

        <!-- 尾部 -->
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
                An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
                </span>
            </div>
        </footer>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:'LayoutIndex',
    computed:{
        ...mapState(['user'])
    }
}
</script>
<style scoped>

</style>