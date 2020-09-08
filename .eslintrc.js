module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'prettier/vue',
    '@nuxtjs/eslint-config-typescript',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'comma-dangle': 'off',
    semi: [2, 'always'],
    'space-before-function-paren': 'off',
    'no-return-assign': 'off',
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: 'babel-eslint',
    },
  },
};
