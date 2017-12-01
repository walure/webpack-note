
/*
   生命 周期 
	1.引入文件 例如  const path = require('path')
	2.配置文件 定义变量  config
	3.入口 参数 entry
	4.出口 output
	5.加载器模块  module
	6.插件 plugins require('html-webpack-plugin')  

	
 */

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
	entry:path.resolve(__dirname,'../src/index.js'),
	output:{
		publicPath: "",
		path:path.resolve(__dirname,'../dist'), //path.resolve 解析到 绝对跟目录
		filename:'js/[name].bundle.js'
	},
	module:{
		rules: [
				{
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        },
	      {test: /\.(js|jsx)$/, use: 'babel-loader'},
	        {
	          test: /\.css$/,
	          use: ['style-loader', 'css-loader', 'postcss-loader']
	        },

	        {
	          test: /\.(scss|sass)$/,
	          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
	        },

	        {
	          test: /\.less$/,
	          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
	        },
	    ]
	},
	devtool: 'inline-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/api/*': {
				target: 'http://127.0.0.1:2226',
				pathRewrite: {'^/api': '/'},
				secure: false
			}
		},
	},
	plugins: [
		
		new htmlWebpackPlugin({
			title:'',//设置生成的 html 文件的标题
			filename:'index.html',//生成 html 文件的文件名
			favicon:'',//html 文件生成一个 favicon。属性值为 favicon 文件所在的路径名。
			template:'src/index.html',//根据自己的指定的模板文件来生成特定的 html 文件
			inject:true,//注入选项。有四个选项值 true 默认值，script标签位于html文件的 body 底部, body 同 true, headscript 标签位于 head 标签内, false 不插入生成的 js 文件，只是单纯的生成一个 html 文件
			minify:false,//minify 的作用是对 html 文件进行压缩
			hash:true,//hash选项的作用是 给生成的 js 文件一个独特的 hash 值，该 hash 值是该次 webpack 编译的 hash 值。默认值为 false 
			cache:false,//默认值是 true。表示只有在内容变化时才生成一个新的文件
		
		})
	]



}

module.exports = config 