import Vue from 'vue'
import VueRrouter from 'vue-router'

// 1.安装插件
Vue.use(VueRrouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home')
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  }
]

const router = new VueRrouter({
  routes,
  mode: 'history'
})

// 3.导出
export default router
