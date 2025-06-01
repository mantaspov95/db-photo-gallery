import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": "/src", //enable absolute imports from the src directory
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@context": "/src/context",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
    },
  },
  //for vscode on wsl npm run dev restart on filesave
  server: {
    watch: {
      usePolling: true,
    },
  },
});
