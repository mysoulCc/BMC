<template>
    <div id="Wizard_Connection">
       <h3><font>Ethernet Type</font></h3>  
        <div class="Connection">
            <div class="ConnectionLeft">
                <div class="wizardContentClass">                                
                    <tr>
                        <td>
                            <input type="radio" value="WAN" name="internetType" v-model="internetType">
                        </td>
                        <td>
                            WAN Mode
                        </td>
                    </tr>
                    <tr>
                        <th>Choose this, user need to configure WAN Settings.</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" value="3G" name="internetType" v-model="internetType">
                        </td>
                        <td>
                        2G/3G/4G Mode
                        </td>
                    </tr>
                    <tr>
                        <th>Choose this, user need to configure 3G/4G Settings.</th>
                    </tr>                              
                </div>
            </div>
            <div class="ConnectionRight">
                <div class="wizardContentClass" v-if="WanContent">                                
                    <tr>
                        <td>WAN Connection Type</td>
                        <td>
                           <select name="_connectionType" id="_connectionType" v-model="wConnectionTypeValue">
                               <option value="0" id="wConnTypeStatic">STATIC</option>
                               <option value="1" id="wConnTypeDhcp">DHCP (Auto Config)</option>
                               <option value="2" id="wConnTypePppoe">PPPOE (ADSL)</option>
                               <option value="3" id="wConnTypeL2tp" disabled='true'>L2TP</option>
                               <option value="4" id="wConnTypePptp" disabled='true'>PPTP</option>
                           </select>
                        </td>
                    </tr>
                    <!-- STATIC -->
                    <tr v-if='wConnectionTypeValue == 0'>
                        <table>
                            <tbody class="ConnectionTypeClass">
                                <tr>
                                    <th>IP Address</th>
                                    <td>
                                        <input type="text" v-model="wStaticAddress" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Subnet Mask</th>
                                    <td>
                                        <input type="text" v-model="wStaticNetmask" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Default Gateway</th>
                                    <td>
                                        <input type="text" v-model="wStaticGateway" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Primary DNS</th>
                                    <td>
                                        <input type="text" v-model="wStaticPriDNS" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Secondary DNS</th>
                                    <td>
                                        <input type="text" v-model="wStaticSecDns" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </tr>
                    <!-- Dynamic IP -->
                    <tr v-if='wConnectionTypeValue == 1'>
                        <table>
                            <tbody class="ConnectionTypeClass">
                                <tr>
                                    <th>Host Name(optional)</th>
                                    <td>
                                        <input type="text" v-model="wDhcpName" />
                                    </td>
                                </tr>                              
                            </tbody>
                        </table>
                    </tr>
                    <!-- PPPoE -->
                    <tr v-if='wConnectionTypeValue == 2'>
                        <table>
                            <tbody class="ConnectionTypeClass">
                                <tr>
                                    <th>User Name</th>
                                    <td>
                                        <input type="text" v-model="wPppoeUser" maxlength="32" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Administration</th>
                                    <td>
                                        <input type="text" v-model="wPppoePwd" maxlength="32" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Verify Password</th>
                                    <td>
                                        <input type="text" v-model="wPppoePwd2" maxlength="32" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Operation Mode</th>
                                    <td>
                                        <select name="_wPppoeOPMode" id="_wPppoeOPMode" v-model="wPppoeOPModeValue">
                                            <option value="0" id="wPppoeKeepAlive">Keep Alive</option>
                                            <option value="1" id="wPppoeOndemand">On demand</option>
                                            <option value="2" id="wPppoeManual">Manual</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr v-if='wPppoeOPModeValue == 0'>
                                    <th>Keep Alive Mode: Redial Period</th>
                                    <td>
                                        <input type="text" v-model="wPppoeRedialPeriod" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>                                  
                                </tr>
                                <tr v-else-if='wPppoeOPModeValue == 1'>
                                    <th>On demand Mode:  Idle Time</th>
                                    <td>
                                        <input type="text" v-model="wPppoeIdleTime" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </tr>
                    <!-- L2TP -->
                    <tr v-if='wConnectionTypeValue == 3'>
                        <table>
                            <tbody class="ConnectionTypeClass">
                                <tr>
                                    <th>L2TP Server IP Address</th>
                                    <td>
                                        <input type="text" id="wL2tpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>
                                        <input type="text" id="wL2tpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <td>
                                        <input type="text" id="wL2tpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Address Mode</th>
                                    <td>
                                        <select name="_l2tpMode" id="_l2tpMode" v-model="wL2tpModeValue">
                                            <option value="0" id="wL2tpAddrModeS">Static</option>
                                            <option value="1" id="wL2tpAddrModeD">Dynamic</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr v-if='wL2tpModeValue == 0'>
                                   <table>
                                        <tbody class="ConnectionTypeClass">
                                             <tr>
                                                <th>IP Address</th>
                                                <td>
                                                    <input type="text" id="wL2tpAddress" />
                                                </td>
                                            </tr>
                                             <tr>
                                                <th>Subnet Mask</th>
                                                <td>
                                                    <input type="text" id="wL2tpMask" />
                                                </td>
                                            </tr>
                                             <tr>
                                                <th>Default Gateway</th>
                                                <td>
                                                    <input type="text" id="wL2tpGateway" />
                                                </td>
                                            </tr>                                           
                                        </tbody>
                                    </table>
                                </tr>
                                <tr>
                                    <th>Operation Mode</th>
                                    <td>
                                        <select name="_wL2tpMode" id="_wL2tpMode" v-model="wL2tpOperationValue">
                                            <option value="0" id="wL2tpModeKeepAlive">Keep Alive</option>
                                            <option value="1" id="wL2tpModeOndemand">On demand</option>
                                            <option value="2" id="wL2tpModeManual">Manual</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr v-if='wL2tpOperationValue == 0'>
                                    <th>Keep Alive Mode: Redial Period</th>
                                    <td>
                                        <input type="text" id="wPppoeRedialPeriod" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>                                  
                                </tr>
                                <tr v-else-if='wL2tpOperationValue == 1'>
                                    <th>On demand Mode:  Idle Time</th>
                                    <td>
                                        <input type="text" id="wPppoeIdleTime" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </tr>
                    <!-- PPTP -->
                    <tr v-if='wConnectionTypeValue == 4'>
                        <table>
                            <tbody class="ConnectionTypeClass">
                                <tr>
                                    <th>PPTP Server IP Address</th>
                                    <td>
                                        <input type="text" id="wPptpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>
                                        <input type="text" id="wPptpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <td>
                                        <input type="text" id="wPptpServer" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Address Mode</th>
                                    <td>
                                        <select name="_wPptpMode" id="_wPptpMode" v-model="wPptpModeValue">
                                            <option value="0" id="wPptpAddrModeS">Static</option>
                                            <option value="1" id="wPptpAddrModeD">Dynamic</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr v-if='wPptpModeValue == 0'>
                                   <table>
                                        <tbody class="ConnectionTypeClass">
                                             <tr>
                                                <th>IP Address</th>
                                                <td>
                                                    <input type="text" id="wPptpAddress" />
                                                </td>
                                            </tr>
                                             <tr>
                                                <th>Subnet Mask</th>
                                                <td>
                                                    <input type="text" id="wPptpMask" />
                                                </td>
                                            </tr>
                                             <tr>
                                                <th>Default Gateway</th>
                                                <td>
                                                    <input type="text" id="wPptpGateway" />
                                                </td>
                                            </tr>                                           
                                        </tbody>
                                    </table>
                                </tr>
                                <tr>
                                    <th>Operation Mode</th>
                                    <td>
                                        <select name="_wPptpMode" id="_wPptpMode" v-model="wPptpOperationValue">
                                            <option value="0" id="wPptpModeKeepAlive">Keep Alive</option>
                                            <option value="1" id="wPptpModeOndemand">On demand</option>
                                            <option value="2" id="wPptpModeManual">Manual</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr v-if='wPptpOperationValue == 0'>
                                    <th>Keep Alive Mode: Redial Period</th>
                                    <td>
                                        <input type="text" id="wPptpRedialPeriod" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>                                  
                                </tr>
                                <tr v-else-if='wPptpOperationValue == 1'>
                                    <th>On demand Mode:  Idle Time</th>
                                    <td>
                                        <input type="text" id="wPptpIdleTime" onkeyup="value=value.replace(/\D/g,'')" maxlength="5" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </tr>                                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           internetType:'3G',
            WanContent:false,
           wConnectionTypeValue:2,
           wPppoeOPModeValue:2,
           wL2tpModeValue:0,
           wL2tpOperationValue:2,
           wPptpModeValue:0,
           wPptpOperationValue:2,
           wStaticAddress:'',       
           wStaticNetmask:'',       
           wStaticGateway:'',       
           wStaticPriDNS:'',       
           wStaticSecDns:'',       
           wDhcpName:'',       
           wPppoeUser:'',       
           wPppoePwd:'',       
           wPppoePwd2:'',       
           wPppoeRedialPeriod:'',       
           wPppoeIdleTime:''      
        }
    },
    created(){
        this.internetType = this.$store.state.moduleWizardAPI.data.bm_internet_type.internet;
        //Static
        this.wStaticAddress = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.static.ip_addr;
        this.wStaticNetmask = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.static.sub_mask;
        this.wStaticGateway = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.static.getway;
        this.wStaticPriDNS = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.static.pri_dns;
        this.wStaticSecDns = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.static.sec_dns;
        //DHCP
        this.wDhcpName = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.dhcp.host_name;
        //PPPOE
        this.wPppoeUser = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.user_name;
        this.wPppoePwd = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.passwd;
        this.wPppoePwd2 = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.ver_pswd;
        this.wPppoeRedialPeriod = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.period;
        this.wPppoeIdleTime = this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.id_time;
        switch (this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.pppoe.op_mode) {
            case 'Manual':
                this.wPppoeOPModeValue = 2;
                break;
            case 'KeepAlive':
                this.wPppoeOPModeValue = 0;
                break;
            case 'Ondemand':
                this.wPppoeOPModeValue = 1;
                break;
            
        };
        switch (this.$store.state.moduleWizardAPI.data.bm_internet_type.wan_info.wan_select) {
            case 'dhcp':
                this.wConnectionTypeValue = 1;
                break;
            case 'pppoe':
                this.wConnectionTypeValue = 2;
                break;
            case 'static':
                this.wConnectionTypeValue = 0;
                break;
            
        }
    },
    watch:{
        internetType:function (value) {
            if(value == '3G')
                this.WanContent = false;
            else
                this.WanContent = true;
        }
    },
    beforeRouteLeave (to, from, next) {
            let wConNection = new Array();
            wConNection["internet"] = this.internetType;
            if(this.internetType == 'WAN'){
                wConNection["wan_info"] = new Array();
                wConNection["wan_info"]["wan_select"] = this.wConnectionTypeValue;
                switch (this.wConnectionTypeValue) {
                    case 0:
                         wConNection["wan_info"]["static"] = new Array();
                        wConNection["wan_info"]["static"]["ip_addr"] = this.wStaticAddress;
                        wConNection["wan_info"]["static"]["sub_mask"] = this.wStaticNetmask;
                        wConNection["wan_info"]["static"]["getway"] = this.wStaticGateway;
                        wConNection["wan_info"]["static"]["pri_dns"] = this.wPppoeIdleTime;
                        wConNection["wan_info"]["static"]["sec_dns"] = this.wStaticSecDns;
                        break;

                    case 1:
                        wConNection["wan_info"]["dhcp"] = new Array();
                        wConNection["wan_info"]["dhcp"]["host_name"] = this.wDhcpName;
                        break;

                    default:
                        wConNection["wan_info"]["pppoe"] = new Array();
                        wConNection["wan_info"]["pppoe"]["user_name"] = this.wPppoeUser;
                        wConNection["wan_info"]["pppoe"]["passwd"] = this.wPppoePwd;
                        wConNection["wan_info"]["pppoe"]["ver_pswd"] = this.wPppoePwd2;
                        wConNection["wan_info"]["pppoe"]["op_mode"] = this.wPppoeOPModeValue;
                        wConNection["wan_info"]["pppoe"]["id_time"] = this.wDhcpName;
                        wConNection["wan_info"]["pppoe"]["period"] = this.wPppoeRedialPeriod;
                        break;
                }
            }
            this.$store.dispatch('saveFormSet',{wConNection,msg:'Connection'});
            next();
    }
}
</script>
<style scoped>
    .Connection{
        display: flex;
    }
    .ConnectionRight{
        padding-left: 100px;
    }
    tr{
        display: flex;
        padding: 6px;   
        align-items: center;
    }
    td{
        padding-right: 6px;
        color: #0464BB;
    }
    th{
        flex: 1;
        color: #0464BB;
    }
    .ConnectionTypeClass{
        display: inline-flex;
        flex-direction: column;
    }
    .ConnectionTypeClass th{
        display: flex;
        flex: 2;
        padding: 0 8px;
    }
    .ConnectionTypeClass td{
        display: flex;
        flex: 1;
    }
    .ConnectionTypeClass select{
        width: 100%;
    }
</style>
