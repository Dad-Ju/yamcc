import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Worker extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column({ type: 'varchar', length: 16 })
	readonly name!: string

	@Column({ type: 'int', default: 1 })
	readonly ram!: number

	@Column({ type: 'varchar', length: 36 })
	readonly ip!: string

	@Column({ type: 'varchar', length: 36 })
	readonly authkey!: string
}
