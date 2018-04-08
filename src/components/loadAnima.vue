<template>
  <!-- ajax_loading_ico -->
  <div class="pending_wrapper">
    <div  class="pending_box">
      <div id="loading-center-absolute">
        <div class="object" id="object_one"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_four"></div>
        <div class="object" id="object_five"></div>
        <div class="object" id="object_six"></div>
        <div class="object" id="object_seven"></div>
        <div class="object" id="object_eight"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .pending_wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0);
    z-index: 9999;
    top: 0;
    left: 0;
  }
  .pending_wrapper.show {
    display: block;
  }
  .pending_box {
    display: block;
    width: 75px;
    height: 75px;
    background-color: rgba(0,0,0, 0.8);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

  }
  #loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    transform: translate(-50%, -50%);
    border-radius: 50% 50% 50% 50%;
  }
  .object{
    width: 13.3%;
    height: 13.3%;
    background-color: #FFF;
    position: absolute;
    border-radius: 50% 50% 50% 50%;
    animation: animate 0.8s infinite;
  }


  #object_one {
    top: 12.6%;
    left: 12.6%;

  }
  #object_two {
    top: 0px;
    left: 43.2%;
    animation-delay: 0.1s;

  }
  #object_three {
    top: 12.6%;
    left: 74%;
    animation-delay: 0.2s;

  }
  #object_four {
    top: 43.2%;
    left: 86.7%;
    animation-delay: 0.3s;
  }
  #object_five {
    top: 74%;
    left: 74%;
    animation-delay: 0.4s;
  }
  #object_six {
    top: 86.7%;
    left: 43.2%;
    animation-delay: 0.5s;
  }
  #object_seven {
    top: 74%;
    left: 12.6%;
    animation-delay: 0.6s;
  }
  #object_eight {
    top: 43.2%;
    left: 0px;
    animation-delay: 0.7s;
  }
  @keyframes animate {
    50% {
      transform: scale(1.5,1.5);
    }

    100% {
      transform: scale(1,1);
    }
  }
</style>

<script type="text/ecmascript-6">
  export default {

  }
</script>