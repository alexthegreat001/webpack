const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/components/index.js'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }],
    },
}