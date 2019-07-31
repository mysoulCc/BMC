<template>
    <div id="home" class="SubpageContent">       
        <div class="home_left">
            <h3><font>LAN</font></h3>  
            <div class="home_content">                                
                <tr>
                    <td>IPv4 Address</td>
                    <td>{{ipv4_ip}}</td>
                </tr>
                <tr>
                    <td>IPv4 Subnet Mask</td>
                    <td>{{ipv4_Subnet_mask}}</td>
                </tr>
                <tr>
                    <td>Client Number</td>
                    <td>{{Client_Number}}</td>
                </tr>                     
            </div>
             <h3><font>4G/3G/2G Modem</font></h3>     
            <div class="home_content">                              
                <tr>
                    <td>SIM Status</td>
                    <td>{{SIM_Status}}</td>
                </tr>
                <tr>
                    <td>Signal Strength</td>
                    <td>{{Signal_Strength}}</td>
                </tr>
                <tr>
                    <td>Signal Type</td>
                    <td>{{Signal_Type}}</td>
                </tr>
                <tr>
                    <td>New Message</td>
                    <td>{{New_Message}}</td>
                </tr>
                <tr>
                    <td>IPV4 Connect Status</td>
                    <td>{{IPV4_Connect_Status}}</td>
                </tr>
                <tr>
                    <td>IPV6 Connect Status</td>
                    <td>{{IPV6_Connect_Status}}</td>
                </tr>
                <tr>
                    <td>Roaming Status</td>
                    <td>{{Roaming_Status}}</td>
                </tr>
                <tr>
                    <td>Operators Information</td>
                    <td>{{Operators_Information}}</td>
                </tr>
            </div>
             <h3><font>System</font></h3>   
            <div class="home_content">                              
                <tr>
                    <td >Uptime</td>
                    <td>{{Uptime}}</td>
                </tr>
            </div>
        </div>
        <div class="home_right">
             <h3><font>Dial Type</font></h3>
             <div class="home_content">                                 
                <tr>
                    <td>Dial Type</td>
                    <td>{{Dial_Type}}</td>
                </tr> 
            </div>
            <h3><font>IPV4 WAN</font></h3> 
             <div class="home_content">                                  
                <tr>
                    <td>IPv4 Address</td>
                    <td>{{IPv4_Address}}</td>
                </tr> 
                <tr>
                    <td>Primary DNS</td>
                    <td>{{Primary_DNS}}</td>
                </tr>                              
                <tr>
                    <td>Primary DNS</td>
                    <td>{{Primary_DNS}}</td>
                </tr>                              
                <tr>
                    <td>Secondary DNS</td>
                    <td>{{Secondary_DNS}}</td>
                </tr>                              
                <tr>
                    <td>Connected Time</td>
                    <td>{{Connected_Time_ipv4}}</td>
                </tr> 
            </div>
            <h3><font>IPV6 WAN</font></h3>
             <div class="home_content">                                     
                 <tr>
                    <td>IPv6 Address</td>
                    <td>{{IPv6_Address}}</td>
                </tr> 
                <tr>
                    <td>Primary DNS</td>
                    <td>{{Primary_DNS_ipv6}}</td>
                </tr>                              
                <tr>
                    <td>Primary DNS</td>
                    <td>{{Primary_DNS_ipv6}}</td>
                </tr>                              
                <tr>
                    <td>Secondary DNS</td>
                    <td>{{Secondary_DNS_ipv6}}</td>
                </tr>                              
                <tr>
                    <td>Connected Time</td>
                    <td>{{Connected_Time_ipv6}}</td>
                </tr>    
            </div>
            <h3><font>Mobile Network</font></h3>  
             <div class="home_content">                                  
                <tr>
                    <td>IPv4 TX bytes</td>
                    <td>{{IPv6_Address}}</td>
                </tr> 
                <tr>
                    <td>IPv4 RX bytes</td>
                    <td>{{Primary_DNS_ipv6}}</td>
                </tr>                              
                <tr>
                    <td>IPv6 TX bytes</td>
                    <td>{{Primary_DNS_ipv6}}</td>
                </tr>                              
                <tr>
                    <td>IPv6 RX bytes</td>
                    <td>{{Secondary_DNS_ipv6}}</td>
                </tr>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{
            msg:'这是home界面'
        }
    },
    created(){
        let _this = this;
       this.axios.get('api/homeDate')
        .then(response =>{
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
            
        })
    }
}
</script>
<style scoped>
    #home{
        background-color: #fff;
        border: 1px solid #8bd3f4;
        margin: 20px;
        padding: 20px;
    }
    .home_left{
        flex: 1;
    }
    .home_right{
        flex: 1;
    }
    h3{
        background-color: #bababa;
        font-weight: normal;
        display: inline-block;
        color: #FFF;
        background-image: url('../../assets/images/h3-bg.png');
        background-repeat: repeat-y;
        background-position: 0px 0px;
        font-size: 11pt;
        padding: 4px;
    }
    .home_content{
        border: 1px solid #ababab;
        padding: 10px;
        margin:0 10px 10px 0;
    }
    tr{
        display: flex;
    }  
    td{
        display: flex;
        flex: 4;
    }
    tr>td:first-child{
        justify-content: flex-end;
        flex: 1;
    }
</style>


