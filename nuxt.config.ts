// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  css: ['@unocss/reset/tailwind.css'],
  content: {
    documentDriven: {
      layoutFallbacks: ['blog'],
    },
  },
})
