import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier/recommended';
import jestDom from 'eslint-plugin-jest-dom';

export default tseslint.config(
  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      a11y.flatConfigs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      prettier,
    ],

    plugins: {
      'react-hooks': hooks,
      'react-refresh': refresh,
    },

    rules: {
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-debugger': 'warn',

      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',

      ...hooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      '@typescript-eslint/prefer-nullish-coalescing': 'off',

      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
    },

    languageOptions: {
      ecmaVersion: 2020,

      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['src/**/*.test.tsx', 'src/**/*.test.tsx'],
    extends: [jestDom.configs['flat/recommended']],
  },

  {
    files: ['src/**/*.stories.tsx'],
    rules: { 'react/prop-types': 'off' },
  },
);
