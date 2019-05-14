<template>
  <div>
    <router-view></router-view>
    <div style="height:60px;"></div>
    <transition name="footer">
      <div class="footer" v-show="isShow">
        <router-link to="/homepage" :class="isCurrent('/homepage')?'homepage1':'homepage'"><i></i><span>首页</span></router-link>
        <router-link to="/category" :class="isCurrent('/category')?'category1':'category'"><i></i><span>分类</span></router-link>
        <router-link to="/cart" :class="isCurrent('/cart')?'cart1':'cart'"><i></i><span>购物车</span></router-link>
        <a href="https://m.mi.com/user" :class="isCurrent('/user')?'user1':'user'"><i></i><span>我的</span></a>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      footerImgs:['./assets/imgs/01.png','./assets/imgs/02.png','./assets/imgs/03.png','./assets/imgs/04.png']
    }
  },
  methods:{
    isCurrent (path) {
      return this.$route.path.indexOf(path)>=0
    }
  },
  computed:{
    isShow(){
      let isShow = false
      const pathArr = ['/homepage','/category']
      pathArr.forEach(path => {
        if(this.$route.path.indexOf(path)>=0)
          isShow = true
      })
      return isShow
    }
  }
}
</script>
<style lang='less' scoped>
.footer-enter-active, .footer-leave-active {
  transition: all .3s;
}
.footer-enter, .footer-leave-to {
  transform: translateY(100%)
}
.footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  width: 100%;
  height: 52px;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  display: flex;
  a {
    display: block;
    color: #999;
    width:25%;
    font-size: 0.8rem;
    text-align: center;
    i {
      width: 23px;
      height: 23px;
      background-size: cover;
      margin: 4px auto;
      display: block;
    }
  }
}
.homepage {
  i {
    background: url('./assets/imgs/01.png')
  }
}
.category {
  i {
    background: url('./assets/imgs/02.png')
  }
}
.cart {
  i {
    background: url('./assets/imgs/03.png')
  }
}
.user {
  i {
    background: url('./assets/imgs/04.png')
  }
}
.homepage1 {
  i {
    background: url('./assets/imgs/01on.png')
  }
  .orange
}
.category1 {
  i {
    background: url('./assets/imgs/02on.png')
  }
  .orange
}
.cart1 {
  i {
    background: url('./assets/imgs/03on.png')
  }
  .orange
}
.user1 {
  i {
    background: url('./assets/imgs/04on.png')
  }
  .orange
}
.orange() {
  span {color: #ff6700;}
}
</style>