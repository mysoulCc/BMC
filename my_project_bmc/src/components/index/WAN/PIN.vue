<template>
    <div class="Paging-content-style">
        <div class="SubpageContent-Content">
            <el-row :gutter="20">
                <el-col>
                    <div class="ContentTitle">
                        <span>SIM Lock/Unlock</span>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="SIM Lock/Unlock Configuration" name="first"></el-tab-pane>                       
                            <el-tab-pane label="Change PIN code" name="second" v-if="isShow"></el-tab-pane>                       
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
            <div v-if="LabelContent === 'first'">
                <el-row :gutter="14">
                    <el-col :span="9" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">PIN Code</span>
                            <el-input
                            type="text"
                            v-model="PinCode"
                            maxlength="8"
                            show-word-limit
                            size='mini'
                            clearable
                            >
                            </el-input>
                            <el-col :span="4" class="grid-content-button-flex">
                                <el-button type="success" size='medium' :disabled="doSetEnable" @click="doSetEnable_fcgi(`${PinCode}`)">Enable</el-button>
                                <el-button type="success" size='medium' :disabled="doSetDisabled" @click="doSetDisabled_fcgi(`${PinCode}`)">Disable</el-button>
                            </el-col>
                        </div>
                    </el-col>        
                </el-row>
            </div>
            <div v-if="LabelContent === 'second'">
                <el-row :gutter="14">
                    <el-col :span="6" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">PIN code</span>
                            <el-input
                            type="text"
                            v-model="PinCodeSecond"
                            maxlength="8"
                            show-word-limit
                            size='mini'
                            clearable
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="14">
                    <el-col :span="6" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex">New PIN code</span>
                            <el-input
                            type="text"
                            v-model="NewPinCode"
                            maxlength="8"
                            show-word-limit
                            size='mini'
                            clearable
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="14">
                    <el-col :span="6" :offset="4">
                        <div class="grid-content bg-purple grid-content-flex">
                            <span class="grid-content-span-flex grid-content-span-flex-pin">Please Enter New PIN code Again</span>
                            <el-input
                            type="text"
                            v-model="AgainPinCode"
                            maxlength="8"
                            show-word-limit
                            size='mini'
                            clearable
                            >
                            </el-input>
                        </div>
                    </el-col>        
                </el-row>
                <el-row :gutter="14">
                    <el-col :span="2" :offset="20">
                        <div class="grid-content bg-purple grid-content-flex">
                            <el-button type="success" size='medium' :loading="loadingPinEnable" @click="doChange">Apply</el-button>
                        </div>
                    </el-col>        
                </el-row>
            </div>          
        </div>
    </div>
</template>
<script>
export default {
    name:'PINLink',
    data(){
        return{
            activeName:'first',
            LabelContent: 'first',
            PinCode:'',
            fullscreenLoading: false,
            //enable/disabled pin
            doSetEnable:false,
            doSetDisabled:true,
            //修改 pin
            isShow:'',
            PinCodeSecond:'',
            NewPinCode:'',
            AgainPinCode:'',
        }
    },
    created(){
        this.doGetPin();
    },
    methods:{
        // 标签选择事件
        handleClick(tab, event){
           this.LabelContent = tab.paneName;
        },
        //获取api接口
        doGetPin(){
            this.axios.get('api/wpin_sim')
                        .then(request =>{
                            let req = request.data;
                            console.log(req);
                            if(req.sim_stus == 0)
                                this.isShow = false;
                            else{
                                 this.isShow = true;
                                 this.doSetEnable = true;
                                 this.doSetDisabled = false;
                            }
                               
                        })
                        .catch(error =>{
                            console.log(error);
                            
                        })
        },
        //开启pin事件
        doSetEnable_fcgi(val){
            console.log(val);
            
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
                this.isShow = true;
                this.doSetEnable = true;
                this.doSetDisabled = false;
                loading.close();
            }, 2000);
        },
        //关闭pin事件
        doSetDisabled_fcgi(val){
            console.log(val);
            
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            setTimeout(() => {
                this.isShow = false;
                this.doSetEnable = false;
                this.doSetDisabled = true;
                loading.close();
            }, 2000);
        },
        //修改pin事件
        doChange(){           
            if(this.NewPinCode != this.AgainPinCode){
                this.$message({
                    type: 'error',
                    message: '请保持修改PIN一致',
                    showClose: true,
                });
                return;
            }else{
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
                setTimeout(() => {
                    loading.close();
                }, 2000);
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
    .grid-content-button-flex{
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
