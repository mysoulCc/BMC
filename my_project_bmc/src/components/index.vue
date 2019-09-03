<template>
  <div id="app">
    <ul id="headerMenu">
      <li class="menuNav" v-for="headermenu in headermenus">
        <router-link :to="`${headermenu.path}`" v-bind:class="headermenu.className">{{headermenu.name}}</router-link>
      </li>
      <li class="menuNavRight">
        FW Version : 1.00
      </li>
    </ul>
    <Content-Name></Content-Name>
    <div id="content">
      
      <router-view />
    </div>
  </div>
</template>

<script>
import GlobalComponent from '@/components/GlobalComponent'
export default {
  name: 'indexLink',
  data () {
    return {
      headermenus:[]
    }
  },
  components:{
    'Content-Name': GlobalComponent
  },
  created(){ 
      this.headermenus = this.$store.state.moduleHeaderMenus.headermenus 
  },
  mounted(){
      this.$router.push('/');
  }
}
</script>
<style>
  @import url('../assets/css/styte.css');
  @import url('../assets/css/Subpage.css');
</style>


