# Lint-a-lot

The purpose of this package is to wrap common eslint and stylelint extensions in order to set them up as quickly as possible for a angular-project.
Also this project contains a `.editorconfig` that should be used.

## Table of Contents

- [Get started](#get-started)
  - [Install](#install)
  - [ESLint](#eslint)
  - [Stylelint](#stylelint)
  - [Editorconfig](#editorconfig)
  - [IDE-setup](#IDE-setup)
  - [Test locally](#test-locally)
- [Publish a new version](#publish-a-new-version)
- [TODO / Improvement](#todo--improvement)
- [Rules overview](#rules-overview)
  - [Es-lint `angular.tsRecommended` and `angular.htmlRecommended`](#es-lint-angulartsrecommended-and-angularhtmlrecommended)
    - [Custom rules](#custom-rules)
    - [Extended packages](#extended-packages)
  - [Stylelint](#stylelint)

## Get started

### Install

Add dependency

```bash
npm i --save-dev @j1n/lint-a-lot
```

This lib supports `.cjs` and `.mjs`.

### ESLint

In `eslint.config.js`:

> Use tsling.config(...) in your `eslint.config.js` ([reason](./docs/architecture/eslint-config.md)):

```javascript
const tseslint = require("typescript-eslint");
const lal = require("@j1n/lint-a-lot");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      lal.esLintConfig.configs.angular.tsRecommended,
    ],
  },
  {
    files: ["**/*.spec.ts"],
    extends: [
      lal.esLintConfig.configs.shared.testingRecommended,
      lal.esLintConfig.configs.angular.tsRecommended,
    ],
  },
  {
    files: ["**/*.html"],
    extends: [
      lal.esLintConfig.configs.angular.htmlRecommended,
    ],
  }
);
```
Check if you have a builder for eslint in your `angular.json`:

```json
{
  "lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "lintFilePatterns": [
        "src/**/*.ts",
        "src/**/*.html",
        "e2e/**/*.ts"
      ]
    }
  }
}
```
### Stylelint

In `stylelint.config.js`:

```javascript
const lal = require("@j1n/lint-a-lot");

module.exports = lal.stylelintConfig;
```

### Editorconfig

Move the `.editorconfig` file to the root of you project.

### IDE-setup

See [IDE-setup](./docs/ide.md).

### Test locally

If you want to test this library you can use `npm pack`. This will result in the creation of a `.tgz`-file.

1. Go to the project where you want to use lint-a-lot.
2. Open `package.json`
3. Add lint-a-lot to `devDependencies` -> `json
  "@j1n/lint-a-lot"": "file:<PATH_TO_YOUR_TGZ_FILE>",
`
4. Remove `node_modules`-Dir
5. Remove `package-lock.json`
6. Run `npm i`
7. Restart IDE (especially vscode)

## Publish a new version

- apply your changes
- merge your branch containing the changes to main
- create new branch from main with  bump: version `versionumber old` → `versionumber new`
- run `cz bump` to increase version
- run `git push origin --tags`
- merge to main
- start publish pipeline manually

## TODO / Improvement

- Optimise ci/cd (do not build twice)
- include [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- include [playwright](https://www.npmjs.com/package/eslint-plugin-playwright)
- write an init-script that sets up everything

## Rules overview

Overview of rules and used plugins/configs.

### Es-lint `angular.tsRecommended` and `angular.htmlRecommended`

#### Custom rules

- [eslint-no-console](https://eslint.org/docs/latest/rules/no-console)
- [eslint-no-alert](https://eslint.org/docs/latest/rules/no-alert)
- [eslint-no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
- [eslint-eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
- [eslint-yoda](https://eslint.org/docs/latest/rules/yoda)
- [eslint-radix](https://eslint.org/docs/latest/rules/radix)
- [typescript-eslint-explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)
- [typescript-eslint-naming-convention](https://typescript-eslint.io/rules/naming-convention/)

#### Extended packages

- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [eslint-plugin-jasmine](https://www.npmjs.com/search?q=eslint%20jasmine)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

### Stylelint

> ⚠️ **CAUTION:** stylelint-no-unsupported-browsers-features is normally only a css linting plugin. It configured to ignore most of the rules that are 
> overlapping with scss - if you think this lib would be better without this plugin let me know

- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss), [details](./docs/stylelint-no-unsupported-browsers-features.md)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-config-clean-order](https://www.npmjs.com/package/stylelint-config-clean-order)
- [stylelint-no-unsupported-browsers-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)