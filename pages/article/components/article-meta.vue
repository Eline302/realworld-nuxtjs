<template>
    <div class="article-meta">
        <nuxt-link :to="`/profile/${article.author.username}`"><img :src="article.author.image" /></nuxt-link>
        <div class="info">
        <nuxt-link :to="`/profile/${article.author.username}`" class="author">{{article.author.username}}</nuxt-link>
        <span class="date">{{article.author.createdAt | date('MMMM DD,YYYY')}}</span>
        </div>
        <!-- 游客访问 -->
        <template v-if="!$store.state.user || article.author.username !== $store.state.user.username">
            <button class="btn btn-sm btn-outline-secondary" @click.prevent="onFollow" :disabled="followingDisable"  :class="{ active: article.author.following }">
                <i class="ion-plus-round"></i>
                &nbsp;
                {{ article.author.following ? 'un' : ''}}Follow {{ article.author.username }}
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary" :class="{active:article.favorited}" @click="onFavorited(article)" :disabled="favoriteDisable">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Post <span class="counter">({{article.favoritesCount}})</span>
            </button>          
        </template>
        <!-- 作者访问 -->
        <template v-else>
            <!-- 修改文章 -->
            <nuxt-link class="btn btn-outline-secondary btn-sm" :to="`/editor/${article.slug}`" >
                <i class="ion-edit"></i> Edit Article
            </nuxt-link>
            <!-- 删除文章 -->
            <button
                class="btn btn-outline-danger btn-sm"
                @click="delArticle"
                :disabled="delArticleDisabled"
            >
                <i class="ion-trash-a"></i> Delete Article
            </button>
        </template>

    </div>
    
</template>
<script>
import { http } from '@/api/user'
import CGI from '@/constant/cgi'
export default {
    name:'ArticleMeta',
    props:{
        article:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
             followingDisable:false,
             favoriteDisable:false,
             delArticleDisabled:false
        }
    },
    methods:{
    isLogin(){
      // 判断是否登录
      if(!this.$store.state.user){
        this.$router.push('/login')
        return
      }
    },
     // 关注和取消关注
    async onFollow(){
        this.isLogin()
        try {
            this.followingDisable = true
            if(this.article.author.following){
            // 取消关注
                await http({
                    type:'DELETE',
                    url:`/api/profiles/${this.article.author.username}/follow`
                })
            this.article.author.following = false
            }else{
            // 添加关注
                await http({
                    type:'POST',
                    url:`/api/profiles/${this.article.author.username}/follow`
                })
            this.article.author.following = true
            }
            this.followingDisable = false
        } catch (error) {
            console.log('请求失败',error.message);
        }
        
      },
     // 点赞和取消点赞
    async onFavorited(article){
            this.isLogin()
            try {
                this.favoriteDisable = true
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
                this.favoriteDisable = false
            } catch (error) {
                console.log('请求失败',error.message);
            }
        },
    // 删除文章
    async delArticle(){
        this.delArticleDisabled = true
        await http({
            type:'DELETE',
            url:`api/articles/${ this.$route.params.slug }`
        })
        this.$router.push('/')
        this.delArticleDisabled = false
    }
  }
}
</script>