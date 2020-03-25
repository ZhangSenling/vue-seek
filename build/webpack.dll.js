// 预打包第三方库，以免每次打包都去处理第三方库
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        // element已经按需导入，无需在此再做打包
        vendor: ['vue/dist/vue.esm.js', 'vue-router', 'axios', '@antv/g6']
    },
    output: {
        path: path.join(__dirname, '../static/js'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}