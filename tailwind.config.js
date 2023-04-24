/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FC4747',
        primary: '#10141E',
        darkBlue: '#161D2F',
        lightBlue: '#5A698F',
      },
    },
  },
  plugins: [],
}
