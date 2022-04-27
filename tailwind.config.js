plugin = require("tailwindcss/plugin");

module.exports = {
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
      });
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
