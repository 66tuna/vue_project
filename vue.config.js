// const { defineConfig } = require('@vue/cli-service')
const target = 'http://127.0.0.1:3000' // proxy(프록시)
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// module.exports = {
//   chainWebpack: config => {
//       config.module.rules.delete('eslint');
//   }
// }

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') //prefetch 삭제
  },
  devServer: {
    port: 8080,
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}