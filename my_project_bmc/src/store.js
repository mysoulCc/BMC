import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        ContentName:''
    },
    mutations: {
        increment (state,value) {
          state.count = value;
        }
      }
})
export default store;