import { Socket } from 'socket.io'
import { io } from '~/loader/'
import { Worker } from '~/model/workerModel'

// const enum ConnectionType {
// 	worker,
// 	client,
// }

type WorkerLoginPayload = {
	readonly authkey?: string
	readonly name: string
}

// Without this VSCODE gets lost in formating....
const Server = io

Server.on('connection', (socket: Socket) => {
	console.log(`connect ${socket.id}`)

	socket.once('workerlogin', async (data: WorkerLoginPayload) => {
		const { authkey, name } = data
		console.log(
			`workerlogin from ${socket.id} ${JSON.stringify(
				socket.request.connection.address,
			)}`,
		)
		const worker = await Worker.findOne({ where: { authkey, name } })

		if (!worker)
			return socket.send('Invalid Worker Authkey and/or Name!').disconnect()

		socket.join('live-feed')
	})

	socket.on('login', async (data: any) => {
		console.log(data)
	})

	socket.onAny((eventName, ...args) => {
		console.log(eventName, args)
	})

	socket.on('disconnect', () => {
		console.log(`disconnect ${socket.id}`)
	})
})

// Handle Register

// Handle FileRequest

// Handle Server Start

// Handle Server Shutdown
