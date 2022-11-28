import { Todo } from '../../src/entity/Todo';
import { Repository } from 'typeorm';

// Class with Todo entity utility methods
export default class TodoEntityHelper {
    TodoRepository: Repository<Todo>;

    // Creates the class instance with the provided repository
    constructor(repository: Repository<Todo>) {
    	this.TodoRepository = repository
    }
    
    // Creates Todo instance and adds to database and returns the saved todo item
    // taskName: optional string parameter of the todo's taskName property
    // completed: optional boolean parameter of the todo's completed property
    createTodo = async (taskName?: string, completed?: boolean) => {
        const newTodo = new Todo()
        newTodo.taskName = taskName ? taskName : "New Todo Item";
        newTodo.completed = completed ? completed : false;
        return await this.TodoRepository.save(newTodo);
    }

    // Gets all todo items in the repository
    getAllTodos = async () => {
        return await this.TodoRepository.find();
    }
}




