var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dist_dir = path.resolve(__dirname, "dist");
var src_dir = path.resolve(__dirname, "src");

module.exports = {
	entry: {
        app: [
            src_dir + '/app/app.module.ts',
            src_dir + '/app/app.components.ts'
        ],
        vendor: [
            'angular',
            'angular-ui-router'
        ]
    },
	output: {
		path: dist_dir + '/app',
		filename: 'bundle.js',
        publicPath: "/app/"
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension. 
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` 
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
            {
                test: /\.css$/,
                loaders: [ 'style', 'css', 'postcss' ]
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'postcss', 'sass' ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loaders: ['html']
            }
		]
	},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};