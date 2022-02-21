'use strict';
const path = require('path');

module.exports = {
  target: 'nwjs',
  entry: './src/main.tsx',
  output: {
    publicPath: '/dist/', // 重要更新を監視するために
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
