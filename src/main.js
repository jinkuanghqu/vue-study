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
import {Header,Swipe, SwipeItem} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//注册mint-ui组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
//导入router模块
import router from './router.js'
//导入app跟组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router //挂载到vm实例上
})