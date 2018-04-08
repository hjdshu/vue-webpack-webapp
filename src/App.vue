<template>
    <div class="app">
        <transition name="slide-fade" model="out-in">
            <router-view v-bind:class="{'blur-effect':poper_show}"></router-view>
        </transition>
        <Tips v-bind:message="tips_message" v-bind:isShow="tips_show"></Tips>
        <loadAnima v-show="store.ajax_pending"></loadAnima>
    </div>
</template>
<script type="text/ecmascript-6">
    import Tips from './components/tips.vue'
    import store from './store/index.js'
    import loadAnima from './components/loadAnima.vue'
    // var nativejs = new (require('codoon-native-bridge-js'))();


    export default{ 
        name:'app',
        components:{
            Tips,
            loadAnima,
        },
        data:function () {
            return {
                tips_message:'',
                tips_show:false,
                poper_show:false,
                store:store,
            }
        },
        mounted(){
            window.tips = this.showTips;
            window.tipsTime = this.showTipsTime;

            function handleVisibilityChange() {
                var videoElement = document.getElementById('music');
                if(!videoElement) return;
                if (document.hidden) {
                    videoElement.pause();
                } else  {
                    videoElement.play();
                }
            }

            document.addEventListener("visibilitychange", handleVisibilityChange, false);



        },
        methods:{
            showTips(msg,isLong) {
                this.tips_message = msg;
                this.tips_show = true;
                var _sf = this;
                if(isLong) return;
                setTimeout(()=>{
                    _sf.tips_message = '';
                    _sf.tips_show = false;
                },2500)
            },
            showTipsTime(msg,time){
                this.tips_message = msg;
                this.tips_show = true;
                var _sf = this;
                setTimeout(()=>{
                    _sf.tips_message = '';
                    _sf.tips_show = false;
                },time)
            },
        }
    }
</script>


<style lang="scss">
    @import "assets/styles/base.scss";
    @import "assets/styles/public.scss";
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app{
        font-size: 40px;
        .slide-fade-enter-active {
            transition: all 0.5s ease 0.2s;
            transform: translateX(0);
            opacity: 1;
        }
        .slide-fade-leave-active {
            transition: all 0.5s ease;
            transform: translateY(70px);
            opacity: 0;
        }

        .slide-fade-enter{
            transform: translateX(-70px);
            opacity: 0;
        }
        .slide-fade-leave{
            transform: translateY(0);
        }
    }
</style>


