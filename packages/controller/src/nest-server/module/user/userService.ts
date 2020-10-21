import { Injectable } from '@nestjs/common'
export type User = {
	id: string
	username: string
}

@Injectable()
export class UserService {
	private readonly user: User[] = [] // do TypeORM here

	create(user: User) {
		this.user.push(user)
	}

	findAll(): User[] {
		return this.user
	}
}
