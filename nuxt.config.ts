// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  nitro:{
    preset:'vercel-static'
  },
  app:{
    head:{
      htmlAttrs:{
        lang: 'pt-BR'
      }
    }
  }
})