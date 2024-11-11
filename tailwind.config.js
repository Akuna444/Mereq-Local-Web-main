/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homebg: "url('/assets/backgrounds/home-bg.svg')",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },

        floatingx: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        moveZuccuni: {
          "0%": { top: "40%", left: "20%", zIndex: "30" },
          "14%": { top: "52%", left: "40%", zIndex: "30" },
          "28%": { top: "55%", left: "55%", zIndex: "30" },
          "42%": { top: "50%", left: "70%", zIndex: "10" },
          "57%": { top: "20%", left: "52%", zIndex: "10" },
          "71%": { top: "20%", left: "18%", zIndex: "10" },
          "85%": { top: "35%", left: "5%", zIndex: "30" },
          "100%": { top: "40%", left: "20%", zIndex: "30" },
        },

        moveGarlic: {
          "0%": { top: "52%", left: "40%", zIndex: "30" },
          "14%": { top: "55%", left: "55%", zIndex: "30" },
          "28%": { top: "50%", left: "70%", zIndex: "10" },
          "42%": { top: "20%", left: "52%", zIndex: "10" },
          "57%": { top: "20%", left: "18%", zIndex: "10" },
          "71%": { top: "35%", left: "5%", zIndex: "30" },
          "85%": { top: "40%", left: "20%", zIndex: "30" },
          "100%": { top: "52%", left: "40%", zIndex: "30" },
        },

        movePepper: {
          "0%": { top: "55%", left: "55%", zIndex: "30" },
          "14%": { top: "50%", left: "70%", zIndex: "10" },
          "28%": { top: "20%", left: "52%", zIndex: "10" },
          "42%": { top: "20%", left: "18%", zIndex: "10" },
          "57%": { top: "35%", left: "5%", zIndex: "30" },
          "71%": { top: "40%", left: "20%", zIndex: "30" },
          "85%": { top: "52%", left: "40%", zIndex: "30" },
          "100%": { top: "55%", left: "55%", zIndex: "30" },
        },

        moveBowl: {
          "0%": { top: "50%", left: "70%", zIndex: "10" },
          "14%": { top: "20%", left: "52%", zIndex: "10" },
          "28%": { top: "20%", left: "18%", zIndex: "10" },
          "42%": { top: "35%", left: "5%", zIndex: "30" },
          "57%": { top: "40%", left: "20%", zIndex: "30" },
          "71%": { top: "52%", left: "40%", zIndex: "30" },
          "85%": { top: "55%", left: "55%", zIndex: "30" },
          "100%": { top: "50%", left: "70%", zIndex: "10" },
        },

        moveTomato: {
          "0%": { top: "20%", left: "52%", zIndex: "10" },
          "14%": { top: "20%", left: "18%", zIndex: "10" },
          "28%": { top: "35%", left: "5%", zIndex: "30" },
          "42%": { top: "40%", left: "20%", zIndex: "30" },
          "57%": { top: "52%", left: "40%", zIndex: "30" },
          "71%": { top: "55%", left: "55%", zIndex: "30" },
          "85%": { top: "50%", left: "70%", zIndex: "10" },
          "100%": { top: "20%", left: "52%", zIndex: "10" },
        },
        moveSliced: {
          "0%": { top: "20%", left: "18%", zIndex: "10" },
          "14%": { top: "35%", left: "5%", zIndex: "30" },
          "28%": { top: "40%", left: "20%", zIndex: "30" },
          "42%": { top: "52%", left: "40%", zIndex: "30" },
          "57%": { top: "55%", left: "55%", zIndex: "30" },
          "71%": { top: "50%", left: "70%", zIndex: "10" },
          "85%": { top: "20%", left: "52%", zIndex: "10" },
          "100%": { top: "20%", left: "18%", zIndex: "10" },
        },

        movePan: {
          "0%": { top: "35%", left: "5%", zIndex: "30" },
          "14%": { top: "40%", left: "20%", zIndex: "30" },
          "28%": { top: "52%", left: "40%", zIndex: "30" },
          "42%": { top: "55%", left: "55%", zIndex: "30" },
          "57%": { top: "50%", left: "70%", zIndex: "10" },
          "71%": { top: "20%", left: "52%", zIndex: "10" },
          "85%": { top: "20%", left: "18%", zIndex: "10" },
          "100%": { top: "35%", left: "5%", zIndex: "30" },
        },
      },
      animation: {
        floating: "floating 4s infinite",
        floatingfast: "floatingx 3s infinite",
        floatingx: "floatingx 4s infinite",
        fade: "fade 4s",
        zuccuni: "moveZuccuni 10s infinite",
        garlic: "moveGarlic 10s infinite",
        pepper: "movePepper 10s infinite",
        bowl: "moveBowl 10s infinite",
        tomato: "moveTomato 10s infinite",
        sliced: "moveSliced 10s infinite",
        pan: "movePan 10s infinite",
      },
      boxShadow: {
        glow: "0 0 200px rgba(20, 97, 84, 0.9)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light mode colors
        primary: "#2f0080",
        secondary: "#0cd489",
        tertiary: "#ed9d00",
        fourth: "#c5b8db",
        primaryLight: "#300083",
        primaryMedium: "#1a0048",
        primaryDark: "#110a1c",
        grayDark: "#2b2b2b",

        // ...
      },
    },
  },
  plugins: [require("./plugins/animationDelay")],
  darkMode: "class",
};
