import { v4 as uuidv4 } from 'uuid'
import '~/socket-handler'

type ActivServerList = Record<string, ServerEntry>

type ServerEntry = {
	readonly workerId: string
	readonly ram: number
	readonly type: string
}

const activServer: ActivServerList = {
	[uuidv4()]: { workerId: 'svdjasda', ram: 1024, type: 'dsddasda' },
}

console.log(activServer)
