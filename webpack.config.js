const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = (env) => {
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
      // filename: 'css/[name].[hash].css',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'src/frontend/public/index.html',
    //   favicon: './src/frontend/public/favicon.ico',
    //   title: 'Pokédex & Safari | Pokémon',
    // }),
  ];

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(),
    );
  }

  return {
    mode: (env.NODE_ENV === 'production') ? 'production' : 'none',
    resolve: {
      alias: {
        Utils: path.resolve(__dirname, 'src/frontend/utils/'),
        Constants: path.resolve(__dirname, 'src/frontend/constants/'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        name: true,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            reuseExistingChunk: true,
            priority: 1,
            filename: 'assets/vendor.js',
            enforce: true,
            test(module, chunks) {
              const name = module.nameForCondition && module.nameForCondition();
              return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
            },
          },
        },
      },
      // minimizer: [
      //   new UglifyJsPlugin({
      //     cache: true,
      //     parallel: true,
      //   }),
      //   new OptimizeCssAssetsPlugin({}),
      // ],
    },
    entry: {
      app: path.resolve(__dirname, 'src/frontend/index.js'),
    },
    output: {
      path: (env.NODE_ENV === 'production') ? path.resolve(__dirname, './dist/') : path.resolve(__dirname, 'dist'),
      // filename: 'js/[name].[hash].js',
      filename: 'assets/app.js',
      publicPath: (env.NODE_ENV === 'production') ? './' : './dist/',
      // chunkFilename: 'js/[id].[chunkhash].js',
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
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
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
    plugins,
  };
};
