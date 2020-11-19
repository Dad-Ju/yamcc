import 'reflect-metadata'
import { ConnectionOptions, createConnection } from 'typeorm'
import config from '~/config'
import { ServerGroup } from '~/model/serverModel'
import { User } from '~/model/userModel'

export const initTypeORM = async (): Promise<void> => {
	const { type, database, host, password, username } = config.database
	const connectionConfig = {
		name: 'default',
		type,
		database,
		host,
		password,
		username,
		synchronize: true,
		logging: config.isDev,
		entities: [User, ServerGroup],
	} as ConnectionOptions

	await createConnection(connectionConfig)
}
