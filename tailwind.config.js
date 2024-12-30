/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rich: '#131B23',
        alice: '#E9F1F7',
      },
      fontFamily: {
        tilt: ['Tilt Neon', 'serif'],
        tienne: ['Tienne', 'serif'],
      },
    },
  },
  plugins: [],
};
