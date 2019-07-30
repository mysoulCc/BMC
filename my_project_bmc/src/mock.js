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
        'ipv4_ip':Random.ip(),
        'ipv4_Subnet_mask':Random.ip(),
        'Client_Number':Random.natural( 1, 10 ),
        'SIM_Status':Random.word(),
        'Client_Number': Random.natural( 1, 5 )
    }
})