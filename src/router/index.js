import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Health from '@/views/Health.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;