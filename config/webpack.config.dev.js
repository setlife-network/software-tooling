const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const paths = require('./paths')

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            paths.appIndex
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    // webpack-dev-server config
    devServer: {
        // where to look for static files when building
        contentBase: paths.appAssets,
        // bundled files will be available in browser under this path
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true
    },
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})