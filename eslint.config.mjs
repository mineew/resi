import path from 'path';
import { fileURLToPath } from 'url';
import { includeIgnoreFile } from '@eslint/compat';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import refresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier/recommended';
import jestDom from 'eslint-plugin-jest-dom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tseslint.config(
  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
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

      ...hooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // added tseslint rules
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      // overrided tseslint rules
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],

      // tseslint rules that extend eslint rules
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',

      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': [
        'error',
        { object: true, array: false },
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
    files: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    extends: [jestDom.configs['flat/recommended']],
  },

  {
    files: ['src/**/*.stories.tsx'],
    rules: { 'react/prop-types': 'off' },
  },

  includeIgnoreFile(gitignorePath),
);
