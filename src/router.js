import Vue from 'vue'
import Router from 'vue-router'
import Idx from "./components/Index"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Products from "./components/Products"
import Checkout from "./components/Checkout"
import ProgressBar from "./components/symbols/progress-bar"
import CheckoutF from "./components/CheckOutFinished"

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/index",
      component: Idx
    },
    {
      path: "/products",
      component: Products
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "/checkout-finished",
      component: CheckoutF
    },
    {
      path: "/progressbar",
      component: ProgressBar
    },
    {
      path: "/*",
      component: Idx
    }
  ]
})