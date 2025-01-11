const fs = require("fs");
const path = require("path");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslint = require("@eslint/js");
const angular = require("angular-eslint");
const htmlPlugin = require("eslint-plugin-html");
const eslintConfigPrettier = require("eslint-config-prettier");

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
  recommendedAngular: [
    eslint.configs.recommended,
    eslintPluginPrettierRecommended,
    ...angular.configs.tsRecommended,
    {
      rules: {
        // insert rules
      },
      languageOptions: {
        globals: {
          myGlobal: "readonly",
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
    },
    eslintConfigPrettier,
  ],
});

Object.assign(plugin.configs, {
  recommendedTemplateAngular: [
    {
      languageOptions: {},
    },
    ...angular.configs.templateRecommended,
    ...angular.configs.templateAccessibility,
    {
      plugins: {
        html: htmlPlugin,
        prettier: eslintConfigPrettier,
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            parser: "html",
          },
        ],
      },
    },
  ],
});

module.exports = plugin;
