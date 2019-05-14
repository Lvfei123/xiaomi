<template>
    <div class="imgContainer">
        <a :href="img.path" v-for="(img, index) in imgs" :key="index">
            <img :src="img.img_url">
        </a>
    </div>
</template>
<script>
export default {
    props:{
        imgs:Array
    }
}
</script>
<style lang="less" scoped>
    .imgContainer {
        width: 100%;
    }
    .imgContainer:after {
        clear: both;
        display: block;
        content: '.';
        visibility: hidden;
        height: 0px;
    }
    img {
        width:20%;
        float: left;
    }
</style>