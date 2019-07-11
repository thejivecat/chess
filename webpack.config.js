require('dotenv').config();
const nodeExternals = require('webpack-node-externals');
const ugly = require('uglifyjs-webpack-plugin');
const minify = require('babel-minify-webpack-plugin');
const compress = require('compression-webpack-plugin');
// const html = require('html-webpack-plugin');
// const dynamic = require('dynamic-cdn-webpack-plugin');

const path = require('path');
const BUILD = path.join(__dirname, 'build');
const SRC = path.join(__dirname, 'shared', 'index.jsx');

// const PORT = process.env.PORT || 3000;
// const HOST = 'localhost';

module.exports = {
  mode: 'development',
  entry: {
    main: './client/main.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: DIST,
  //   port: PORT,
  //   host: HOST,
  //   historyApiFallback: true,
  //   hot: true
  //   // lazy: true,
  //   // filename: 'bundle.js',
  // },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new ugly({
      test: /main\.bundle\.js$/
    })]
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    // new html(),
    // new dynamic(),
    new minify(),
    new compress(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};