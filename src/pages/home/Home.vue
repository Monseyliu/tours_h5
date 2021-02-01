<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header :isLeft="true" title="输入城市/景点/游玩主题" :city="city" />
    <!-- 轮播图 -->
    <Swiper :swiperList="swiperList" />
    <!-- icons 区域 -->
    <HomeIcons :iconList="iconList" />
    <!-- 推荐区域 -->
    <HomeRecommend :recommendList="recommendList" />
    <!-- 周末去哪 -->
    <HomeWeekend :weekendList="weekendList" />
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
  data(){
    return{
      city: "北京",
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    Header,
    Swiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted(){
    // 首页发一次请求
    this.getHomeInfo();
  },
  methods:{
    getHomeInfo(){
      this.$axios.get('/mock/index.json').then(res => {
        const data = res.data.data;
        this.iconList = data.iconList;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }).catch(err => err)
    }
  }
}
</script>


<style lang="scss" scoped>
  
</style>