import { startNestServer } from '~/nest-server'
;(async () => {
	console.log('Starting Controller!')
	// Start TypeORM
	console.log('Stared DB Connection!')
	// Start SocketIO Server
	console.log('Started Socket Server!')
	const app = await startNestServer()
	const url = await app.getUrl()
	console.log(`Started Admin and Rest Server!\n${url}`)
})()
