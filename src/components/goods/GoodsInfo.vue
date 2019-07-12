<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :luoboList="luoboList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now-price">￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
                    <!-- 
                        1、加入购物车按钮属于goodsinfo组件，而数量属于numbox组件
                        2、这就涉及到父子组件之间的传值问题，（父组件要获取子组件中的数据）
                        3、父组件向子组件中传递方法事件，子组件调用，同时子组件返回父组件所要的数据
                     -->
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsinfo.goods_no}}</p>
                    <p>库存情况：{{goodsinfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numberbox.vue'
export default {
    data(){
        return {
            id : this.$route.params.id,
            luoboList : [],
            goodsinfo : {},
            ballFlag : false,//控制小球的显示
            selectedCount : 1,
        }
    },
    created(){
        this.getLuobotu();
        this.getGoodsInfo();
    },
    
    methods : {
        getLuobotu() {
            this.luoboList = [{
                    img: "http://images.lightstrade.com/201904/201904261633104802.jpg",
                    url: "http://images.lightstrade.com/201904/201904261633104802.jpg"
                },
                {
                    img: "http://images.lightstrade.com/201901/201901231743362168.png",
                    url: "https://www.baidu.com"
                },
                {
                    img: "http://images.lightstrade.com/201901/201901241004211114.jpg",
                    url: "http://images.lightstrade.com/201901/201901241004211114.jpg"
                }
            ]
        },
        getGoodsInfo(){
            this.goodsinfo = {
                id : 1,
                add_time : "2019-07-11 16:40:36",
                goods_no : "STO1234567890",
                market_price : 2199,
                sell_price :2099,
                stock_quantity : 2000,
                title : "大疆牌全球鹰无人机"
            }
        },
        goDesc(id){
            this.$router.push({name : "goodsdesc",params : {id}})
        },
        goComment(id){
            this.$router.push({name : "goodscomment",params : {id}})
        },
        addToShopCar(){
            this.ballFlag = !this.ballFlag;
            // {id:'商品id',count:'购买数量',price:'商品单价',selected:true}
            var goodsinfo = {id : this.id, count : this.selectedCount, price : this.goodsinfo.sell_price, selected : true}
            //调用store中的mutations将商品添加到购物车中
            this.$store.commit('addToCar',goodsinfo)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            // 获取组件内部元素使用ref
            //获取小球的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.28,-0.28,1,.55)";
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
            console.log("父组件获取到子组件的值为："+this.selectedCount)
        }

    },
    components : {swiper,numbox}
}
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
        
        .now-price{
            color: red;
            font-weight: bold;
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0;
            }
        }
        .ball{
            height: 15px;;
            width: 15px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            z-index: 99;
            top: 387px;
            left: 116px;
            // transform: translate(121px, 233px)

        }
        .mui-numbox{width: 180px;}
    }
</style>
