const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');


const pagesDir = path.resolve(__dirname, 'src/pages');
const pugFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.pug'));
const htmlPlugins = pugFiles.map(file => {
  const name = file.replace('.pug','');
  return new HtmlWebpackPlugin({
    filename: `./${name}.html`,
    template: path.resolve(pagesDir, file),
  });
});

// const cssFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.scss'));
// const cssPlugins = cssFiles.map(file => {
//   const name = file.replace('.scss','');
//   return new MiniCssExtractPlugin({
//     filename: `css/${name}.css`,
//     // template: path.resolve(pagesDir, file),
//   });
// });


module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset', // inline < 40kb =< resource
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'src/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    hot: true,
    open: true,
    port: 3000,
    watchFiles: ['src/**/*.*'],
  },
  stats: {
    children: true
  }
}