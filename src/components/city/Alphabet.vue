<template>
    <div class="alpahbet">
        <ul class="list" >
            <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Alphabet",
    props:{
        cities: Object
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.alpahbet{
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    @include fCoCent;
    .list{
        
        .item{
            text-align: center;
            line-height: .4rem;
            color: $bgColor;
        }
    }
}
    
</style>