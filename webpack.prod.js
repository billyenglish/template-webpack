const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { devtool } = require('./webpack.dev.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: devtool,
});