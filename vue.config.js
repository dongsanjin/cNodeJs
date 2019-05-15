module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        plugins: "@/plugins"
      }
    }
  },
  devServer: {
    open: true
  }
}