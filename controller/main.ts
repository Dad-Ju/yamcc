import 'reflect-metadata'
import { InitExpressApp } from '~/loader'
import { initTypeORM } from '~/loader/typeorm'
;(async () => {
	InitExpressApp()
	await initTypeORM()
})()
