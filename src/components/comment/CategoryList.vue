<template>
    <div class="list_container">
        <img src="https://i8.mifile.cn/v1/a1/eacf5445-a567-c5e1-0318-78cf3938f8d4!500x200.webp" alt="">
        <div class="title">
            <span>{{title}}</span>
        </div>
        <div class="list">
            <div v-for="(photo, index) in photos" :key="index">
                <img :src="photo" alt="">
                <span>小米手机</span>
            </div>
        </div>
        <div class="go_page">
            进入小米{{title}}频道>
        </div>
        <div class="list">
            <div v-for="(photo, index) in photos" :key="index">
                <img :src="photo" alt="">
                <span>小米手机</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    data(){
        return {
            photos:[
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0402680a993b78bd934a600ff30bf14c.png?thumb=1&w=120&h=120',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47980b4238d5ab9997d4d04265a99775.png?thumb=1&w=120&h=120',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e323fcc400acc38d0c90d3a851697496.png?thumb=1&w=120&h=120',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4ce436f7215e54bff6d8e34b02c6b124.png?thumb=1&w=120&h=120',
                'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19a0a988c92e861d10c84b4fda78264f.png?thumb=1&w=120&h=120',
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.title {
    width: 100%;
    height: 75px;
    text-align: center;
    line-height: 75px;
    span {
        font-weight: 400;
        text-align: center;
        color: #3c3c3c;
        font-size: 17px;
        
    }
}
.title:before,.title:after {
    content: ' ';
    display: inline-block;
    border-bottom: 1px solid #e0e0e0;
    width: 20px;
    height: 0px;
    position: relative;
    top: -6px;
    margin: 0 10px;
}
.list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    div {
        width: 33%;
        img {
            width: 58px;   
            margin: 0 auto; 
            display:block  
        }
        span {
            font-size: 12px;
            display: block;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: rgba(0,0,0,.54);
        }      
    }
}
.list_container {
    width: 100%;
    height: 610px;
    img {
        width: 90%;
        margin: 0 auto;
        display: block;
    }
    .go_page {
        width: 90%;
        margin: 10px auto;
        height: 46px;
        background: rgb(250,243,229);
        color: rgb(175,173,145);
        line-height: 46px;
        text-align: center;
        font-size: 15px;
    } 
}

</style>
