import { readFileSync } from 'fs'

type ConfigInput = {
	readonly db: {
		readonly type: string
		readonly database: string
		readonly host: string
		readonly username: string
		readonly password: string
	}
	readonly adminPort: string
	readonly socketPort: string
	readonly secret: string
}

type DatabaseTypes =
	| 'sqlite'
	| 'mysql'
	| 'mariadb'
	| 'postgres'
	| 'oracle'
	| 'mongodb'

type Config = {
	readonly database: {
		readonly type: DatabaseTypes
		readonly database: string
		readonly host: string
		readonly password: string
		readonly username: string
	}
}

const isDev = process.env.NODE_ENV !== 'prod'
const { db }: ConfigInput = JSON.parse(
	readFileSync('../config.json', { encoding: 'utf-8' }),
)

const config: Config = {
	database: {
		type: (isDev ? 'sqlite' : db.type) as DatabaseTypes,
		database: `yamcc${isDev ? '_dev' : ''}`,
		host: './db.sqlite',
		password: isDev ? '' : db.username,
		username: isDev ? '' : db.password,
	},
}

export default config
