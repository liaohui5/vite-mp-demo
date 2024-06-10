import { defineConfig } from "vite";
import path from "path";
import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

const resolvePath = (dir) => path.resolve(".", dir);

export default defineConfig({
  plugins: [vituum(), pug({ root: "./src" }), tailwindcss()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
    },
  },
  build: {
    rollupOptions: {
      input: ["./src/scripts/**/**.js", "./src/pages/**/*.pug"],
    },
  },
});
