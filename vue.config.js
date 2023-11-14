const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/' // Remplacez 'mon-repo-name' par le nom de votre repository GitHub.
    : '/'
}