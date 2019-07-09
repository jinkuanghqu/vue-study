<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.pub_time | dateFormat}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newList : []
            }
        },
        created(){
            this.getNewList();
        },
        methods : {
            getNewList(){
                this.newList = [
                    {id:1,title:"想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:100,pub_time:'2019-07-08'},
                    {id:2,title:"想要这样一间小木屋",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:200,pub_time:'2019-07-08'},
                    {id:3,title:"夏天挫冰吃瓜，冬天围炉取暖.",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:130,pub_time:'2019-07-08'},
                    {id:4,title:"冬天围炉取暖.",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1040,pub_time:'2019-07-08'},
                    {id:5,title:"高手，高手，这个是高手",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1400,pub_time:'2019-07-08'},
                    {id:6,title:"扫毒2",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:60,pub_time:'2019-07-08'},
                    {id:7,title:"黑客帝国",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1970,pub_time:'2019-07-08'},
                    {id:8,title:"建国大业",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1070,pub_time:'2019-07-08'},
                    {id:9,title:"建国大业2",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1070,pub_time:'2019-07-08'},
                    {id:10,title:"建国大业3",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1070,pub_time:'2019-07-08'},
                    {id:11,title:"建国大业4",img_url:"https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png",click:1070,pub_time:'2019-07-08'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size: 14px;}
        }
        .mui-ellipsis{font-size: 12px;color:#226aff;display: flex;justify-content: space-between;}
    }
</style>
