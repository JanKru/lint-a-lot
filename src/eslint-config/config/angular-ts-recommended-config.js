import * as angular from "angular-eslint";
import globals from "globals";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginImportX from "eslint-plugin-import-x";
import * as tsResolver from "eslint-import-resolver-typescript";
import eslint from "@eslint/js";
import {
  angularRules,
  importXRules,
  jsRules,
  tsRules,
} from "../custom-rules.js";

export const tsRecommended = [
  eslint.configs.recommended,
  ...angular.configs.tsRecommended,
  {
    files: ["**/*.ts"],
    ignores: ["eslint.config.js"],
    languageOptions: {
      globals: globals.browser,
    },
    processor: angular.processInlineTemplates,
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "import-x": eslintPluginImportX,
    },
    settings: {
      "import-x/resolver": {
        typescript: true,
        name: "tsResolver",
        resolver: tsResolver,
      },
    },
    rules: {
      ...jsRules,
      ...tsRules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...eslintPluginImportX.configs.recommended.rules,
      ...eslintPluginImportX.flatConfigs.typescript.rules,
      ...importXRules,
      ...angularRules,
    },
  },
];
