import { Todo } from '../../src/entity/Todo';
import { Repository } from 'typeorm';

export class TodoEntityHelper {
    TodoRepository: Repository<Todo>;

    constructor(repository: Repository<Todo>) {
    	this.TodoRepository = repository
    }
    
    createTodo = async (taskName?: string, completed?: boolean) => {
        const newTodo = new Todo()
        newTodo.taskName = taskName ? taskName : "New Todo Item";
        newTodo.completed = completed ? completed : false;
        return await this.TodoRepository.save(newTodo);
    }

    getAllTodos = async () => {
        return await this.TodoRepository.find();
    }
}




