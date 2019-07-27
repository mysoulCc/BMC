import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const headermenus = {
  state:{
    headermenus:[
      {
         path:'/',
         name:'Home',
         className:'nav_home'
      },
      {
         path:'/Wizard',
         name:'Wizard',
         className:'nav_wizard'
      },
      {
         path:'/WAN',
         name:'WAN',
         className:'nav_wan'
      },
      {
         path:'/SMS',
         name:'SMS',
         className:'nav_sms'
      },
      {
         path:'/WiFi',
         name:'WiFi',
         className:'nav_wifi'
      },
      {
         path:'/Security',
         name:'Security',
         className:'nav_security'
      },
      {
         path:'/System',
         name:'System',
         className:'nav_system'
      }
    ]
  },
}
const store = new Vuex.Store({
    state:{
        ContentName:'',
        headermenus:[
          {
             path:'/',
             name:'Home',
             className:'nav_home'
          },
          {
             path:'/Wizard',
             name:'Wizard',
             className:'nav_wizard'
          },
          {
             path:'/WAN',
             name:'WAN',
             className:'nav_wan'
          },
          {
             path:'/SMS',
             name:'SMS',
             className:'nav_sms'
          },
          {
             path:'/WiFi',
             name:'WiFi',
             className:'nav_wifi'
          },
          {
             path:'/Security',
             name:'Security',
             className:'nav_security'
          },
          {
             path:'/System',
             name:'System',
             className:'nav_system'
          }
        ]
    },
    mutations: {
        increment (state,value) {
          state.ContentName = value;
        }
      },
      // modules:{
      //   headermenus:headermenus
      // }
})
export default store;