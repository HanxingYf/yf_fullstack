import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '搜索列表',
      path: '/apps',
      component: './ListApplication',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
    {
      path: '/login',
      component: '@/pages/login/index.tsx',
    },
  ],
  fastRefresh: {},
});
