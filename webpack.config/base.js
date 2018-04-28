const path = require("path");
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config');
const root = path.resolve(__dirname, '..');
let htmlPlugins = [];

for (let page in config.pages) {
  let conf = {
    filename: `${page}.html`,
    template: config.pages[page],
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: false
    },
    chunks: [page, 'vendors', 'styles'],
    hash: false
  };
  htmlPlugins.push(new HTMLWebpackPlugin(conf));
}

module.exports = {
  entry: config.entries,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:
              {
                importLoaders: 1
              }
          },
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            extractCSS: true, // 提取css文件
            css: {
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'less-loader',
                }
              ],
              fallback: 'vue-style-loader'
            }
          },
          postcss: [
            autoprefixer({
              browsers: ['last 10 Chrome versions', 'Firefox > 20', 'Safari >= 6', 'ie >= 9']
            })
          ]
        }
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: 'images/[name].[ext]?[hash:8]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: "fonts/[name].[ext]?[hash:8]"
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      assets: path.join(root, 'src/assets'),
      common: path.join(root, 'src/common'),
      components: path.join(root, 'src/components')
    },
    extensions: ['.js', '.vue'] // 省略后缀名
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    ...htmlPlugins
  ]
}

