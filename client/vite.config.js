import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  themes: {
    default: "light",
    themes: {
      light: {
        primary: "#4f46e5",
        secondary: "#f59e0b",
        accent: "#ec4899",
        neutral: "#f3f4f6",
        "base-100": "#ffffff",
      },
      dark: {
        primary: "#6366f1",
        secondary: "#f59e0b",
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "https://own-portfolio-1-wyqk.onrender.com", // Adjust the target to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
