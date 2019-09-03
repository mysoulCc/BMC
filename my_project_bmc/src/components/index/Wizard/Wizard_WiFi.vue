<template>
    <div id="Wizard_WiFi">
       <h3><font>WiFi Configuration</font></h3>  
        <div class="wizardContentClass">                                
            <tr>
                <td>SSID</td>
                <td>
                    <input type="text" v-model="wWifiSSID">
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    <input type="text" v-model="wWifiPwd">
                </td>
            </tr>
                               
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            wWifiSSID:'',
            wWifiPwd:'',
        }
    },
    created(){
        this.wWifiSSID = this.$store.state.moduleWizardAPI.data.get_wifi_cfg.wifi.AP1.ssid;
        this.wWifiPwd = this.$store.state.moduleWizardAPI.data.get_wifi_cfg.wifi.AP1.wpa_passphrase;
    },
    watch:{
        wWifiSSID(val){
            let getwWIFIStatus = new Array();
            getwWIFIStatus['ssid'] = val;
            getwWIFIStatus['wpa_passphrase'] = this.wWifiPwd;
            this.$store.commit('WizardSet',{getwWIFIStatus,msg:'WIFI'});
            console.log(this.$store.state.moduleWizardAPI.SetData);
        },
        wWifiPwd(val){
            let getwWIFIStatus = new Array();
            getwWIFIStatus['ssid'] = this.wWifiSSID;
            getwWIFIStatus['wpa_passphrase'] = val;
            this.$store.commit('WizardSet',{getwWIFIStatus,msg:'WIFI'});
            console.log(this.$store.state.moduleWizardAPI.SetData);
        }
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
        padding: 0 8px;
    }
</style>
