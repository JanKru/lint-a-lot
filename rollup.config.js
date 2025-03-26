import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

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
    plugins: [
      terser(),
      copy({
        targets: [{ src: ".editorconfig", dest: "dist" }],
      }),
    ],
  },
]);
