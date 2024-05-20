/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  bracketSameLine: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['cn'],
  importOrder: [
    '^react$',
    '^next$',
    '<THIRD_PARTY_MODULES>',
    '^@/lib(.*)$',
    '^@/utils(.*)$',
    '^@/components/(.*)$',
    '^@/features/(.*)$',
    '^@/config(.*)$',
    '^@/assets(.*)$',
    '^@/content(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
