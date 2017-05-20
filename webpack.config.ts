const path = require('path');
const webpack = require('webpack');
import tslint from './tslint.json';

module.exports = {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.ts$/,
				loader: 'tslint-loader',
				options: require('./tslint.json'),
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				fallbackLoader: "style-loader",
				loader: 'css-loader!sass-loader'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
};
