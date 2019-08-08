<template>
    <div id="Wizard_LAN">
       <h3><font>LAN Configuration</font></h3>  
        <div class="wizardContentClass">                                
            <tr>
                <td>IP Address</td>
                <td>
                    <input type="text" v-model="wizradIP">
                </td>
            </tr>
            <tr>
                <td>IP Subnet Mask</td>
                <td>
                    <input type="text" v-model="wizradSubnet_Mask">
                </td>
            </tr>
                               
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'这是wizard第1页',
            wizradIP:'',
            wizradSubnet_Mask:''        
        }
    },
    // created(){
    //     this.wizradIP = this.$store.state.moduleWizardAPI.data
        
    // },
    mounted(){
           
        this.wizradIP = this.$store.state.moduleWizardAPI.data
    },
    beforeRouteLeave (to, from, next) {
        console.log(this.wizradIP);
        next();
    }
}
</script>
<style scoped>
    tr{
        display: flex;
        padding: 6px;
        justify-content: center;
        align-items: center;
    }
    td{
        flex: 1;
        color: #0464BB;
    }
</style>
