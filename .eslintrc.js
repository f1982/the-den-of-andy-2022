
module.exports = {
  root: true,
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "next",
    // "prettier",
    // "plugin:prettier/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "simple-import-sort"
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "coverage",
    "public"
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}