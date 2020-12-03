import express from 'express'
import { createServer } from 'http'
import { io } from '~/loader'

const initExpress = (): void => {
	const app = express()
	const server = createServer(app)
	app.use(express.static('client'))
	io.attach(server)

	server.listen(3000)
}

export default initExpress
