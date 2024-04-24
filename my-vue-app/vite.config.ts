import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsConfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  plugins: [vue(), tsConfigPaths()],
  base: "/HomePage/",
});
