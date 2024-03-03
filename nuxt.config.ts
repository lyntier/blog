// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxt/image', 'nuxt-particles', '@nuxtjs/color-mode'],
  css: ['@unocss/reset/tailwind.css', '/assets/css/scrollbar.css', '/assets/css/scroll-shadow.css'],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'catppuccin-macchiato',
    },
  },
  components: [{
    path: '~/components',
    pathPrefix: false,
    prefix: 'Auv',

  }],
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
})
