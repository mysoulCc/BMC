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

/* eslint-disable no-new */
Vue.component('Content-Name',{
  template:'<h2>{{name}}</h2>',
  data(){
    return{
      name:''
    }
  },
  created () {
    this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  methods:{
    fetchData(){
    this.name = this.$route.name; 
   }
  }
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
