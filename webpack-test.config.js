var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var WebpackShellPlugin = require('webpack-shell-plugin');


var config = {
  entry: './all-tests.js',
  output: {
    filename: 'testBundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },


  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha --colors test"
      // onBuildExit: "mocha --colors --require spec-helper.js testBundle.js"
    })
  ]
};


module.exports = config;