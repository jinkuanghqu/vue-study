<template>
    <div class="photo-list-container">
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="category in categories" :key="category.id" @click="getPohotListByCateId(category.id)" :class="['mui-control-item' ,category.id == 0 ? 'mui-active' : '']">
                        {{category.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区 -->
        <ul class="photo-list-lazyload">
            <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    
    export default {
        data(){
            return {
                categories : [],
                photoList : [],
            }
        },
        created(){
            this.getCategories();
            this.getPohotListByCateId(0)
        },
        mounted(){
            //当组件中的dom元素被渲染好并放入页面中后，会执行这个钩子函数
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods : {
            getCategories(){
                this.categories = [
                    {title : "全部",id : 0},
                    {title : "家居生活",id : 1},
                    {title : "摄影设计",id : 2},
                    {title : "明星美女",id : 3},
                    {title : "自然美景",id : 4},
                    {title : "美好山河",id : 5},
                    {title : "炫酷车展",id : 6},
                ]
            },
            getPohotListByCateId(cateId){
                this.photoList = [
                    {id : 1,title : "图片1",img_url : "http://images.lightstrade.com/201906/201906261010240806.png"},
                    {id : 2,title : "图片2",img_url : "http://images.lightstrade.com/201906/201906261012469650.png"},
                    {id : 3,title : "图片3",img_url : "http://images.lightstrade.com/201906/201906261011494316.png"},
                    {id : 4,title : "图片4",img_url : "http://images.lightstrade.com/201901/201901231743362168.png"},
                    {id : 5,title : "图片5",img_url : "http://images.lightstrade.com/201901/201901241004211114.jpg"},
                    {id : 7,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 8,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 9,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 10,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 11,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 12,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 13,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 14,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 15,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 16,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 17,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 18,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 19,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 20,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                    {id : 21,title : "图片6",img_url : "http://images.lightstrade.com/201904/201904261633104802.jpg"},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }
    .photo-list-container{
        img[lazy=loading] {
            width: 40px;
            height: 100%;
            margin: auto;
        }
        .photo-list-lazyload{
            list-style: none;
            margin: 0;
            padding: 0; 
            li{
                list-style: none;
                margin: 0;
                padding: 0;
                margin-bottom: 5px;
                background-color: #cccc;
                position: relative;
                img{
                    width: 100%;
                    vertical-align: middle;
                }
                .info {
                    width: 100%;
                    color: white;
                    position: absolute;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    max-height: 86px;
                    overflow: hidden;
                    .info-title{
                        font-size: 13px;
                        text-align: center;
                    }
                }
            }
        }
        
    }
    
</style>
