// const webpack = require('webpack');
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        index:'./src/js/index.js',
        es:'./src/js/es6.js'
    },
    output: {
        filename: 'js/[name].js'
    },
    resolve:{
        alias:{

        }
    },
    module:{
        rules:[
            {
               test: /\.(css|s[c,a]ss|less)$/,
               use: [
                   CssPlugin.loader,'css-loader','less-loader'
               ],
               // use: [
               //     CssPlugin.loader,'css-loader','sass-loader?outputStyle=compact'
               // ],
               // loader: "style-loader!css-loader!less-loader"
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['env']
                    ]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            // chunks: ['index','es'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new CleanWebpackPlugin(
            ['dist'],{
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/images',
            to: __dirname + '/dist/images'
        }]),
        new CssPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin(),
    ]
};

