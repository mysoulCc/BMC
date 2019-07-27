// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
Vue.config.productionTip = false

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
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next) =>{
  store.commit('increment',to.name);
  if(sessionStorage.getItem('loginTime') == '1'){
    next();
  }else{
    if(to.path == '/login'){
       next();
    }else{
      next('/login');
    }
  }
  next();
})