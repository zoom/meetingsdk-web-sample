const path = require('path');
const webpack = require('webpack');
const args = process.argv.slice(2);
let https = false;
let disableCORP = true;
if (args.includes('--https')) https = true;
if (args.includes('--corp')) disableCORP = false;


module.exports = {
    devtool: 'eval',
    entry: {
    },
    context: __dirname,
    target: 'web',
    devServer: {
        https,
        cert: './localhost.crt',
        key: './localhost.key',
        host: '0.0.0.0',
        port: 9999,
        hot: true,
        overlay: true,
        historyApiFallback: false,
        watchContentBase: true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': https ? 'https://0.0.0.0:9999' : 'http://0.0.0.0:9999'
        },
        open: 'chrome',
        openPage: https ? 'https://127.0.0.1:9999' : 'http://127.0.0.1:9999',
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BABEL_ENV': JSON.stringify('development'),
        }),
    ],
};
