module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      blue: "#183599",
      orange: "#FBB539",
      dark: "#FBB539",
      light: "#F5F8FF",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
module.exports = {
  //...
  plugins: [require("daisyui")],
};
