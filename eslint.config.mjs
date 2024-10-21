import path from 'path';
import { fileURLToPath } from 'url';
import { includeIgnoreFile } from '@eslint/compat';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';
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
      jsxA11y.flatConfigs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      prettier,
    ],

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
    },

    rules: {
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-debugger': 'warn',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      ...reactHooks.configs.recommended.rules,
      ...getReactRules(),
      ...getPerfectionistRules(),
      ...getTSEslintRules(),
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
    rules: {
      'react/jsx-no-bind': 'off',
    },
  },

  {
    files: ['src/**/*.stories.tsx'],
    rules: {
      'react/prop-types': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-no-bind': 'off',
    },
  },

  {
    files: ['*.config.ts', '*.mocks*.ts'],
    rules: { 'perfectionist/sort-objects': 'off' },
  },

  includeIgnoreFile(gitignorePath),
);

// -----------------------------------------------------------------------------

/**
 *
 * @param {{
 *  hasBooleanPropNamingRule?: boolean,
 *  hasJSXHandlerNamesRule?: boolean
 * } | undefined} options
 *
 * @returns {import('typescript-eslint').ConfigWithExtends['rules']}
 */
function getReactRules(options = {}) {
  const { hasBooleanPropNamingRule, hasJSXHandlerNamesRule } = options;

  return {
    'react/boolean-prop-naming': !hasBooleanPropNamingRule
      ? 'off'
      : [
          'error',
          {
            rule: '^(is|has|can|should)[A-Z]([A-Za-z0-9]?)+|open|disabled|checked|invalid',
          },
        ],

    'react/hook-use-state': [
      'error',
      {
        allowDestructuredState: true,
      },
    ],

    'react/button-has-type': 'error',
    'react/forward-ref-uses-ref': 'error',
    'react/function-component-definition': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react/jsx-newline': [
      'error',
      {
        prevent: true,
        allowMultilines: true,
      },
    ],

    'react/jsx-handler-names': !hasJSXHandlerNamesRule
      ? 'off'
      : [
          'error',
          {
            eventHandlerPropPrefix: 'on',
            eventHandlerPrefix: 'handle',
            checkLocalVariables: true,
            checkInlineFunction: true,
          },
        ],

    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
  };
}

// -----------------------------------------------------------------------------

/**
 * @returns {import('typescript-eslint').ConfigWithExtends['rules']}
 */
function getPerfectionistRules() {
  return {
    'perfectionist/sort-imports': [
      'error',
      {
        internalPattern: ['~/**', '@/**'],
        groups: [
          ['builtin', 'builtin-type'],
          ['external', 'external-type'],
          ['internal', 'internal-type'],
          [
            'parent',
            'parent-type',
            'sibling',
            'sibling-type',
            'index',
            'index-type',
          ],
          ['side-effect'],
          ['style', 'side-effect-style'],
          ['object'],
          ['unknown'],
        ],
        sortSideEffects: true,
      },
    ],

    'perfectionist/sort-named-imports': [
      'error',
      {
        groupKind: 'values-first',
      },
    ],

    'perfectionist/sort-exports': [
      'error',
      {
        groupKind: 'values-first',
      },
    ],

    'perfectionist/sort-named-exports': [
      'error',
      {
        groupKind: 'values-first',
      },
    ],

    'perfectionist/sort-interfaces': [
      'error',
      {
        type: 'line-length',
        groupKind: 'required-first',
        partitionByNewLine: true,
        groups: ['unknown', 'multiline', 'callbacks'],
        customGroups: { callbacks: ['on*'] },
      },
    ],

    'perfectionist/sort-object-types': [
      'error',
      {
        type: 'line-length',
        groupKind: 'required-first',
        partitionByNewLine: true,
        groups: ['unknown', 'multiline', 'callbacks'],
        customGroups: { callbacks: ['on*'] },
      },
    ],

    'perfectionist/sort-union-types': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
        groups: ['unknown', 'literal', 'nullish'],
      },
    ],

    'perfectionist/sort-enums': [
      'error',
      {
        type: 'line-length',
        forceNumericSort: true,
        partitionByNewLine: true,
      },
    ],

    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'line-length',
        groups: ['multiline', 'unknown', 'data', 'callbacks', 'shorthand'],
        customGroups: { callbacks: ['on*'], data: ['data-*'] },
      },
    ],

    'perfectionist/sort-objects': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
        groups: ['unknown', 'callbacks'],
        customGroups: { callbacks: ['on*'] },
      },
    ],

    'perfectionist/sort-array-includes': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
        groupKind: 'literals-first',
      },
    ],

    'perfectionist/sort-maps': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
      },
    ],

    'perfectionist/sort-sets': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
        groupKind: 'literals-first',
      },
    ],

    'perfectionist/sort-variable-declarations': [
      'error',
      {
        type: 'line-length',
        partitionByNewLine: true,
      },
    ],

    'perfectionist/sort-intersection-types': 'error',
    'perfectionist/sort-switch-case': 'error',
    'perfectionist/sort-classes': 'error',
  };
}

// -----------------------------------------------------------------------------

/**
 * @returns {import('typescript-eslint').ConfigWithExtends['rules']}
 */
function getTSEslintRules() {
  return {
    // added tseslint rules
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // overrided tseslint rules
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'with-single-extends',
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
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
      {
        object: true,
        array: false,
      },
    ],

    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
  };
}
