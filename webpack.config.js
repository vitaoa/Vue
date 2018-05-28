// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');

let basePath = path.resolve('app');

module.exports = {
    entry: {
        index: basePath + '/index.js',
        es: basePath + '/js/es6.js'
    },
    output: {
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve('app'),//路径别名
            '@@': path.resolve('src'),
        },
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.(css|s[c,a]ss|less)$/,
                use: [
                    CssPlugin.loader, 'css-loader', 'less-loader'
                ],
                // use: [
                //     CssPlugin.loader,'css-loader','sass-loader?outputStyle=compact'
                // ],
                // loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test:/\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/,
            //     options: {
            //         presets: [
            //             ['env']
            //         ]
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: basePath+'/index.html',
            // chunks: ['index','es'],
            inject: 'true',
            hasg: 'true',
            minify: {
                removeComments: false,
                collapseWhitespace: false
            }
        }),
        new CleanWebpackPlugin(
            ['dist'], {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        new CopyWebpackPlugin([{
            from: basePath + '/images',
            to: __dirname + '/dist/images'
        }]),
        new CssPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
    ]
};

