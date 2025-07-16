import * as angular from "angular-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { angularTemplateRules } from "../custom-rules.js";

export const htmlRecommended = [
  ...angular.configs.templateRecommended,
  ...angular.configs.templateAccessibility,
  eslintPluginPrettierRecommended,
  {
    rules: {
      ...angularTemplateRules,
      "prettier/prettier": ["error", { parser: "angular" }],
    },
  },
];
