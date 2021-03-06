var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    bail: true,
    resolve: {
        root: path.resolve('./'),
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.ts']
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                //IMAGE LOADER
                test: /(jpe?g|png|gif|svg|img)$/i,
                loader: 'file'
            },
            {
                test: /\.html$/,
                exclude: /\.snippet\.html$/,
                loader: 'html?attrs=img:src img:data-src'
            },
            {
                test: /\.snippet\.html$/,
                loader: 'html!highlightjs?lang=html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            }/*,
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }*/
        ]
    },
    externals: {
        // require("vue") is external and available
        //  on the global var Vue
        'vue': 'Vue',
        // require("vue-router") is external and available
        //  on the global var VueRouter
        'vue-router': 'VueRouter'
    }
};
