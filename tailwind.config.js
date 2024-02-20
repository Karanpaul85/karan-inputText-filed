/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: {
          green100: "#737530",
          green200: "#4C4D27",
          green300: "#191A0B",
          grey: "#F7F9F2",
        },
        line: {
          grey100: "#F5F5F5",
          grey200: "#EEEEEE",
          grey300: "#E0E0E0",
        },
        text: {
          grey100: "#BDBDBD",
          grey200: "#757575",
          grey300: "#444444",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
