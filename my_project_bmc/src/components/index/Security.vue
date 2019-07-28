<template>
    <div id="sms" class="SubpageContent">
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
    name:'Security',
    data(){
        return{
            leftmenus:[]
        }
    },
    created(){
        this.leftmenus = this.$store.state.moduleSecurityMenus.SecurityLeftMenus
    }
}
</script>

