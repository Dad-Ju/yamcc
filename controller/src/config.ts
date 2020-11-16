import { readFileSync } from 'fs'
import { normalize } from 'path'
import { DatabaseType } from 'typeorm'

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

type Config = {
	readonly database: {
		readonly type: DatabaseType
		readonly database: string
		readonly host: string
		readonly password: string
		readonly username: string
	}
}

const isDev = process.env.NODE_ENV !== 'prod'
const configstring =
	readFileSync(normalize(`${__dirname}/../config.json`), {
		encoding: 'utf-8',
	}) || '{}'

const { db }: ConfigInput = JSON.parse(configstring)

const config: Config = {
	database: {
		type: (isDev ? 'sqlite' : db.type) as DatabaseType,
		database: `yamcc${isDev ? '_dev.sqlite' : ''}`,
		host: isDev ? '' : db.host,
		password: isDev ? '' : db.username,
		username: isDev ? '' : db.password,
	},
}

export default config
