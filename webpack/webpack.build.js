var loaders = require("./loaders");
var CompressionPlugin = require("compression-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/index.ts'
	],
	output: {
		filename: 'build.js',
		path:  'dist'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.json']
	},
	resolveLoader: {
		modulesDirectories: ["node_modules"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			hash: true
		}),
		//new webpack.optimize.UglifyJsPlugin(
		//	{
		//		warning: false,
		//		comments: false,
		//		mangle: true
		//	}
		//),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.jquery': 'jquery'
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: "gzip",
			test: /\.js$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	module:{
		loaders: loaders
	}
};
