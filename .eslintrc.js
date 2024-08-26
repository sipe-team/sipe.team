module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    '.pnp.cjs',
    '.next/',
    '.pnp.loader.cjs',
    'public/',
    '.yarn/',
  ],
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 1,
      },
    },
  ],
  extends: [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
  },
};
