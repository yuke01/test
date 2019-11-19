module.exports = {
  publicPath: './',
  outputDir: 'newlease',
  assetsDir: 'static',
  configureWebpack: {
    // 关闭 webpack 的性能提示(打包正式会报warning)
    performance: {
      hints: false
    }
  },
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   '/api': {
    //       target: 'http://www.science.com:8081', //API服务器的地址
    //       changeOrigin: true,
    //       pathRewrite: {
    //           '^/api': ''
    //       }
    //     }
    //   }
  }
}
