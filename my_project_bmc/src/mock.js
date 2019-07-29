const Mock = require('mockjs');

Mock.mock('/login.cgi/', 'post',(req,res)=>{
    return{
        data:{
            'username':'admin',
            'userpassword':'admin',
            'token':Random.date()
        }
    }
})