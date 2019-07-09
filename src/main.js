import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
//注册路由组件
Vue.use(VueRouter)
//导入vue-resource组件
import VueResource from 'vue-resource'
//注册vue-resource组件
Vue.component(VueResource)
//导入mint-ui组件
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//注册mint-ui组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
//导入router模块
import router from './router.js'

// 导入格式化时间的模块
import moment from 'moment'

// 定义全局的时间过滤器
Vue.filter('dateFormat', function (dateStr, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  // 在过滤器的处理函数中，最后，必须 return 一个东西，这样，才是一个合法的过滤器
  return moment(dateStr).format(formatStr)
})

//导入app跟组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router //挂载到vm实例上
})