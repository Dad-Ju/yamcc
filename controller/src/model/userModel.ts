/* eslint-disable functional/no-this-expression */
import { compareSync, hashSync } from 'bcryptjs'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column({ type: 'varchar', length: 16 })
	readonly name!: string

	@Column({ type: 'varchar', length: 36, default: '' })
	readonly mcUUID!: string

	@Column({ type: 'simple-array', default: '' })
	readonly permissonString!: string

	@Column({
		type: 'varchar',
		length: 100,
		name: 'password',
		transformer: {
			from: (password: string) => password,
			to: (inputpassword: string) => hashSync(inputpassword, 10),
		},
	})
	readonly password!: string

	readonly checkPassword = (inputpassword: string): boolean =>
		compareSync(inputpassword, this.password)

	readonly setPassword = async (inputpassword: string): Promise<User> => {
		await User.update(this.id, { password: inputpassword })
		await this.reload()

		return this
	}
}
