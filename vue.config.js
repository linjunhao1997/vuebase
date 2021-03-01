const path = require('path')

const resolve = dir => path.join(__dirname, dir)


const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    lintOnSave: false,
    // vue-cli.3.3后 baseUrl => publicPath
    publicPath: PUBLIC_PATH,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/tpApi/taobao': {
                target: "http://api.m.taobao.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/tpApi': ''
                }
            },
            '/xproject': {
                target: "http://localhost:8888",
                changeOrigin: true
            },
            '/api': {
                target: "http://localhost:8888",
                changeOrigin: true
            },

        }
    }
}