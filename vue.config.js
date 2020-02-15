const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	chainWebpack(config) {
		config.resolve.alias
			// 有需要，再按照这个样式去配置，前面的是后面的别名，写路径的时候可以简写
			.set('styles', resolve('src/assets/styles'))
			.set('common', resolve('src/common'))
			.set('api', resolve('src/api'))
			.set('views', resolve('src/views'))
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				pathRewrite: {
					'^/api': '/static/mock'
				}
			}
		}
	}
}
