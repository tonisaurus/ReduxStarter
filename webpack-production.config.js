var webpack = require('webpack');
var merge = require('webpack-merge');
var devConfig = require('./webpack.config.js');

module.exports = merge(devConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      },
      comments: false
    })
  ]
});
