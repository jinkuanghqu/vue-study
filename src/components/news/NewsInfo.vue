<template>
    <div class="newsinfo-container">
        <h1>详情页----{{id}}</h1>
        <hr>
        <div>内容区</div>
        <!-- 父组件向子组件传值 通过属性绑定，在子组件中定义props数组接收-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    //导入评论子组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data(){
            return {
                id : this.$route.params.id 
            }
        },
        components : {
            'comment-box' : comment
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container{
        padding: 0 4px;
    }
</style>
