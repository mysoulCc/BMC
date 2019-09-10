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
                    <el-col :push="22" class="grid-content-button-flex">
                        <el-button type="success" :loading="loadingInternet" @click="setInternetType()">Apply</el-button>
                    </el-col>
                </el-row>                
            </div>
            <div v-else-if="LabelContent === 'second'">
                {{msg1}}
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
            InternetTyperadio:'3G',
            loadingInternet:false,
        }
    },
    
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //doset
        setInternetType(){
            this.loadingInternet = true;
             setTimeout(() => {
                this.loadingInternet = false;
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
