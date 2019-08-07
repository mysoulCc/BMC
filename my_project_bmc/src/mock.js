const Mock = require('mockjs');
const Random = Mock.Random;
Mock.mock('api/loginDate', 'get',(req,res)=>{
    return{      
        'username':'admin',
        'userpassword':'admin',
        'token':Random.protocol()
    }
})
Mock.mock('api/homeDate', 'get',(req,res)=>{
    return{      
        'LAN':{
            'ipv4_ip':Random.ip(),
            'ipv4_Subnet_mask':Random.ip(),
            'Client_Number':Random.natural( 1, 10 )
        },
        'Internet':{
            'SIM_Status':Random.word(),
            'Signal_Strength':Random.natural( 1, 4 ),
            'Signal_Type':Random.word(),
            'New_Message':Random.natural( 1, 60),
            'IPV4_Connect_Status':Random.word(),
            'IPV6_Connect_Status':Random.word(),
            'Roaming_Status':Random.word(),
            'Operators_Information':Random.word()
        },
        'system':{
            'Uptime':new Date()
        },
        'DialType':{
            'Dial_Type':Random.word()
        },
        'IPV4_WAN':{
            'IPv4_Address':Random.ip(),
            'Primary_DNS':Random.ip(),
            'Secondary_DNS':Random.ip(),
            'Connected_Time_ipv4':Random.time()
        },
        'IPV6_WAN':{
            'IPv6_Address':Random.ip(),
            'Primary_DNS':Random.ip(),
            'Secondary_DNS':Random.ip(),
            'Connected_Time_ipv6':Random.time()
        },
        'Mobile_Network':{
            'IPv4_TX_bytes':Random.natural(10000),
            'IPv4_RX_bytes':Random.natural(10000),
            'IPv6_TX_bytes':Random.natural(10000),
            'IPv6_RX_bytes':Random.natural(10000)
        }
    }
})
Mock.mock('api/wizardDate', 'get',(req,res)=>{
    return{      
        'LanConfiguration':{
            'IpAddress':'192.168.0.1',
            'IpSubnetMask':'255.255.255.0'
        }
    }
})