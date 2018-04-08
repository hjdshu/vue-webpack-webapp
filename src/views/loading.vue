<template>
    <div class="page-main load">
        loading...
        <div class="date">
            <div class="number">{{percentNumber}}</div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss"  scoped>

</style>
<script type="text/ecmascript-6">

    import imgs from './../assets/script/loadimg.js';
    import store from './../store/index.js';
    import imgLoading from './../assets/script/imgLoading.js'

    export default{
        name:'load',

        components:{
        },
        data() {
            return {
                store:store,
                percentNumber:0,
                isComplete:false,
            }
        },
        mounted(){

            var _ = this;
            imgLoading(imgs.list,function(isComplete, progress){
                _.percentNumber = progress;
                if(isComplete){
                    _.isComplete = true;
                }
            })

        },
        methods:{
            go_index:function(){
                this.$router.replace({'name':'index'})
            }
        },
        watch:{
            isComplete:function () {
                if(this.isComplete){
                    this.go_index();
                }
                return this.isComplete;
            },
        }
    }
</script>
