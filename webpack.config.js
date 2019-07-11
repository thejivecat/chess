require('dotenv').config();
const nodeExternals = require('webpack-node-externals');
const ugly = require('uglifyjs-webpack-plugin');
const minify = require('babel-minify-webpack-plugin');
const compress = require('compression-webpack-plugin');
const html = require('html-webpack-plugin');
const dynamic = require('dynamic-cdn-webpack-plugin');

const path = require('path');
const BUILD = path.join(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: {
    main: './client/main.jsx',
  },
  output: {
    path: BUILD,
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // optimization: {
  //   minimizer: [new ugly({
  //     test: /main\.bundle\.js$/
  //   })]
  // },
  externals: [
    // nodeExternals()
  ],
  plugins: [
    // new minify(),
    // new compress(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};