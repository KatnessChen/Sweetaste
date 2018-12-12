// vue.config.js
module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,
  // compiler: false,
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer: {
    // 略...
  },
  css: {
    loaderOptions: {
      sass: {
        data: "@import '@/sass/style.sass';"
      }
    }
  }
}
