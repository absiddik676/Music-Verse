/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#007BFF',
        // ...

        // Dark mode colors
        dark: {
          primary: '#FFFFFF',
          // ...
        },
      }
    },
  },
  plugins: [require("daisyui")],
}