var webpack = require('webpack');

module.exports = {
	entry: {
		firstApp: './src/app.js',
		secondApp: './src/app2.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js',
		chunkFilename: '[id].common.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: '[name].bundle.js'})
	]
};

