/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#270B79",
        secondary: "#ec642a",
      },
      fontFamily: {
        "Lufga-ExtraBold": ["Lufga-ExtraBold", "sans-serif"],
        "Lufga-Regular": ["Lufga-Regular", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": 'url("./src/assets/hero.png")',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'code-fade': 'code-fade 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'scale(1.5)',
            opacity: '0.8'
          },
        },
        'code-fade': {
          '0%, 100%': { 
            opacity: '0.1'
          },
          '50%': { 
            opacity: '0.3'
          },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animated")],
};
