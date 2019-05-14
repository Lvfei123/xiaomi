<template>
    <div class="cart_container">
        <div :class="{choose:true,choose_yes:select}" @click="selectCart({product_id:product.product_id,flag:!select})"></div>
        <a class="go_good">
            <img :src="product.cart_img" alt="">
        </a>
        <div class="cart_info">
            <div class="cart_name">{{product.product_name}}</div>
            <div class="cart_price">售价：{{product.price}}元</div>
            <div>
                <div class="count">
                    <i class="reduce" @click="addCart({product_id:product.product_id,flag:false})"></i>
                    <div class="number">{{number}}</div>
                    <i class="add" @click="addCart({product_id:product.product_id,flag:true})"></i>
                </div>
                <i class="delete" @click="deleteProduct(product.product_id)"></i>
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapGetters,mapState,mapActions } from 'vuex'
export default {
    props:['cartItem'],
    data(){
        return {
            ...this.cartItem
        }
    },
    computed:{
        ...mapState(['products']),
        product(){
            const product_id = this.cartItem.product_id
            return this.products.find(product=>product.product_id===product_id)
        }
    },
    methods:{
        ...mapActions(['deleteProduct']),
        addCart(obj){
            this.number = obj.flag? ++this.number : --this.number
            this.$store.dispatch('addCart',obj)
        },
        selectCart(obj){
            this.select = obj.flag
            this.$store.dispatch('selectCart',obj)
        }
    }
}
</script>
<style lang="less" scoped>
.cart_container {
    border-bottom: 12px solid #f5f5f5;
    display: flex;
    height: 130px;
    align-items: center;
    justify-content: space-around;
    .choose {
        width: 34px;
        height: 100%;
        background: url(//s1.mi.com/m/images/m/check_normal.png) 50% 50% no-repeat;
        background-size: 23px 23px;
    }
    .choose_yes {
        background: url(//s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
        background-size: 23px 23px;
    }
    .go_good {
        border: 1px solid #eee;
        border-radius: 2px;
        img {
            width: 100px;
        }
    }
    .cart_info {
        margin-left: 10px;
        width: 60%;
        .cart_name {
            color: #666;
        }
        .cart_price {
            color: #999;
            font-size: 13px;
        }
        .count {
            display: inline-block;
            margin-top: 5px;
            border: 1px solid #eee;
            height: 35px;
            i {
                width: 35px;
                height: 35px;
                display: inline-block;
                background-size: 18px 18px;
                background-position: 50%;
            }
            .reduce {
                background-color: #f5f5f5;
                background-image: url(../../assets/imgs/reduce.png); 
            }
            .number {
                font-size: 18px;
                color: #3c3c3c;
                display: inline-block;
                width: 35px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                vertical-align:top;
            }
            .add {
                background-color: #f5f5f5;
                background-image: url(../../assets/imgs/add.png); 
            }
        }
        .delete {
            display: inline-block;
            background-image: url(../../assets/imgs/delete.png);
            background-size: 36px 36px;
            float: right;
            margin: 5px;
            width: 35px;
            height: 35px;
            background-position: 50%;
        }
    }
}
</style>
