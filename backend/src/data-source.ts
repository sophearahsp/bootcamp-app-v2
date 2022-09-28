import "reflect-metadata";
import { DataSource } from "typeorm";
import { Todo } from "./entity/Todo";

// Creating a Data Source
// https://typeorm.biunav.com/en/data-source.html
export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "test",
	password: "test",
	database: "test",
	synchronize: true,
	logging: false,
	entities: [Todo],
	migrations: [],
	subscribers: [],
});
