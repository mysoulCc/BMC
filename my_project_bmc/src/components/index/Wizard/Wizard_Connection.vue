<template>
    <div id="Wizard_Connection">
       <h3><font>Ethernet Type</font></h3>  
        <div class="Connection">
            <div class="ConnectionLeft">
                <div class="wizardContentClass">                                
                    <tr>
                        <td>
                            <input type="radio" value="WAN" name="internetType" v-model="internetType">
                        </td>
                        <td>
                            WAN Mode
                        </td>
                    </tr>
                    <tr>
                        <th>Choose this, user need to configure WAN Settings.</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" value="3g" name="internetType" v-model="internetType">
                        </td>
                        <td>
                        2G/3G/4G Mode
                        </td>
                    </tr>
                    <tr>
                        <th>Choose this, user need to configure 3G/4G Settings.</th>
                    </tr>                              
                </div>
            </div>
            <div class="ConnectionRight">
                <div class="wizardContentClass">                                
                    <tr>
                        <td>IP Address</td>
                        <td>
                           
                        </td>
                    </tr>
                    <tr>
                        <td>IP Subnet Mask</td>
                        <td>
                           
                        </td>
                    </tr>                            
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           internetType:'3g'
        }
    }
}
</script>
<style scoped>
    .Connection{
        display: flex;
    }
    .ConnectionRight{
        padding-left: 100px;
    }
    tr{
        display: flex;
        padding: 6px;
        
        align-items: center;
    }
    td{
        padding-right: 6px;
        color: #0464BB;
    }
    th{
        flex: 1;
        color: #0464BB;
    }
</style>
