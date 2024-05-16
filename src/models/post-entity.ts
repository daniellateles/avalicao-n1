import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import User from './user.entity'

@Entity()
export default class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    content!: string

    @Column()
    createdAt!: Date

    @Column()
    author!: string

    @Column({ name: 'user_id' })
    userId!: number

    @ManyToOne(() => User, user => user.tasks)
    user!: User
}