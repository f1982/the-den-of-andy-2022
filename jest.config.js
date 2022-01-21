// module.exports = {
//   // ignore cypress folder
//   // Jest transformations -- this adds support for TypeScript
//   // using ts-jest
//   // transform: {
//   //   '^.+\\.tsx?$': 'ts-jest',
//   // },

//   // Test spec file resolution pattern
//   // Matches parent folder `__tests__` and filename
//   // should contain `test` or `spec`.
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

//   testPathIgnorePatterns: ['<rootDir>/cypress/'],
//   // Module file extensions for importing
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  // in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

// createJestConfig is exported
// this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
