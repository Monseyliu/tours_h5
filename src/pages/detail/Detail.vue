<template>
  <div class="detail">
    <!-- Banner 图片 -->
    <Banner :sightName="sightName" :bannerImg="bannerImg" />
    <!-- 头部组件 -->
    <DetailHeader />
    <!-- 数据列表 -->
    <DetailList :list="list" />
  </div>
</template>

<script>
// 引入 banner  组件
import Banner from "../../components/detail/Banner";
import DetailHeader from "../../components/detail/DetailHeader";
import DetailList from "../../components/detail/List";

export default {
  name: "Detail",
  data() {
    return {
      list: [],
      sightName: "", //名称
      bannerImg: "", //图片
      gallaryImgs: [],
    };
  },
  mounted(){
      this.getInfo();
  },
  components: {
    Banner,
    DetailHeader,
    DetailList,
  },
  methods: {
      getInfo(){
          this.$axios('/mock/detail.json').then(res => {
              res = res.data;
              if(res.ret && res.data) {
                  const data = res.data;
                  this.sightName = data.sightName;
                  this.bannerImg = data.bannerImg;
                  this.gallaryImgs = data.gallaryImgs;
                  this.list = data.categoryList
              }
          })
      }
  }
};
</script>

<style lang="scss" scoped>
</style>