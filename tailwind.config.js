/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      styled: ["Kumar One Outline", "serif", "system-ui"],
      titles: ["Raleway", "sans-serif", "system-ui"],
      tipography: ["Arimo", "sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        blu: {
          100: "#003566",
          200: "#001d3d",
          300: "#000814",
        },
        yel: {
          100: "#ffd60a",
          200: "#ffc300",
        },
        grayish: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
