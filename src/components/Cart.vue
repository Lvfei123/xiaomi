<template>
    <div>
        <Back title="购物车"></Back>
        <div class="cart">
            <Cartgood v-for="item in cart" :key="item.product_id" :cartItem="item" v-show="item.number"></Cartgood>
            <ProductList v-for="(productsInfo, index) in cart_productList" :key="index" :productsInfo='productsInfo'></ProductList>
        </div>
        <div class="bottom">
            <div href="" class="total">共{{selectNumber}}件 金额：<br><strong>{{amount}}</strong>元</div>
            <router-link  class="go_category" to="/category">继续购物</router-link>
            <a href="javascript:;" class="buy">去结算</a>
        </div>
    </div>
</template>
<script>
import Cartgood from '@/components/comment/Cartgood'
import Back from '@/components/comment/Back'
import ProductList from '@/components/comment/ProductList'
import { mapState,mapActions } from 'vuex'
export default {
    components:{
        Cartgood,
        Back,
        ProductList
    },
    computed:{
        ...mapState(['cart_productList','cart','products']),
        amount(){
            return this.cart.reduce((sum,item)=>{
                var product = this.products.find(product=>product.product_id==item.product_id)
                return sum += product.price*item.number*(item.select?1:0)
            },0)
        },
        selectNumber(){
            return this.cart.reduce((sum,item)=>{
                return sum += item.number*(item.select?1:0)
            },0)
        }
    }
}
</script>
<style lang="less" scoped>
    .cart {
        margin-top: 50px;
    }
    .bottom {
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0px;
        z-index: 1000;
        background: #fff;
        .total {
            width: 33%;
            font-size: 15px;
            color: #999;
            text-align: center;
            display: inline-block;
            height: 100%;
            strong {
                font-size: 25px;
                color: #ff5722
            }
        }
        a {
            display: inline-block;
            text-align: center;
            line-height: 60px;
            height: 100%;
        }
        .go_category {
            background: #f4f4f4;
            width: 34%;
            color: #333;
            vertical-align:top
        }
        .buy {
            background: #ff6700;
            color: #fff;
            width: 33%;
            vertical-align:top
        }
    }
</style>
