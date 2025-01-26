
# Lint-a-lot

The purpose of this package is to wrap common eslint and stylelint extensions in order to set them up as quickly as possible for a angular-project.

## Get started

### Install

Add dependency

```bash
npm i lint-a-lot --save-dev
```

#### CommonJS

In `eslint.config.js`

```typescript
module.exports = tseslint.config(
  // .... other
  {
    files: ["**/*.ts"],
    extends: [
      lintALot.esLintConfig.configs.angular.tsRecommended,
    ],
  },
  {
    files: ["**/*.html"],
    extends: [
      lintALot.esLintConfig.configs.angular.htmlRecommended,
    ],
    rules: {},
  }
);
```

### Test locally

If you want to test this library you can use `npm pack`. This will result in the creation of a `.tgz`-file.

1. Go to the project where you want to use lint-a-lot.
2. Open `package.json`
3. Add lint-a-lot to `devDependencies` -> `json
  "lint-a-lot": "file:<PATH_TO_YOUR_TGZ_FILE>",
`
4. Remove `node_modules`-Dir
5. Remove `package-lock.json`
6. Run `npm i`
7. Restart IDE (especially vscode)

# Rules overview

Overview of rules and used plugins/configs.

## Es-lint `angular.tsRecommended` and `angular.htmlRecommended`

### Custom rules

* [eslint-no-console](https://eslint.org/docs/latest/rules/no-console)
* [eslint-no-alert](https://eslint.org/docs/latest/rules/no-alert)
* [eslint-no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
* [eslint-eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
* [eslint-yoda](https://eslint.org/docs/latest/rules/yoda)
* [eslint-radix](https://eslint.org/docs/latest/rules/radix)
* [typescript-eslint-explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type/)
* [typescript-eslint-naming-convention](https://typescript-eslint.io/rules/naming-convention/)

### Extended packages

* [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
* [typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
* [angular-eslint](https://github.com/angular-eslint/angular-eslint)
* [eslint-plugin-jasmine](https://www.npmjs.com/search?q=eslint%20jasmine)

## Stylelint

* [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
* [stylelint-order](https://www.npmjs.com/package/stylelint-order)
* [stylelint-config-clean-order](https://www.npmjs.com/package/stylelint-config-clean-order)
* [stylelint-no-unsupported-browsers-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)

## TODO

* maybe include [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* maybe include [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
