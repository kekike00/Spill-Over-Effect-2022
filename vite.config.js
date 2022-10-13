// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Spill-Over-Effect-2022/",
  build: {
    outDir: "./docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        menu: resolve(__dirname, "menu/index.html"),
        chapter1: resolve(__dirname, "chapter1/index.html"),
        chapter2: resolve(__dirname, "chapter2/index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
