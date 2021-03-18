<template>
    <div class="col-xs-12 col-md-8 offset-md-2">
        <div class="error-messages" v-if="isError">can't be blank</div>  
        <form class="card comment-form">
        <div class="card-block">
            <textarea class="form-control" v-model="comment" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
            <img :src="$store.state.user && $store.state.user.image" class="comment-author-img" />
            <button class="btn btn-sm btn-primary" @click.prevent="addComment" :disabled="addMyCommentDisabled">Post Comment</button>
        </div>
        </form>
        <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
                <p class="card-text">{{comment.body}}</p>
            </div>
            <div class="card-footer">
                <nuxt-link :to="`/profile/${article.author.username}`" class="comment-author">
                    <img :src="comment.author.image" class="comment-author-img"/>
                </nuxt-link>
                &nbsp;
                <nuxt-link :to="`/profile/${article.author.username}`" class="comment-author">{{ comment.author.username }}</nuxt-link>
                <span class="date-posted">{{comment.author.createdAt | date('MMM DD,YYYY')}}</span>
                <span class="mod-options" @click="deleteMyComment(comment.id)"><i class="ion-trash-a"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
import { http } from '@/api/user'
export default {
    name:'ArticleComments',
    props:{
        article:{
            type:Object,
            required:true,
            }
    },
    data(){
        return{
            // 评论列表
            comments:[],
            comment:'',
            addMyCommentDisabled:false,
            isError:false
        }
    },
    async mounted(){
        this.getComment()
    },
    methods:{
        // 获取评论列表
        async getComment(){
            // 获取评论列表
            const { data } = await http ({
                type:'GET',
                url:`/api/articles/${this.article.slug}/comments`
            })
            this.comments = data.comments
        },
        // 添加评论
        async addComment(){
            this.addMyCommentDisabled=true
            try {
                await http ({
                    type:'POST',
                    url:`/api/articles/${this.article.slug}/comments`,
                    params:{
                        "comment": {
                            "body": this.comment
                        }
                    }
                })
                this.isError=false
                this.comment=''
                this.getComment() 
            } catch (error) {
                this.isError=true
                console.log('请求失败',error.message);
            }
            this.addMyCommentDisabled=false
        },
        // 删除评论
        async deleteMyComment(id){
            //  /api/articles/:slug/comments/:id
            await http ({
                type:'DELETE',
                url:`/api/articles/${this.article.slug}/comments/${id}`,
                params:{
                    "comment": {
                        "body": this.comment
                    }
                }
            })
            this.getComment() 
        }
    }
}
</script>