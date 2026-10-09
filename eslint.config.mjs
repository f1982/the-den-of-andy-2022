import js from '@eslint/js'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: [
      '.next/**',
      '.open-next/**',
      '.wrangler/**',
      '.history/**',
      'node_modules/**',
      'coverage/**',
      'out/**',
      'public/**',
      'next-env.d.ts',
      'cloudflare-env.d.ts',
    ],
  },
  js.configs.recommended,
  ...nextCoreWebVitals,
  {
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    // TypeScript already reports undefined identifiers.
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-undef': 'off',
    },
  },
]

export default config
