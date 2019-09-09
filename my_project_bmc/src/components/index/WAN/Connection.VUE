<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>Connection</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="Connection Operation" name="first"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row :gutter="20">
                    <el-col :span="8" :offset="2">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Preferred Cellular Network</span>
                            <el-select class="grid-content-select-flex" v-model="value">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-col class="grid-content-button-flex">
                                <el-button type="info" :loading="loadingWan" @click="doWanConf(0)">Change</el-button>
                            </el-col>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="20">
                   <el-col :span="8" :offset="2">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">Roaming mode</span>
                            <el-select class="grid-content-select-flex" v-model="RoamingValue">
                                <el-option
                                v-for="item in Roamings"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-col class="grid-content-button-flex">
                                <el-button type="info" :loading="loadingRoaming" @click="doWanConf(1)">Change</el-button>
                            </el-col>
                        </div>
                    </el-col>
                </el-row>
                    <el-row :gutter="20">
                    <el-col :span="12" :offset="1">
                        <div class="grid-content bg-purple">
                            <el-table
                                :data="tableData"
                                style="width: 100%">
                                <el-table-column
                                    prop="Wan_Status"
                                    label=""
                                    width="150">
                                </el-table-column>
                                <el-table-column
                                    prop="IP_Family"
                                    label="IP Family"
                                    width="120">
                                </el-table-column>
                                <el-table-column
                                    prop="State"
                                    label="State"
                                    width="120">
                                </el-table-column>
                                <el-table-column
                                    prop="UMTS_Profile"
                                    label="UMTS Profile"
                                    width="120">
                                </el-table-column>
                                <el-table-column
                                    fixed="right"
                                    label=""   
                                    width="220">
                                    <el-col class="grid-content-button-flex" slot-scope="scope">
                                        <el-button type="info"  @click="handleClick(scope.row)">{{scope.row.ApnStatus}}</el-button>
                                    </el-col>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-col>
                </el-row>
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'WAN',
    data(){
        return{
            activeName: 'first',
            LabelContent: 'first',
            options:[
                {
                    value:'1',
                    label:'Auto Mode'                  
                },
                {
                    value:'0',
                    label:'Manual Mode'
                }
            ],
            value: '1',
            Roamings:[
                {
                    value:'1',
                    label:'Enable'
                },
                {
                    value:'0',
                    label:'Disable'
                }
            ],
            RoamingValue:'0',
            loadingWan:false,
            loadingRoaming:false,
            tableData:[
                {
                    Wan_Status:'Wan Status',
                    IP_Family:'IPv4',
                    State:'Disconnected',
                    UMTS_Profile:'PID-1',
                    ApnStatus:'Connect'
                },
                {
                    Wan_Status:'Wan Status',
                    IP_Family:'IPv6',
                    State:'Connect',
                    UMTS_Profile:'PID-1',
                    ApnStatus:'Disconnected'
                }
            ]
            
        }
    },
    mounted(){
        let _this = this;
        _this.axios.get('api/wConnection')
            .then(response =>{
                 console.log(response.data);
                 _this.value = response.data.apn.COMMON.auto_conx;
                 _this.RoamingValue = response.data.apn.COMMON.roaming_conx;
                 for(let wtableData of _this.tableData){
                    switch (wtableData.IP_Family) {
                        case 'IPv4':
                            wtableData.State = response.data.apn.ipv4.status;                         
                            break;
                    
                        default:
                            wtableData.State = response.data.apn.ipv6.status;
                            break;
                    } 
                    if(wtableData.State === 'Connecting')
                        wtableData.ApnStatus = 'Disconnected';
                    else
                        wtableData.ApnStatus = 'Connect'; 
                 }
            })
            .catch(function(error){
                console.log(error)
                
            })
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        // select事件
        doWanConf(val){
            let mode = '';
            switch (val) {
                case 0:
                    this.loadingWan = true;
                    mode = 'auto_conx';
                    break;
            
                default:
                    this.loadingRoaming = true;
                     mode = 'roaming_conx';
                    break;
            }
            let doWanConf = val;
            this.$store.commit('wConNection',{doWanConf,msg:mode});
            setTimeout(() => {
                this.loadingWan = false;
                this.loadingRoaming = false;
            }, 3000);
        },
        handleClick(index){
            let indexStatus = index.ApnStatus;
            let IP_Family = index.IP_Family;
            this.$store.commit('wConNection',{indexStatus,msg:IP_Family});
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
</style>

