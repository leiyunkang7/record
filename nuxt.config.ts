import { defineNuxtConfig } from 'nuxt'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // vite: {
  //   plugins: [
  //     vue(),
  //     eslintPlugin({
  //       include: [
  //         'src/**/*.js',
  //         'src/**/*.ts',
  //         'src/**/*.vue',
  //         'src/*.js',
  //         'src/*.ts',
  //         'src/*.vue'
  //       ]
  //     })
  //   ]
  // }
})
