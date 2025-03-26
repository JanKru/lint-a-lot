import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

export default defineConfig([
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/bundle.mjs",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/bundle.cjs",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [terser()],
  },
]);
