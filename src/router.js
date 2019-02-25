import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignIn from './views/SignInRegister.vue'
import Product from './views/ProductView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/singin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/product',
      name: 'about',
      component: Product
    }
  ]
})
