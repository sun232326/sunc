module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  settings: {
    'react': {
      version: '999.999.999'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.ts', '.tsx', '.jsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue']
    },
    'alias': {
      map: [['@', './src']],
      extensions: ['.vue', '.js', '.ts', '.tsx', '.jsx']
    }
  },
  rules: {
    'no-param-reassign': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'always'
      }
    ]
  }
};
