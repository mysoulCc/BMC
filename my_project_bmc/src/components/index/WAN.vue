<template>
    <div id="wan" class="SubpageContent">
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

