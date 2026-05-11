/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008C89",
        secondary: "#006B68",
        dark: "#111111",
        light: "#F5F7F8",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
