/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        '3xl' : '0 0 8px 0 rgba(0,0,0,0.2)'
      }
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      matBlack: "#1c1c1c",
      bisque: "#FFE4C4",
      gray: "rgba(247,247,247,.2)",
      grayColor: "rgba(247,247,247,1)",
      purple: "rgba(75,12,192,1)",
      purpleLight: "rgba(75,12,192,0.2)",
      red: "#FF0000",
      Btnblue: "#186abb",
      lightBlue: "#2694AB",
      baseColor: "#40A578",
      darkBaseColor: "#006769",
      baseColor2: "#BFF6C3",
      linkHover: "rgba(0, 0, 0, 0.1)",
    }
  },
  plugins: [],
}