import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import index from '@/components/index'
import login from '@/components/login'
//Home menu
import Home from '@/components/index/Home'
import LAN from '@/components/index/LAN'
import Security from '@/components/index/Security'
import SMS from '@/components/index/SMS'
import System from '@/components/index/System'
import WAN from '@/components/index/WAN'
import WiFi from '@/components/index/WiFi'
import Wizard from '@/components/index/Wizard'
//Paging menu WAN
import APN_Setting from '@/components/index/WAN/APN_Setting'
import Connection_Setting from '@/components/index/WAN/Connection_Setting'
import Connection from '@/components/index/WAN/Connection'
import Network_Mode from '@/components/index/WAN/Network_Mode'
import PIN from '@/components/index/WAN/PIN'
import PLMN from '@/components/index/WAN/PLMN'
// Paging menu SMS
import DraftBox from '@/components/index/SMS/DraftBox'
import InBox from '@/components/index/SMS/InBox'
import NewMessage from '@/components/index/SMS/NewMessage'
import OutBox from '@/components/index/SMS/OutBox'
import SettingsSMS from '@/components/index/SMS/SettingsSMS'
// Paging menu WiFi
import Basic from '@/components/index/WiFi/Basic'
import MACFilter from '@/components/index/WiFi/MACFilter'
import StationList from '@/components/index/WiFi/StationList'
import WPS from '@/components/index/WiFi/WPS'
// Paging menu Security
import DMZ from '@/components/index/Security/DMZ'
import Firewall from '@/components/index/Security/Firewall'
import NAT from '@/components/index/Security/NAT'
// Paging menu System
import About from '@/components/index/System/About'
import Configuration from '@/components/index/System/Configuration'
import DateAndTime from '@/components/index/System/DateAndTime'
import FirmwareUpgrade from '@/components/index/System/FirmwareUpgrade'
import Language from '@/components/index/System/Language'
import Password from '@/components/index/System/Password'
import Reboot from '@/components/index/System/Reboot'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'indexLink',
    component: index,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Wizard',
        name: 'Wizard',
        component: Wizard
      },
      {
        path: '/WAN',
        name: 'WAN',
        component: WAN,
        children:[
          {
            path: '/Connection',
            name: 'Connection',
            component: Connection
          },
          {
            path: '/Connection_Setting',
            name: 'Connection Setting',
            component: Connection_Setting
          },
          {
            path: '/APN_Setting',
            name: 'APN Setting',
            component: APN_Setting
          },
          {
            path: '/Network_Mode',
            name: '4G/3G/2G Modem',
            component: Network_Mode
          },
          {
            path: '/PIN',
            name: 'PIN',
            component: PIN
          },
          {
            path: '/PLMN',
            name: 'PLMN',
            component: PLMN
          }         
        ], redirect:'/Connection',
      },
      {
        path: '/LAN',
        name: 'LAN',
        component: LAN
      },
      {
        path: '/SMS',
        name: 'SMS',
        component: SMS,
        children:[
          {
            path: '/NewMessage',
            name: 'NewMessageLink',
            component: NewMessage
          },
          {
            path: '/InBox',
            name: 'InBoxLink',
            component: InBox
          },
          {
            path: '/OutBox',
            name: 'OutBoxLink',
            component: OutBox
          },
          {
            path: '/DraftBox',
            name: 'DraftBoxLink',
            component: DraftBox
          },
          {
            path: '/SettingsSMS',
            name: 'SettingsSMSLink',
            component: SettingsSMS
          }    
        ], redirect:'/SettingsSMS',
      },
      {
        path: '/WiFi',
        name: 'WiFi',
        component: WiFi,
        children:[
          {
            path: '/Basic',
            name: 'BasicLink',
            component: Basic
          },
          {
            path: '/WPS',
            name: 'WPSLink',
            component: WPS
          },
          {
            path: '/MACFilter',
            name: 'MACFilterLink',
            component: MACFilter
          },
          {
            path: '/StationList',
            name: 'StationListLink',
            component: StationList
          }  
        ], redirect:'/Basic',
      },
      {
        path: '/Security',
        name: 'Security',
        component: Security,
        children:[
          {
            path: '/Firewall',
            name: 'FirewallLink',
            component: Firewall
          },
          {
            path: '/NAT',
            name: 'NATLink',
            component: NAT
          },
          {
            path: '/DMZ',
            name: 'DMZLink',
            component: DMZ
          }  
        ], redirect:'/Firewall',
      },
      {
        path: '/System',
        name: 'System',
        component: System,
        children:[
          {
            path: '/About',
            name: 'AboutLink',
            component: About
          },
          {
            path: '/Configuration',
            name: 'ConfigurationLink',
            component: Configuration
          },
          {
            path: '/FirmwareUpgrade',
            name: 'FirmwareUpgradeLink',
            component: FirmwareUpgrade
          },
          {
            path: '/Password',
            name: 'PasswordLink',
            component: Password
          },
          {
            path: '/DateAndTime',
            name: 'DateAndTimeLink',
            component: DateAndTime
          },    
          {
            path: '/Language',
            name: 'LanguageLink',
            component: Language
          },    
          {
            path: '/Reboot',
            name: 'RebootLink',
            component: Reboot
          }   
        ], redirect:'/About',
      }
    ]
  },
  {
    path:'/login',
    name:'loginLink',
    component:login
  }
]

const router = new Router({
  mode: 'history',
  routes: routers
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
 export default router