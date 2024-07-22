/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#74c7ec'
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mocha: {
          "primary": "#cba6f7",
          "secondary": "#f5c2e7",
          "accent": "#b4befe",
          "neutral": "#bac2de",
          "base-100": "#11111b",
          "info": "#89b4fa",
          "success": "#a6e3a1",
          "warning": "#f9e2af",
          "error": "#f38ba8",
          },
        },
      ],
  },
}
