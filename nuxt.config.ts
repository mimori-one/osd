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
  nitro: {
    devProxy: {
      '/api/': {
        target:       process.env.PROXY_API_URL,
        changeOrigin: true,
      },
    },
  },
})
