/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#7610F8',
        brandlight: "#b67efc"
      },
    },
  },
  plugins: [
    typography,
  ],
}