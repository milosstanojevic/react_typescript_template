/* eslint-disable @typescript-eslint/no-var-requires */
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  plugins: [new Visualizer()],
};
