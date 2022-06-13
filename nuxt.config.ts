import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@nuxtjs/tailwindcss'],
    experimental: { reactivityTransform: true },
    app: {
        head: {
            script: [
                { type: "text/javascript", src: "http://localhost:8098" },
            ]
        },
    },
    css: [
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => /-/.test(tag) && tag != 'router-view',
        },
    },
})
