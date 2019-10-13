const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'production',
  entry: './src/server/server.tsx',
  name: 'server',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: ASSET_PATH
  },
  target: 'node',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
};
