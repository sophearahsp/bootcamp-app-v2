import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Todo } from "../entity/Todo";

export class TodoController {
	private TodoRepository = AppDataSource.getRepository(Todo);

	getAllTodos = async (request: Request, response: Response) => {
		const todos = await this.TodoRepository.find();
		response.status(200).json({ todos });
	}

	addTodo = async (request: Request, response: Response) => {
		const todo = await this.TodoRepository.save(request.body);
		response.status(200).json({ todo: todo });
	}

	updateTodo = async (request: Request, response: Response) => {
		const todo = await this.TodoRepository.update(request.params.id, request.body);
		response.status(200).json({ todo });
	}
}
