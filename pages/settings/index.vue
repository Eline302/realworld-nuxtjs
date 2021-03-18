<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>
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
                            <input class="form-control" v-model="user.image" type="text" :disabled="isDisabled" placeholder="URL of profile picture">
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="user.username" :disabled="isDisabled" type="text" placeholder="Your Name">
                        </fieldset>
                        <fieldset class="form-group">
                            <textarea class="form-control form-control-lg" v-model="user.bio" rows="8" :disabled="isDisabled" placeholder="Short bio about you"></textarea>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="user.email" type="text" :disabled="isDisabled" placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="user.password" type="password" :disabled="isDisabled" placeholder="Password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="update">
                            Update Settings
                        </button>
                    </fieldset>
                    </form>
                    <hr>
                    <button class="btn btn-outline-danger" @click="logout">Or click here to logout.</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { http } from '@/api/user'
import CGI from '@/constant/cgi'
// 仅在客户端使用js-cookie包
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    name:'SettingsIndex',
    middleware: 'authenticated',
    data(){
        return{
            user:{},
            errors:{},
            isDisabled:false
        }
    },
    async created(){
        // 获取当前用户的信息
        const {data} = await http({
            type:'GET',
            url:CGI.getUserAPI
        })
        this.user = data.user
    },
    methods:{
        // 更新用户信息
    async update(){
        try {
            this.isDisabled=true
            const {data} = await http({
                type:'PUT',
                url:CGI.getUserAPI,
                params: this.user
            })
            // 保存用户的登录状态
            this.$store.commit('setUser',data.user)
            // 为防止刷新页面数据丢失，需要把数据持久化
            Cookie.set('user', data.user)
            this.$router.push(`/profile/${data.user.username}`)
        } catch (error) {
            // console.dir(error);
            console.log('请求失败',error.message);
            this.errors = error.response.data.errors
        }
    },
    // 退出
    logout(){
         this.$store.commit('setUser',null)
          Cookie.remove('user')
          this.$router.push('/')
    }
  }
}
</script>
<style>

</style>