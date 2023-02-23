// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxt/image-edge'],
    css: [
        '~/assets/css/main.css',
    ],
    plugins: ['@/plugins/antd'],
    build: {
        transpile: ['primevue']
    },
    components: [
        '~/components/Builder',
        '~/components/Shared',
        '~/components/Blog',
    ],
    router: {
        middleware: ['auth']
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            API_URL: process.env.API_URL,
        }
    },

})
