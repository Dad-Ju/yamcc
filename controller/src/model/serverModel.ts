import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { User } from './userModel'

@Entity()
export class ServerGroup extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number

	@Column({ type: 'varchar', length: 16, unique: true })
	readonly groupName!: string

	@Column({ type: 'int', default: 1 })
	readonly RAM!: number

	// if static never touch the world file!
	@Column({ type: 'boolean', default: false })
	readonly static!: boolean

	@Column({ type: 'int', default: 1 })
	readonly minServerCount!: number

	@Column({ type: 'int', default: 1 })
	readonly maxServerCount!: number

	// Only gehts Uppdated when settings (all above) are changed!
	@ManyToOne(() => User)
	readonly updatedBy!: User

	@Column({ type: 'int', default: 0 })
	readonly templateVersion!: number

	@Column({ type: 'varchar', length: 32, default: '' })
	readonly md5!: string

	@UpdateDateColumn({
		type: 'date',
		onUpdate: 'NOW()',
		nullable: true,
	})
	readonly updatedAt!: Date

	@CreateDateColumn({ type: 'date', default: 'NOW()' })
	readonly createdAt!: Date
}
