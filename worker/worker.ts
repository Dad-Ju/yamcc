import { io } from 'socket.io-client'

const Client = io('http://localhost:3030/')

Client.once('connect', () => {
	console.log(Client.id)
	Client.emit('workerlogin', { authkey: 'abcdefg', name: 'test' })
})

Client.on('message', (data: any) => {
	console.log(data)
})
