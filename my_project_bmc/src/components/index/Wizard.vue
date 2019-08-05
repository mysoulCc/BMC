<template>
    <div id="wizard"  class="SubpageContent">
        <ul class="WizardMenuHeader">
            <li v-for="item in WizardItems">
                <router-link :to="`${item.path}`" v-bind:class="item.className">{{item.name}}</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'Wizard',
    data(){
        return{
            WizardItems:[]
        }
    },
    created(){     
        this.WizardItems = this.$store.state.moduleWizardMenus.WizardHeaderMenu
    }
}
</script>

