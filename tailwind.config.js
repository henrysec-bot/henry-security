module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#39ff14"
      },
      boxShadow: {
        neon: "0 0 10px #39ff14, 0 0 20px #39ff14"
      }
    },
  },
  plugins: [],
}