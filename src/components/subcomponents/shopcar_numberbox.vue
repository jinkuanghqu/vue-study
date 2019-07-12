<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max="100" style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" readonly class="mui-input-numbox" type="number" :value="initCount" @change="countChange" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
       mounted(){
            mui(".mui-numbox").numbox();
        },
        methods : {
            countChange(){
                console.log(this.$refs.numbox.value) 
                this.$store.commit('updateGoodsInfo',{id : this.goodsid, count : this.$refs.numbox.value})
            }
        },
        props : ['initCount','goodsid']
    }
</script>

<style lang="scss" scoped>

</style>

