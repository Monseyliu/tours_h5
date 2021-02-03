<template>
    <div class="detail_list">
        <div class="item"
        v-for="(item,index) of list" :key="index">
            <div class="item_title border-bottom">
                <span class="item_title_icon"></span>
                <span>{{item.title}}</span>
            </div>
            <div v-if="item.children" class="item_children">
                <DetailList :list="item.children" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailList",
    data(){
        return{

        }
    },
    props:{
        list: Array
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/mixin.scss';
.detail_list{
    .item{
        .item_title{
            line-height: .8rem;
            font-size: .32rem;
            padding: 0 .2rem;
            .item_title_icon{
                position: relative;
                display: inline-block;
                left: .06rem;
                top: .06rem;
                width: .36rem;
                height: .36rem;
                background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') no-repeat;
                background-size: .4rem 3rem;
                margin-right: .1rem;
            }
        }
        .item_children{
            padding: 0 .2rem;
        }
    }
}
    
</style>