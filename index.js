import jsPlugin from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import noOnlyTests from 'eslint-plugin-no-only-tests';

export default [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  jsPlugin.configs.recommended,
  ...tsEslint.configs['flat/recommended-type-checked'],
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      'no-only-tests': noOnlyTests,
    },
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'memberLike',
          modifiers: [],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'memberLike',
          modifiers: ['protected'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: ['property', 'method'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          // To allow React function components
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
        {
          selector: 'variableLike',
          modifiers: ['unused'],
          format: ['camelCase'],
          prefix: ['_'],
        },
      ],
      'eqeqeq': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            object: true,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'no-only-tests/no-only-tests': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
          message: 'Use #private instead',
        },
      ],
      'no-else-return': 'error',
      'require-await': 'error',
      'no-return-await': 'error',
      'arrow-body-style': 'error',
      '@typescript-eslint/parameter-properties': 'error',
    },
  },
];
