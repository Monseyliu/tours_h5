<template>
  <!-- 轮播组件 -->
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of swiperList" :key="item.id">
        <img class="swipe_img" :src="item.imgUrl" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
// 引入 mint-ui swipe

export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [
        {id: 1, imgUrl: require("../../assets/images/swiper.jpeg")},
        {id: 2, imgUrl: require("../../assets/images/swiper1.jpeg")},
        {id: 3, imgUrl: require("../../assets/images/swiper2.jpeg")}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 3rem;
  .swipe_img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
</style>