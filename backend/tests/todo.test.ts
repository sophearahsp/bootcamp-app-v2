import {describe, beforeAll, afterAll, afterEach, it, expect} from '@jest/globals';
import DataSourceHelper from './utils/data.utils';
import TodoEntityHelper from './utils/todo.utils';
import { Todo } from '../src/entity/Todo';
import { AppDataSource } from '../src/data-source';
const supertest = require('supertest');
import app from '../src/app';
const request = supertest(app)

// 'describe' is used to organize tests into groups
// This describes the todo route tests
describe('Todo route tests', () => {
    const todoRepository = AppDataSource.getRepository(Todo);
    const todoHelper = new TodoEntityHelper(todoRepository);

    // Before performing any tests, sets up the datasource and clears it
    beforeAll(async () => {
        await DataSourceHelper.setupDataSource()
        await DataSourceHelper.clearDataSource()
    })
    
    // After performing all the tests, destroys the datasource
    afterAll(async () => {
        await DataSourceHelper.destroyDataSource();
    })
    
    // After each test, clears the datasource
    afterEach(async () => {
        await DataSourceHelper.clearDataSource()
    });

    // 'it' is the same as 'test' in jest
    // https://jestjs.io/docs/api#testname-fn-timeout
    // The first parameter should be decribing what 'it' is testing
    // so in this case, this test is making sure "it should get all todos"
    it('should get all todos', async () => {
        // Creates  todo items using the todoHelper class
        await todoHelper.createTodo("COMP 251 A1", false);
        await todoHelper.createTodo("MATH 223 A1");
        
        // Makes a get request to the desired route
        const res = await request.get("/api/todos").send();

        // expects the status code to be 200 (success!)
        expect(res.statusCode).toBe(200);

        // expects there to be only two items
        expect(res.body.todos.length).toBe(2);
    });

    // The rest of the tests follow the same general structure

    it('should add todo item', async () => {
        const newTodoItem = {
            completed: false,
            taskName: "do laundry"
        };

        const res = await request.post("/api/todos").send(newTodoItem);
        expect(res.statusCode).toBe(200);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.taskName).toBe("do laundry");
    });

    it('should update todo item', async () => {
        const savedTodo = await todoHelper.createTodo("COMP 251 A1", false);
        const res = await request.put("/api/todo/"+savedTodo.id).send({completed: true});
        expect(res.statusCode).toBe(200);
        expect(res.body.todo.completed).toBe(true);
        expect(res.body.todo.taskName).toBe("COMP 251 A1");
    });

    it('should delete todo item', async () => {
        const TodoRepository = AppDataSource.getRepository(Todo);
        const newTodo = new Todo()
        newTodo.taskName = "COMP 251 A1";
        const savedTodo = await TodoRepository.save(newTodo);
        const res = await request.delete("/api/todo/"+savedTodo.id).send();
        expect(res.statusCode).toBe(200);
        const allTodos = await todoHelper.getAllTodos();
        expect(allTodos.length).toBe(0);
    });
});