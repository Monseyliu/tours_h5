<template>
  <div class="citye_search">
    <div>
      <input type="text" placeholder="输入城市名" v-model="keyword" />
    </div>
    <!-- 内容 -->
    <div class="search_content" ref="search_content" v-if="keyword">
      <ul>
        <li class="search_item border-bottom" v-for="item of list" :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search_item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "", //输入框动态值
      list: [], //关键词城市项目
      timer: null, //节流用
    };
  },
  props: {
    cities: Object,
  },
  mounted(){
      this.scroll = new Bscroll(this.$refs.search_content);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      };
      if(!this.keyword){
          this.list = []
          return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  computed:{
      hasNoData(){
          return this.list;
      }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.citye_search {
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;
  input {
    @include clearBtn;
    @include wh(100%, 0.62rem);
    box-sizing: border-box;
    padding: 0 0.2rem;
    text-align: start;
    border-radius: 0.06rem;
    color: #666;
    background-color: $lightDark;
  }
  .search_content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    background-color: #eee;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .search_item{
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background-color: #fff;
    }
  }
}
</style>