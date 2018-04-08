<template>
    <div class="page-main index_data">
       这是主页
       <router-link :to="{path:'/act_rule'}">去其他页面</router-link>  
    </div>
</template>

<style scoped rel="stylesheet/scss" lang="scss">
    .index_data {

    }

</style>
<script type="text/ecmascript-6">

    import store from './../store/index';

    export default{
        name:'index_data',
        components:{
    
        },
        data() {
            return {
                store:store,
            }
        },
        computd:{
        },
        mounted(){
            var _ = this;
        },
        methods:{            
            init:function () {
                var _ = this;
            },
         
        }
    }
</script>
