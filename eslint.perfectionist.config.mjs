import tseslint from 'typescript-eslint';

const config = tseslint.config({
  rules: {
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
  },
});

export const perfectionistRules = config[0].rules;
