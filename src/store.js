import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: data,
  mutations: {
    addCart(state,{product_id,flag}){
      const product = state.cart.find(item=>item.product_id==product_id)
      // const index = state.cart.indexOf(product)
      if (product){
        product.number = flag? ++product.number : --product.number
      }else{
        state.cart.push({
          product_id,
          number:1,
          select:true
        })
      }
    },
    deleteProduct(state,product_id){
      const product = state.cart.find(item=>item.product_id==product_id)
      product.number = 0
    },
    selectCart(state,{product_id,flag}){
      const product = state.cart.find(item=>item.product_id==product_id)
      product.select = flag
    }
  },
  actions: {
    addCart({commit},obj){
      commit('addCart',obj)
    },
    deleteProduct({commit},product_id){
      commit('deleteProduct',product_id)
    },
    selectCart({commit},obj){
      commit('selectCart',obj)
    }
  },
  getters: {
    cartNumber(state){
      var i=0
      for(var key in state.cart) {
          i+=state.cart[key]
      }
      return state.cart.reduce((sum,item)=>sum+=item.number,0)
    }
  }
})
