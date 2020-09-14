module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
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
    'vue/html-self-closing': 'off',
    'arrow-parens': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'dot-notation': 'off',
  },
  globals: {
    $nuxt: true,
  },
};
