const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.mjs', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()]
};
