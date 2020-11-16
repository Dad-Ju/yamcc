/* eslint-disable functional/no-this-expression */
import 'reflect-metadata'
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column({
		type: 'varchar',
		length: 42,
	})
	readonly name!: string

	@Column({ type: 'varchar', length: 24 })
	readonly permissons!: string

	// constructor(params: { readonly name: string; readonly permissons: string }) {
	// 	super()
	// 	this.id = 0
	// 	this.name = params.name
	// 	this.permissons = params.permissons
	// }
}
