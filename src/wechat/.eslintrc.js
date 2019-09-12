module.exports = {
  extends: ['@cybozu/eslint-config/presets/node', '../.eslintrc.js'],
  globals: {
    wx: false
  },
  rules: {
    'no-prototype-builtins': 'off'
  }
};