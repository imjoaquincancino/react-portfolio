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
        brand: '#8e3fff',
        brandsecondary: "#214e72",
        brandlight: "#6cc1d7",
        blackbg: "#060913",
        dark: "#020c21",
        borderdark: "#858b9833",
        "brand-dark-100": "#858b9833",
        "brand-dark-800": "#0c0f19"
      },
    },
  },
  plugins: [
    typography,
  ],
}