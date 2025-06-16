import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example primary color
        secondary: "#FBBF24", // Example secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example font family
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Adjust the target to your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
