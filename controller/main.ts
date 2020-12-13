import 'reflect-metadata'
import '~/controller'
import { InitExpressApp } from '~/loader'
import { initTypeORM } from '~/loader/typeorm'
;(async () => {
	InitExpressApp()
	await initTypeORM()
	console.log('Server Ready!')
})()
