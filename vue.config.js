const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Portofolio_OCCELLI_Ugo/' // Remplacez 'mon-repo-name' par le nom de votre repository GitHub.
    : '/'
}