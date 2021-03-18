<template>
<div class="profile-page">
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="user.image" class="user-img" />
          <h4>{{ user.username }}</h4>
          <p>
            {{ user.bio }}
          </p>
          <!--访问游客-->
          <template v-if="!$store.state.user || user.username !== $store.state.user.username">
            <button class="btn btn-sm btn-outline-secondary action-btn" @click.prevent="onFollow" :disabled="followingDisable"  :class="{ active: user.following }">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ user.following ? 'un' : ''}}Follow {{ user.username }}
            </button>
          </template>
          <!--作者访问-->
          <template v-else>
            <nuxt-link
                class="btn btn-sm btn-outline-secondary action-btn"
                to="/settings">
                <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link" :class="{active: isArticle}" @click.prevent="getArticles(true)">My Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{active: !isArticle}"  @click.prevent="getArticles(false)">Favorited Articles</a>
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
          <nuxt-link :to="`/article/${article.slug}`" class="preview-link">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
          </nuxt-link>
      </div>

      <!-- 分页列表 -->
      <nav>
          <ul class="pagination" v-if="articlesCount > limit">
              <li class="page-item" v-for="index in totalPage" :key="index" :class="{active:index === page}">
                  <a class="page-link ng-binding" @click.prevent="getPage(index)">{{index}}</a>
              </li>
          </ul>
      </nav>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { http } from '@/api/user'
import CGI from '@/constant/cgi'
export default {
    name:'ProfileIndex',
    // middleware: 'authenticated',
    data(){
      return{
        user:{},
        isArticle:true,
        isfollow: false,
        articles:[],
        articlesCount:0,
        limit:10,
        page:1,
        followingDisable:false
      }
    },
    async created(){
       const { data } = await http({ type:'GET',url:`/api/profiles/${this.$route.params.username}`})
       this.user = data.profile
       this.getArticles(true)
    },
    computed:{
      // 总页数
      totalPage(){
        return Math.ceil(this.articlesCount / this.limit)
      }
    },
    methods:{
    getPage(page){
      this.page = page || 1
      this.getArticles(this.isArticle)
      },
    // 判断是否登录
    isLogin(){
      if(!this.$store.state.user){
        this.$router.push('/login')
        return
      }
    },
    // 获取文章内容
    async getArticles(isMyArticle){
      this.isArticle = isMyArticle
      const paramsName= isMyArticle ? 'author' : 'favorited'
      const { data } = await http({
            type:'GET', 
            url:CGI.getArticlesAPI, 
            params:{
              [paramsName]:this.user.username,
              limit: this.limit,
              offset: (this.page-1) * this.limit,
            }
          })
          data.articles.forEach(item =>{
              item.favoriteDisable = false
          })
          this.articles = data.articles
          this.articlesCount = data.articlesCount
          console.log(data);
      },
      // 点赞和取消点赞
      async onFavorited(article){
        this.isLogin()
        try {
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
        } catch (error) {
          console.log('请求失败',error.message);
        }
            
        },
      // 关注和取消关注
      async onFollow(){
      // 判断是否登录
      this.isLogin()
      this.followingDisable = true
      if(this.user.following){
      // 取消关注
        await http({
            type:'DELETE',
            url:`/api/profiles/${this.user.username}/follow`
        })
      this.user.following = false
      }else{
      // 添加关注
        await http({
            type:'POST',
            url:`/api/profiles/${this.user.username}/follow`
        })
      this.user.following = true
       }
      this.followingDisable = false
      }
    }
}
</script>
<style scoped>

</style>