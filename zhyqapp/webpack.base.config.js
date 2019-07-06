const path = require('path');
const webpack = require('webpack');
const VueLoaderOptions = require('./vue-loader.conf.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const px2remLoader = require('./utils').px2remLoader;
module.exports = {
	entry: {
		main: './src/main',
		vendors: './src/vendors'
	},
	output: {
		path: path.join(__dirname, './dist')
	},
	module: {
		rules: [{
			test: /.vue$/,
			use: [{
				loader: 'vue-loader',
				options: VueLoaderOptions
			}, {
				loader: 'iview-loader',
				options: {
					prefix: false
				}
			}]
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			include:[
				path.resolve('src'),
				path.resolve('node_modules/dom7'),
				path.resolve('node_modules/iview'),
				path.resolve('node_modules/swiper'),
				path.resolve('node_modules/localstorage'),
				path.resolve('node_modules/vue-awesome-swiper'),
				path.resolve('node_modules/vue-calendar-component'),
			],
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader?minimize', 'autoprefixer-loader', px2remLoader],
				fallback: 'style-loader'
			})
		}, {
			test: /\.less/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader?minimize', px2remLoader, 'less-loader'],
				fallback: 'style-loader'
			})
		}, {
			test: /\.sass/,
			use: ExtractTextPlugin.extract({
				use: ['autoprefixer-loader', 'sass-loader', px2remLoader],
				fallback: 'style-loader'
			})
		}, {
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=10240'
		}, {
			test: /\.(html|tpl)$/,
			loader: 'html-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@': path.resolve('src'),
			'@m': path.resolve('src/module/user/mobile'),
		}
	},
	externals: {
		'BMap': 'BMap'
	},
	plugins: [
		new webpack.ProvidePlugin({
			// 'Date':path.resolve('src/libs/date'),
			'$': "jquery",
			'jQuery': "jquery",
			'windows.jQuery': "jquery",
		})
	],
};
