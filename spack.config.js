const path = require('path');
const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    'main': __dirname + '/index.js',
  },
  output: {
    path: path.join(__dirname, "build"),
  },
  module: {},
});
