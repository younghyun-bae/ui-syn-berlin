const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');
const PugPlugin = require('pug-plugin');

const pagesDir = path.resolve(__dirname, 'src/pages');
const pugFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.pug'));
const htmlPlugins = pugFiles.map(file => {
  const name = file.replace('.pug','');
  return new HtmlWebpackPlugin({
    filename: `./${name}.html`,
    template: path.resolve(pagesDir, file),
  });
});

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
    ...htmlPlugins,
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'src/index.pug',
    })
  ],
  stats: {
    children: true
  }
}