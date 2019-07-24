<template>
    <div id="wan">
       <li class="menuNav-left" v-for="leftmenu in leftmenus">
        <router-link :to="`${leftmenu.path}`" v-bind:class="leftmenu.className">{{leftmenu.name}}</router-link>
      </li>
        <router-view />
    </div>
</template>
<script>
export default {
    name:'wanLink',
    data(){
        return{
            leftmenus:[
                {
                    path: '/Connection',
                    name: 'ConnectionLink',
                    className: 'Connection'           
                },
                {
                    path: '/Connection_Setting',
                    name: 'ConnectionSettingLink',
                    className: 'Connection_Setting'
                },
                {
                    path: '/APN_Setting',
                    name: 'APNLink',
                    className: 'APN_Setting'
                },
                {
                    path: '/Network_Mode',
                    name: 'NetworkLink',
                    className: 'Network_Mode'
                },
                {
                    path: '/PIN',
                    name: 'PINLink',
                    className: 'PIN'
                },
                {
                    path: '/PLMN',
                    name: 'PLMNLink',
                    className: 'PLMN'
                }   
            ]
        }
    }
}
</script>

