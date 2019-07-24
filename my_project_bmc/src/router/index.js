import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import Home from '@/components/index/Home'
import LAN from '@/components/index/LAN'
import Security from '@/components/index/Security'
import SMS from '@/components/index/SMS'
import System from '@/components/index/System'
import WAN from '@/components/index/WAN'
import WiFi from '@/components/index/WiFi'
import Wizard from '@/components/index/Wizard'
import APN_Setting from '@/components/index/WAN/APN_Setting'
import Connection_Setting from '@/components/index/WAN/Connection_Setting'
import Connection from '@/components/index/WAN/Connection'
import Network_Mode from '@/components/index/WAN/Network_Mode'
import PIN from '@/components/index/WAN/PIN'
import PLMN from '@/components/index/WAN/PLMN'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'indexLink',
    component: index,
    children:[
      {
        path: '/',
        name: 'homeLink',
        component: Home
      },
      {
        path: '/Wizard',
        name: 'wizardLink',
        component: Wizard
      },
      {
        path: '/WAN',
        name: 'wanLink',
        component: WAN,
        children:[
          {
            path: '/Connection',
            name: 'ConnectionLink',
            component: Connection
          },
          {
            path: '/Connection_Setting',
            name: 'ConnectionSettingLink',
            component: Connection_Setting
          },
          {
            path: '/APN_Setting',
            name: 'APNLink',
            component: APN_Setting
          },
          {
            path: '/Network_Mode',
            name: 'NetworkLink',
            component: Network_Mode
          },
          {
            path: '/PIN',
            name: 'PINLink',
            component: PIN
          },
          {
            path: '/PLMN',
            name: 'PLMNLink',
            component: PLMN
          }         
        ], redirect:'/Connection',
      },
      {
        path: '/LAN',
        name: 'lanLink',
        component: LAN
      },
      {
        path: '/SMS',
        name: 'smsLink',
        component: SMS
      },
      {
        path: '/WiFi',
        name: 'wifiLink',
        component: WiFi
      },
      {
        path: '/Security',
        name: 'securityLink',
        component: Security
      },
      {
        path: '/System',
        name: 'systemLink',
        component: System
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