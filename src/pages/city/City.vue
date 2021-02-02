<template>
    <div class="city">
        <!-- 头部 -->
        <CityHeader />
        <!-- 城市搜索 -->
        <CitySearch />
        <!-- 城市列表 -->
        <CityList />
        <!-- a-z索引组件 -->
        <Alphabet />
    </div>
</template>

<script>
// 引入头部 城市搜索 城市列表 根据字母选择 组件
import CityHeader from "../../components/city/CityHeader"
import CitySearch from "../../components/city/CitySearch"
import CityList from "../../components/city/CityList"
import Alphabet from "../../components/city/Alphabet"

export default {
    name: "City",
    data(){
        return{

        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
    }
}
</script>

<style lang="scss" scoped>
    
</style>