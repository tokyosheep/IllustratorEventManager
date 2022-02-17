'use strict';
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            drop_console: true// production modeでconsole.log消えます
          }
        }
      })
    ]
  }
});
