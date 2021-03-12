/**
 * 基于 axios 封装的请求模块
 */

 import axios from 'axios'
//  基于axios创建实例，不会污染全局对象
 const request = axios.create({
     baseURL:'https://conduit.productionready.io'
 })
// 请求拦截器

// 相应拦截器
 export default request