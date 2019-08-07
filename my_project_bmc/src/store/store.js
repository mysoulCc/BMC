import Vue from 'vue'
import Vuex from 'vuex'
import HomeMunes from './HomeMunes'
import WANPagingMenu from './WANPagingMenu'
import SMSPagingMenu from './SMSPagingMenu'
import WiFiPagingMenu from './WiFiPagingMenu'
import SecurityPagingMenu from './SecurityPagingMenu'
import SystemPagingMenu from './SystemPagingMenu'
import WizardPagingMenu from './WizardPagingMenu'

import WizardAPI from '../store/API/WizardAPI'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        ContentName:'',
        token:''        
    },
    mutations: {
        increment (state,value) {
          state.ContentName = value;
        },
        login_in(state,value){
            sessionStorage.setItem('token',value);
            state.token = value
        },
        login_out(state){
            sessionStorage.removeItem('token');
            state.token = '';
        }
      },
      modules:{
         moduleHeaderMenus:HomeMunes,
         moduleWanMenus:WANPagingMenu,
         moduleSMSMenus:SMSPagingMenu,
         moduleWiFiMenus:WiFiPagingMenu,
         moduleSecurityMenus:SecurityPagingMenu,
         moduleSystemMenus:SystemPagingMenu,
         moduleWizardMenus:WizardPagingMenu,
         moduleWizardAPI:WizardAPI
      }
})
export default store;