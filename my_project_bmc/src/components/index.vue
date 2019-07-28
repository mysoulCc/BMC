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
    <div id="content">
      <Content-Name></Content-Name>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexLink',
  data () {
    return {
      headermenus:[]
    }
  },
  created(){ 
      this.headermenus = this.$store.state.moduleHeaderMenus.headermenus 
  }
}
</script>
<style>
  @import url('../assets/css/styte.css');
  @import url('../assets/css/Subpage.css');
</style>


