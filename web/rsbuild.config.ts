import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./index.html",
  },
  server: {
    port: 3847,
    host: "0.0.0.0",
  },
  source: {
    define: {
      "import.meta.env.PUBLIC_RUST_API": JSON.stringify(
        process.env.PUBLIC_RUST_API ?? "http://127.0.0.1:3848",
      ),
      "import.meta.env.PUBLIC_PYTHON_API": JSON.stringify(
        process.env.PUBLIC_PYTHON_API ?? "http://127.0.0.1:3849",
      ),
    },
  },
  output: {
    // Relative URLs work on Firebase (/) and GitHub Pages (/kilimanjaro/)
    assetPrefix: "./",
    copy: [{ from: "./public" }],
  },
});
