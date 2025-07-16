import jasmine from "eslint-plugin-jasmine";
import globals from "globals";
import { jasmineRules } from "../custom-rules.js";

export const testingRecommended = {
  files: ["**/*.spec.ts"],
  plugins: {
    jasmine,
  },
  languageOptions: {
    globals: {
      ...globals.jasmine,
    },
  },
  rules: jasmineRules,
};
