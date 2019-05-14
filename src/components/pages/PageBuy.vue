<template>
    <div style="max-width: 720px; margin: 0 auto;">
        <Swiper :imgs='swiper'></Swiper>
        <ImgList :imgs='imgList'></ImgList>
        <ProductListBuy v-for="(productList, index) in productList" :key="index" :productsInfo="productList"></ProductListBuy>
    </div>
</template>
<script>
import Swiper from '@/components/comment/Swiper'
import ImgList from '@/components/comment/ImgList'
import ProductListBuy from '@/components/comment/ProductListBuy'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    components:{
        Swiper,
        ImgList,
        ProductListBuy
    },
    computed:{
        swiper(){
            return this.$store.state[`${this.$route.params.key}_swiper`] 
        },
        imgList(){
            return this.$store.state[`${this.$route.params.key}_imgList`] 
        },
        productList(){
            return this.$store.state[`${this.$route.params.key}_productList`] 
        },

    }
}
</script>
<style lang="" scoped>
    
</style>
