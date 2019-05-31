import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import wyc from './views/wyc.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('./views/UIlist.vue'),
    },
    // {
    //   path: '/ps',
    //   name: '跑商',
    //   component: () => import('./views/bhps.vue'),
    // }
  ],
});