<template>
    <div style="max-width: 720px; margin: 0 auto;">
        <Swiper :imgs='swiper'></Swiper>
        <ImgList :imgs='imgList'></ImgList>
        <div class="recommend" v-show="$route.path=='/homepage/page/recommend'">
            <router-link to="/product/10000134">
                <img src="https://i8.mifile.cn/v1/a1/b474ba14-b3c3-63f4-bee9-8a1864aae262!358x508.webp" alt="" style="float: left">
            </router-link>
            <router-link to="/product/4802">
                <img src="https://i8.mifile.cn/v1/a1/bfb0f465-4248-da17-f8c3-ce3dd9126496!358x252.webp" alt="">
            </router-link>
            <a href="/product/9666">
                <img src="https://i8.mifile.cn/v1/a1/da90356c-14be-88f2-3814-c518f68c7124!358x252.webp" alt="">
            </a>
        </div>
        <div class="split"></div>
        <ProductList v-for="(productsInfo, index) in productList" :key="index" :productsInfo='productsInfo'></ProductList>
    </div>
</template>
<script>
import Swiper from '@/components/comment/Swiper'
import ImgList from '@/components/comment/ImgList'
import ProductList from '@/components/comment/ProductList'
export default {
    data(){
        return{
            
        }
    },
    components:{
        Swiper,
        ImgList,
        ProductList
    },
    computed:{
        // ...mapState(['recommend_swiper','productList','recommend_imgList']),
        swiper(){
            return this.$store.state[`${this.$route.params.key}_swiper`] 
        },
        imgList(){
            return this.$store.state[`${this.$route.params.key}_imgList`] 
        },
        productList(){
            return this.$store.state[`${this.$route.params.key}_productList`] 
        }
    }
}
</script>
<style lang="less" scoped>
    .recommend {
        a {
            img {
                float:right;
                width: 49.7%;
                margin-top: 3px;
            }
        }
    }
    .split {
        background-color: rgb(245, 245, 245);
        height: 5px;
        width: 100%;
    }
</style>
