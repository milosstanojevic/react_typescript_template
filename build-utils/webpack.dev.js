/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
};
