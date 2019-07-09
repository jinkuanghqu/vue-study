<template>
    <div class="cmt-container">
        <h3>评论组件</h3>
        <hr>
        <textarea name="comment-contents" id="comment" cols="30" rows="10">最多吐槽120字</textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="(item , index) in comments" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">第{{index+1}}楼&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time | dateFormat }}</div>
                <div class="cmt-body">{{item.content === 'undefined' ? '此用户很懒，没有进行评论' : item.content}}</div>
            </div>
        </div>
        <mt-button @click="loadMore" type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                pageIndex : 1,
                comments : []
            }
        },
        created(){
            this.getComments();
        },
        props : ["id"],
        methods : {
            getComments(){
                // this.$htpp.get("https://api.com/get-comments/" + this.id + "?page=" + pageIndex)
                this.comments = [
                    {user_name:"李白",add_time:"2019-07-09 10:05:20",content:"杜甫来喝两杯啊"},
                    {user_name:"杜甫",add_time:"2019-07-09 10:05:30",content:"老李，你等我"},
                    {user_name:"李白",add_time:"2019-07-09 10:06:20",content:"好的，等你哦"},
                    {user_name:"杜甫",add_time:"2019-07-09 10:06:50",content:"你他么 能不能别这么娘!"},
                ]
            },
            loadMore(){
                this.pageIndex++;
                var data = [
                    {user_name:"李白",add_time:"2019-07-09 10:05:20",content:"杜甫来喝两杯啊"},
                    {user_name:"杜甫",add_time:"2019-07-09 10:05:30",content:"老李，你等我"},
                    {user_name:"李白",add_time:"2019-07-09 10:06:20",content:"好的，等你哦"},
                    {user_name:"杜甫",add_time:"2019-07-09 10:06:50",content:"你他么 能不能别这么娘!"},
                ];
                this.comments = this.comments.concat(data);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size:18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;

                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
