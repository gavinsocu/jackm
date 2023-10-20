import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';


export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: {
        '@': './src'
      },
    },
    plugins: [vue(),
        Components({
      resolvers: [VantResolver()],
    }),],
    define: {
      'process.env': { ...process.env }
    }
  }
});

