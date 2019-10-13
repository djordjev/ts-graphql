const express = require('express');
const webpack = require('webpack');
const path = require('path');

const clientConfig = require('./webpack/webpack.client.dev');
const ssrConfig = require('./webpack/webpack.ssr.dev');

const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');

const port = process.env.PORT || 3000;

// ############### WEBPACK CONFIG TWEAK #####################
ssrConfig.output = {
  path: path.resolve(__dirname, 'public'),
  filename: 'server.js',
  libraryTarget: 'commonjs2'
};

clientConfig.entry.app.unshift(
  `webpack-hot-middleware/client?http://localhost:${port}/__webpack_hmr`,
  'webpack/hot/only-dev-server'
);

const hmrPlugin = new webpack.HotModuleReplacementPlugin();
if (clientConfig.plugins) {
  clientConfig.plugins.push(hmrPlugin);
} else {
  clientConfig.plugins = [hmrPlugin];
}

const devMiddlewareSettings = {
  hot: true,
  serverSideRender: true,
  publicPath: clientConfig.output.publicPath
};

ssrConfig.mode = 'development';
clientConfig.mode = 'development';

// ############### DEV SERVER #####################
const app = express();

const compiler = webpack([clientConfig, ssrConfig]);

const createSelector = type => compiler => compiler.name === type;
const clientCompiler = compiler.compilers.find(createSelector('client'));

app.use(webpackDevMiddleware(compiler, devMiddlewareSettings));
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

app.listen(parseInt(port, 10), () => {
  console.log(`Dev server listening on port ${parseInt(port, 10)}`);
});
