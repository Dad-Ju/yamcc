import express from 'express'
import { createServer } from 'http'
import { IO } from '~/loader'

const initExpress = (): void => {
	const app = express()
	const server = createServer(app)
	app.use(express.static('dist_client'))
	IO.attach(server)

	server.listen(3000)
}

export default initExpress
