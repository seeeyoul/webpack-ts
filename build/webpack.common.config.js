const path = require('path');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: path.resolve(__dirname, "../src/index.tsx"),
	output: {
		filename: "bundle.[hash:8].js",
		path: path.join(__dirname, "../dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			filename: "index.html",
			title: config.PROJECT_NAME,
			cache: false
		}),
		new CopyPlugin({
			patterns: [
				{ from: path.resolve(__dirname, '../public'), to: path.resolve(__dirname, '../dist') }
			]
		}),
		new CleanWebpackPlugin(),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				configFile: path.resolve(__dirname, '../tsconfig.json')
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'postcss-loader', 'css-loader'],
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: "sass-loader",
						options: {
							sourceMap: config.isDev
						}
					}
				],
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10 * 1024,
							name: '[name].[contenthash:8].[ext]',
							outputPath: 'assets/images'
						}
					}
				]
			},
			{
				test: /\.(ttf|woff|woff2|eot|otf|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[contenthash:8].[ext]',
							outputPath: 'assets/fonts',
						}
					}
				]
			},
			{
				test: /\.(tsx?|js)$/,
				loader: 'babel-loader',
				options: { cacheDirectory: true },
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname,'../src')
		},
		extensions: ['.tsx', '.ts', '.js', '.json']
	}

}