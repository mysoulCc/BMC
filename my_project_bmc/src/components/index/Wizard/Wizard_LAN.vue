<template>
    <div id="Wizard_LAN">
       <h3><font>LAN Configuration</font></h3>  
        <div class="wizardContentClass">                                
            <tr>
                <td>IP Address</td>
                <td>
                    <input type="text" v-model="wizradIP">
                </td>
            </tr>
            <tr>
                <td>IP Subnet Mask</td>
                <td>
                    <input type="text" v-model="wizradSubnet_Mask">
                </td>
            </tr>
                               
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'LAN',
            wizradIP:'',
            wizradSubnet_Mask:''        
        }
    },
   
    mounted(){
       this.wizradIP = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpAddress;
                this.wizradSubnet_Mask = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpSubnetMask;
    },
    
    beforeRouteLeave (to, from, next) {
        let WizardLanValue =[];
        WizardLanValue['ip'] = this.wizradIP;
        WizardLanValue['SubnetMask'] = this.wizradSubnet_Mask;
        this.$store.dispatch('saveFormSet',{WizardLanValue,msg:'LAN'});
        next();
    }
}
</script>
<style scoped>
    tr{
        display: flex;
        padding: 6px;
        justify-content: center;
        align-items: center;
    }
    td{
        flex: 1;
        color: #0464BB;
    }
</style>
