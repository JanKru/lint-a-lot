import customRules from "./custom-rules.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: ["stylelint-order", "stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        browsers: [
          "last 2 Edge versions",
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Safari versions",
          "last 2 Samsung versions",
          "last 2 Opera versions",
        ],
        severity: "warning",
        ignore: [
          "css-nesting",
          "css-variables",
          "multicolumn",
          "font-unicode-range",
          "viewport-units",
        ],
      },
    ],
    ...customRules,
  },
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order/error",
  ],
  configBasedir: __dirname,
};
