//导入vue-router包
import VueRouter from 'vue-router'
//导入各个路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
//创建路由对象
var router = new VueRouter({
    routes : [
        {path : '/', redirect : '/home'},
        {path : '/home', component : HomeContainer},
        {path : '/member', component : MemberContainer},
        {path : '/shopcar', component : ShopcarContainer},
        {path : '/search', component : SearchContainer},
        {path : '/home/newslist',component : NewsList},
        {path : '/home/newsinfo/:id',component : NewInfo},
        {path : '/home/photolist', component : PhotoList},
        {path : '/home/photoinfo/:id', component : PhotoInfo},
        {path : '/home/goodslist', component : GoodsList},
    ],
    linkActiveClass:'mui-active' //覆盖默认的路由高亮类，默认为router-link-active
})

export default router