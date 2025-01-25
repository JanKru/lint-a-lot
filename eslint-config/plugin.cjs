const fs = require("fs");
const path = require("path");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslint = require("@eslint/js");
const angular = require("angular-eslint");
const typescriptEslintPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptEslintParser = require("@typescript-eslint/parser");
const jasmine = require("eslint-plugin-jasmine");
const globals = require("globals");
const { jsRules, tsRules, jasmineRules } = require("./custom-rules.js");

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../package.json"), "utf8"),
);

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
      angular.configs.tsRecommended,
      {
        processor: angular.processInlineTemplates,
        rules: {
          "@angular-eslint/directive-selector": [
            "error",
            {
              type: "attribute",
              prefix: "app",
              style: "camelCase",
            },
          ],
          "@angular-eslint/component-selector": [
            "error",
            {
              type: "element",
              prefix: "app",
              style: "kebab-case",
            },
          ],
        },
      },
      {
        files: ["*.ts", "*.tsx"],
        languageOptions: {
          parser: typescriptEslintParser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
          },
        },
        plugins: {
          "@typescript-eslint": typescriptEslintPlugin,
        },
        rules: {
          ...jsRules,
          ...tsRules,
          ...typescriptEslintPlugin.configs.recommended.rules,
        },
      },
      {
        files: ["*.spec.ts"],
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
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
      eslintPluginPrettierRecommended,
    ],
  },
});

module.exports = plugin;
