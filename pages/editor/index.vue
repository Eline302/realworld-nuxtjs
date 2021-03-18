<template>
    <div class="editor-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-10 offset-md-1 col-xs-12">
                <ul class="error-messages">
                    <!-- 错误提示信息：对象键+对象值 -->
                    <!-- 遍历对象，获取对象键值 -->
                    <template v-for="(messages, fileds) in errors">
                        <!-- 遍历数组(对象的值) -->
                        <li v-for="(message, index) in messages" :key="index">{{fileds}} {{message}}</li>
                    </template>
                </ul>
                <form>
                <fieldset>
                    <fieldset class="form-group">
                        <input type="text" class="form-control form-control-lg" v-model="article.title" placeholder="Article Title">
                    </fieldset>
                    <fieldset class="form-group">
                        <input type="text" class="form-control" v-model="article.description" placeholder="What's this article about?">
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article (in markdown)"></textarea>
                    </fieldset>
                    <fieldset class="form-group">
                        <input 
                            type="text"
                            class="form-control"
                            placeholder="Enter tags"
                            v-model="articleTag"
                            @keypress.enter="enterTag"
                            :disabled="publishDisabled"
                        >
                        <div class="tag-list">
                            <span
                            class="tag-default tag-pill"
                            v-for="tag in article.tagList"
                            :key="tag"
                            >
                            <i 
                                class="ion-close-round"
                                @click="removeTag(tag)"
                                :disabled="publishDisabled"
                            ></i>
                            {{ tag }}
                            </span>  
                        </div>
                    </fieldset>
                    <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="onPublish">
                        Publish Article
                    </button>
                </fieldset>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { http } from '@/api/user'
import CGI from '@/constant/cgi'
export default {
    name:'EditorIndex',
    middleware: 'authenticated',
    data(){
        return {
        publishDisabled:false,
        articleTag:'',
        article: {
            title: '',
            description: '',
            body: '',
            tagList: []
            },
        // 错误提示信息
        errors:{}

        }
    },
    mounted(){
        this.getArticles()

    },
    methods:{
        // 新增tag
        enterTag(){
            if(this.article.tagList.indexOf(this.articleTag) === -1) {
                this.article.tagList.push(this.articleTag)
                this.articleTag = ''
            }
        },
        // 移除tag
        removeTag(tag){
            this.article.tagList.splice(this.article.tagList.indexOf(tag),1)
        },
        // 发布文章
        async onPublish(){
        try {
            const {data} = await http({
            type:'POST', 
            url:CGI.getArticlesAPI, 
            params:{
                article:this.article
              }
            })
            this.$router.push(`/article/${data.article.slug}`)
        } catch (error) {
          console.log('请求失败',error.message);
          this.errors = error.response.data.errors
        }

        },
        // 编辑——获取文章内容
        async getArticles(){
            const { data } = await http ({
                type:'GET',
                url:`/api/articles/${this.$route.params.slug}`
            })
            this.article = data.article
        }
    }
}
</script>
<style>

</style>