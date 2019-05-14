<template>
    <div :style="{background: productsInfo.background}">
        <div class="box">
            <div class="ti">
                <a href="/phone" :style="{color: productsInfo.color}">{{productsInfo.title}}</a>
            </div> 
            <div class="first_product" v-if="productsInfo.firstProduct">
                <a :href="'https://m.mi.com/commodity/detail/'+productsInfo.firstProduct.product_id">
                    <img :src="productsInfo.firstProduct.img_url" alt="">
                    <div class="info">
                        <div>
                            <span class="name">{{productsInfo.firstProduct.product_name}}</span>
                            <span class="price">{{productsInfo.firstProduct.product_price}}</span>
                        </div>
                        <div>
                            <span class="desc">{{productsInfo.firstProduct.product_brief}}</span>
                            <span class="buy">立即购买</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="container">
                <a class="product" v-for="(product, index) in productsInfo.products" :key="index"
                :href="'https://m.mi.com/commodity/detail/'+product.product_id">
                    <img :src="product.img_url" alt="">
                    <div class="info">
                        <div class="name">{{product.product_name}}</div>
                        <div class="desc">{{product.product_brief}}</div>
                        <div class="price">￥{{product.product_price}}</div>
                        <div class="buy">立即购买</div>
                    </div>
                </a>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    props:{
        productsInfo:Object
    }
}
</script>
<style lang="less" scoped>
    .buy {
        background: #ea625b;
        border-radius: 3px;
        width: 115px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        display: block;
    }
    .desc {
        color: rgba(0,0,0,.54);
        font-size: 12.5px;
    }
    .price {
        color: #ea625b;
    }
    .box {
        margin: 0 auto;
        padding: 0 7px;
    }
    .first_product {
        margin: 0 auto;
        width: 100%;
        img {
            width: 100%;
        }
        .info {
            background: #fff;
            padding: 11.5px 15.5px;
            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .name {
                    font-size: 18px;
                    color: rgba(0,0,0,.87);
                }
                
            }
        }
    }
    .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .product {
            display: block;
            width: 49%;
            background: #fff;
            margin: 7px 0;
            img {
                width: 100%;
            }
            .info {
                text-align: center;
                padding: 15px;
                .name {
                    color: rgba(0,0,0,.87);
                }
                .buy {
                    margin: 0 auto;
                }
            }
        }
    }
    .ti {
        width: 100%;
        height: 57px;
        line-height: 57px;
        text-align: center;
        font-size: 22px;
    }
    .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
</style>
