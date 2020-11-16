import 'reflect-metadata'
import { InitExpressApp } from '~/loader'
import { initTypeORM } from '~/loader/typeorm'
import { User } from '~/model/userModel'
;(async () => {
	InitExpressApp()
	await initTypeORM()

	const userlist = await User.find()

	console.log(userlist)

	// const repo = DBConnection.getRepository(User)

	// const user = User.create({ name: 'fun', permissons: 'yeet' })

	// // await repo.save(user)
	// // const user = new User({ name: 'abcdefg', permissons: 'yeetschwein' })
	// // const user = new User()
	// // user.name = 'abc'

	// await user.save()
})()
