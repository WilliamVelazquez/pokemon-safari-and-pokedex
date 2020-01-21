const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const isProd = (process.env.NODE_ENV === 'production');

const plugins = [
  new MiniCssExtractPlugin({
    filename: isProd ? 'assets/app-[hash].css' : 'assets/app.css',
  }),
];

if (isProd) {
  plugins.push(
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }),
  );

  plugins.push(
    new ManifestPlugin(),
  );

  plugins.push(
    new CopyPlugin([
      './src/frontend/public/favicon.ico',
    ]),
  );
}

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  mode: process.env.NODE_ENV,
  optimization: {
    minimizer: isProd ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendors-[hash].js' : 'assets/vendors.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]((?!(react-flags-select)).*)[\\/]((?!(intersection-observer)).*)[\\/]/.test(name));
          },
        },
      },
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src/frontend/index.js'),
  },
  output: {
    path: isProd ? path.join(process.cwd(), './src/server/public') : '/', //path.resolve(__dirname, 'dist'),
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js', //'js/[name].js',
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // limit: 1000000,
            // fallback: 'file-loader',
            name: 'assets/images/[name].[ext]',
            // name: 'assets/images/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 1000,
            name: 'assets/images/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins,
};
