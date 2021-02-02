<template>
    <div class="city">
        <!-- 头部 -->
        <CityHeader />
        <!-- 城市搜索 -->
        <CitySearch />
    </div>
</template>

<script>
// 引入头部 城市搜索 组件
import CityHeader from "../../components/city/CityHeader"
import CitySearch from "../../components/city/CitySearch"

export default {
    name: "City",
    data(){
        return{

        }
    },
    components:{
        CityHeader,
        CitySearch
    }
}
</script>

<style lang="scss" scoped>
    
</style>