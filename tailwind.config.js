/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: {
          100: "#FF1800",
        },
        redBull: {
          100: "#121F45",
          200: "#223971",
          300: "#CC1E4A",
          400: "#FFC906",
        },
        ferrari: {
          100: "#A6051A",
          200: "#FFEB00",
          300: "#FFF",
          400: "#111",
        },
        mercedes: {
          100: "#00A19C",
          200: "#80142B",
          300: "#C6C6C6",
          400: "#111",
        },
        mcLaren: {
          100: "#FF8000",
          200: "#47C7FC",
          300: "#FFF",
          400: "#000",
        },
        alfaRomeo: {
          100: "#981E32",
          200: "#295294",
          300: "#F62039",
          400: "#F9F9F8",
        },
        alpine: {
          100: "#005BA9",
          200: "#0078C1",
          300: "#FD4BC7",
          400: "#FFF",
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        header: "1fr 2fr;",
      },
    },
    screens: {
      xl: { max: "1199px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [],
};
