<template>
  <div class="city_list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button_list">
          <div class="button_wrap">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button_list">
          <div class="button_wrap" v-for="hot of hotCities" :key="hot.id">
            <div class="button">{{ hot.name }}</div>
          </div>
        </div>
      </div>
      <!-- 城市排序 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item_list">
          <div
            class="item border-topbottom"
            v-for="city of item"
            :key="city.id"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  引入 better-scroll
import Bscroll from "better-scroll";

export default {
  name: "CityList",
  data() {
    return {};
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
    });
  },
  watch: {
    letter() {
      //  监听letter变化，并进行滚动
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.city_list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .area {
    .title {
      line-height: 0.54rem;
      background-color: $lightDark;
      padding-left: 0.2rem;
      color: #666;
      font-size: 0.26rem;
    }
    // 当前城市
    .button_list {
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      overflow: hidden;
      .button_wrap {
        width: 33.33%;
        float: left;
        .button {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
        }
      }
    }
    // 城市排序
    .item_list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
    // 底边框颜色
    .border-topbottom {
      &:before {
        border-color: #ccc;
      }
      &:after {
        border-color: #ccc;
      }
    }
  }
}
</style>