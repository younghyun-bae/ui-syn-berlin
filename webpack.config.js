const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.pug$/,
      use: ['pug-loader', 'pug-html-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'fonts/[name][ext]',
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'src/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: './login.html',
      template: 'src/pages/login.pug',
    }),
    new HtmlWebpackPlugin({
      filename: './home.html',
      template: 'src/pages/home.pug',
    }),
    new HtmlWebpackPlugin({
      filename: './explore.html',
      template: 'src/pages/explore.pug',
    }),
    new HtmlWebpackPlugin({
      filename: './forum.html',
      template: 'src/pages/forum.pug',
    }),
    new HtmlWebpackPlugin({
      filename: './post.html',
      template: 'src/pages/post.pug',
    })
  ],
  stats: {
    children: true
  }
}