import { create } from 'domain'
import { createConnection, Connection } from 'typeorm'

const connection = await createConnection({
	type: 'postgres',
	url: '',
})
