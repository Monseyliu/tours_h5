<template>
  <div class="weekend" >
    <div class="weekend_title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item_wrap">
          <img class="item_img" :src="item.imgUrl" />
        </div>
        <div class="item_info">
          <p class="item_title">{{ item.title }}</p>
          <p class="item_desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";

.weekend {
  margin-top: 0.2rem;
  .weekend_title {
    line-height: 0.8rem;
    background-color: $lightDark;
    text-indent: 0.2rem;
  }
  // 内容
  .item {
    height: 1.9rem;
    .item_wrap {
        overflow: hidden;
        padding-bottom: 37.09%;
      .item_img {
          width: 100%;
          background-size: cover;
      }
    }
    .item_info {
      padding: 0.1rem;
      min-width: 0;
      @include ellipsis;
      .item_title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }
      .item_desc {
        line-height: 0.4rem;
        color: #999;
      }
    }
  }
}
</style>