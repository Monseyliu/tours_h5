<template>
  <div class="icons"  v-if="iconList">
    <mt-swipe :auto="0" class="mint_swipe">
      <mt-swipe-item
        v-for="(page, i) of pages"
        :key="i"
        class="mint_swipe_item"
      >
        <div class="icon_item" v-for="item of page" :key="item.id">
          <div class="icon_img_wrap">
            <img class="icon_img_content" :src="item.imgUrl" alt="" />
          </div>
          <span class="icon_desc">{{ item.desc }}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array,
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";

.icons {
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin: 0.1rem 0;
  position: relative;
  .icon_item {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon_img_wrap {
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      .icon_img_content {
        height: 100%;
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    // 文字
    .icon_desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkColor;
      text-align: center;
      @include ellipsis;
    }
  }
}
.mint_swipe {
  min-height: 4rem;
  .mint_swipe_item {
    height: 100%;
  }
}
</style>