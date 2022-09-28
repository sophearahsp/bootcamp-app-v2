import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";

// Creates TodoController class
export class TodoController {
	// getRepository(Todo) gets repository of the Todo entity
	private TodoRepository = AppDataSource.getRepository(Todo);

	// The following uses functions from th Repository API from typeORM
	// https://typeorm.io/repository-api
	
	getAllTodos = async (request: Request, response: Response) => {
		const todos = await this.TodoRepository.find();
		response.status(200).json({ todos });
	}

	addTodo = async (request: Request, response: Response) => {
		const todo = await this.TodoRepository.save(request.body);
		response.status(200).json({ todo });
	}

	updateTodo = async (request: Request, response: Response) => {
		const todoToUpdate = await this.TodoRepository.findOneBy({id: parseInt(request.params.id)});
		const todo = await this.TodoRepository.save({
				...todoToUpdate,
				...request.body
			}
		);
		response.status(200).json({ todo });
	}

	deleteTodo = async (request: Request, response: Response) => {
		const todoToDelete = await this.TodoRepository.findOneBy({id: parseInt(request.params.id)});
		const todo = await this.TodoRepository.delete(todoToDelete);
		response.status(200).json({ todo });
	}
}
