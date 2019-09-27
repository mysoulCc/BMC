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
                    'bm_pdp_type':'2',
                    'bm_auth_preference':'3'
                },
                'APN_2':{
                    'bm_apn_name':'cmnet',
                    'bm_profile_name':'CMCC',
                    'bm_username':'guest',
                    'bm_password':'guest',
                    'bm_profile_index':'3',
                    'bm_pdp_type':'3',
                    'bm_auth_preference':'2'
                },
                'APN_3':{
                    'bm_apn_name':'3gwap',
                    'bm_profile_name':'联通手机上网',
                    'bm_username':'',
                    'bm_password':'',
                    'bm_profile_index':'2',
                    'bm_pdp_type':'0',
                    'bm_auth_preference':'1'
                },
                'bm_total':3
            }
        },
        'bm_internet_type':{
            'internet':'WAN',
            'wan_info':{
                'wan_select':'dhcp',
                'dhcp':{
                    'host_name':'BmRouter',
                    'dns_mode':'0',
                    'pri_dns':'0.0.0.0',
                    'sec_dns':'0.0.0.0'
                },
                'pppoe':{
                    'id_time':'0',
                    'op_mode':'Manual',
                    'passwd':'',
                    'period':'60',
                    'user_name':'',
                    'ver_pswd':''
                },
                'static':{
                    'getway':'',
                    'ip_addr':'',
                    'pri_dns':'',
                    'sec_dns':'',
                    'sub_mask':'255.255.255.0'
                }
            }
        },
        'get_wifi_cfg':{
            'wifi':{
                'AP1':{
                    'enable':'1',
                    'ssid':Random.word(12),
                    'wpa_passphrase':Random.natural(10000000,100000000),
                }
            }
        }
    }
})
Mock.mock('api/wConnection', 'get',(req,res)=>{
    return{      
        'apn':{
            'COMMON':{
                'auto_conx':'1',
                'roaming_conx':'0',
            },
            'ipv4':{
                'status':'Connecting'
            },
            'ipv6':{
                'status':'Disconnecting'
            }
        },
        
    }
})
Mock.mock('api/wCurrent_network_pref', 'get',(req,res)=>{
    return{      
        'current_network_pref':28
    }
})
Mock.mock('api/wpin_sim', 'get',(req,res)=>{
    return{      
        'cmd_status':'Done',
        'result':3,
        'retry':3,
        'sim_stus':0,
        'status':1
    }
})
Mock.mock('api/get_plmnsrch_list', 'get',(req,res)=>{
    return{      
        'manual_flag':'1',
        'plmnlist':{
            '0':{
                'mcc':'460',
                'mnc':'1',
                'mncdigit':'0',
                'opname':'China Unicom',
                'opstus':'101',
                'rat':'8',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            },
            '1':{
                'mcc':'460',
                'mnc':'1',
                'mncdigit':'0',
                'opname':'China Unicom',
                'opstus':'102',
                'rat':'5',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            },
            '2':{
                'mcc':'460',
                'mnc':'1',
                'mncdigit':'0',
                'opname':'China Unicom',
                'opstus':'102',
                'rat':'4',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            },
            '3':{
                'mcc':'460',
                'mnc':'0',
                'mncdigit':'0',
                'opname':'China Mobile',
                'opstus':'154',
                'rat':'8',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            },
            '4':{
                'mcc':'460',
                'mnc':'0',
                'mncdigit':'0',
                'opname':'China Mobile',
                'opstus':'154',
                'rat':'4',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            },
            '5':{
                'mcc':'460',
                'mnc':'11',
                'mncdigit':'0',
                'opname':'China Telecom',
                'opstus':'154',
                'rat':'8',
                'roamstus':'0',
                'selmode':'0',
                'service':'0',
            }
        },
        'sel_num':'6'
    }
})