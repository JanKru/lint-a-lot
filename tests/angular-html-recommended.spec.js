import { expect, describe, test } from "@jest/globals";
import plugin from "../src/eslint-config/plugin.js";

describe("angular.htmlRecommended", () => {
  test("should include angular template recommended rules", () => {
    const htmlRecommended = plugin.configs.angular.htmlRecommended;
    const rule = htmlRecommended.some(
      (entry) => (entry.name = "angular-eslint/template-recommended"),
    );
    expect(rule).toBe(true);
  });

  test("should include angular template accessibility rules", () => {
    const htmlRecommended = plugin.configs.angular.htmlRecommended;
    console.log(htmlRecommended);
    const rule = htmlRecommended.some(
      (entry) => (entry.name = "angular-eslint/template-accessibility'"),
    );
    expect(rule).toBe(true);
  });

  test("should include prettier rules", () => {
    const tsRecommended = plugin.configs.angular.tsRecommended;
    const rule = tsRecommended.some(
      (entry) => entry.rules?.["prettier/prettier"] !== undefined,
    );
    expect(rule).toBe(true);
  });
});
