export const jsRules = {
  "no-console": "error",
  "no-alert": "error",
  "no-debugger": "error",
  eqeqeq: "error",
  yoda: "error",
  radix: "error",
};

export const tsRules = {
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "enumMember",
      format: ["UPPER_CASE"],
    },
    {
      selector: "enum",
      format: ["UPPER_CASE"],
    },
  ],
  "@typescript-eslint/explicit-function-return-type": "error",
};

export const jasmineRules = {
  "jasmine/no-focused-tests": "error",
  "jasmine/expect-matcher": "error",
  "jasmine/missing-expect": "error",
  "jasmine/named-spy": "error",
  "jasmine/new-line-between-declarations": "error",
  "jasmine/no-suite-dupes": "error",
  "jasmine/no-spec-dupes": "error",
  "jasmine/prefer-toBeUndefined": "error",
  "jasmine/no-unsafe-spy": "error",
  "jasmine/no-disabled-tests": "warn",
};

export const importXRules = {
  "import-x/order": [
    "error",
    {
      groups: [
        ["builtin", "external"],
        ["internal"],
        ["parent", "sibling", "index"],
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};

export const angularRules = {
  "@angular-eslint/prefer-standalone": "error",
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
};

export const angularTemplateRules = {
  "@angular-eslint/template/attributes-order": [
    "warn",
    {
      order: [
        "TEMPLATE_REFERENCE",
        "STRUCTURAL_DIRECTIVE",
        "OUTPUT_BINDING",
        "TWO_WAY_BINDING",
        "INPUT_BINDING",
        "ATTRIBUTE_BINDING",
      ],
    },
  ],
  "@angular-eslint/template/prefer-control-flow": "error",
  "@angular-eslint/template/prefer-self-closing-tags": "error",
};
