import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '首页',
        icon: 'House',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: '关于',
        icon: 'Reading',
      },
    },
    {
      path: '/fflate',
      name: 'fflate',
      component: () => import('../views/fflate/index.vue'),
      meta: {
        title: '压缩',
        icon: 'FolderAdd',
      },
    },
    {
      path: '/useModel',
      name: 'useModel',
      component: () => import('../views/useModel/index.vue'),
      meta: {
        title: 'useModel',
        icon: 'FolderAdd',
      },
    },
    {
      path: '/xlsx',
      name: 'xlsx',
      component: () => import('../views/xlsx/index.vue'),
      meta: {
        title: 'xlsx',
        icon: 'FolderAdd',
      },
    },
  ],
});

export default router;
