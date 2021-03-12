import request from '@/utils/request'

// 用户登录
export const http = ({ type="POST",url,params ={} })=>{
    const data = type.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return request({
        method: type,
        url: url,
        [data]:params,
        headers: {
            // 注意数据格式：Token空格数据Token
            // 先手动写死，自动处理后续介绍
            Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ4MjExLCJ1c2VybmFtZSI6ImVsaW5lIiwiZXhwIjoxNjIwNzI2Mzg1fQ.4B23fphkGWRUMPYZX5f8BPnnf1HghObMM0V7xkZXeZU`
          },
    })
}