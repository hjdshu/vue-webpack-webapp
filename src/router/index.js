/**
 * Created by codoon on 16/11/30.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import loading     from './../views/loading.vue'
import index from '../views/index.vue';
import act_rule from '../views/actRule.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { name: 'loading', path: '/', component: loading },
        { name: 'index', path: '/index', component: index },
        { name: 'act_rule', path: '/act_rule', component: act_rule }
    ]
});




export default router
