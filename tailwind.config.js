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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
