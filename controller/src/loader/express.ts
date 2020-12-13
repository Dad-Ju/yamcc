import express from 'express'
import { createServer } from 'http'
import { io } from '~/loader'
import config from '~/config'

const { port } = config

const initExpress = (): void => {
	const app = express()
	const server = createServer(app)
	app.use(express.static('client'))
	io.attach(server)

	server.listen(port)
}

export default initExpress
