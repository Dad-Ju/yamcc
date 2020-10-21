import { Module } from '@nestjs/common'
import { UserController } from './userController'
import { UserService } from './userService'

@Module({
	imports: [],
	controllers: [UserController],
	providers: [UserService],
})
export default class UserModule {}
