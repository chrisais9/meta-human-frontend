plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-btn-background": "#F5F6F8",
        black: "#000000",
      },
      fontSize: {
        "2xs": ".5rem",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-in-fast": "fade-in .3s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ".btn-router": {
          "@apply rounded-full p-2 text-2xs text-black": {},
        },
        ".btn-router-active": {
          "@apply btn-router bg-black text-header-btn-background": {},
        },
        ".btn-router-dark": {
          "@apply rounded-full p-2 text-2xs text-white": {},
        },
        ".btn-router-active-dark": {
          "@apply btn-router bg-white text-black": {},
        },
      });
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".fade-in": {
          animation: "fadeIn 1s ease-in-out",
          "-webkit-animation": "fadeIn 1s ease-in-out",
          "-moz-animation": "fadeIn 1s ease-in-out",
          "-o-animation": "fadeIn 1s ease-in-out",
          "-ms-animation": "fadeIn 1s ease-in-out",
        },
      });
    }),
  ],
};
