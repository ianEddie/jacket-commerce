/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh'
      },
      boxShadow: {
        custom: '7px 7px 3px rgba(12, 10, 9, 0.5)'
      },
      fontFamily: {
        title: ['Panchang-Variable'],
        primary: ['ClashDisplay-Variable']
      }
    }
  },
  plugins: []
};
