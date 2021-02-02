const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ,
    output: {
        path: ,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '',
            },
            {
                test: /\.css$/,
                use: [

                ]
            },
            {
                test: /\.sass$$/,
                use: [

                ]
            },
            {
                test: /\.tpl$/,
                loader: ''
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({})
    ],
    devServer: {
        open: true,
        host
    }
}