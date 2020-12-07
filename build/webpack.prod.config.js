/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = merge(common, {
	mode: 'production',
	devtool: 'none',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					compress: { pure_funcs: ['console.log'] }
				}
			}),
			new OptimizeCssAssetsPlugin()
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
			ignoreOrder: false,
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*.{tsx,scss,css}`, {
				nodir: true
			}),
			whitelist: ['html', 'body']
		})
	]
})
