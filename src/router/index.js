/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-14 17:32:05
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 16:22:05
 * @FilePath: /demo-c-meiriyouxianguoc/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Notfound from '../views/404.vue'
const routes = [
  {
    path: '/',
    redirect: '/home/classify'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: () => import('../views/Home/Classify.vue')
      },
      {
        path: 'shopping',
        component: () => import('../views/Home/Shopping.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/:pathMatch(.*)/',
    name: '404',
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
