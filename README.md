# Lint-a-lot
The purpose of this package is to wrap common eslint and stylelint extensions in order to set them up as quickly as possible.

## Install
Add dependency
```bash
npm i @j1n/lint-a-lot
```
In `eslint.config.js`
```

```
### Test locally

If you want to test this library you can use `npm pack`. This will result in the creation of a `.tgz`-file.
1. Go to the project where you want to use lint-a-lot.
2. Open `package.json`
3. Add lint-a-lot to `devDependencies`
```json
  "lint-a-lot": "file:<PATH_TO_YOUR_TGZ_FILE>",
```
4. Remove `node_modules`-Dir
5. Remove `package-lock.json`
6. Run `npm i`
7. Restart IDE (especially in vscode)

# Wrapped packages
* Eslint
  * [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
  * [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
  * [typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
* Stylelint
  * [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)
  * [stylelint-order](https://www.npmjs.com/package/stylelint-order)
  * [stylelint-config-clean-order](https://www.npmjs.com/package/stylelint-config-clean-order)
  * [stylelint-no-unsupported-browsers-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)
