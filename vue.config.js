const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/production-sub-path/'
  : '/'
  // devServer:{
  //   proxy : 'http://localhost:8080'
  // }
})
