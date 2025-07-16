import { expect, describe, test } from "@jest/globals";
import plugin from "../src/eslint-config/plugin.js";

describe("angular.tsRecommended", () => {
  describe("include custom rules", () => {
    const rulesToTest = [
      "no-console", // custom-rules.js -> jsRules
      "@typescript-eslint/naming-convention", // custom-rules.js -> tsRules
      "import-x/named", // custom-rules.js -> importXRules
    ];

    rulesToTest.forEach((ruleName) => {
      test(`should include rule: ${ruleName}`, () => {
        const tsRecommended = plugin.configs.angular.tsRecommended;
        const rule = tsRecommended.some(
          (entry) => entry.rules?.[ruleName] !== undefined,
        );
        expect(rule).toBe(true);
      });
    });
  });

  test("should include typescript-eslint recommended rules", () => {
    const tsRecommended = plugin.configs.angular.tsRecommended;
    const rule = tsRecommended.some(
      (entry) =>
        entry.rules?.["@typescript-eslint/ban-ts-comment"] !== undefined,
    );
    expect(rule).toBe(true);
  });
});
