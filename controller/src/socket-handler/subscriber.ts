import { Socket } from 'socket.io'
import { io } from '~/loader/'
import { Worker } from '~/model/workerModel'

// const enum ConnectionType {
// 	worker,
// 	client,
// }

type LoginPayload = {
	readonly authkey: string
	readonly name: string
}

io.on('workerlogin', async (socket: Socket, data: LoginPayload) => {
	const { authkey, name } = data

	const worker = await Worker.findOne({ where: { authkey, name } })

	if (!worker)
		return socket.send('Invalid Worker Authkey and/or Name!').disconnect()

	socket.join('live-feed')
})

io.on('clientlogin', async (socket: Socket, data: LoginPayload) => {})

// Handle Register

// Handle FileRequest

// Handle Server Start

// Handle Server Shutdown
