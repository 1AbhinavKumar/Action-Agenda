/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        qwithergryphen: ['"Qwitcher Grypen"', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}

