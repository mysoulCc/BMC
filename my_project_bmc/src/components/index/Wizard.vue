<template>
    <div id="wizard"  class="SubpageContent">
        <ul class="WizardMenuHeader">
            <li class="wizardMenuClass" v-for="item in WizardItems">              
                <router-link :to="`${item.path}`">
                    <span>Step {{item.id}}</span>
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
        <div class="wizardButton">
            <input type="button" class='BackButton' value="Back" @click="Back()" v-if="activeId === 1 ? false:true">
            <input type="button" class='NextButton' value="Next" @click="apply()" v-if="activeId === 4 ? true:false">
            <input type="button" class='NextButton' value="Next" @click="Next()" v-else>
        </div>
        <v-Confirm></v-Confirm>
    </div>
</template>
<script>
export default {
    name:'Wizard',
    data(){
        return{
            WizardItems:[],
            activeId:1
        }
    },
    created(){     
        this.WizardItems = this.$store.state.moduleWizardMenus.WizardHeaderMenu;         
    },
    methods:{
        Next:function(){
            this.activeId ++;
            switch (this.activeId) {
                case 2:
                    this.$router.push('/Wizard_WAN')
                    break;

                case 3:
                    this.$router.push('/Wizard_Connection')
                    break;
            
                default:
                    this.$router.push('/Wizard_WiFi')
                    break;
            }
        },
        Back:function() {
            this.activeId --;
             switch (this.activeId) {
                case 2:
                    this.$router.push('/Wizard_WAN')
                    break;

                case 3:
                    this.$router.push('/Wizard_Connection')
                    break;
            
                default:
                    this.$router.push('/Wizard_LAN')
                    break;
            }
        },
        apply:function(){
            alert('123')
        }
    },
    beforeRouteUpdate (to, from, next) {
       switch (to.path) {
           case '/Wizard_LAN':
               this.activeId = 1;
               break;
       
           case '/Wizard_WAN':
               this.activeId = 2;
               break;
       
           case '/Wizard_Connection':
               this.activeId = 3;
               break;
       
           default:
               this.activeId = 4;
               break;
       }
        next();
    }
}
</script>
<style scoped>
    #wizard{      
        flex-direction: column;        
    }
    
    ul > li{
        display: inline-flex;
        background-color: #EBEBEB;
        border: #E0E0E0 solid 1px;
        border-radius: 0 50px 50px 0;
        margin-right: 6px;
    }
    a{
        display: inline-flex;
        flex-direction: column;
        color: #fff;
        width: 213px;
        height: 40px;
        border-radius: 0 50px 50px 0; 
    }
    ul > li:first-child{
        margin-left: 40px;
    }
    span{
        font: bold 18px Verdana, Arial, Helvetica, sans-serif;
    }
    .router-link-active{
        background-color: #EA8511;
        border: #EA8511 solid 1px;
    }
    .BackButton{
        float: left;
    }
    .NextButton{
        float: right;
    }
</style>


