<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumb-img-list">
            <!-- 使用 v-for 循环渲染缩略图 -->
            <vue-preview :slides="photolist" @close="handleClose"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.contents"></div>
        <!-- 评论组件区域 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data(){
            return {
                id : this.$route.params.id,
                photoinfo : {},
                photolist: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        created(){
            this.getPhotoInfo();
        },
        methods : {
            getPhotoInfo(){
                this.photoinfo = {id : 43, click : 100 , add_time : '2019-07-10 14:04:34', title : "家居生活图片", contents : "What is eTradePay.com? eTradePay.com is the online settlement system for international trade (B2B) that makes transaction more efficient and secure.Powered by eTradePay.com, Lightstrade.com has been upgraded from a display platform to an online transaction marketplace for lighting industry worldwide. eTradePay.com empowers data by cross-checking digital information from key procedures of the whole trade to intelligently implement the e-Contract signed by the Buyer and Supplier, and protects the interests of both parties."}
                
            },
            handleClose () {
                console.log('close event')
            }
        },
        components : {
            'cmt-box' : comment
        }
    }
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
        }
        .content{
            font-size: 14px;
            line-height: 30px;
        }
    }
</style>
