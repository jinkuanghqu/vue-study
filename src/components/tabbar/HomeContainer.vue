<template>
    <div>
        <!-- 轮播图组件 -->
        <swiper :luoboList="luoboList" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import swiper from '../subcomponents/swiper.vue'
    export default {
        data() {
            return {
                luoboList: []
            }
        },
        created() {
            this.getLuobotu();
        },
        methods: {
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
            }
        },
        components : {swiper}
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }

            &:nth-child(2) {
                background-color: blue;
            }

            &:nth-child(3) {
                background-color: aqua;
            }

            img {
                height: 200px;
                width: 100%;
            }

        }
    }
    .mui-grid-view.mui-grid-9{
        background-color:#fff;
        border:none;
        img{
            height: 60px;
            width: 60px;
        }
        .mui-media-body{font-size: 13px;}
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{border:none;}
</style>