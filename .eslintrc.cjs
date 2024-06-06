/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'drizzle'],
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'drizzle/enforce-delete-with-where': [
      'error',

      {
        drizzleObjectName: ['db'],
      },
    ],
    'drizzle/enforce-update-with-where': [
      'error',
      {
        drizzleObjectName: ['db'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['**/permissions.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};

module.exports = config;
