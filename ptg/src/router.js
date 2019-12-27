import Vue from 'vue'
import Router from 'vue-router'
import First from './components/First.vue'
import Order from './components/Order.vue'
import Login from './components/Login.vue'
import index from './components/index.vue'
import search from './components/search.vue'
import collect from './components/collect.vue'
import address from './components/address.vue'
import Register from './components/Register.vue'
import personal from './components/personal.vue'
import searchProduct from './components/searchProduct.vue'
import personal_data from './components/personal_data.vue'
import productDetails from "./components/productDetails.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/productDetails',component:productDetails},
    {path:'/personal_data',component:personal_data},
    {path:'/searchProduct',component:searchProduct},
    {path:'/Register',component:Register},
    {path:'/Login',component:Login},
    {path:'/address',component:address},
    {path:'/collect',component:collect},
    {path:'/search',component:search},
    {path:'/Order',component:Order},
    {path:'/index',component:index},
    {path:'/',component:index},
  ]
})