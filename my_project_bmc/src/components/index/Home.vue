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
                    <td>{{IPv4_TX_bytes}}</td>
                </tr> 
                <tr>
                    <td>IPv4 RX bytes</td>
                    <td>{{IPv4_RX_bytes}}</td>
                </tr>                              
                <tr>
                    <td>IPv6 TX bytes</td>
                    <td>{{IPv6_TX_bytes}}</td>
                </tr>                              
                <tr>
                    <td>IPv6 RX bytes</td>
                    <td>{{IPv6_RX_bytes}}</td>
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
            timer:null,
            ipv4_ip:'',
            ipv4_Subnet_mask:'',
            Client_Number:'',
            SIM_Status:'',
            Signal_Strength:'',
            Signal_Type:'',
            New_Message:'',
            IPV4_Connect_Status:'',
            IPV6_Connect_Status:'',
            Roaming_Status:'',
            Operators_Information:'',
            Uptime:'',
            Dial_Type:'',
            IPv4_Address:'',
            Primary_DNS:'',
            Secondary_DNS:'',
            Connected_Time_ipv4:'',
            IPv6_Address:'',
            Primary_DNS_ipv6:'',
            Secondary_DNS_ipv6:'',          
            Connected_Time_ipv6:'',
            IPv4_TX_bytes:'',
            IPv4_RX_bytes:'',
            IPv6_TX_bytes:'',
            IPv6_RX_bytes:''
        }
    },
    created(){
        let _this = this;
        _this.Get_information_status();
        _this.timer = setInterval(function(){
            _this.Get_information_status();
        },3000)
    },
    methods:{
        Get_information_status(){       
            this.axios.get('api/homeDate')
                .then(response =>{
                   response = response.data;
                   this.ipv4_ip = response.LAN.ipv4_ip;
                   this.ipv4_Subnet_mask = response.LAN.ipv4_Subnet_mask;
                   this.Client_Number = response.LAN.Client_Number;
                   this.SIM_Status = response.Internet.SIM_Status;
                   this.Signal_Strength = response.Internet.Signal_Strength;
                   this.Signal_Type = response.Internet.Signal_Type;
                   this.New_Message = response.Internet.New_Message;
                   this.IPV4_Connect_Status = response.Internet.IPV4_Connect_Status;
                   this.IPV6_Connect_Status = response.Internet.IPV6_Connect_Status;
                   this.Roaming_Status = response.Internet.Roaming_Status;
                   this.Operators_Information = response.Internet.Operators_Information;
                   this.Uptime = response.system.Uptime;
                   this.Dial_Type = response.DialType.Dial_Type;
                   this.IPv4_Address = response.IPV4_WAN.IPv4_Address;
                   this.Primary_DNS = response.IPV4_WAN.Primary_DNS;
                   this.Secondary_DNS = response.IPV4_WAN.Secondary_DNS;
                   this.Connected_Time_ipv4 = response.IPV4_WAN.Connected_Time_ipv4;
                   this.IPv6_Address = response.IPV6_WAN.IPv6_Address;
                   this.Primary_DNS_ipv6 = response.IPV6_WAN.Primary_DNS;
                   this.Secondary_DNS_ipv6 = response.IPV6_WAN.Secondary_DNS;
                   this.Connected_Time_ipv6 = response.IPV6_WAN.Connected_Time_ipv6;
                   this.IPv4_TX_bytes = response.Mobile_Network.IPv4_TX_bytes;
                   this.IPv4_RX_bytes = response.Mobile_Network.IPv4_RX_bytes;
                   this.IPv6_TX_bytes = response.Mobile_Network.IPv6_TX_bytes;
                   this.IPv6_RX_bytes = response.Mobile_Network.IPv6_RX_bytes;
                  
                })
                .catch(function(error){
                    console.log(error)
                    
                }) 
        }
    },
    destroyed(){
        clearInterval(this.timer)
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
        padding: 4px;
    }  
    td{
        display: flex;
        flex: 4;
        padding-left: 30px;
    }
    tr>td:first-child{
        justify-content: flex-end;
        flex: 1;
    }
</style>


