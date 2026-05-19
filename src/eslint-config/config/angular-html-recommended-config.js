import { defineConfig } from "eslint/config";

import * as angular from "angular-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import { angularTemplateRules } from "../custom-rules.js";

function withFiles(configs, files) {
  return Array.from(Array.isArray(configs) ? configs : [configs]).map(
    (config) => ({
      ...config,
      files,
    }),
  );
}

export const htmlRecommended = defineConfig([
  ...withFiles(angular.configs.templateRecommended, ["**/*.html"]),
  ...withFiles(angular.configs.templateAccessibility, ["**/*.html"]),
  ...withFiles(eslintPluginPrettierRecommended, ["**/*.html"]),
  {
    files: ["**/*.html"],
    rules: {
      ...angularTemplateRules,
      "prettier/prettier": ["error", { parser: "angular" }],
    },
  },
]);
