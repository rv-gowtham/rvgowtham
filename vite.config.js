import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? "/rvgowtham/" : "/",
    server: { port: 5173 },
  };
});
