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
        component: WAN
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
  if(to.path == '/login'){
    next();
  }else{
    next('/login');  
  }
})
 export default router