/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'Lufga-ExtraBold': ['Lufga-ExtraBold', 'sans-serif'],
        'Lufga-Regular': ['Lufga-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

