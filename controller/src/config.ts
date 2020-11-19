import { existsSync, readFileSync } from 'fs'
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
	readonly port: number
}

type Config = {
	readonly database: {
		readonly type: DatabaseType
		readonly database: string
		readonly host: string
		readonly password: string
		readonly username: string
	}
	readonly port: number
	readonly isDev: boolean
}

const defaultConfig: ConfigInput = {
	db: {
		type: 'sqlite',
		host: '',
		database: 'yamcc.sqlite',
		username: '',
		password: '',
	},
	port: 3030,
}

const isDev = process.env.NODE_ENV !== 'prod'
const configstring = existsSync(`${__dirname}/../config.json`)
	? readFileSync(normalize(`${__dirname}/../config.json`), {
			encoding: 'utf-8',
	  })
	: JSON.stringify(defaultConfig)

const { db, port }: ConfigInput = JSON.parse(configstring)

const config: Config = {
	database: {
		type: (isDev ? 'sqlite' : db.type) as DatabaseType,
		database: `yamcc${isDev ? '_dev.sqlite' : ''}`,
		host: isDev ? '' : db.host,
		password: isDev ? '' : db.username,
		username: isDev ? '' : db.password,
	},
	port,
	isDev,
}

export default config
