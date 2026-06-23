/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cursor: {
          bg: "#0a0a0a",
          panel: "#111111",
          panelAlt: "#181818",
          sidebar: "#0a0a0a",
          activity: "#0a0a0a",
          border: "#1f1f1f",
          borderSoft: "#2a2a2a",
          hover: "#1a1a1a",
          selection: "#264f78",
          text: "#cccccc",
          textMuted: "#8b8b8b",
          accent: "#4ea1ff",
          success: "#89d185",
          warning: "#d7ba7d",
          danger: "#f48771"
        }
      },
      fontFamily: {
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
        sans: ["Segoe UI", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.03)"
      }
    }
  },
  plugins: []
};
