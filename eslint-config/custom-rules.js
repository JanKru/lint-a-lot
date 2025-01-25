const jsRules = {
  "no-console": "error",
  "no-alert": "error",
  "no-debugger": "error",
  eqeqeq: "error",
  yoda: "error",
  radix: "error",
  "sort-imports": [
    "warn",
    {
      ignoreCase: true,
    },
  ],
};

const tsRules = {
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

const jasmineRules = {
  "jasmine/no-focused-tests": "error",
  "jasmine/expect-matcher": "error",
  "jasmine/missing-expect": "error",
  "jasmine/named-spy": "error",
  "jasmine/new-line-before-expect": "error",
  "jasmine/new-line-between-declarations": "error",
  "jasmine/no-suite-dupes": "error",
  "jasmine/no-spec-dupes": "error",
  "jasmine/prefer-toBeUndefined": "error",
  "jasmine/no-unsafe-spy": "error",
  "jasmine/no-disabled-tests": "warn",
};

module.exports = { jsRules, tsRules, jasmineRules };
