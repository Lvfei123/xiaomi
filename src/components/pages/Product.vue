<template>
    <div style="max-width: 720px; margin: 0 auto;">
        <div class="header">
            <Swiper :imgs='product.imgs'></Swiper>
            <div class="back" @click="$router.back()"><i></i></div>
            <div class="share"><i></i></div>
        </div>
        <div class="info">
            <div class="name">{{product.product_name}}</div>
            <p class="desc">{{product.product_brief}}</p>
            <span class="price">￥{{product.price}}</span>
        </div>
        <div class="buy">
            <div style="display:flex">
                <router-link class="go_home" to="/homepage">
                    <i></i>
                    <span>首页</span>
                </router-link>
                <router-link class="go_cart" to="/cart">
                    <i><div>{{cartNumber}}</div></i>
                    <span>购物车</span>
                </router-link>
                </div>
            <div class="add_cart" @click="addCart({product_id:product.product_id,flag:true})">加入购物车</div>
        </div>
    </div>
</template>
<script>
import Swiper from '../comment/Swiper'
import { mapGetters,mapState,mapActions } from 'vuex'
export default {
    data(){
        return {
        }
    },
    components:{
        Swiper
    },
    computed:{
        ...mapGetters(['cartNumber']),
        ...mapState(['products','cart']),
        product(){
            const product_id = this.$route.params.product_id
            return this.products.filter(product=>product.product_id===product_id)[0]
        }
    },
    methods:{
        ...mapActions(['addCart'])
    }
}
</script>
<style lang="less" scoped>
    .header {
        position: relative; 
        .back,.share {
            position: absolute;
            top: 10px;
            width: 35px;
            height: 35px;
            z-index: 100;
            background: rgba(0,0,0,.6);
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            i {
                display: inline-block;
                width: 20px;
                height: 20px;
            }
        }
        .back {
            left: 10px;
            i{
                background: url('../../assets/imgs/back2.png');
                background-size: cover;
            }
        }
        .share {
            right: 10px;
            i{
                background: url('../../assets/imgs/share.png');
                background-size: cover;
                
            }
        }
    }
    .info {
        margin: 20px auto;
        width: 92%;
        .name {
            color: #3c3c3c;
            font-size: 22px;
            font-weight: 600;
            font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
            -webkit-font-smoothing: antialiased;
            margin: 5px 0;
        }
        .desc {
            color: rgba(0,0,0,.54);
            font-size: 14px;
            margin-bottom: 10px;
        }
        .price {
            color: #ff6700;
            font-size: 24px;
        }
    }
    .buy {
        width:-webkit-calc(100% - 6px);
        height: 60px;
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: hsla(0,0%,100%,.96);
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .go_home,.go_cart {
            font-size: 12px;
            color: rgba(0,0,0,.54);
            margin: 0 10px;
            i {
                width: 23px;
                height: 23px;
                background-image: url(../../assets/imgs/go_home.png);
                display: block;
                background-size: cover;
                margin: 0 auto;
            }
            span {
                display: inline-block;
                width: 36px;
                text-align: center;
            }
        }
        .go_cart i{
            background-image: url(../../assets/imgs/go_cart.png);
            div {
                width: 15px;
                height: 15px;
                background: #ed4d41;
                border-radius: 50%;
                color: #fff;
                font-style: normal;
                line-height: 15px;
                text-align: center;
                font-size: 10px;
                transform: translateX(15px);
            }
        }
        .add_cart {
            width: 135px;
            height: 36px;
            background: #ff6700;
            color: #fff;
            text-align: center;
            line-height: 37px;
            border-radius: 18px;
            float: right;
        }
    }
</style>
