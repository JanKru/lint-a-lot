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

const importX = {
  "import-x/order": [
    "error",
    {
      groups: [
        ["builtin", "external"], // Eingebaute Module wie fs und externe Pakete
        ["internal"], // Interne Imports (z. B. aus deinem Projekt)
        ["parent", "sibling", "index"], // Relative Imports
      ],
      "newlines-between": "always", // Neue Zeilen zwischen Gruppen
      alphabetize: {
        order: "asc", // Alphabetische Reihenfolge
        caseInsensitive: true, // Groß- und Kleinschreibung ignorieren
      },
    },
  ],
};

module.exports = { jsRules, tsRules, jasmineRules, importX };
