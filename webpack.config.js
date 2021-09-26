let path = require('path');
const glob = require('glob');
    module.exports = {
      entry: glob.sync('./js/*.js'),
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
      },
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
          }
        ]
      }
    }