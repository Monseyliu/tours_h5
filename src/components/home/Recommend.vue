<template>
  <div class="recommend">
    <div class="recommend_title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item_img"
          :src="item.imgUrl"
        />
        <div class="item_info">
          <p class="item_title">{{item.title}}</p>
          <p class="item_desc">{{item.desc}}</p>
          <button class="item_btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommendList: Array
  }

};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";

.recommend {
  margin-top: 0.2rem;
  .recommend_title {
    line-height: 0.8rem;
    background-color: $lightDark;
    text-indent: 0.2rem;
  }
  // 内容
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item_img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }
    .item_info{
        flex: 1;
        padding: 0.1rem;
        min-width: 0;
        @include ellipsis;
        .item_title{
            line-height: .54rem;
            font-size: .32rem;
        }
        .item_desc{
            line-height: .4rem;
            color: #999;
        }
        .item_btn{
            @include clearBtn;
            margin: .2rem 0;
            background: $yellowColor;
            padding: 0.05rem;
            border-radius: .06rem;
            color: #fff;
        }
    }
  }
}
</style>