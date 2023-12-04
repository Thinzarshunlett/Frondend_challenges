/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors:{
      'almost-white': 'hsl(0, 0%, 98%)',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

