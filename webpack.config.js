var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: [
    "./src/index"
  ],
  output: {
    path: './assets',
    filename: "bundle.js"
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
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
