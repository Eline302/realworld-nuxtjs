<template>
    <div class="col-xs-12 col-md-8 offset-md-2">
        <form class="card comment-form">
        <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
            <img :src="$store.state.user.image" />
            <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
        </form>
        <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
                <p class="card-text">{{comment.body}}</p>
            </div>
            <div class="card-footer">
                <nuxt-link :to="`/profile/${article.author.username}`" class="comment-author">
                    <img :src="comment.author.image" />
                </nuxt-link>
                &nbsp;
                <nuxt-link :to="`/profile/${article.author.username}`" class="comment-author">{{ comment.author.username }}</nuxt-link>
                <span class="date-posted">{{comment.author.createdAt | date('MMM DD,YYYY')}}</span>
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
            required:true
            }
    },
    data(){
        return{
            // 评论列表
            comments:[]
        }
    },
    async mounted(){
        console.log(this.$store.state.user);
        const { data } = await http ({
            type:'GET',
            url:`/api/articles/${this.article.slug}/comments`
        })
        this.comments = data.comments
    }
}
</script>