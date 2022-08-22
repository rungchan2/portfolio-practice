module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    "prettier"
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'never'],
      'linebreak-style': 0,
      "vue/no-unused-components": ["error", {
      "ignoreWhenBindingPresent": true
    }]
    
  }
}
