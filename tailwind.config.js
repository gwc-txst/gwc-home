module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logo-png": "url('/public/logo.png')",
      },
      fontFamily: {
        "babe-sans": ["babesans"],
        inter: ["Inter"],
      },
      colors: {
        "gwc-blue": "#788DFF",
        "gwc-blue-light": "#b3bfff",
        "gwc-blue-lighter": "#dae0ff",
        "gwc-blue-lightest": "#eef0ff",
        "gwc-blue-deep": "#3d5bff",
        "gwc-blue-deeper": "#022aff",
        "gwc-pink": "#FF94FF",
        "gwc-pink-light": "#ffbbff",
        "gwc-pink-lighter": "#ffe2ff",
        "gwc-pink-lightest": "#fff6ff",
        "gwc-pink-deep": "#ff59ff",
        "gwc-pink-deeper": "#ff0bff",
        "gwc-mint": "#B6FFDD",
        "gwc-mint-light": "#ddffef",
        "gwc-mint-lighter": "#f1fff8",
        "gwc-mint-deep": "#7bffc2",
        "gwc-mint-deeper": "#2dff9d",
        "gwc-coal": "#242424",
        "gwc-silver": "#BFBFBF",
        "gwc-smoke": "#EEEEEE",
        "gwc-ash": "#F5F5F5",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
