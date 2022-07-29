/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// https://tauri.app/v1/guides/getting-started/setup/vite#create-the-frontend
export default defineConfig({
  base: "./",
  root: "./src",
  // prevent vite from obscuring rust errors
  clearScreen: false,
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    // Tauri expects a fixed port, fail if that port is not available
    strictPort: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
