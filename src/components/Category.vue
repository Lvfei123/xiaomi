<template>
    <div>
        <Back title='分类'></Back>
        <div class="container">
            <div class="category">
                <ul>
                    <li v-for="(item, index) in list" :key="index" @click="select(index)" :class="{click:index==i}">{{item}}</li>
                </ul>
            </div>
            <div class="products" style="" ref="products">
                <CategoryList v-for="(item, index) in list" :key="index" :title="item"></CategoryList>
            </div>
        </div>
    </div>
</template>
<script>
import Back from './comment/Back'
import CategoryList from './comment/CategoryList'

export default {
    components:{
        Back,
        CategoryList
    },
    data(){
        return {
            list:['新品','众筹','手机','电视','电脑','家电','路由','出行',
            '穿戴','智能','电源','健康','灯具','儿童','插线板','音频'],
            i:0,
            scroll:0
        }
    },
    methods:{
        select(index){
            this.i=index
            this.$refs.products.scrollTo(0,610*index)
        }
    }
}
</script>
<style lang="less" scoped>
.category::-webkit-scrollbar,.products::-webkit-scrollbar {
    display: none;
}
.container {
    display: flex;
    width: 100%;
    margin-top: 50px;
    height: 626px;
}
.category {
    height: 100%;
    overflow: scroll;
    ul {
        width: 86px;
        border-right: 1px solid rgba(200,200,200);
        margin: 0;
        li {
            margin: 5px auto;
            width: 65px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #fefefe;
            font-size: 14px;
        }
        .click {
            color: #fb7d34;
            font-size: 18px;
        }
    }
}
.products {
    width: 328px;
    height: 100%;
    overflow: scroll;
}
</style>
