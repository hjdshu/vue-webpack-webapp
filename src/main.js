import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync'
import router from './router';


const app = new Vue({
    template: '<App/>',
    components: { App },
    router
});
app.$mount('#app');
