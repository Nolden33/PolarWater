/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html', 
    'node_modules/preline/dist/*.js',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: media, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};


