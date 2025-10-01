/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,        // allows Jest-like `describe`, `it`, `expect`
    environment: "jsdom", // simulate browser for React
    setupFiles: "./vitest.setup.ts", // like jest.setup.js
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
