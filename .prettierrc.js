/*
 * @Author: xiaotao2018
 * @Date: 2022-07-01 11:42:12
 * @LastEditTime: 2022-07-07 17:23:52
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  printWidth: 600,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 600,
      },
    },
  ],
  arrowParens: 'always',
  endOfLine: 'auto',
}