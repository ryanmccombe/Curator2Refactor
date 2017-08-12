var webpack = require('webpack');
const path = require('path');

// Extract text from a bundle for use in a seperate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Gives webpack the ability to edit HTML, in order to inject any extracted text, or refs to the bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This tool opens a browser window that shows a breakdown of what is in each bundle
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Injects bundles into the body of index.html
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

// Plugin for extracting css into a file
const extractCss  = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

// In development mode, Hot Module Replacement (HMR) of CSS is enabled
const hotReloadCss = process.env.NODE_ENV === 'development';

// A different pipeline is required for CSS processing depending on whether or not we need HMR
// Both pipelines first compile the less using less loader, then compile the CSS (resolving imports, urls etc)
// using css-loader - the final step depends on whether HMR is enabled
let cssPipeline;
if (hotReloadCss){
  // HMR of CSS is difficult when it is a standalone file, therefore, we use
  // style-loader to put the compiled CSS in a style tag within the app
  cssPipeline = [
    { loader: "style-loader" },
    {
      loader: 'css-loader',
      options: {
        modules: true
      }
    },
    { loader: 'less-loader' }
  ]
} else {
  // When we don't need HMR for CSS, we use the extractCss plugin we created earlier to
  // pull the CSS into its own file
  cssPipeline = extractCss.extract({
    use: [{
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'less-loader'
      }
    ]
  });
}

module.exports = {
  entry: {
    bundle: [
      'webpack-hot-middleware/client/?quiet=true',
      'react-hot-loader/patch',
      './client/component.js'
    ]
  },

  // JS goes into the dist folder with a cache-busting hash appended
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      // JS files that aren't in node_modules are handled by babel loader
      // Vendor files are handled in the plugin section
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      },

      // Less files use the dynamic CSS pipeline defined earlier
      { test: /\.(css|less)$/,
        use: cssPipeline
      },

      // Other known file types just get moved to dist using the same path
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?.*)?$/,
        loader: 'file-loader?name=[path]/[name].[ext]?[hash]'
      }
    ]
  },

  // Registering plugins
  plugins: [
    // Packing of vendor files
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks(module) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),

    HtmlWebpackPluginConfig,

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    extractCss,

    // A browser tool that shows what is included in each bundle
    // new BundleAnalyzerPlugin()
    ],

    devServer: {
      hot: true,
      historyApiFallback: true
    }
};