
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
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "coverage",
    "public"
  ]
}