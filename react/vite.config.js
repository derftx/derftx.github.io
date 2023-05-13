import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["lcovonly", "text-summary"],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.js",
  },
});
