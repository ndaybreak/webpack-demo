const path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"), // 此处必须为绝对路径
		filename: 'js/[name]-bundle.js' // chunkhash 可以看做一个文件的唯一表示   'js/[name]-[chunkhash].bundle.js'
		//publicPath: 'http://cdn.com/' // 上线后的发布地址, 当上线时需要手动打开
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: false, // 不主动在html中添加脚本，而是在模板中手动指定
			title: 'hello world'
		}),
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'template.html',
			inject: false,
			title: 'page a',
			chunks: ['main', 'a']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'template.html',
			inject: false,
			title: 'page b',
			chunks: ['main', 'b']
		})
	]
}