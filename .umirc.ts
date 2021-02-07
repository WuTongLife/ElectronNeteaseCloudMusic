import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: '@/layout/footer',
          routes: [
            {
              path: '/',
              component: '@/layout/findMusic',
              routes: [
                {
                  path: '/',
                  redirect: '/findmusic',
                },
                {
                  path: '/findmusic',
                  component: '@/pages/find-music/recommend/index',
                },
                {
                  path: '/findmusic/musiclist',
                  component: '@/pages/find-music/music-list/index',
                },
              ],
            },
            {
              path: '/video',
              component: '@/pages/video/index',
            },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
