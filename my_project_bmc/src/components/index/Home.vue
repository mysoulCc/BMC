<template>
    <div id="home">
        {{msg}}
    </div>
</template>
<script>
export default {
    name:'Home',
    data(){
        return{
            msg:'这是home界面'
        }
    },
    created(){
        this.msg = this.$store.state.ContentName
        
    }
}
</script>

