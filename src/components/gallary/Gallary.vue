<template>
  <div class="gallary" @click="closeGalary">
    <!-- 全局共用组件画廊 -->
    <div class="wraper">
      <mt-swipe :auto="0" class="mt_swipe">
        <mt-swipe-item v-for="(item,index) of gallaryImgs" :key="index">
          <img class="swipe_img" :src="item" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  data() {
    return {};
  },
  props:{
      gallaryImgs: Array
  },
  methods: {
      closeGalary(){
          this.$emit('close')
      }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";

.gallary {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  .wraper {
    overflow: hidden;
    background-color: #fff;
    width: 100%;
    .mt_swipe{
        height:5rem;
    }
    .swipe_img{
        height: 100%;
        width: 100%;
        background-size: cover;
    }
  }
}
</style>