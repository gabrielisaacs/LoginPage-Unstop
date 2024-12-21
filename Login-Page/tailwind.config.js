/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#1c1b1f',
        'purple': '#6358dc',
        'ash': '#f4f4f4',
      },
    },
  },
  plugins: [],
};
