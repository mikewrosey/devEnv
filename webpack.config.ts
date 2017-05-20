const path = require('path');
const webpack = require('webpack');

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
			// {
			// 	enforce: 'pre',
			// 	test: /\.tsx?$/,
			// 	loader: 'tslint-loader',
			// 	options: {
			// 		failOnHint: true,
			// 		configuration: require('./tslint.json')
			// 	},
			// 	exclude: /node_modules/,
			// },
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			// {
			// 	test: /\.scss$/,
			// 	fallbackLoader: "style-loader",
			// 	loader: 'css-loader!sass-loader'
			// }
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
};
