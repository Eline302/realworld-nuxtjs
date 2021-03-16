import { request } from '@/plugins/request'

// 用户登录
export const http = ({ type="POST",url,params ={} })=>{
    const data = type.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return request({
        method: type,
        url: url,
        [data]:params,
        // headers: {
        //     // 注意数据格式：Token空格数据Token
        //     // 先手动写死，自动处理后续介绍(plugins/request.js)
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ4MjExLCJ1c2VybmFtZSI6ImVsaW5lIiwiZXhwIjoxNjIwOTU2NDI0fQ.YYTBIWBA8iyKBAz3wqJi9fF9vJPx_JFjhu3UvBkfBUo`
        //   },
    })
}