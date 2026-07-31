/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "#0B2530",
        "ink-2": "#123340",
        "ink-3": "#1A4350",
        paper: "#FFFFFF",
        "paper-2": "#EAF4F4",
        "paper-3": "#D8ECEC",
        coral: { DEFAULT: "#0D9488", light: "#2DD4BF", dark: "#0F766E" },
        violet: { DEFAULT: "#0E7490", light: "#22D3EE", dark: "#155E75" },
        teal: { DEFAULT: "#5EEAD4", light: "#99F6E4", dark: "#2DD4BF" },
      },
      fontFamily: {
        display: ["Bahnschrift", '"Arial Narrow"', "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Consolas", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        sunset: "linear-gradient(120deg, #0D9488 0%, #14B8A6 50%, #0E7490 100%)",
        "sunset-soft": "linear-gradient(120deg, rgba(13,148,136,0.15), rgba(14,116,144,0.15))",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(11,37,48,0.18)",
        glow: "0 12px 30px -10px rgba(13,148,136,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
