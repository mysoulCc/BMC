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
                <el-row :gutter="16" class='grid-content-wan-settings'>
                    <el-col :span="5" :offset="4">
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
        doGetApi(){
            this.axios.get('api/wizardDate')
                    .then(request => {
                        console.log(request.data.bm_apn.bm_3GPP);
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
                                item.bm_profile_name = '(*)' + item.bm_profile_name;
                            }
                            return {
                                label: item.bm_profile_name,
                                value: item.bm_profile_index 
                            }
                        })
                        r[this.apnlist.length] = [];
                        r[this.apnlist.length]['value'] = 'NEW';
                        r[this.apnlist.length]['label'] = 'Add New';
                        this.optionsAPN = r;        
                    })
                    .catch(error => {
                        console.log(error);                      
                    })
    
        },
        //切换apn
        ApnProfileList(val){
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
                    this.apnlist[index].bm_profile_name = '(*)' + this.apnlist[index].bm_profile_name;
                }
            }           
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
