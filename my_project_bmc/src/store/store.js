import Vue from 'vue'
import Vuex from 'vuex'
import HomeMunes from './HomeMunes'
import WANPagingMenu from './WANPagingMenu'
import SMSPagingMenu from './SMSPagingMenu'
import WiFiPagingMenu from './WiFiPagingMenu'
import SecurityPagingMenu from './SecurityPagingMenu'
import SystemPagingMenu from './SystemPagingMenu'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        ContentName:''        
    },
    mutations: {
        increment (state,value) {
          state.ContentName = value;
        }
      },
      modules:{
         moduleHeaderMenus:HomeMunes,
         moduleWanMenus:WANPagingMenu,
         moduleSMSMenus:SMSPagingMenu,
         moduleWiFiMenus:WiFiPagingMenu,
         moduleSecurityMenus:SecurityPagingMenu,
         moduleSystemMenus:SystemPagingMenu
      }
})
export default store;