// 获取命令行变量
//接收命令参数
const npmConfigArg = JSON.parse(process.env.npm_config_argv);
// console.log('npm命令信息：' + process.env.npm_config_argv);
const original = npmConfigArg.original.slice(1);
const VUE_SERVER_ENV = original[1] ? original[1].replace(/--/g, '') : '';
// console.log('npm命令-目标服务器环境：' + VUE_SERVER_ENV);
const  webpack  = require("webpack");
module.exports = {
    lintOnSave: false,
    // 设置打包生成的的静态资源的文件名中是否加入hash以便控制浏览器缓存问题。
    filenameHashing: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.VUE_SERVER_ENV': VUE_SERVER_ENV?JSON.stringify(VUE_SERVER_ENV):'pro'
            })
        ]
    },
    devServer: {
        port: 9527,
        open: true,
    }

};