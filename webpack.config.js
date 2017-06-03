var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "public/js");
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "yodel.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  },
  resolve: {
    modules: ['node_modules', 'dev'],
    extensions: ['.js', '.jsx']
  }
  };
 
module.exports = config;