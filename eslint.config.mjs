import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  /**
   * Ignore Files Configuration
   * --------------------------
   * Specifies which files and directories should be ignored by ESLint
   */
  {
    ignores: ['**/*/dist/', '**/node_modules/', '*.config.*', '.next', '.yarn'],
  },

  /**
   * Language Options Configuration
   * ----------------------------
   * Defines global variables available across Node.js and browser environments
   */
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },

  /**
   * Core Configurations
   * ------------------
   * - ESLint recommended rules
   * - TypeScript ESLint recommended rules
   * - Disables TypeScript's unused variables check in favor of unused-imports plugin
   */
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  /**
   * Import Management Configuration
   * -----------------------------
   * - Handles unused imports
   * - Enforces consistent import ordering
   */
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            [
              '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            ],
            ['^react'],
            ['^next'],
            ['^@?\\w'],
            ['^(@|libs|components|utils|hooks|db)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.svg$'],
            ['^.+\\.module.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  /**
   * Next.js Configuration
   * --------------------
   * Implements Next.js specific linting rules and best practices
   */
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
    },
  },

  /**
   * React & Hooks Configuration
   * --------------------------
   * - React recommended rules
   * - JSX runtime configuration
   * - React Hooks rules
   */
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  hooksPlugin.configs['recommended-latest'],

  /**
   * Prettier Configuration
   * --------------------
   * Ensures code formatting consistency
   */
  prettierRecommended,
);
