import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    '/@': './',
  },
  publicRuntimeConfig: {
    apiToken: process.env.STORYBLOK_API_KEY,
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_API_KEY }],
    // ...
  ],
  buildModules: ['nuxt-windicss'],
  css: ['~/styles/base.css'],
})
