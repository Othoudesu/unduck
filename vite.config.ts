import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base:"/<REPO>/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});
