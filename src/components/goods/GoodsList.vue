<template>
    <div>
        <div class="goods-list">
            <router-link tag="div" :to="'/home/goodsinfo/' + item.id" class="goods-item" v-for="item in goodslist" :key="item.id">
                <img :src="item.img_url" alt="">
                <h1 class="title">{{ item.title }}</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <span class="old">￥{{ item.market_price }}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩{{ item.stock_quantity }}件</span>
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                goodslist : [],
            }
        },
        created(){
            this.getGoodsList();
        },
        methods : {
            getGoodsList(){
                this.goodslist = [
                    {id : 1 , title : "大疆无人机1", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 2 , title : "大疆无人机2", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 3 , title : "大疆无人机3", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 4 , title : "大疆无人机4", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 5 , title : "大疆无人机5", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 6 , title : "大疆无人机6", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                ]
            }
        }
       
    }
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            margin: 5px 0;
            border: 1px solid #ccc;
            box-shadow: #ccc;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
                min-height: 170px;
            }
            .title{font-size: 14px;}
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .new{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>
