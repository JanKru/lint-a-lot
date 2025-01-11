import fs from "fs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from "@eslint/js";
import angular from "angular-eslint";

const pkg = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"),
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
      rules: {},
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
  ],
});

Object.assign(plugin.configs, {
  recommendedTemplateAngular: [
    {
      languageOptions: {},
    },
    ...angular.configs.templateRecommended,
    ...angular.configs.templateAccessibility,
  ],
});
export default plugin;
