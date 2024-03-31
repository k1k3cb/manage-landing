/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        principal: ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'dark-grayish-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-red': 'hsl(13, 100%, 96%)',
        'vary-light-gray': 'hsl(0, 0%, 98%)'
      },

      backgroundImage: {
        'close-menu': "url('public/images/icon-close.svg')",
        'open-menu': "url('public/images/icon-hamburger.svg')"
      }
    }
  },
  plugins: []
};
