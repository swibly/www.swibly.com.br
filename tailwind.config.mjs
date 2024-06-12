/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  daisyui: {
    logs: false,
    themes: [
      {
        swibly: {
          primary: '#be123c',
          secondary: '#ea9700',
          accent: '#7d9a00',
          neutral: '#121815',
          'base-100': '#111215',
          info: '#0090d8',
          success: '#00c002',
          warning: '#a67a00',
          error: '#e6002f'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
