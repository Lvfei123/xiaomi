<template>
    <div class="swiper-container" >
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
            <div class="swiper-slide" v-for="(swipeImg,index) in imgs" :key="index">
                <a :href="swipeImg.path">
                    <img :src="swipeImg.img_url">
                </a>
            </div>
            
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper//dist/css/swiper.min.css'
export default {
    props:{
        imgs:Array
    },
    mounted(){
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
</script>
<style lang="less" scoped>
    .swiper-container {
        width: 100%;
        margin-bottom: -5px;
        img {
            width: 100%;
        }
    }
</style>
