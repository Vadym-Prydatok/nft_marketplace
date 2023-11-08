/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "data-aos",
  ],
  theme: {
    fontFamily: {},

    // screens: {
    //   xs: '384px',
    //   sm: '640px',
    //   md: '834px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },

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
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1) translateY(0)', transformOrigin: '50% 16%' },
          '100%': { transform: 'scale(1.25) translateY(-15px)', transformOrigin: 'top' },
        }
      },
    },
  },
  plugins: [],
};
