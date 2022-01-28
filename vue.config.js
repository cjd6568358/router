const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      let option = null
      config.plugin('html').tap(args => {
        args[0].title = "路由器提取工具";
        option = Object.assign({}, args[0])
        return args
      })
      option.filename = '404.html'
      config
        .plugin('404')
        .use(HtmlWebpackPlugin, [option]);
    } else {
      // 为开发环境修改配置...
    }
  },
  outputDir: 'docs',
  publicPath: '/router',
  productionSourceMap: false,
  lintOnSave: false
}