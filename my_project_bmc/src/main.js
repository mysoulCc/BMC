// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false
require('./mock')


Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
