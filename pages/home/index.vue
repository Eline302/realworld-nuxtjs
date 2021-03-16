<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
            </div>
        </div>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <!-- 收藏的文章列表，只在登录情况下显示-->
                            <li class="nav-item" v-if="user">
                                <nuxt-link class="nav-link" :class="{active:tab === 'your_feed'}" :to="{name:'home',query:{tab:'your_feed'}}" exact>Your Feed</nuxt-link>
                            </li>
                            <!-- 全部标签文章列表 -->
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="{active:tab === 'global_feed'}"  :to="{name:'home',query:{tab:'global_feed'}}" exact>Global Feed</nuxt-link>
                            </li>
                            <!-- 选择tag的文章列表，点击标签显示，点击Your Feed和 Global Feed 隐藏-->
                            <li class="nav-item" v-if="tag">
                                <nuxt-link class="nav-link" :class="{active:tab === 'tag'}" :to="{name:'home',query:{tab:'tag',tag:tag}}">#{{tag}}</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="article in articles" :key="article.slug">
                        <div class="article-meta">
                            <nuxt-link :to="`/profile/${article.author.username}`"><img :src="article.author.image" /></nuxt-link>
                            <div class="info">
                                <nuxt-link :to="`/profile/${article.author.username}`" class="author">{{article.author.username}}</nuxt-link>
                                <span class="date">{{article.createdAt | date('MMMM DD,YYYY')}}</span>
                            </div>
                            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active:article.favorited}" @click="onFavorited(article)" :disabled="article.favoriteDisable">
                                <i class="ion-heart"></i> {{article.favoritesCount}}
                            </button>
                        </div>
                        <nuxt-link :to="`article/${article.slug}`" class="preview-link">
                            <h1>{{article.title}}</h1>
                            <p>{{article.description}}</p>
                            <span>Read more...</span>
                        </nuxt-link>
                    </div>
                    <!-- 分页列表 -->
                    <nav>
                        <ul class="pagination">
                            <li class="page-item" v-for="index in totalPage" :key="index" :class="{active:index === page}">
                                <!-- 默认query的改变不会调用asyncData方法。如果要监听这个行为，可以设置应通过页面组建的watchQuery参数监听参数 -->
                                <nuxt-link class="page-link ng-binding" :to="{name:'home',query:{page:index,tag:$route.query.tag,tab:tab}}">{{index}}</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                    <p>Popular Tags</p>
                    <div class="tag-list">
                        <nuxt-link v-for="(tag,index) in tags" :key="index" :to="{name:'home',query:{tag:tag,tab:'tag'}}" class="tag-pill tag-default">{{tag}}</nuxt-link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { http } from '@/api/user'
import { mapState } from 'vuex'
import CGI from '@/constant/cgi'
export default {
    name:'HomeIndex',
    async asyncData({ query, store }){
        const page = Number.parseInt(query.page || 1)
        const { tag } = query
        // 文章分页数（默认20）
        const limit = 20
        // 串行执行
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
      const tab = query.tab || 'global_feed'

      const loadUrl = store.state.user && tab === 'your_feed'? CGI.getYourFeedAPI : CGI.getArticlesAPI
     
      const [articlesRes,tagsRes] =  await Promise.all([
            http({
                type:'GET', 
                url:loadUrl, 
                params:{
                    limit,
                    // 文章偏移/跳跃数（默认0）
                    offset: (page-1) * limit,
                    // 按照标签筛选
                    tag: tag
                    } 
            }),
            http({
                type:'GET',
                url: CGI.getTagsAPI
            })
        ])

        const { articles, articlesCount } = articlesRes.data
        articles.forEach(item =>{
            item.favoriteDisable = false
        })
        const { tags } = tagsRes.data
        return {
            articles: articles,
            articlesCount: articlesCount,
            page,
            limit,
            tags: tags,
            tag,
            tab: query.tab || 'global_feed'
        }
    },
    // page改变，组件不会重新加载，asyncData也不会被调用
    watchQuery: ['page','tag','tab'],
    computed:{
        ...mapState(['user']),
        // 总页码
        totalPage(){
            return Math.ceil(this.articlesCount / this.limit)
        }
    },
    methods:{
     // 点赞和取消点赞
      async onFavorited(article){
        // 如果网络比较慢，用户频繁点击按钮，可能会导致期间来回处理导致出现错误。因此我们应该在请求期间禁用此按钮
            article.favoriteDisable = true
            if(article.favorited){
                // 取消点赞  getDeleteFavoritedAPI
                await http({
                    type:'DELETE',
                    url:`/api/articles/${article.slug}/favorite`
                })
                article.favoritesCount += -1
                article.favorited = false
            }else{
                // 添加点赞 
                await http({
                    type:'POST',
                    url:`/api/articles/${article.slug}/favorite`
                })
                article.favoritesCount += 1
                article.favorited = true
            }
            // 请求完成后允许可点击此按钮
             article.favoriteDisable = false
        }
    }
}
</script>
<style scoped>

</style>