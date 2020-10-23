import express from 'express'

const app = express()

app.settings.env !== 'development'
	? app.use(express.static('../client/dist'))
	: app.get('/', (_, res) => res.redirect('http://localhost:8080/'))

app.listen(3000)

export default app
//TODO: Serve dist folder from Client.
