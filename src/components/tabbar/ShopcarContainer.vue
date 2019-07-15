<template>
    <div class="shopcar-container">
        <!-- 商品列表区 -->
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="changeSelected(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.img_url" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 这里的i用于删除gooslist中对应的该商品 -->
                                <a href="" @click.prevent="remove(item.id,i)">删除{{$store.getters.getGoodsCount[item.id]}}</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计(不含运费) </p>
                        <p>已勾选 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件, 总价 <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar_numberbox.vue'
    export default {
        data(){
            return {
                goodslist : []
            }
        },
        created(){
            this.getGoodsList()
        },
        methods : {
            getGoodsList(){
                //1、获取store中的所有商品id，然后以逗号拼接为字符串
                var idArr = []
                console.log(this.$store.state.car)
                this.$store.state.car.forEach(item=>idArr.push(item.id))
                if(idArr.length <=0){
                    return;
                }
                // console.log(idArr.join(','))
                // this.$http.get('api-url/'+idArr.join(','))
                //模拟数据
                var goodslist = [
                    {id : 1 , title : "大疆无人机1", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 2 , title : "大疆无人机2", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 3 , title : "大疆无人机3", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 4 , title : "大疆无人机4", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 5 , title : "大疆无人机5", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 6 , title : "大疆无人机6", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                    {id : 7 , title : "大疆无人机6", sell_price : "200", market_price : "600", stock_quantity : 1000, img_url : "http://img2.imgtn.bdimg.com/it/u=2574706152,359020682&fm=26&gp=0.jpg"},
                ]
                goodslist.forEach(item=>{
                    idArr.forEach(sitem=>{
                        if(sitem == item.id){
                            this.goodslist.push(item)
                        }
                    })
                })
            },
            remove(id,index){
                //点击删除时，根据id把store中对应的商品删除,根据index把当前组件中对应的商品删除
                this.goodslist.splice(index,1)
                this.$store.commit('removeFromCar',id)
            },
            changeSelected(id,val){
                this.$store.commit('updateGoosSelected',{id : id ,selected : val})
            }
        },
        components : {
          numbox 
       } 
    }
</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                justify-content: center;
                
                img{
                    width: 60px;
                    height: 60px;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    
                    h1{font-size: 14px;}
                    .price{
                        color: red;
                        font-weight: bold;
                    }
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red{
                color:red;
                font-weight: bold;
                font-size: 16px;
                }
        }
    }
</style>