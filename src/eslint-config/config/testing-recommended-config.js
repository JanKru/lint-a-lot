import jasmine from "eslint-plugin-jasmine";
import globals from "globals";
import { jasmineRules } from "../custom-rules.js";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

export const testingJasmineRecommended = defineConfig([
  {
    files: ["**/*.spec.ts"],
    plugins: { jasmine },
    languageOptions: { globals: { ...globals.jasmine } },
    rules: { ...jasmineRules, "no-undef": "off" },
  },
]);

export const testingVitestRecommended = defineConfig([
  {
    files: ["**/*.spec.ts"],
    plugins: {
      vitest,
    },
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/max-nested-describe": ["error", { max: 3 }],
      "no-undef": "off",
    },
  },
]);
