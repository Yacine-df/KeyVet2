/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          '0%': { transform: 'translateY(-5px)'  },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-5px)' },
        },
    },
      animation: {
       bouncing: 'smoothBounce 3s ease-in-out infinite'
     },
    },
  },
  plugins: [],
}

