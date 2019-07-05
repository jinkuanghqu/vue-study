import Vue from 'vue'

import {Header} from 'mint-ui'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name,Header)

//导入app跟组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})