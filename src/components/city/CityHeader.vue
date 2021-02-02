<template>
  <div class="city_header">
    城市选择
    <router-link to="/" class="back_icon_wrap">
      <div class="iconfont back_icon">&#xe685;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";

.city_header {
    position: relative;
  overflow: hidden;
  height: $headHeight;
  line-height: $headHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  .back_icon_wrap{
      color: #fff;
      .back_icon{
          position: absolute;
          top: 0;
          left: 0;
          font-size: .44rem;
      }
  }
}
</style>