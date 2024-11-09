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
        brandlight: "#b67efc",
        blackbg: "#001",
        dark: "#060913",
        borderdark: "#858b9833"
      },
    },
  },
  plugins: [
    typography,
  ],
}