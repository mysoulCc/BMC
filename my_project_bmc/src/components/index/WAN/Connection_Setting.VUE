<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>Ethernet Settings</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="Ethernet Type" name="first"></el-tab-pane>                       
                            <el-tab-pane label="WAN Settings" name="second" v-if="isShow"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row>
                    <el-radio-group v-model="InternetTyperadio">
                        <el-radio label="WAN">WAN Mode</el-radio>
                        <el-row>
                            <el-col :span="24">
                                <div class="grid-content bg-purple-dark">
                                    <span class="grid-content-span-flex">Choose this, user need to configure WAN Settings.</span>       
                                </div>
                            </el-col>
                        </el-row>
                        <el-radio label="3G">LAN Mode</el-radio>
                        <el-row>
                            <el-col :span="24">
                                <div class="grid-content bg-purple-dark">
                                    <span class="grid-content-span-flex">Choose this, user need to configure 3G/4G Settings.</span>       
                                </div>
                            </el-col>
                        </el-row>                                
                    </el-radio-group>
                </el-row> 
                <el-row>
                    <el-col :span="1" :push="22" class="grid-content-button-flex">
                        <el-button type="success" :loading="loadingInternet" @click="setInternetType()">Apply</el-button>
                    </el-col>
                </el-row>                
            </div>
            <div v-else-if="LabelContent === 'second'">
                <el-row :gutter="16">
                    <el-col :span="6" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">WAN Connection Type</span>
                            <el-select class="grid-content-select-flex" size='mini' v-model="valueWAN" @change="WANConnectionTypeStatus">
                                <el-option
                                v-for="item in optionsWAN"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>        
                </el-row>       
                <div v-show="WANTypeStatus == '0'">
                    <el-row :gutter="16" class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">IP Address</span>
                                <el-input
                                type="text"
                                v-model="sIpAddress"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Subnet Mask</span>
                                <el-input
                                type="text"
                                v-model="sSubnetMask"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Default Gateway</span>
                                <el-input
                                type="text"
                                v-model="sDefGateway"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Primary DNS</span>
                                <el-input
                                type="text"
                                v-model="sPrDNS"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Secondary DNS</span>
                                <el-input
                                type="text"
                                v-model="sSecDNS"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>    
                </div>
                <div v-show="WANTypeStatus == '1'">
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Host Name(optional)</span>
                                <el-input
                                type="text"
                                v-model="dHostName"
                                maxlength="32"
                                show-word-limit
                                size='mini'
                                :title='dHostName'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">DNS Manually</span>
                                <el-select class="grid-content-select-flex" size='mini' v-model="dDnsManually">
                                    <el-option
                                    v-for="item in optionsWANDHCP"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.disabled">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Primary DNS</span>
                                <el-input
                                type="text"
                                v-model="dPrDNS"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Secondary DNS</span>
                                <el-input
                                type="text"
                                v-model="dSecDNS"
                                maxlength="15"
                                show-word-limit
                                size='mini'
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                </div>
                <div v-show="WANTypeStatus == '2'">
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">User Name</span>
                                <el-input
                                type="text"
                                v-model="pUserName"
                                maxlength="35"
                                show-word-limit
                                size='mini'
                                :title="pUserName"
                                >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Password</span>
                                <el-input v-model="pPassword" size='mini' maxlength='15' show-password></el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Verify Password</span>
                                <el-input v-model="pVerPwd" size='mini' maxlength='15' show-password></el-input>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings'>
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">Operation Mode</span>
                                <el-select class="grid-content-select-flex" size='mini' v-model="pOperationMode">
                                    <el-option
                                    v-for="item in poptionWANPPPOE"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.disabled">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>        
                    </el-row>
                    <el-row :gutter="16"  class='grid-content-wan-settings' v-show="pOperationMode == '1'">
                        <el-col :span="6" :offset="4">
                            <div class="grid-content bg-purple grid-content-flex">
                                <span class="grid-content-span-flex">On demand Mode:  Idle Time</span>
                                <el-input
                                    type="text"
                                    v-model="pIdleTime"
                                    maxlength="5"
                                    show-word-limit
                                    size='mini'
                                    >
                                </el-input>
                            </div>
                        </el-col>        
                    </el-row>
                </div>
                <el-row>
                    <el-col :span="1" :push="22" class="grid-content-button-flex">
                        <el-button type="success" :loading="loadingWAN" @click="doSetWANSettings(`${valueWAN}`)">Apply</el-button>
                    </el-col>
                </el-row>
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'ConnectionSettingLink',
    data(){
        return{
            activeName:'first',
            LabelContent: 'first',
            msg:'这是Connection Setting页面',
            msg1:'这是WAN Settings页面',
            isShow:false,
            InternetTyperadio:'',
            loadingInternet:false,
            loadingWAN:false,
            optionsWAN:[
                {
                    value:'0',
                    label:'STATIC'
                },
                {
                    value:'1',
                    label:'DHCP (Auto Config)'
                },
                {
                    value:'2',
                    label:'PPPOE (ADSL)'
                },
                {
                    value:'3',
                    label:'L2TP',
                    disabled:true
                },
                {
                    value:'4',
                    label:'PPTP',
                    disabled:true
                }
            ],
            valueWAN:'0',
            WANTypeStatus:'',
            //STATIC
            sIpAddress:'',
            sSubnetMask:'',
            sDefGateway:'',
            sPrDNS:'',
            sSecDNS:'',
            //DHCP
            dHostName:'',
            optionsWANDHCP:[
                {
                    value:'0',
                    label:'Disable'
                },
                {
                    value:'1',
                    label:'Enable'
                }
            ],
            dDnsManually:'0',
            dPrDNS:'',
            dSecDNS:'',
            //PPPOE (ADSL)
            pUserName:'',
            pPassword:'',
            pVerPwd:'',
            poptionWANPPPOE:[
                {
                    value:'0',
                    label:'Keep Alive',
                },
                {
                    value:'1',
                    label:'On demand',
                },
                {
                    value:'2',
                    label:'Manual',
                }
            ],
            pOperationMode:'0',
            pIdleTime:'0'
        }
    },
    created(){
        this.WANTypeStatus = this.valueWAN;
        this.axios.get('api/wizardDate')
                    .then(request => {                     
                        this.InternetTyperadio = request.data.bm_internet_type.internet;
                        if(this.InternetTyperadio === 'WAN')
                            this.isShow = true;
                        else
                            this.isShow = false;
                        switch (request.data.bm_internet_type.wan_info.wan_select) {
                            case 'dhcp':
                                this.valueWAN = '1';
                                break;
                            case 'pppoe':
                                this.valueWAN = '2';
                                break;
                            case 'static':
                                this.valueWAN = '0';
                                break;
                            
                        };
                        this.WANTypeStatus = this.valueWAN;
                        //get static
                        this.sIpAddress = request.data.bm_internet_type.wan_info.static.ip_addr;
                        this.sSubnetMask = request.data.bm_internet_type.wan_info.static.sub_mask;
                        this.sDefGateway = request.data.bm_internet_type.wan_info.static.getway;
                        this.sPrDNS = request.data.bm_internet_type.wan_info.static.pri_dns;
                        this.sSecDNS = request.data.bm_internet_type.wan_info.static.sec_dns;
                        //get DHCP
                        this.dHostName = request.data.bm_internet_type.wan_info.dhcp.host_name;
                        this.dDnsManually = request.data.bm_internet_type.wan_info.dhcp.dns_mode;
                        this.dPrDNS = request.data.bm_internet_type.wan_info.dhcp.pri_dns;
                        this.dSecDNS = request.data.bm_internet_type.wan_info.dhcp.sec_dns;
                        //get PPPOE
                        this.pUserName = request.data.bm_internet_type.wan_info.pppoe.user_name;
                        this.pPassword = request.data.bm_internet_type.wan_info.pppoe.passwd;
                        this.pVerPwd = request.data.bm_internet_type.wan_info.pppoe.ver_pswd;
                        this.pIdleTime = request.data.bm_internet_type.wan_info.pppoe.id_time;
                        switch (request.data.bm_internet_type.wan_info.pppoe.op_mode) {
                            case 'Manual':
                                this.pOperationMode = '2';
                                break;
                            case 'KeepAlive':
                                this.pOperationMode = '0';
                                break;
                            case 'Ondemand':
                                this.pOperationMode = '1';
                                break;
                            
                        };                        
                    })
                    .catch(error => {
                        console.log(error);                      
                    })
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //网络连接类型页面切换事件
        WANConnectionTypeStatus(val){
            this.WANTypeStatus = val;
        },       
        //dosetInternetApi
        setInternetType(){            
            this.loadingInternet = true;
             setTimeout(() => {
                if(this.InternetTyperadio === 'WAN')
                    this.isShow = true;
                else
                    this.isShow = false;
                this.loadingInternet = false;
            }, 3000);
        },
        //dosetWANApi
        doSetWANSettings(val){
            this.loadingWAN = true;
            this.valueWAN = val;
            switch (val) {
                case '0':
                   
                    break;

                case '1':
                    
                    break;

                case '2':
                    
                    break;

                case '3':
                    
                    break;
                                   
                default:

                    break;
            }
            setTimeout(() => {
                this.loadingWAN = false;
            }, 3000);
        }
    }
}
</script>
<style scoped>
    .el-row {
        margin: 20px 0px;
        &:last-child {
            margin-bottom: 0;        
        }   
    }
    .el-row:first-child {
        margin-top:0;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-radio-group{
        margin: 10px 40px;
    }
</style>
<style>
    .Paging-content-style .has-gutter th{
        background-color: #aabbc5;
        padding: 2px;
    }
    .Paging-content-style .has-gutter th div{      
        color: #fff;
    }
</style>
