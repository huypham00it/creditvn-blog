/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors:{
          'main-purple' : '#4A1CA7'
        }
      },
      fontSize: {
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '36px': '36px',
      }
    },
    plugins: [],
  }