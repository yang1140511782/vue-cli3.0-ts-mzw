import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { name: '卖座电影' },
      component: () => import('../views/index/index.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      meta: { name: '我的' },
      component: () => import('../views/mine/mine.vue'),
    },
    {
      path: '/index',
      name: 'index',
      meta: { name: '卖座电影' },
      component: () => import('../views/index/index.vue'),
      children: [
        {
          path: '/index/showingFilm',
          name: 'showingFilm',
          meta: { name: '正在热映' },
          component: () => import('../views/index/children/showingFilm.vue'),
        },
        {
          path: '/index/nextFilm',
          name: 'nextFilm',
          meta: { name: '即将上映' },
          component: () => import('../views/index/children/nextFilm.vue'),
        },
      ],
    },
  ],
});
