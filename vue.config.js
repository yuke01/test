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
    port: 9999,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
