import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import '@/styles/gStyle.scss' // 自定义的全局css
import 'u/directives.js'

import App from './App'
import store from './store'
import router from './router'
import * as $pub from 'u/gFunc'


// for(let key in $pub){
//   let funcName = $pub[key];
//   window[key] = funcName;
// }
// Vue.prototype.$pub = window.$pub = window.g = $pub 
Vue.prototype.$pub = $pub
// window._toast = $pub._toast;
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { chaining } from 'u/gInstall'
Vue.use(chaining)


import '@/icons' // icon
import '@/permission' // permission control
import '@/utils/importGlobalComp'
import 'u/directives'
import * as filters from 'u/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
