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
				exclude: /node_modules/,
				//include: /src/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.tpl$/,
				exclude: /node_modules/,
				use: 'ejs-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [
								//require('postcss-import')({ root: loader.resourcePath }),
								//require('postcss-cssnext')(),
								require('autoprefixer')()
								//require('cssnano')()
							]
						}
					}
				]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [
								//require('postcss-import')({ root: loader.resourcePath }),
								//require('postcss-cssnext')(),
								require('autoprefixer')()
								//require('cssnano')()
							]
						}
					},
					{
						loader: 'less-loader',
						options: {
							noIeCompat: true
						}
					}
				]
			},
			{
				test: /\.(pgn|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',  // 当文件小于10000B 时转化为base64位， 大于时以file-loader来加载; 若不需要转化base64, 直接使用file-loader
						options: {
							limit: 10000,
							name: 'assets/[name]-[hash:5].[ext]' //指定文件的输出路径   hash:5  5位的hash值
						}
					},
					{
						loader: 'image-webpack-loader' // 可以通过配置参数优化压缩率
					}
				]
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