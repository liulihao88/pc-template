import Vue from 'vue'
// 国际化



import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/utils/setElement'

import '@/styles/index.scss' // global css
import '@/styles/gStyle.scss' // 自定义的全局css
import 'u/directives.js'

import App from './App'
import store from './store'
import router from './router'
import * as $pub from 'u/gFunc'

import KdComponents from '@kd/components'
import '@kd/components/dist/kd-components.css'

Vue.use(KdComponents)


// for(let key in $pub){
//   let funcName = $pub[key];
//   window[key] = funcName;
// }
// Vue.prototype.$pub = window.$pub = window.g = $pub 
Vue.prototype.$pub = window.$pub = $pub
Vue.prototype.$toast =window.$toast=$pub.$toast;
Vue.prototype.log =window.log=$pub.log;
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
import {validateMixin} from '@/utils/validateMixin'

Vue.mixin({
  data() {
    return {
      mLoading1: false,
      mIsDev: process.env.NODE_ENV === 'development',
    };
  },
  mixins: [validateMixin], // 全局的mixins校验
})




Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // i18n,
  store,
  render: h => h(App)
})
