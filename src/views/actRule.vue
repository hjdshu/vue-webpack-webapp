<template>
    <div class="page-main act_rule">
        这是另外一个页面
    </div>
</template>

<style scoped rel="stylesheet/scss" lang="scss">
    .act_rule {
        width: 100%;
        height: 100%;
        font-size: 30px;
        .bg{
            display: block;
            position: fixed;
            width: 100%;
            min-height: 1216px;
            height: 100%;
            z-index: 1;
        }
        .container{
                position: relative;
                z-index: 2;
                background: rgba(0, 0, 0, 0.4588235294117647);
                width: 100%;
                height: 100%;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
            img{
                display: block;
            }
  
        }
    }

</style>
<script type="text/ecmascript-6">
    import store from './../store/index';

    //const nativejs = new (require('codoon-native-bridge-js'))();


    export default{
        name:'act_rule',
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

  
        }
    }
</script>
