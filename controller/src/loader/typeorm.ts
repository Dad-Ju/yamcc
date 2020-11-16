import 'reflect-metadata'
import { createConnection, getConnection } from 'typeorm'
import config from '~/config'
import { User } from '~/model/userModel'

export const initTypeORM = async (): Promise<void> => {
	const { type, database, host, password, username } = config.database

	const connection = await createConnection({
		name: 'default',
		type: 'sqlite',
		database,
		// host,
		// password,
		// username,
		synchronize: true,
		logging: true,
		entities: [User],
	})

	console.log(connection.name)
	console.log(getConnection().name)

	return
}

// const connection = getConnection()

// export default connection
