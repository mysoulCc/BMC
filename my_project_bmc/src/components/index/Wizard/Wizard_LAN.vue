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
    // created(){
    //     this.wizradIP = this.$store.state.moduleWizardAPI.data
        
    // },
    mounted(){
       // this.GetWizardApi() 
       console.log(2);
       
        this.wizradIP = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpAddress;
        this.wizradSubnet_Mask = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpSubnetMask; 
    },
    // methods:{
    //     async GetWizardApi(data){         
    //         try {         
    //             let res = await this.axios.get('api/wizardDate', {params: data});
    //             this.$store.dispatch('saveForm',res.data);               
    //             this.wizradIP = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpAddress;
    //             this.wizradSubnet_Mask = this.$store.state.moduleWizardAPI.data.LanConfiguration.IpSubnetMask;
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }  
    // },
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
