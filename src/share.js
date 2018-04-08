import Vue from 'vue';
import Share from './share.vue';


const app = new Vue({
  template: '<Share/>',
  components: { Share },
});
app.$mount('#share');