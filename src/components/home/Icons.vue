<template>
  <div class="icons">
    <mt-swipe :auto="0" class="mint_swipe">
      <mt-swipe-item v-for="(page,i) of pages" :key="i" class="mint_swipe_item">
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
  data() {
    return {
      inconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          desc: "景点门票",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          desc: "滑雪季",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          desc: "泡温泉",
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          desc: "动植园",
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          desc: "游乐园",
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          desc: "必游榜单",
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          desc: "演出",
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          desc: "城市观光",
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          desc: "一日游",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.inconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
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
.mint_swipe{
    min-height: 4rem;
    .mint_swipe_item{
        height: 100%;
    }
}
</style>