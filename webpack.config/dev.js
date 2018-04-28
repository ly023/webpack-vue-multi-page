const webpack = require("webpack");
const path = require("path");
const webpackBase = require("./base");
const webpackMerge = require("webpack-merge");
const config = require("./config");

const devServer = {
  port: config.port,
  historyApiFallback: {
    rewrites: []
  }
}

for (let page in config.pages) {
  devServer.historyApiFallback.rewrites.push(
    {
      from: `${page}`,
      to: `/${page}.html`
    }
  )
}

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  output:{
    filename:"[name].js",
    path: path.resolve(__dirname,"../dist"),
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 当接收到热更新信号时，在浏览器console控制台打印更多可读性高的模块名称等信息
    new webpack.NamedModulesPlugin()
  ]
});
