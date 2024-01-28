/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  bracketSameLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
