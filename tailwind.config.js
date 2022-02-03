module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        assistant: "'Assistant', system-ui ,sans-serif;",
      },

      colors: {
        primary: "#edede8",
        button: "#73a942",
        text: "#3a506b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
