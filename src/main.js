/*
 * @Author: your name
 * @Date: 2020-07-25 12:08:48
 * @LastEditTime: 2020-08-05 14:58:25
 * @LastEditors: chenpinfu~陈品富
 * @Description: In User Settings Edit
 * @FilePath: \vue3x_demo\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// VUE3.0体验版
// import VueCompositionAPI from '@vue/composition-api'
// import 'todomvc-app-css/index.css'

createApp(App).use(router).use(store).mount('#app')
