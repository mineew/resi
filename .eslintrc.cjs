module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['@typescript-eslint', 'jsx-a11y', 'react-refresh'],

  rules: {
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-debugger': 'warn',

    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
        pathGroups: [
          { pattern: '~/**', group: 'parent' },
          { pattern: '@/**', group: 'parent' },
        ],
        pathGroupsExcludedImportTypes: [''],
      },
    ],
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

    'import/exports-last': 'error',
    'import/group-exports': 'error',

    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },

    react: {
      version: 'detect',
    },
  },
};
