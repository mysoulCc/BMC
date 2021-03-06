// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Confirm from './components/Confirm'

Vue.use(ElementUI)
Vue.config.productionTip = false
require('./mock')


const confirm={
  install:function(Vue){
      Vue.component('v-Confirm',Confirm)
  }
};
Vue.use(confirm)
new Vue({
  el: '#app',
  store,
  $,
  router,
  components: { App },
  template: '<App/>'
})
