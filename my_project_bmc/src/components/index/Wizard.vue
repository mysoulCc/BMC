<template>
    <div id="wizard"  class="SubpageContent">
        <ul class="WizardMenuHeader">
            <li class="wizardMenuClass" v-for="item in WizardItems">              
                <router-link :to="`${item.path}`" :class="item.className">
                    <span>Step {{item.id}}</span>
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <div class="WizardContent">
            <router-view></router-view>
        </div>
        <div class="wizardFooter">
            <input type="button" class='BackButton btn' value="Back" @click="Back()" v-if="activeId === 1 ? false:true">
            <input type="button" class='NextButton btn' value="Apply" @click="doset()" v-if="activeId === 4 ? true:false">
            <input type="button" class='NextButton btn' value="Next" @click="Next()" v-else>
        </div>
        <v-Confirm :show-dialog="showDialog" :confirm-msg="Czas"></v-Confirm>
    </div>
</template>
<script>
export default {
    name:'Wizard',
    data(){
        return{
            showDialog:false,
            Czas:'20',
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
        doset:function(){
            this.showDialog = true;
            let WizardCountdown = window.setInterval(() => {
                this.Czas--;
                if(this.Czas == 0 ){
                    window.clearInterval(WizardCountdown);
                    this.$store.commit('login_out');
                    this.$router.push('/login');                
                }
            },1000)
        }
    },
    beforeRouteUpdate (to, from, next) {
        $("."+from.path.replace("/","")).css('background-color','#0464BB');
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
    .WizardMenuHeader{
        flex: 1;
    }
    .WizardContent{
        flex: 8;
    }
    .wizardFooter{
        flex: 1;
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
        background-color: #EA8511 !important;
        border: #EA8511 solid 1px;
    }  
    .BackButton{
        float: left;
    }
    .NextButton{
        float: right;
    }
</style>


