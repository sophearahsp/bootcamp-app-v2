import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Todo } from "../entity/Todo";

export class TodoController {
	private TodoRepository = AppDataSource.getRepository(Todo);

	async all(request: Request, response: Response) {
		const todos = await this.TodoRepository.find();
		response.status(200).json({ data: todos });
	}
}
