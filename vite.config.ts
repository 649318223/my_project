import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const pathResolve = (dir: string) => {
	return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8010,
    hmr: true,
    proxy: {
      '/gitee': {
        target: 'https://gitee.com',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gitee/, ''),
      },
    },
  },
  // 其他配置项
  resolve:{
    //设置路径别名
    alias: {
      '@': pathResolve('./src'),
    },
  }
});