/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mantine/core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f47a43",
        secondary: "#f8a879",
        accent: "#fbceb1",
        action: "#e23d14",
        beige: "#dfa47d",
        brownDark: "#82442b",
        brownLight: "#a16240",
        bronze: "#a76a45",
        redDark: "#d3683d",
      },
    },
  },
  plugins: [],
};
