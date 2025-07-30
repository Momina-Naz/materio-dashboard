/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vuetify/dist/vuetify.min.css", // optional but safe
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
