<template>
  <div class="tips" v-show="isShow">
    <div class="box">
     {{message}}
    </div>
  </div>
</template>

<script>
  export default{
    name:'tips',
    data:function () {
      return {
      }
    },
    props:['message','isShow'],
  }
</script>

<style scoped>
  .tips{
    width: 20%;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;left: 0;
    z-index: 22222;
  }
  .box{
    position: absolute;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    background: rgba(16, 16, 16, 0.88);
    padding: 16px 27px;
    color: #fff;
    font-size: 23px;
    text-align: justify;
  }
</style>