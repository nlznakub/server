import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user_tbl' })
export default class User {
    @PrimaryGeneratedColumn({ type: 'integer' }) id = undefined
    @Column({ type: 'varchar', length: 30 }) name = undefined
}