/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // This is essential!

  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-8px) translateX(4px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      inset: {
        7: "28px",
        8: "32px",
        9: "36px",

        10: "40px",
        11: "44px",
        12: "48px",

        13: "54px",

        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",

        26: "104px",
        27: "108px",
        28: "112px",
        29: "116px",
        30: "120px",
      },
    },
  },
  filters: {
    "glass-distortion": "url(#glass-distortion)",
  },
  plugins: [],
};
