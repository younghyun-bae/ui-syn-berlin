const path = require('path');
const webpack = require('webpack');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new PugPlugin({
      entry: {
        index: 'src/index.pug', // save generated HTML into dist/index.html
      },
      js: {
        filename: 'js/[name].[contenthash:8].js', // JS output filename
      },
      css: {
        filename: 'css/[name].[contenthash:8].css', // CSS output filename
      },
    })
  ],
  // enable live reload
  devServer: {
    static: path.join(__dirname, 'dist'),
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
}