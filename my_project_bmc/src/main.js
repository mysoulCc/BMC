// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next) =>{
  store.commit('increment',to.name);
  console.log(store.state.count)
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