const SERVER_PORT = 8080
const SERVER_HOST = '127.0.0.1'
const PROJECT_NAME = 'my cli'
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	SERVER_PORT,
	SERVER_HOST,
	PROJECT_NAME,
	isDev
}
