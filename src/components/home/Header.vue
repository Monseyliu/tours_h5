<template>
  <div class="Header">
    <!-- 公用头部组件 -->
    <div class="header_left" v-if="isLeft">
      <div class="iconfont back_icon">&#xe685;</div>
    </div>
    <div class="header_input">
      <span class="iconfont">&#xe67d;</span>
      {{ title }}
    </div>
    <router-link :to="Patch" class="header_right_wrap">
      <div class="header_right">
        <span class="header_right_title">{{ city }}</span>
        <span class="iconfont down_icon">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: "HomeHeader",
  props: {
    title: String,
    isLeft: Boolean,
    Patch: String,
  },
  computed:{
    ...mapState(['city']),
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";

.Header {
  display: flex;
  line-height: $headHeight;
  background-color: $bgColor;
  color: #fff;
  .header_left {
    width: 0.64rem;
    float: left;
    .back_icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .header_input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    height: 0.64rem;
    line-height: 0.64rem;
    color: #ccc;
    text-align: start;
    text-indent: 0.1rem;
  }
  .header_right_wrap {
    color: #fff;
  }
  .header_right {
    min-width: 1.04rem;
    float: right;
    text-align: center;
    margin-left: 0.05rem;
    .down_icon {
      font-size: 0.24rem;
      margin-left: 0.1rem;
    }
  }
}
</style>
