/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */


const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = (data) => {
  const { dev, addon } = data
  const env = dev ? 'dev' : 'prod'
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
