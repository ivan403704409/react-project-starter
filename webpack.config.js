var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: './dist',
    filename: "bundle-[hash:8].js"
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', 'scss'],
    alias: {
      
    }
  },
  watch: true,
  devtool: 'source-map',
  plugins: [
    // new webpack.NoErrorsPlugin()
    new HtmlWebpackPlugin({
      title: 'React React-router Redux Webpack App',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
      minify: {
          // collapseWhitespace: true,
          removeComments: true,
      },
    }),
    
    new CleanWebpackPlugin(['dist'], {
      root: '/Users/Mervyn/MervynCoding/playwithreact',
      verbose: true, 
      dry: false,
    })
  ]
};
