import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import * as angular from "angular-eslint";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginImportX from "eslint-plugin-import-x";
import jasmine from "eslint-plugin-jasmine";
import * as tsResolver from "eslint-import-resolver-typescript";
import globals from "globals";
import {
  jsRules,
  tsRules,
  jasmineRules,
  importXRules,
  angularTemplateRules,
  angularRules,
} from "./custom-rules.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// needed because in test scenario the package.json is not in the same folder compared to bundled scenario
const possiblePaths = [
  path.resolve(__dirname, "../package.json"),
  path.resolve(__dirname, "../../package.json"),
];

const existingPath = possiblePaths.find((p) => fs.existsSync(p));
const pkg = JSON.parse(fs.readFileSync(existingPath, "utf8"));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {},
  rules: {},
};

Object.assign(plugin.configs, {
  angular: {
    tsRecommended: [
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
      {
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
      },
      eslintPluginPrettierRecommended,
    ],
    htmlRecommended: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintPluginPrettierRecommended,
      {
        rules: {
          ...angularTemplateRules,
          "prettier/prettier": ["error", { parser: "angular" }],
        },
      },
    ],
  },
});

export default plugin;
