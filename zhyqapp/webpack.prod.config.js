const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.writeFile(fd, buf, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[hash].chunk.[name].js'
    },
    module:{
		rules:[{
			test: /\.(js|vue)$/,
			loader: './ftjw-loader-prod.js'
		}]
	},
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
	        except: ['Api','set','myChart','echarts']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            inject: false,
            filename: '../index_prod.html',
            template: './src/template/index.ejs',
        })
    ]
});
