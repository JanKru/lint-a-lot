import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import nodePlugin from "eslint-plugin-n";

export default [
  js.configs.recommended,
  eslintPlugin.configs["flat/recommended"],
  nodePlugin.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "eslint-plugin/require-meta-docs-description": "error",
      "n/exports-style": ["error", "module.exports"],
      "n/no-unpublished-import": "off",
    },
  },
  eslintPluginPrettierRecommended,
];
