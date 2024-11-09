import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-n";

export default [
  js.configs.recommended,
  eslintPlugin.configs["flat/recommended"],
  nodePlugin.configs["flat/recommended"],
  {
    rules: {
      "eslint-plugin/require-meta-docs-description": "error",
      "n/exports-style": ["error", "module.exports"],
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ["*.config.js"],
    rules: {
      "n/no-unpublished-import": "off",
      "n/no-extraneous-import": "off",
    },
  },
];
