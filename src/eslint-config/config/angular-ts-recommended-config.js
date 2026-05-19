import { defineConfig } from "eslint/config";

import * as angular from "angular-eslint";
import globals from "globals";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginImportX from "eslint-plugin-import-x";
/** required for typescript imports not default node import behavior */
import * as tsResolver from "eslint-import-resolver-typescript";
import eslint from "@eslint/js";

import {
  angularRules,
  importXRules,
  jsRules,
  tsRules,
} from "../custom-rules.js";

function withFiles(configs, files) {
  return Array.from(Array.isArray(configs) ? configs : [configs]).map(
    (config) => ({
      ...config,
      files,
    }),
  );
}

export const tsRecommended = defineConfig([
  ...withFiles(eslint.configs.recommended, ["**/*.ts"]),
  ...withFiles(angular.configs.tsRecommended, ["**/*.ts"]),

  {
    files: ["**/*.ts"],
    ignores: ["eslint.config.js"],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
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
]);
