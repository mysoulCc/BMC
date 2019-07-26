<template>
  <div id="app">
    <ul id="headerMenu">
      <!-- <li class="menuNav">
        <router-link to="/">Home</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/Wizard">Wizard</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/WAN">WAN</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/LAN">LAN</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/SMS">SMS</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/WiFi">WiFi</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/Security">Security</router-link>
      </li>
      <li class="menuNav">
        <router-link to="/System">System</router-link>
      </li> -->
      <li class="menuNav" v-for="headermenu in headermenus">
        <router-link :to="`${headermenu.path}`" v-bind:class="headermenu.className">{{headermenu.name}}</router-link>
      </li>
      <li class="menuNavRight">
        FW Version : 1.00
      </li>
    </ul>
    <div id="content">
      <h2>{{ContentName}}</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from '../store';
export default {
  name: 'indexLink',
  data () {
    return {
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
    }
  },
  created(){
    store.commit('increment');
    console.log(store.state.count)
    this.ContentName = store.state.count;
  }
}
</script>
<style>
  @import url('../assets/css/styte.css');
  @import url('../assets/css/Subpage.css');
</style>


