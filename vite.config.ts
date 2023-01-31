/*
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2023-01-30 10:43:03
 */
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'

const customIconPath = path.resolve(__dirname, 'src/assets/svg')

const Timestamp = new Date().getTime()

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, __dirname)
  console.log('isBuild', isBuild, env.VITE_MODE)
  return {
    base:  env.VITE_MODE === 'production' ? '/test/' : './', //打包路径
    plugins: [vue(),
      vueJsx(),
      Unocss({}),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/typings/auto-imports.d.ts',
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          custom: FileSystemIconLoader(customIconPath),
        },
        scale: 1,
        defaultClass: 'inline-block',
      }),
      Components({
        dts: 'src/typings/components.d.ts',
        resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
      }),],
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      port: 8500,
      open: true,
      https: false,
      proxy: {
        '/xt-api/': {
          target: 'https://adapi.souxiu.cn/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/xt-api\//g, ''),
        },
        '/yiketianqi-api/': {
          target: 'https://v0.yiketianqi.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/yiketianqi-api\//g, ''),
        },
      },
    },
    // 生产环境打包配置
    //去除 console debugger
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: `static/js/[name]-[hash]${Timestamp}.js`,
          entryFileNames: `static/js/[name]-[hash]${Timestamp}.js`,
          assetFileNames: `static/[ext]/[name]-[hash]${Timestamp}.[ext]`,
        },
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
}
