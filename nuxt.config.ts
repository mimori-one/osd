// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules:    ['@nuxtjs/i18n', '@pinia/nuxt', '@vueuse/nuxt'],
  typescript: {
    strict: true,
  },
  css:     ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss:  {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'cmyk',
      },
    },
  },
  // nitro: {
  //   devProxy: {
  //     '/api/': {
  //       target:       'https://market.dev.onesheen.jp/api/',
  //       changeOrigin: true,
  //     },
  //   },
  // },
})
