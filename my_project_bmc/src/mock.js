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
        },
        'bm_apn':{
            'bm_3GPP':{
                'APN_1':{
                    'bm_apn_name':'3gnet',
                    'bm_profile_name':'CHINA UNICOM',
                    'bm_username':'',
                    'bm_password':'',
                    'bm_profile_index':'1',
                    'bm_pdp_type':'2'
                },
                'APN_2':{
                    'bm_apn_name':'cmnet',
                    'bm_profile_name':'CMCC',
                    'bm_username':'guest',
                    'bm_password':'guest',
                    'bm_profile_index':'3',
                    'bm_pdp_type':'3'
                },
                'APN_3':{
                    'bm_apn_name':'3gwap',
                    'bm_profile_name':'联通手机上网',
                    'bm_username':'',
                    'bm_password':'',
                    'bm_profile_index':'2',
                    'bm_pdp_type':'1'
                },
                'bm_total':3
            }
        }
    }
})