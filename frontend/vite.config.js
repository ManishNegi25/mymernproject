// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://mymernproject.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};
