<template>
    <div class="app-head-container">
        <div class="app-head-left">
            <a @click.prevent="$router.back()">
                <i></i>
            </a>
        </div>
        <div class="app-head-middle">
            {{title}}
        </div>
        <div class="app-head-right">
            <a href="https://m.mi.com/search">
                <i></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style lang="less" scoped>
.app-head-container {
    background: #f2f2f2;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    position: fixed;
    top: 0;
    left: 0;
    
}
.app-head-left {
    margin-left: 15px;
    a {
        i {
            background: url('../../assets/imgs/back.png');
            background-size: cover;
            display: block;
            width: 28px;
            height: 28px;
        }
    }
}
.app-head-middle {
    font-size: 18px;
    color: #666;
    text-align: center
}
.app-head-right {
    margin-right: 15px;
    a {
        i {
            background: url('../../assets/imgs/search.png');
            width: 35px;
            height: 35px;
            background-size: cover;
            display: block;
        }
    }
}
</style>
