import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	taskName: string;

	@Column()
	completed: boolean = false;
}