import Vue from 'vue'
import Router from 'vue-router'
const Homepage = ()=>import ('@/components/Homepage')
const Category = ()=>import ('@/components/Category')
const Cart = ()=>import ('@/components/Cart')
const PageBuy = ()=>import ('@/components/pages/PageBuy')
const Page = ()=>import ('@/components/pages/Page')
const Product = ()=>import ('@/components/pages/Product')
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path: '/',redirect: '/homepage/page/recommend'},
    {path: '/homepage',redirect: '/homepage/page/recommend'},
    {
      path: '/homepage',
      component: Homepage,
      children: [
        {path: '/homepage/pagebuy/:key',component: PageBuy},
        {path: '/homepage/page/:key',component: Page}
      ]
    },
    {path: '/category',component: Category},
    {path: '/cart',component: Cart},
    {path: '/product/:product_id',component: Product},
    {path: '/pagebuy/:key',component: PageBuy}
  ]
})
