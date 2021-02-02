<template>
    <div class="detail">
        <!-- Banner 图片 -->
        <Banner />
        <!-- 头部组件 -->
        <DetailHeader />
    </div>
</template>

<script>
// 引入 banner  组件
import Banner from "../../components/detail/Banner";
import DetailHeader from "../../components/detail/DetailHeader"


export default {
    name: "Detail",
    data(){
        return{}
    },
    components:{
        Banner,
        DetailHeader
    }
}
</script>

<style lang="scss" scoped>
    
</style>