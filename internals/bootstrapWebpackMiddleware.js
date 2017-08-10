// This file creates the webpack dev server middleware
const path = require('path');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

// Path to webpack.config file
const webpackConfig = require(path.join(__dirname, 'webpack.config'));

// Create te middleware
const compiler = webpack(webpackConfig);
const devMiddleware = webpackMiddleware(compiler, {
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
});

module.exports = app => {
  // Register the webpack dev server middleware
  app.use(this.middleware = devMiddleware);
  app.use(require("webpack-hot-middleware")(compiler));

  // If a file cannot be found by the webpack server, send the user to index.html and allow React Router to handle it
  app.get('*', (req, res) => {
    const index = this.middleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html'));
    res.end(index);
  });
};