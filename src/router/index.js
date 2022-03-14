/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-14 17:32:05
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-14 19:16:33
 * @FilePath: /demo-c-meiriyouxianguoc/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
