/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new WebpackBundleAnalyzer({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: false,
    }),
  ],
};
