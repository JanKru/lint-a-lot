import customRules from "./custom-rules.mjs";

export default {
  plugins: ["stylelint-order", "stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    ...customRules,
  },
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order/error",
  ],
};
