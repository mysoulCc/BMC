<template>
    <div id="login">
        <table>
            <thead>
                <tr>
                    <td>Login</td>
                </tr>
                <tr>
                    <td><img src="../assets/images/line.png" alt=""></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Account</th>
                    <td><input type="text" name="username" v-model="username" id="username" @keyup.enter="login"></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password" name="password" v-model="password" id="password" @keyup.enter="login"></td>
                </tr>
                <tr>               
                    <td><input type="button" value="Login" name="button" id="login_button" @click="login"></td>
                </tr>
            </tbody>
        </table>
        <div class="login-right">
           
        </div>
    </div>
</template>

<script>
export default {
    name:'loginLink',
    data(){
        return{
           username:'',
           password:''
        }
    },
    methods:{
        login(){
            let _this = this;
            this.axios.get('api/loginDate')
            .then(response =>{
                 if(_this.username === response.data.username && _this.password === response.data.userpassword){
                    _this.$store.commit('login_in',response.data.token);
                    _this.$router.push('/');
                }else{
                    alert("账号或者密码错误，请重新输入！");
                }
            })
            .catch(function(error){
                console.log(error)
                
            })
            
        }
    }
}
</script>
<style scoped>
    #login{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url(../assets/images/bg_earth.jpg);
        background-size: 100% 100%;
    }
    table{
        background: url(../assets/images/login-left.png);
        background-size: 100% 100%;
        width: 200px;
        height: 220px;
    }
    .login-right{
        background: url(../assets/images/login-right.png);
        background-size: 100% 100%;
        width: 200px;
        height: 220px;
    }
</style>

