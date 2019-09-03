<template>
    <div id="Wizard_WiFi">
       <h3><font>WiFi Configuration</font></h3>  
        <div class="wizardContentClass">                                
            <tr>
                <td>SSID</td>
                <td>
                    <input type="text" v-model="wWifiSSID" @blur="wSSIDValue($event)">
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    <input type="text" v-model="wWifiPwd" @blur="wPwdValue($event)">
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
    methods:{
        wSSIDValue(v){
            let getwWIFIStatus = new Array();
            getwWIFIStatus['ssid'] = v.target.value;
            getwWIFIStatus['wpa_passphrase'] = this.wWifiPwd;
            this.$store.commit('WizardSet',{getwWIFIStatus,msg:'WIFI'});
            console.log(this.$store.state.moduleWizardAPI.SetData);
        },
        wPwdValue(v){
            let getwWIFIStatus = new Array();
            getwWIFIStatus['ssid'] = this.wWifiSSID;
            getwWIFIStatus['wpa_passphrase'] = v.target.value;
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
