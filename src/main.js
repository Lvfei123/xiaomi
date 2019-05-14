import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  computed:{
    cart(){
      return this.$store.state.cart
    }
  },
  watch: {
    cart:{
      handler(value){
        window.localStorage.setItem('cart',JSON.stringify(value))
      },
      deep:true
    }
  },

}).$mount('#app')
