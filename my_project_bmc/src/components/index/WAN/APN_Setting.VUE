<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>Profile</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="Profile" name="first"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row :gutter="16">
                    <el-col :span="7" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Profile List</span>
                            <el-select class="grid-content-select-flex" size='mini' v-model="ApnMode" @change="ApnProfileList">
                                <el-option
                                v-for="item in optionsAPN"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-col :span="1" class="grid-content-button-flex">
                                <el-button type="info" size='small' :loading="loadingApn" :disabled='SetConnectDisabled' @click="SetConnect(`${ApnMode}`)">Set Connect</el-button>
                            </el-col>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Profile ID</span>
                            <el-input
                            type="text"
                            v-model="apnProfileId"
                            maxlength="15"
                            show-word-limit
                            size='mini'
                            disabled
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Name</span>
                            <el-input
                            type="text"
                            v-model="apnName"
                            maxlength="15"
                            show-word-limit
                            size='mini'
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">APN</span>
                            <el-input
                            type="text"
                            v-model="apnAPN"
                            maxlength="15"
                            show-word-limit
                            size='mini'
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">User</span>
                            <el-input
                            type="text"
                            v-model="apnUser"
                            maxlength="15"
                            show-word-limit
                            size='mini'
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Password</span>
                            <el-input v-model="apnPassword" size='mini' maxlength='15' show-password></el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">PDP Type</span>
                            <el-select class="grid-content-select-flex" size='mini' v-model="aPDPTypeMode">
                                <el-option
                                v-for="item in optionsAPNPDPType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select> 
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Authentication Preference</span>
                           <el-select class="grid-content-select-flex" size='mini' v-model="aAutPreferenceMode">
                                <el-option
                                v-for="item in optionsAPNAutPreference"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="1" :offset="20">
                        <div class="grid-content bg-purple grid-content-flex">
                            <el-button type="success" :loading="loadingApply" :disabled="doSetAPNDisabled" @click="doSetAPN(`${ApnMode}`)">Apply</el-button>
                        </div>
                    </el-col>        
                    <el-col :span="1" :offset="1">
                        <div class="grid-content bg-purple grid-content-flex">
                             <el-button type="success" :loading="loadingDelete" :disabled="doDeleteAPNDisabled" @click="doDeleteAPN(`${ApnMode}`)">Delete</el-button>
                        </div>
                    </el-col>        
                </el-row> 
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'APNLink',
    data(){
        return{
            activeName:'first',
            LabelContent: 'first',
            optionsAPN:[],
            ApnMode:'',
            loadingApn:false,
            SetConnectDisabled:false,
            loadingApply:false,
            loadingDelete:false,
            doSetAPNDisabled:false,
            doDeleteAPNDisabled:false,
            //get api apnlist
            apnlist:[],
            optionsAPNPDPType:[
                {
                    value:"0",
                    label:"IPV4",
                },
                {
                    value:"2",
                    label:"IPV6",
                },
                {
                    value:"3",
                    label:"IPV4/IPV6",
                },
            ],
            optionsAPNAutPreference:[
                {
                    value:"1",
                    label:"PAP",
                },
                {
                    value:"2",
                    label:"CHAP",
                },
                {
                    value:"3",
                    label:"PAP/CHAP",
                },
            ],
            //get 默认显示
            apnProfileId:'',
            apnName:'',
            apnAPN:'',
            apnUser:'',
            apnPassword:'',
            aPDPTypeMode:'',
            aAutPreferenceMode:''
        }
    },
    created(){
        this.doGetApi();
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //获取APN列表
        doGetApi(){
            this.axios.get('api/wizardDate')
                    .then(request => {
                        for (let bm_3GPP = 1; bm_3GPP <= request.data.bm_apn.bm_3GPP.bm_total; bm_3GPP++) {
                            if(request.data.bm_apn.bm_3GPP['APN_'+bm_3GPP]){
                                this.apnlist[bm_3GPP-1] = request.data.bm_apn.bm_3GPP['APN_'+bm_3GPP];                        
                            }
                                
                        }
                        let r = this.apnlist.map(item => {
                            if(item.bm_profile_index == '1'){
                                //get 默认显示
                                this.ApnMode = item.bm_profile_index;
                                this.apnProfileId = 'PID-' + item.bm_profile_index;
                                this.apnName = item.bm_apn_name;
                                this.apnAPN = item.bm_profile_name;
                                this.apnUser = item.bm_username;
                                this.apnPassword = item.bm_password;
                                this.aPDPTypeMode = item.bm_pdp_type;
                                this.aAutPreferenceMode = item.bm_auth_preference;
                                this.doDeleteAPNDisabled = true;
                                return {
                                    label: '(*)' + item.bm_profile_name,
                                    value: item.bm_profile_index 
                                }
                            }else{
                                return {
                                    label: item.bm_profile_name,
                                    value: item.bm_profile_index 
                                }
                            }
                            
                        })
                        r[this.apnlist.length] = [];
                        r[this.apnlist.length]['value'] = 'NEW';
                        r[this.apnlist.length]['label'] = 'Add New';
                        if(r.length <= 1){
                            this.doDeleteAPNDisabled = true;
                            this.SetConnectDisabled = true;
                            this.ApnMode = r[0].value;
                            this.apnProfileId = 'NEW'
                            this.apnName = '';
                            this.apnAPN = '';
                            this.apnUser = '';
                            this.apnPassword = '';
                            this.aPDPTypeMode = '3';
                            this.aAutPreferenceMode = '3';
                        }else{
                            this.doSetAPNDisabled = true;
                            this.SetConnectDisabled = false;
                        } 
                        this.optionsAPN = r;
                              
                    })
                    .catch(error => {
                        console.log(error);                      
                    })
    
        },
        //切换apn
        ApnProfileList(val){
            if(val == 'NEW'){
                this.SetConnectDisabled = true;
                this.doDeleteAPNDisabled = true;
                this.doSetAPNDisabled = false;
            }else{
                this.SetConnectDisabled = false;
                this.doDeleteAPNDisabled = false;
                this.doSetAPNDisabled = true;
            }
            for (let index = 0; index < this.apnlist.length; index++) {
                if(val == this.apnlist[index].bm_profile_index){
                    this.ApnMode = this.apnlist[index].bm_profile_index;
                    this.apnProfileId = 'PID-' + this.apnlist[index].bm_profile_index;
                    this.apnName = this.apnlist[index].bm_apn_name;
                    this.apnAPN = this.apnlist[index].bm_profile_name;
                    this.apnUser = this.apnlist[index].bm_username;
                    this.apnPassword = this.apnlist[index].bm_password;
                    this.aPDPTypeMode = this.apnlist[index].bm_pdp_type;
                    this.aAutPreferenceMode = this.apnlist[index].bm_auth_preference;
                }else if(val == 'NEW'){
                    
                    this.apnProfileId = 'NEW'
                    this.apnName = '';
                    this.apnAPN = '';
                    this.apnUser = '';
                    this.apnPassword = '';
                    this.aPDPTypeMode = '3';
                    this.aAutPreferenceMode = '3';
                }
            }           
        },
        //设置默认APN
        SetConnect(val){
            this.loadingApn = true;           
            this.ApnMode = val; 
            setTimeout(() => {
                let SetConnectApn = this.optionsAPN.map(item => {
                    if(val == item.value){
                        item.label = item.label.replace('(*)', '');
                        return {
                            label: '(*)' + item.label,
                            value: item.value 
                        }
                    }else{                      
                        return {
                            label: item.label.replace('(*)', ''),
                            value: item.value 
                        }
                    }              
                       
                })
                this.optionsAPN = SetConnectApn;
                this.loadingApn = false;
            }, 3000);
        },
        //添加APN
        doSetAPN(val){
            this.loadingApply = true;
            setTimeout(() => {
                this.loadingApply = false;
            }, 3000);  
        },
        //删除APN
        doDeleteAPN(val){
            this.loadingDelete = true;
            setTimeout(() => {
                this.loadingDelete = false;
                this.optionsAPN = this.optionsAPN.filter((item) => {
                    if(item.value == '1'){
                       this.ApnProfileList(item.value);
                    }   
                    return item.value != val;
                });
            }, 3000); 
        }
    }
}
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
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
    .el-input,.grid-content-select-flex{
        flex: 2;
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
