const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, 'src/frontend/utils/'),
      Constants: path.resolve(__dirname, 'src/frontend/constants/'),
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src/frontend/index.js'),
  },
  output: {
    path: '/', //path.resolve(__dirname, 'dist'),
    filename: 'assets/app.js', //'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    port: process.env.PORT || 3001,
    historyApiFallback: true,
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules)/,
      //   enforce: 'pre',
      //   use: {
      //     loader: 'eslint-loader',
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'assets/images/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: './index.html',
    //   template: './src/frontend/public/index.html',
    // }),
  ],
};
