import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { tsRecommended } from "./config/angular-ts-recommended-config.js";
import { htmlRecommended } from "./config/angular-html-recommended-config.js";
import { testingRecommended } from "./config/testing-recommended-config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// needed because in test scenario the package.json is not in the same folder compared to bundled scenario
const possiblePaths = [
  path.resolve(__dirname, "../package.json"),
  path.resolve(__dirname, "../../package.json"),
];

const existingPath = possiblePaths.find((p) => fs.existsSync(p));
const pkg = JSON.parse(fs.readFileSync(existingPath, "utf8"));

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  configs: {},
  rules: {},
};

Object.assign(plugin.configs, {
  angular: {
    tsRecommended,
    htmlRecommended,
  },
  shared: {
    testingRecommended,
  },
});

export default plugin;
