const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const config = require('./config');
const proxySettings = require('./proxy');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		host: config.SERVER_HOST,
		port: config.SERVER_PORT,
		stats: 'errors-only',
		clientLogLevel: 'silent',
		compress: true,
		open: true,
		hot: true,
		proxy: {...proxySettings},
		contentBase: path.resolve(__dirname, '../public')
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})
