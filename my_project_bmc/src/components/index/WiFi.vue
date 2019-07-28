<template>
    <div id="wifi" class="SubpageContent">
      <ul  class="menuNav-left">
           <li v-for="leftmenu in leftmenus">
                <router-link :to="`${leftmenu.path}`" v-bind:class="leftmenu.className">{{leftmenu.name}}</router-link>
            </li>
      </ul>
        <div class="SubpageContent-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'WiFi',
    data(){
        return{
            leftmenus:[]
        }
    },
    created(){
        this.leftmenus = this.$store.state.moduleWiFiMenus.WiFiLeftMenus
    }
}
</script>

