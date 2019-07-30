<template>
    <h2>{{name}}</h2>
</template>
<script>
export default {
    data(){
        return{
        name:''
        }
    },
    created () {
        this.fetchData()
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
        this.name = this.$store.state.ContentName; 
    }
    }
}
</script>
<style scoped>
    h2{
        width: 130px;
        height: 23px;
        color: #fff;
        font-size: 20px;
        border-radius: 5px 5px 0 0;
        padding: 10px;
        margin-left: 20px;
        background: url('../assets/images/content-bg.png');
    }
</style>
