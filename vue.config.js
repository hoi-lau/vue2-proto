const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: 'warning',
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
