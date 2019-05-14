<template>
    <div>
        <a v-for="(img, index) in productsInfo.beforeImg" :key="'before'+index"
        :href="img.product_id?'https://m.mi.com/commodity/detail/'+img.product_id:'javascript:;'">
            <img :src="img.img_url" alt="" class="after" >
        </a>
        <div class="container">
            <a class="product" v-for="(product, index) in productsInfo.products" :key="index" 
            :href="'https://m.mi.com/commodity/detail/'+product.product_id">
                <img :src="product.img_url" alt="">
                <div class="info">
                    <div class="name">{{product.product_name}}</div>
                    <div class="brief">{{product.product_brief}}</div>
                    <div class="price">￥{{product.product_price}}<s>￥{{product.product_org_price}}</s></div>
                </div>
            </a>
        </div>
        <div class="ti" v-if="productsInfo.kind"><a :href="productsInfo.url">更多小米{{productsInfo.kind}}产品></a></div>
        <a v-for="(img, index) in productsInfo.afterImg" :key="'after'+index"
        :href="img.product_id?'https://m.mi.com/commodity/detail/'+img.product_id:'javascript:;'">
            <img :src="img.img_url" alt="" class="after" >
        </a>
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
    .name,.brief {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }
    .before,.after {
        margin: 5px 0;
        width: 100%;
    }
    .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .product {
            display: block;
            width: 49.7%;
            img {
                width: 100%;
            }
            .info {
                padding: 15px;
                .name {
                    color: rgba(0,0,0,.87);
                }
                .brief {
                    color: rgba(0,0,0,.54);
                    font-size: 13px;
                    margin: 3px 0;
                }
                .price {
                    color: #ea625b;
                    s {
                        color: rgba(0,0,0,.54);
                        font-size: 12.5px;
                        margin-left: 4px;
                    }
                }
            }
        }
    }
    .ti {
        width: 100%;
        height: 57px;
        line-height: 57px;
        text-align: center;
        border-top: 1px solid rgb(150, 150, 150);
        a {
            color: rgba(0,0,0,.6)
        }
    }
</style>
