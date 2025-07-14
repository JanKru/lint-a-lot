## Why this package expects you to use `tseslint.config(...)`

> This configuration package is designed for use with ESLint’s **Flat Config system** and assumes that you are using `tseslint.config(...)` from [`@typescript-eslint`](https://typescript-eslint.io/).

### ✅ Clean separation of concerns

By requiring consumers to call `tseslint.config(...)` in their own `eslint.config.js`, we ensure a clear separation between:

- **What** gets linted (rules, plugins, settings) → Provided by this package
- **How** TypeScript is integrated (parser, parserOptions) → Handled by `tseslint.config(...)`

This makes the setup modular, predictable, and future-proof.

---

### ✅ Automatic TypeScript setup

`tseslint.config(...)` takes care of important details that are easy to get wrong:

- Configures `@typescript-eslint/parser`
- Provides default `parserOptions` (e.g. for `project`, `ecmaVersion`)
- Injects plugin setup automatically
- Ensures consistent language-level behavior across files

We don't bundle this setup inside our config to avoid hiding these critical pieces from you — instead, we encourage you to be explicit and intentional.

---

### ✅ Maximum flexibility for consumers

You are free to:

- Use different `tsconfig.json` files per block
- Add your own custom file patterns
- Integrate with Angular templates, Jest, or other tools
- Control parser settings if needed

This wouldn’t be easily possible if the config package tried to control the full environment internally.

---

### ✅ Avoids versioning conflicts and boilerplate duplication

Keeping the parser and parserOptions in your own config means:

- You decide which version of `@typescript-eslint/parser` to use
- You avoid issues when the ecosystem updates
- You don’t have to override or undo any defaults from this package