const path = require('path');
const nodeExternals = require('webpack-node-externals');
const polyfill = require('@babel/polyfill');

module.exports = {
  entry: ['@babel/polyfill', './server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
        use: 'babel-loader'
      },
			{ test: /\.(scss|css|png|svg)$/, loader: 'ignore-loader' }
    ]
  }
};
