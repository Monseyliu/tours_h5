<template>
    <div class="citye_search">
        <input type="text" placeholder="输入城市名" >
    </div>
</template>

<script>
export default {
    name: "CitySearch",
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.citye_search{
    height: .72rem;
    background-color: $bgColor;
    padding: 0 .1rem;
    input{
        @include clearBtn;
        @include wh(100%,.62rem);
        box-sizing: border-box;
        padding: 0 .2rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
        background-color: $lightDark;
    }
}
    
</style>