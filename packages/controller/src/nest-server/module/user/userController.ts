import { Controller, Get, Post, Body } from '@nestjs/common'
import { User, UserService } from './userService'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}
	@Post()
	async create(@Body() createCatDto: User) {
		this.userService.create(createCatDto)
	}

	@Get()
	async findAll(): Promise<User[]> {
		return this.userService.findAll()
	}
}
