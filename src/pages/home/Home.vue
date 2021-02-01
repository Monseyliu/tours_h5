<template>
  <div class="home">
    <!-- 头部组件 -->
    <Header :isLeft="true" title="输入城市/景点/游玩主题" rightTitle="城市" />
    hello world页面
  </div>
</template>

<script>
// 引入头部 和底部导航栏
import Header from "../../components/Header"

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>


<style lang="scss" scoped>
  
</style>