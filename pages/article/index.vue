<template>
    <div class="article-page">
        <div class="banner">
            <div class="container">
            <h1>{{article.title}}</h1>
            <article-meta :article="article" />
            </div>
        </div>
        <div class="container page">
            <div class="row article-content">
                <div class="col-md-12" v-html="article.body"></div>
            </div>
            <hr />
            <div class="article-actions">
                <article-meta :article="article" />
            </div>
            <div class="row" v-if="$store.state.user">
                <article-comments :article="article" />
            </div>
            <div v-else>
                <nuxt-link to="/login">Sign in</nuxt-link>
                or
                <nuxt-link to="/register">sign up</nuxt-link>
                to add comments on this article.
            </div>
        </div>
    </div>
</template>
<script>
import { http } from '@/api/user'
import CGI from '@/constant/cgi'
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta'
import ArticleComments from './components/article-comments'
export default {
    name:'ArticleIndex',
    components:{
        ArticleMeta,
        ArticleComments
    },
    async asyncData({params}){
        const { data } = await http ({
            type:'GET',
            url:`/api/articles/${params.slug}`
        })
        const { article } = data
        const md = new MarkdownIt();
        article.body = md.render(article.body);
        return {
            article
        }
    },
    head() {
      return {
        title: `${this.article.title} - RealWorld`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }
}
</script>
<style>

</style>