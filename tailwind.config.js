/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens:{
        'xs': '501px',
       }
    },

   
  },
  plugins: [],
};
