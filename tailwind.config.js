/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "data-aos",
  ],
  theme: {
    fontFamily: {},

    boxShadow: {
      md: '0px 3px 22px 1px #A259FF',
    },

    screens: {
      sm: '500px',
      md: "834px",
      lg: '1024px',
      xl: '1280px',
    },

    container: {
      padding: {
        DEFAULT: "20px",
        xl: "50px",
      },
      center: true,
      maxWidth: "1280px",
    },

    colors: {
      main: "#2B2B2B",
      secondary: "#3B3B3B",
      caption: '#858584',
      action: "#A259FF",
      white: "#fff",
      label: '#CCCCCC',
      whiteBlur: 'rgba(252, 251, 251, 0.1)',
      darkBlur: 'rgba(59, 59, 59, 0.5)',
    },
    extend: {
    },
  },
  plugins: [],
};
