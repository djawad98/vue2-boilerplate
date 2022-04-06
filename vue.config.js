const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "sass:math"; @import "./src/assets/vars.scss";`,
      }
    }
  }
})
