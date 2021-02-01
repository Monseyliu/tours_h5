<template>
  <!-- 轮播组件 -->
  <div class="swiper" v-if="swiperList.length">
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
  props: {
    swiperList: Array,
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