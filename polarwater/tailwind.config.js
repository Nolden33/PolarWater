/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [
  //   './src/**/*.{js,jsx,ts,tsx}', 
  //   './public/index.html', 
  //   'node_modules/preline/dist/*.js',
  // ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};


