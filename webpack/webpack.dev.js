var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.ts'
	},
	output: {
		filename: 'build.js',
		path: '/dev',
		publicPath: '/'
	},
	devServer: {
		contentBase: './dev',
		hot: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		port: 8080
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ["node_modules"]
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			hash: true
		}),
		new OpenBrowserPlugin('http://localhost:8080'),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.jquery': 'jquery'
		})
	],
	module: {
		loaders: loaders
	}
};
