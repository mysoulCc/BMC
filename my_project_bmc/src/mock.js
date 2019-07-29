const Mock = require('mockjs');

Mock.mock('api/loginDate', 'get',(req,res)=>{
    return{      
        'username':'admin',
        'userpassword':'admin',
        'token':Mock.Random.protocol()
    }
})