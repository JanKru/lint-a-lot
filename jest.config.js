/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.spec.js"],
  verbose: true, // Zeigt detaillieirte Testergebnisse an
  transform: {}, // Deaktiviert die automatische Transformation (da ESM nativ läuft)i
};
