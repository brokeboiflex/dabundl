import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./index.js", // Specify your entry file
      output: {
        entryFileNames: "index.js", // Rename output file
      },
    },
  },
});
