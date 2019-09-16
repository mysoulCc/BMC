<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>4G/3G/2G Modem</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="Settings" name="first"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row :gutter="14">
                    <el-col :span="7" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Network Type</span>
                            <el-select class="grid-content-select-flex" size='mini' v-model="NetworkTypeMode">
                                <el-option
                                v-for="item in optionsNetwork"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-col :span="2" class="grid-content-button-flex">
                                <el-button type="success" size='medium' :loading="loadingNetwork" @click="doNetConf_fcgi(`${NetworkTypeMode}`)">Apply</el-button>
                            </el-col>
                        </div>
                    </el-col>        
                </el-row>
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'NetworkLink',
    data(){
        return{
            activeName:'first',
            LabelContent: 'first',
            optionsNetwork:[],
            NetworkTypeMode:'',
            loadingNetwork:false,
        }
    },
    created(){
        this.dogetNetwork();
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //获取网络类型接口
        dogetNetwork(){
            this.axios.get('api/wCurrent_network_pref')
                        .then(request => {
                            let networkType = Array();
                            if(request.data.current_network_pref > 8 && request.data.current_network_pref != 16)
                                networkType.push(new Array(request.data.current_network_pref, "Auto Mode"));

                            switch (request.data.current_network_pref) {
                                case 4:
                                    networkType.push(new Array(4, "GSM Only Mode"));
                                    break;

                                case 8:
                                    networkType.push(new Array(8, "WCDMA Only Mode"));
                                    break;

                                case 12:
                                    for (let index = 0; index < 2; index++) {
                                        if (index == 0) {
                                            networkType.push(new Array(4, "GSM Only Mode"));
                                        }else{
                                            networkType.push(new Array(8, "WCDMA Only Mode"));
                                        }
                                    }
                                    break;

                                case 16:
                                    networkType.push(new Array(16, "LTE Only Mode"));
                                    break;

                                case 20:
                                    for (let index = 0; index < 2; index++) {
                                        this.optionsNetwork[index] = new Array();
                                        if (index == 0) {
                                            networkType.push(new Array(4, "GSM Only Mode"));
                                        }else{
                                            networkType.push(new Array(16, "LTE Only Mode"));
                                        }
                                    }
                                    break;

                                case 24:
                                    for (let index = 0; index < 2; index++) {
                                        this.optionsNetwork[index] = new Array();
                                        if (index == 0) {
                                            networkType.push(new Array(8, "WCDMA Only Mode"));
                                        }else{
                                            networkType.push(new Array(16, "LTE Only Mode"));
                                        }
                                    }
                                    break;
                                
                                default:
                                    for (let index = 0; index < 3; index++) {
                                        this.optionsNetwork[index] = new Array();
                                        if (index == 0) {
                                            networkType.push(new Array(4, "GSM Only Mode"));
                                        }else if(index == 1){
                                            networkType.push(new Array(8, "WCDMA Only Mode"));
                                        }else{
                                            networkType.push(new Array(16, "LTE Only Mode"));
                                        }
                                    }
                                    break;
                            }
                            let r = networkType.map(item =>{
                                return{
                                    'value':item[0],
                                    'label':item[1]
                                }
                            })
                            this.optionsNetwork = r;
                            this.NetworkTypeMode = request.data.current_network_pref;
                        })
                        .catch(error =>{
                            console.log(error);
                            
                        })
        },
        //设置接口
        doNetConf_fcgi(val){
            console.log(val);
            this.loadingNetwork = true;
            setTimeout(() => {
                this.loadingNetwork = false;
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
    .grid-content-select-flex{
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
