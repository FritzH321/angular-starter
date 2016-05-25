module.exports = [
	{test: /\.ts(x?)$/, loader: 'ts-loader'},
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	},
	{
		test: /\.html$/,
		loader: 'raw'
	},
	{
		test: /\.woff($|\?)|\.woff2($|\?)|\.png($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
		loader: 'file-loader'
	},
	{
		test: /\.less$/,
		loader: 'style-loader!css-loader!less-loader'
	},
	{
		test: /\.scss$/,
		loader: 'style!css!sass'
	 }
];
