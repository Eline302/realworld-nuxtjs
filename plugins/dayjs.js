// 日期格式化的过滤器

import Vue from 'vue'
import dayjs from 'dayjs'

// template中使用：{{表达式 | 过滤器}}
Vue.filter('date', ( value, format="MM-YY-DD HH:mm:ss" ) => {
    return dayjs(value).format(format)
})