<template id='confirm'>
    <div class="confirm">
        <div class="confirm_mask"></div>
        <div class="confirm_container">
            <div class="confirm_content">
                <div class="confirm_content_top">提示内容</div>
                {{msg}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'这是confirm组件'
        }
    }
}
</script>

