/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-14 17:32:05
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 15:04:04
 * @FilePath: /demo-c-meiriyouxianguoc/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.css'
import vant from 'vant'
import 'vant/lib/index.css';
import router from './router'
import 'lib-flexible'
// import store from './store'

createApp(App).use(vant).use(router)
  // .use(store)
  .mount('#app')

