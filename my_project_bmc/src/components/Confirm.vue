<template>
    <div class="confirm" v-if="showDialog">
        <div class="confirm_mask"></div>
        <div class="confirm_container">
            <div class="confirm_content">
                <div class="confirm_content_img">
                  <img src="../assets/images/msg_loading.gif">  
                </div>
                <div class="confirm_content">
                   The device is rebooting,  Please wait <span class="confirm_Time">{{confirmMsg}}</span> seconds.
                </div>            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['showDialog','confirmMsg'],
    data(){
        return{
           
        }
    },
    created(){
        
    }
}
</script>
<style scoped>
    .confirm{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    .confirm_mask{
        background: url('../assets/images/fancybox.png');
        width:100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
    .confirm_container{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        width: 450px;
        height: 130px;
        box-sizing: border-box;
        margin-top: -230px;
        margin-left: -225px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 0px 0px 8px 8px #c5b1b1;
    }
    .confirm_content{
        color: black;
        display: flex;
        width: 100%;
        height: 100%;
    }
    .confirm_content_img,.confirm_content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .confirm_content_img{
        flex: 1;
    }
    .confirm_content{
        flex: 4;
    }
    .confirm_Time{
        color: red;
        padding: 0 10px;
        font-weight: bold;
    }
</style>

