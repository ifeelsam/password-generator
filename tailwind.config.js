
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#00A6A6',
        'custom-text': '#F49F0A',
        'custom-input': '#BBDEF0',
        'custom-copy': '#EFCA08',
        'custom-extra': '#F08700'
      }
    },
  },
  plugins: [],
}

