<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>PLMN</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="PLMN" name="first"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row :gutter="14">
                    <el-col :span="4" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Mode</span>
                            <el-select class="grid-content-select-flex" size='mini' v-model="PlmnMode">
                                <el-option
                                v-for="item in optionsPlmn"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>                          
                        </div>
                    </el-col>        
                </el-row>               
                <el-row :gutter="20">
                    <el-col :span="12" :offset="1">
                        <div class="grid-content bg-purple">
                            <el-table
                                :data="tableData"
                                highlight-current-row
                                @current-change="handleCurrentChange"
                                style="width: 100%">
                                <el-table-column
                                    prop="Status"
                                    label="Status">
                                </el-table-column>
                                <el-table-column
                                    prop="mcc"
                                    label="MCC">
                                </el-table-column>
                                <el-table-column
                                    prop="mnc"
                                    label="MNC">
                                </el-table-column>
                                <el-table-column
                                    prop="opname"
                                    label="Operator Name">
                                </el-table-column>                              
                                <el-table-column
                                    prop="rat"
                                    label="Access Technology">
                                </el-table-column>                              
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="1" :offset="20">
                        <div class="grid-content bg-purple grid-content-flex">
                            <el-button type="success">Apply</el-button>
                        </div>
                    </el-col>        
                    <el-col :span="1" :offset="1">
                        <div class="grid-content bg-purple grid-content-flex">
                             <el-button type="success">Scan</el-button>
                        </div>
                    </el-col>        
                </el-row> 
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'PLMNLink',
    data(){
        return{
            activeName:'first',
            LabelContent: 'first',
            optionsPlmn:[
                {
                    'label':'Auto',
                    'value':'0'
                },
                {
                    'label':'Manual',
                    'value':'1'
                }
            ],
            PlmnMode:'',
            tableData:[],
        }
    },
    created(){
        //this.get_plmnsrch_list();
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //选中table值事件
        handleCurrentChange(currentRow,oldCurrentRow){

        },
        //获取plmn手动搜网列表
        get_plmnsrch_list(){
            this.axios.get('api/get_plmnsrch_list')
                        .then(response => {
                            console.log(response.data);
                            this.PlmnMode = response.data.manual_flag;                          
                            let r = Object.values(response.data.plmnlist).map(item =>{
                                let apnStatus = null;
                                if ((parseInt(item.opstus) & 0x01)) {
                                    apnStatus = "Current";
                                } else if((parseInt(item.opstus) & 0x02) && (parseInt(item.opstus) & 0x20)) {
                                    apnStatus = "Available";
                                } else if((parseInt(item.opstus) & 0x10)){
                                    apnStatus = "Forbidden";
                                } else {
                                    apnStatus = "Unknown";
                                }
                                switch (item.rat) {
                                    case 4:
                                        item.rat = '2G';
                                        break;

                                    case 5:
                                        item.rat = '3G';
                                        break;
                                
                                    
                                    case 8:
                                        item.rat = 'LTE';
                                        break;
                                
                                    case 9:
                                        item.rat = 'LTD-SCDMATE';
                                        break;
                                }
                                return{
                                    'Status':apnStatus,
                                    'mcc':item.mcc,
                                    'mnc':item.mnc,
                                    'opname':item.opname,
                                    'rat':item.rat
                                }
                            })
                            this.tableData = r;
                            console.log(this.tableData);
                            
                        })
                        .catch(error =>{
                            console.log(error);
                            
                        })
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
    
</style>
<style>
    .Paging-content-style .has-gutter th{
        background-color: #aabbc5;
        padding: 2px;
    }
    .Paging-content-style .has-gutter th div{      
        color: #fff;
    }
    .current-row > td{
        background-color:rgba(34, 172, 57, 0.42) !important;
    }
</style>
