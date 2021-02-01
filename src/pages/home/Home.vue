<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header :isLeft="true" title="输入城市/景点/游玩主题" rightTitle="城市" />
    <!-- 轮播图 -->
    <Swiper />
  </div>
</template>

<script>
// 引入头部  轮播组件 和底部导航栏
import Header from "../../components/Header"
import Swiper from "../../components/Swiper";

export default {
  name: 'Home',
  components: {
    Header,
    Swiper
  }
}
</script>


<style lang="scss" scoped>
  
</style>