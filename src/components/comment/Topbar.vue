<template>
    <div>
        <div class="search">
            <img src="../../assets/imgs/logo.png" alt="">
            <div class="textSearch">
                <i></i>
                搜索商品名称
            </div>
            <i class="user"></i>
        </div>
        <i :class="['direct',isSlip?'hidden':'show']" @click="isSlip=!isSlip"></i>
        <!-- 滑动展示商品类别 -->
        <div class="slip-container" v-show="isSlip">
            <div class="slip">
                <ul>
                    <li v-for="(item, index) in category" :key="index">
                        <span :style="isCurrent(item.path)?{'border-bottom':'2px solid rgba(237, 91, 0)',color:'rgba(237, 91, 0)'}:{}" 
                        @click=goto(item.path)>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 表格展示商品类别 -->
        <div class="table-container" v-show="!isSlip">
            <div class="table">
                <span>全部</span>
                <ul>
                    <li v-for="(item, index) in category" :key="index" @click=goto(item.path)
                    :class="isCurrent(item.path)?'focus':''">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="black" v-show="!isSlip"></div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isSlip:true
        }
    },
    computed:{
        category(){
            return this.$store.state.category
        }
    },
    methods:{
        isCurrent (path) {
            return this.$route.path === path
        },
        goto(path) {
            this.$router.push(path)
            this.isSlip=true
        }
    }
}
</script>
<style lang="less" scoped>
.table-container .table ul .focus {
    background-color: #fde0d5;
    color: #ff6700;
    border: 1px solid #ff6700;
}
.search {
    background: #f2f2f2;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width:29px;
        height: 19px;
        margin: 0 12px;
    }
    .textSearch {
        background-color: #fff;
        height: 35px;
        width: 297px;
        color: rgba(0,0,0,.3);
        font-size: 17px;
        font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
        line-height: 35px;
        i {
            width: 30px;
            height: 15px;
            display: inline-block;
            background: url('../../assets/imgs/search.png') center no-repeat;
            background-size: 23px;
        }
    }
    .user {
        width: 30px;
        height: 30px;
        background: url('../../assets/imgs/user.png') center no-repeat;
        background-size: 23px;
        margin:0 5%;
    } 
}  
.slip-container {
    overflow: hidden;
    margin: 0 auto;
    background: #f2f2f2;
    .slip::-webkit-scrollbar {
        display: none;
    }
    .slip {
        height: 36px;
        width: 375px;
        
        display: inline-block;
        overflow-x: scroll;
        ul {
            max-width: 600px;
            height: 36px;
            width: 480px;
        }
        li {
            color: rgb(116, 116, 116);
            margin: 0 13px;
            line-height: 35px;
            float: left;
            span {
                height: 90%;
                display: inline-block;
            }
        }
    }
}
.table-container {
    float: left;
    height: 40px;
    width: 100%;
    background: #f2f2f2;
    color: #3c3c3c;
    position: relative;
    z-index: 200;
    .table {
        width: 100%;
        background: #f2f2f2;
        height: 135px;
        margin: 0 auto;
        ul {
            margin-left: 15px;
            margin-top: 18px;
            li {
                float: left;
                width: 85px;
                height: 30px;
                border: 1px solid #e5e5e5;
                margin: 0 11px 14px 0;
                background: white;
                font-size: 14px;
                line-height: 32px;
                text-align: center;
                border-radius: 4px;
                &:nth-child(4){
                    margin-right: 0px;
                }
            }
        }
        span {
            display: block;
            padding-top: 10px;
        }
    }
}
.black {
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(100, 100, 100, 0.6);
    position: fixed;
}
.direct {
    z-index: 9999;
    position: absolute;
    background: url('../../assets/imgs/箭头.png');
    background-size: cover;
    width: 23px;
    height: 23px;
    margin-left: 8px;
    top: 53px;
    right: 10px;  
}
.hidden {
    transition: all .3s;
}
.show {
    transition: all .3s;
    transform: rotate(180deg);
}
</style>