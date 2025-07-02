// eslint.config.js
import eslintRecommended from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintRecommended.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      prettier: prettierRecommended.plugins.prettier,
    },
    rules: {
      ...prettierRecommended.rules,
      'no-var': 'error',
      'prefer-const': 'warn',
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
