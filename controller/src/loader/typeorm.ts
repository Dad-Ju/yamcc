import { createConnection, createConnections } from 'typeorm'
import config from '~/config'

const initDB = async () => {
	const { type, database, host, password, username } = config.database

	const connection = await createConnection({
		type,
	})
}
