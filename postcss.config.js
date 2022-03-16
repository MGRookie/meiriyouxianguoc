/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 15:08:09
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 15:08:10
 * @FilePath: /demo-c-meiriyouxianguoc/postcss.config.js
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};