import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Creates an entity "Todo"
// https://typeorm.io/entities
@Entity()
export class Todo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	taskName: string;

	@Column()
	completed: boolean = false;
}