import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '卖座电影' },
      component: () => import('@/views/index/index.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      meta: { title: '我的' },
      component: () => import('@/views/mine/mine.vue'),
    },
    {
      path: '/films',
      name: 'films',
      meta: { title: '卖座电影' },
      component: () => import('@/views/index/index.vue'),
      children: [
        {
          path: 'showingFilm',
          name: 'showingFilm',
          meta: { title: '正在热映' },
          component: () => import('@/views/index/children/showingFilm.vue'),
        },
        {
          path: 'nextFilm',
          name: 'nextFilm',
          meta: { title: '即将上映' },
          component: () => import('@/views/index/children/nextFilm.vue'),
        },
      ],
    },
  ],
});
