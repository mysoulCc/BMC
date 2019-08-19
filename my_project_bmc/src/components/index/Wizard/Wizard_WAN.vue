<template>
    <div id="Wizard_WAN">
        <span>Please consult with service provider for these settings. If not sure, leave them with default value.</span>
        <h3><font>WAN Configuration</font></h3>  
        <div class="wizardContentClass">
           <el-table
            :data="tableData"
            style="width: 80%">
                <el-table-column
                    prop="Type"
                    label="Type"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="apn"
                    label="APN"
                    width="180">
                </el-table-column>
            
            </el-table>
            <el-table
                class="wizardApnBody"
                ref="singleTable"
                :data="tableDataBody"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 80%">
                <el-table-column
                type="index"
                label="Profile"
               width='100'>
                </el-table-column>
                <el-table-column
                prop="bm_profile_name"
                label="Name"
                >
                </el-table-column>
                <el-table-column
                property="bm_apn_name"
                label="APN"
                >
                </el-table-column>
               <el-table-column
                property="bm_username"
                label="User"
                >
                </el-table-column>
               <el-table-column
                property="bm_password"
                label="Password"
                >
                </el-table-column>
               <el-table-column
                property="bm_profile_index"
                label="Protocol"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
            tableData: [
                {
                    Type: 'IPv4 Data Connection',
                    apn: ''
                }, 
                {
                    Type: 'IPv6 Data Connection',
                    apn: ''
                }
            ],
            tableDataBody:[],
            currentRow:null,
            WizardWANValue:[]
        }
      },
      mounted(){
        //debugger
        this.tableDataBody = this.$store.state.moduleWizardAPI.data.bm_apn.bm_3GPP;
        console.log( this.tableDataBody);
        
         for (let index of this.tableData) {               
            for (let bm_3GPP = 1; bm_3GPP <= this.$store.state.moduleWizardAPI.data.bm_apn.bm_3GPP.bm_total; bm_3GPP++) {
                if(this.$store.state.moduleWizardAPI.data.bm_apn.bm_3GPP['APN_'+bm_3GPP]['bm_profile_index'] == 1){
                    index.apn = this.$store.state.moduleWizardAPI.data.bm_apn.bm_3GPP['APN_'+bm_3GPP]['bm_apn_name'];
                    this.WizardWANValue['IPv4Connection'] =  index.apn;
                    this.WizardWANValue['IPv6Connection'] =  index.apn;
                }                   
            }              
         }        
      },
      methods:{
          handleCurrentChange(val){
              for (let index of this.tableData) {
                    index.apn = val.apn;
                    this.WizardWANValue['IPv4Connection'] =  index.apn;
                    this.WizardWANValue['IPv6Connection'] =  index.apn;      
            }
          }
      },
       beforeRouteLeave (to, from, next) {
            let _thisWizardWANValue = this.WizardWANValue;
            this.$store.dispatch('saveFormSet',{_thisWizardWANValue,msg:'WAN'});
            next();
    }
}
</script>
<style scoped>
    span{
        display: block;
        padding-bottom: 10px;
        color: #0464BB;
    } 
    
</style>
<style>
     #Wizard_WAN .cell{
        color: #0464BB;
    }
    #Wizard_WAN .has-gutter th{
        background-color: #aabbc5;
        padding: 2px;
    }
    #Wizard_WAN .has-gutter th div{      
        color: #fff;
    }
    #Wizard_WAN .wizardApnBody .el-table__header, #Wizard_WAN .wizardApnBody .el-table__body{      
        width: 80% !important;
    }
    
</style>


