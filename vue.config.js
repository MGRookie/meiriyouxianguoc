/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 14:20:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 23:47:18
 * @FilePath: /demo-c-meiriyouxianguoc/vue.config.js
 */

const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        views: path.resolve(__dirname, 'src/views'),
        components: path.resolve(__dirname, 'src/components')
      },
    },
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE
        return args
      })
  },
}