// Using express as the server
const express = require('express');

// Utilities for working with file and directory paths
const path = require('path');

// Compression middleware to add gzip and deflate support
var compression = require('compression');

// Create the webpack dev server
const webpackMiddlewareBootstrap = require('./internals/bootstrapWebpackMiddleware');

// Initialise the app
const app = express();
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  // In production modes, Express serves content from the /dist folder
  app.use(express.static('dist'));

  // If the requested file is not found in /dist, Express sends the them the index.html page
  // This loads React and allows React Router to take over the request, mapping the requested url
  // to one of its route definitions
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  // Webpack Dev Server handles all requests, unless in production mode
  webpackMiddlewareBootstrap(app);
}

// App listens to requests on a specific port
app.listen(3050, () => {
    console.log('Listening', 3050, process.env.NODE_ENV);
});