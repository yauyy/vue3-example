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
    {
      path: '/sse',
      name: 'sse',
      component: () => import('../views/sse/index.vue'),
      meta: {
        title: 'sse',
        icon: 'FolderAdd',
      },
    },
    {
      path: '/esModule',
      name: 'esModule',
      redirect: '/esModule/esModuleDemo',
      component: () => import('../views/esModule/index.vue'),
      meta: {
        title: 'esModule',
        icon: 'FolderAdd',
      },
      children: [
        {
          path: 'demo',
          name: 'esModuleDemo',
          component: () => import('../views/esModule/esModuleDemo.vue'),
          meta: {
            title: 'esModuleDemo',
            icon: 'FolderAdd',
          },
        },
        {
          path: 'test',
          name: 'esModuleTest',
          component: () => import('../views/esModule/esModuleTest.vue'),
          meta: {
            title: 'esModuleTest',
            icon: 'FolderAdd',
          },
        },
      ],
    },
    {
      path: '/libDemo',
      name: 'libDemo',
      component: () => import('../views/libDemo/index.vue'),
      meta: {
        title: '组件测试',
        icon: 'FolderAdd',
      },
    },
  ],
});

export default router;
