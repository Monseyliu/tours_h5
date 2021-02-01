<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header :isLeft="true" title="输入城市/景点/游玩主题" rightTitle="城市" />
    <!-- 轮播图 -->
    <Swiper />
    <!-- icons 区域 -->
    <HomeIcons />
    <!-- 推荐区域 -->
    <HomeRecommend />
    <!-- 周末去哪 -->
    <HomeWeekend />
  </div>
</template>

<script>
// 引入头部  轮播组件 icons 推荐组件 周末推荐 和底部导航栏
import Header from "../../components/home/Header"
import Swiper from "../../components/home/Swiper";
import HomeIcons from "../../components/home/Icons"
import HomeRecommend from "../../components/home/Recommend";
import HomeWeekend from "../../components/home/Weekend";

export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>


<style lang="scss" scoped>
  
</style>