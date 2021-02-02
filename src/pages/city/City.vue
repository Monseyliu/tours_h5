<template>
    <div class="city">
        <!-- 头部 -->
        <CityHeader />
        <!-- 城市搜索 -->
        <CitySearch :cities="cities" />
        <!-- 城市列表 -->
        <CityList :cities="cities" :hotCities="hotCities" :letter="letter" />
        <!-- a-z索引组件 -->
        <Alphabet :cities="cities" @change="handleLetterChange" />
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
            cities: null, //
            hotCities: [], //热门城市
            letter: "", //Alphabet 点击事件传递的值
        }
    },
    mounted(){
        this.getCityInfo();
    },
    methods:{
        getCityInfo(){
            // 请求城市信息
            this.$axios("mock/city.json").then(res  => {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            }).catch(err => err)
        },
        handleLetterChange(letter){
            // 监听 alphabet 组件 点击字母事件
            this.letter = letter;
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