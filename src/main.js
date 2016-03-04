import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import App from './App'
// import FastClick from 'fastclick'
import routerMap from './routers'
import filters from './filters'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

// 实例化VueRouter
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

let app = Vue.extend({})

routerMap(router)

router.start(app, '#main')

// new Vue({
//   el: 'body',
//   components: {
//     App
//   }
// })
