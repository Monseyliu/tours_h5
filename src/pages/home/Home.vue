<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header :isLeft="true" title="输入城市/景点/游玩主题"  Patch="/city" />
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
import {mapState} from "vuex";

export default {
  name: 'Home',
  data(){
    return{
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ""
    }
  },
  components: {
    Header,
    Swiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed:{
    ...mapState(['city'])
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city;
      this.getHomeInfo()
    }
  },
  mounted(){
    // 首页发一次请求
    this.getHomeInfo();
    this.lastCity = this.city;
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