import tseslint from 'typescript-eslint';

const config = tseslint.config({
  rules: {
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
  },
});

export const tseslintRules = config[0].rules;
