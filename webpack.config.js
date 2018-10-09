var webpack = require('webpack');

var path = require('path');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// 输出的路径
var assetsRoot = path.resolve(__dirname, './');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: assetsRoot,
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
            loader: "babel-loader",
            options: {
                presets: ["es2015"],
                plugins: ['transform-object-rest-spread']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ],
    // watch: true
}
