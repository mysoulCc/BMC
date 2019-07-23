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
                    <td><input type="text" name="username" v-model="username" id="username"></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password" name="password" v-model="password" id="password"></td>
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
            if(this.username === 'admin' && this.password === 'admin'){
                this.$router.push('/index');
            }else{
                alert("账号或者密码错误，请重新输入！");
            }
        }
    }
}
</script>
<style scoped>
    #login{
        display: flex;
        border: 1px solid red;
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

