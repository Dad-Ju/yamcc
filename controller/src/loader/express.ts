import express from 'express'

const initExpress = (): void => {
	const app = express()

	app.use(express.static('dist_client'))

	app.listen(3000)
}

export default initExpress
