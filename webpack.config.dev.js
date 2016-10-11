const path = require('path');
const webpack = require('webpack');
const aliases = require('./webpack.aliases');

module.exports = {
    resolve: aliases.resolve,
    devtool: 'eval',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        path.resolve('./'),
    ],
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    },
    output: {\\
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': Object.keys(process.env).reduce(function (o, k) {
                o[k] = JSON.stringify(process.env[k]);
                return o;
            }, {}),
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: ['babel'],
                include: path.resolve('./'),
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
};
