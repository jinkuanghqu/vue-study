import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
//注册路由组件
Vue.use(VueRouter)
//导入vue-resource组件
import VueResource from 'vue-resource'
//注册vue-resource组件
Vue.component(VueResource)
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次进入网站，都会调用main.js，在调用时先把本地存储localStorage中的购物车数据读取出来
var car = JSON.parse(localStorage.getItem('car')|| '[]')
var store = new Vuex.Store({
    state : {
      //this.$store.state.***
      car : car //用于存储购物车中的商品数据,{id:'商品id',count:'购买数量',price:'商品单价',selected:true} selected商品是否被选中
    },
    mutations : {
      //this.$store.commit('方法名称','参数')
      addToCar(state,goodsinfo){
        //1、如果购物车中已经有这个商品了，则只需要更新数量即可
        //2、如果没有这个商品则直接使用push添加进去
        var flag = false;
        state.car.some(item=>{
          if(item.id == goodsinfo.id){
            item.count += parseInt(goodsinfo.count)
            flag = true;
            return true;
          }
        })
        if(!flag){
          state.car.push(goodsinfo)
        }
        //更新car之后将数据保存在本地localStorage中
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateGoodsInfo(state,goodsinfo){
        state.car.some(item=>{
          if(item.id == goodsinfo.id){
            item.count = parseInt(goodsinfo.count)
            return true
          }
        })
        // 修改完商品信息后，把最新的购物车数据存储到本地的localStorage中
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      removeFromCar(state,id){
        state.car.some((item,i)=>{
          if(item.id == id){
            state.car.splice(i,1)
            return true
          }
        })
        // 修改完商品信息后，把最新的购物车数据存储到本地的localStorage中
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateGoosSelected(state,info){
        state.car.some(item=>{
          if(item.id == info.id){
            item.selected = info.selected
            return true
          }
        })
        // 修改完商品信息后，把最新的购物车数据存储到本地的localStorage中
        localStorage.setItem('car',JSON.stringify(state.car))
      }
    },
    getters : {
      //this.$store.getters.***
      getAllCount(state){
        var allCount = 0
        state.car.forEach(item=>{
          allCount += item.count
        })
        return allCount
      },
      getGoodsCount(state){
        var o = {}
        state.car.forEach(item=>{
          o[item.id] = item.count
        })
        return o
      },
      getGoodsSelected(state){
        var s = {}
        state.car.forEach(item=>{
          s[item.id] = item.selected
        })
        return s
      },
      getGoodsCountAndAmount(state){
        var o = {
          count : 0,
          amount: 0
        }
        state.car.forEach(item=>{
          if(item.selected){
            o.count += item.count
            o.amount+= item.count*item.price
          }

        })
        return o
      }

    }
})
//导入mint-ui组件
import {Header,Swipe, SwipeItem,Button,Lazyload,Switch} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'
//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//注册mint-ui组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.use(Lazyload)
Vue.component(Switch.name, Switch);



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
    router, //挂载到vm实例上
    store //挂载vuex状态管理对象，用于存储公共数据
})