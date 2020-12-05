const proxySettings = {
	'/api-1/': {
		target: 'http://localhost:3001',
		changeOrigin: true
	},
	'/api-2/': {
		target: 'http://localhost:3002',
		changeOrigin: true,
	}
}

module.exports = proxySettings;
