import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../components/Main";
import Cart from "../components/Cart";

Vue.use(VueRouter)

const routes = [

  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/Favorite Heroes',
    name: 'Favorite Heroes',
    component: Cart,
    props: true
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
