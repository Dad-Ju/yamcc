import { Server } from 'socket.io'

const socketServer = new Server({
	cors: {
		origin: '*:*',
		methods: ['GET', 'POST'],
	},
})

export default socketServer
