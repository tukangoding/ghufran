// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content'],

  content: {
    // Content configuration
    highlight: {
      theme: 'github-dark',
    },
  },

  // SSG mode
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  // App metadata
  app: {
    head: {
      title: 'portfolio v2.0 — ghufrxn.',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Portfolio of Ghufran El Azizi — Frontend Developer, Rapper, Lifter.' },
        { name: 'theme-color', content: '#ff90e8' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  // CSS
  css: ['~/assets/css/main.css'],
})
