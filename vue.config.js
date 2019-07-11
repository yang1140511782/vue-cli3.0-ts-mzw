const px2rem = require('postcss-px2rem');

const postcss = px2rem({
  remUnit: 37.5,
  propList: ['*']
})

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/5cb412e7e8c2f21d36dccd66/mzw',  //使用easy-mock模拟接口
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  },
}