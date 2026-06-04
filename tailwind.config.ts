import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: "#ECE8E0",
        ink: "#1A1A1A",
        charcoal: "#2A2A2A",
        lime: "#B5C44A",
        smoke: "#D7D1C6",
        graphite: "#111111",
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "Avenir Next",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Hanken Grotesk",
          "Avenir Next",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        luxury: "0 30px 80px rgba(26, 26, 26, 0.18)",
        "soft-lift": "0 18px 45px rgba(26, 26, 26, 0.12)",
      },
      letterSpacing: {
        luxury: "0.28em",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
