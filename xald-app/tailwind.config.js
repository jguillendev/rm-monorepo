/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{html,js}",
      "./src/app/**/*.{html,js,jsx,ts,tsx}",
      "./public/index.html",
      "./src/index.html"
    ],
    theme: {
      extend: { },
      plugins: [],
    }
  }
  