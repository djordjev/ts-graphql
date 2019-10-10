const express = require('express');
const webpack = require('webpack');
const path = require('path');

const clientConfig = require('./webpack/webpack.client.dev');
const ssrConfig = require('./webpack/webpack.ssr.dev');

ssrConfig.output = {
  path: path.resolve(__dirname, 'public'),
  filename: 'server.js',
  libraryTarget: 'commonjs2'
};

const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const app = express();

const compiler = webpack([clientConfig, ssrConfig]);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: clientConfig.output.publicPath
});

app.use(webpackDevMiddleware);
app.use(webpackHotServerMiddleware(compiler));

app.listen(3000, () => {
  console.log('dev listening on port 3000');
});
