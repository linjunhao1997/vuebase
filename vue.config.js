const path = require('path')

const resolve = dir => path.join(__dirname, dir)


const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    lintOnSave: false,
    // 在vue-cli.3.3版本后 baseUrl被废除了改为publicPath
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
            '/xproject': {
                target: "http://localhost:8888",
                changOrigin: true
            }
        }
    }
}