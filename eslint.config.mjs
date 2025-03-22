import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  resolvePluginsRelativeTo: import.meta.dirname,
})

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'package-lock.json',
      '*.min.js',
      'coverage/',
      'build/',
      'public/',
      '*.md',
      '.vscode/',
      'webpack.config.cjs',
      'babel.config.cjs',
      'jest.config.cjs',
    ],
  },

  js.configs.recommended,

  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'jest', 'prettier', 'react-hooks'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  }),
]
