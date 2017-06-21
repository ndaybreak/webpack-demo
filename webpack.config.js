const path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"), // 此处必须为绝对路径
		filename: 'js/[name]-[chunkhash].bundle.js' // chunkhash 可以看做一个文件的唯一表示
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index-[hash].html',
			template: 'index.html',
			inject: 'head' //指定脚本放在head标签里，默认为body标签
		})
	]
}