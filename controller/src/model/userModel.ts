import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column()
	readonly name!: string

	@Column()
	readonly permissons!: string
}
