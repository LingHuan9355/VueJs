let proxyObj = {}

proxyObj['/'] = {
    // websocket
    ws: false,
    // 目标地址
    target: 'http://localhost:8081',
    // 发送请求头host会被设置 target
    changeOrigin: true,
    // 不重新请求地址
    pathRewrite: {
        '^/': ''
    }
}


module.exports = {
    devServer: {
        host:'localhost',
        port:8080,
        proxy: proxyObj
    }
}