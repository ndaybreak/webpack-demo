const path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"), // 此处必须为绝对路径
		filename: 'js/[name]-bundle.js' // chunkhash 可以看做一个文件的唯一表示   'js/[name]-[chunkhash].bundle.js'
		//publicPath: 'http://cdn.com/' // 上线后的发布地址, 当上线时需要手动打开
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				//include: /src/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body',
			title: 'hello world'
		})
	]
}