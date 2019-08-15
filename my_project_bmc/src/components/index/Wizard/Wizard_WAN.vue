<template>
    <div id="Wizard_WAN">
        <span>Please consult with service provider for these settings. If not sure, leave them with default value.</span>
        <h3><font>WAN Configuration</font></h3>  
        <div class="wizardContentClass">
           <el-table
            :data="tableData"
            style="width: 100%">
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
        </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
          tableData: [{
            Type: 'IPv4 Data Connection',
            apn: ''
          }, {
            Type: 'IPv6 Data Connection',
            apn: ''
          }]
        }
      },
      created(){
         for (let index of this.tableData) {
                index.apn = '3gnet'                 
         }
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
        color: #fff;
        padding: 2px;
    }
   
</style>


