import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column({ type: 'varchar', length: 16 })
	readonly name!: string

	@Column({ type: 'varchar', length: 36 })
	readonly mcUUID: string | undefined

	@Column({ type: 'simple-array', default: '' })
	readonly permissonString!: string
}
