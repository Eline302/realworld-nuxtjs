<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up'}}</h1>
                    <p class="text-xs-center">
                        <nuxt-link class="nav-link" :to="isLogin?'/register':'/login'">{{ isLogin ? 'need an account?' : 'Have an account?'}}</nuxt-link>
                    </p>
                    <ul class="error-messages">
                        <!-- 错误提示信息：对象键+对象值 -->
                        <!-- 遍历对象，获取对象键值 -->
                        <template v-for="(messages, fileds) in errors">
                            <!-- 遍历数组(对象的值) -->
                            <li v-for="(message, index) in messages" :key="index">{{fileds}} {{message}}</li>
                        </template>
                    </ul>
                    <!-- .prevent 阻止默认提交行为 -->
                    <form @submit.prevent="onSubmit">
                        <!-- 表单验证使用HTML5原生表单验证 -->
                        <fieldset class="form-group" v-if="!isLogin">
                            <!-- required 必填 -->
                            <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <!-- type="email" 对邮箱格式进行验证 -->
                            <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <!-- minlength="8" 密码至少8位 -->
                            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" minlength="8"  required>
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{ isLogin ? 'Sign in' : 'Sign up' }}
                        </button>
                    </form>
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
    name:'LoginIndex',
    middleware: 'notAuthenticated',
    data(){
        return{
            user:{
                username:'',
                email:'',
                password:''
            },
            // 错误提示信息
            errors:{}
        }
    },
    computed:{
        isLogin(){
            return this.$route.name === 'login'
        }
    },
    methods:{
      async onSubmit(){
          try {
            let pushPath=''
              if(this.isLogin){
                // 登录
                const { data } = await http({url:CGI.getLoginAPT, params:{user:this.user}}) 
                // console.log(data);
                // 保存用户的登录状态
                this.$store.commit('setUser',data.user)
                // 为防止刷新页面数据丢失，需要把数据持久化
                Cookie.set('user', data.user)
                pushPath='/'
              }else{
                // 注册
                 const { data } = await http({url:CGI.getRegisterAPI, params:{user:this.user}})
                 pushPath='/login'
              }
              // 跳转到指定页面
              this.$router.push(pushPath)
          } catch (error) {
            //   console.dir(error);
              console.log('请求失败',error.message);
              this.errors = error.response.data.errors
          }
        }
    }
}
</script>
<style scoped>

</style>