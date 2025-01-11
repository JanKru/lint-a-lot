const customRules = require("./custom-rules.cjs");

const stylelintConfig = {
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

module.exports = stylelintConfig;
