// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tukangoding.github.io/ghufran',
    },
  },

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
      routes: ['/', '/robots.txt', '/sitemap.xml'],
    },
  },

  // App metadata
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: 'Ghufran El Azizi — Frontend Developer, Musisi & Kreator',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Portfolio Ghufran El Azizi, frontend developer, musisi, dan kreator digital yang membangun website serta menulis tentang coding dan kehidupan.' },
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
