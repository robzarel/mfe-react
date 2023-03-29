const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packages = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    publicPath: '/marketing/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packages.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
