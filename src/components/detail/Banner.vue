<template>
  <div>
      <!-- banner 图片 -->
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner_img"
        :src="bannerImg"
        alt=""
      />
      <div class="banner_info">
        <div class="banner_title">{{sightName}}</div>
        <div class="banner_number">
          <span class="iconfont banner_icon">&#xe6c9;21</span>
        </div>
      </div>
    </div>
    <!-- 公用画廊组件 -->
    <CommonGallary :imgs="gallaryImgs" v-show="showGallary" @close="CloseGallary" />
  </div>
</template>

<script>
// 引入公用 画廊组件
import CommonGallary from "../gallary/Gallary";

export default {
  name: "Banner",
  data() {
    return {
        showGallary: false, //控制 画廊展示隐藏
    };
  },
  props:{
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
  },
  methods:{
      handleBannerClick(){
          this.showGallary = true;
      },
      CloseGallary(){
          this.showGallary = false;
      }
  },
  components: {
    CommonGallary,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 38%;
  .banner_img {
    width: 100%;
  }
  .banner_info {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner_title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner_number {
      padding: 0 0.2rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner_icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>